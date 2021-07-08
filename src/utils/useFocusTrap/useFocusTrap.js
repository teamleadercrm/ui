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

const openFocusTraps = new Set();

const useFocusTrap = ({ active, returnFocusToSource = true }) => {
  const ref = useRef();
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
      const sourceFocusElement = returnFocusToSource && document.activeElement;
      const currentFocusRef = ref.current;
      if (!currentFocusRef) {
        return;
      }

      if (openFocusTraps.size > 0) {
        document.removeEventListener('focusin', openFocusTraps[openFocusTraps.size - 1]);
      }

      focusOnFirstDescendent(currentFocusRef);

      const trapFocus = (event) => {
        if (!currentFocusRef.contains(event.target)) {
          if (document.activeElement === event.target) {
            if (event.target === bottomFocusBumperRef.current) {
              // Reset the focus to the first element after reaching the last element
              focusOnFirstDescendent(currentFocusRef);
            } else if (event.target === topFocusBumperRef.current) {
              // Reset the focus to the last element when focusing in reverse (shift-tab)
              focusOnLastDescendent(currentFocusRef);
            }
          }
        }
      };

      openFocusTraps.add(trapFocus);
      document.addEventListener('focusin', trapFocus, true);

      return function cleanup() {
        document.removeEventListener('focusin', trapFocus, true);
        openFocusTraps.delete(trapFocus);

        if (sourceFocusElement) {
          sourceFocusElement.focus();
        }

        if (openFocusTraps.size > 0) {
          document.addEventListener('focusin', openFocusTraps[openFocusTraps.size - 1]);
        }
      };
    }
  }, [active, returnFocusToSource]);

  return { ref, FocusRing: InternalFocusRing };
};

export default useFocusTrap;
