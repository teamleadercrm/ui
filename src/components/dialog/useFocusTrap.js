import React, { useEffect, useRef, useCallback } from 'react';

import { focusOnFirstDescendent, focusOnLastDescendent } from './utils';

const FocusRing = ({ topFocusBumperRef, bottomFocusBumperRef, children }) => {
  return (
    <>
      <div ref={topFocusBumperRef} tabIndex="0" />
      {children}
      <div ref={bottomFocusBumperRef} tabIndex="0" />
    </>
  );
};

const openDialogs = new Set();

const useFocusTrap = ({ active, sourceRef }) => {
  const dialogRef = useRef();
  const topFocusBumperRef = useRef();
  const bottomFocusBumperRef = useRef();

  const InternalFocusRing = useCallback(
    ({ children }) => (
      <FocusRing topFocusBumperRef={topFocusBumperRef} bottomFocusBumperRef={bottomFocusBumperRef}>
        {children}
      </FocusRing>
    ),
    [],
  );
  InternalFocusRing.displayName = 'FocusRing';

  useEffect(() => {
    if (active) {
      const currentDialogRef = dialogRef.current;
      if (!currentDialogRef) {
        return;
      }

      if (openDialogs.size > 0) {
        document.removeEventListener('focusin', openDialogs[openDialogs.size - 1]);
      }

      focusOnFirstDescendent(currentDialogRef);

      const trapFocusInDialog = (event) => {
        if (!currentDialogRef.contains(event.target)) {
          if (document.activeElement === event.target) {
            if (event.target === bottomFocusBumperRef.current) {
              // Reset the focus to the first element after reaching the last element
              focusOnFirstDescendent(currentDialogRef);
            } else if (event.target === topFocusBumperRef.current) {
              // Reset the focus to the last element when focusing in reverse (shift-tab)
              focusOnLastDescendent(currentDialogRef);
            }
          }
        }
      };

      openDialogs.add(trapFocusInDialog);
      document.addEventListener('focusin', trapFocusInDialog, true);

      return function cleanup() {
        document.removeEventListener('focusin', trapFocusInDialog, true);
        openDialogs.delete(trapFocusInDialog);

        if (openDialogs.size > 0) {
          document.addEventListener('focusin', openDialogs[openDialogs.size - 1]);
        }
      };
    } else {
      const currentSourceRef = sourceRef?.current;
      // sourceRef will be undefined on initial render, so this is a safe operation
      if (currentSourceRef) {
        currentSourceRef.focus();
      }
    }
  }, [active, sourceRef]);

  return { dialogRef, FocusRing: InternalFocusRing };
};

export default useFocusTrap;
