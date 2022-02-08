import React, { useEffect, useRef, useCallback } from 'react';

import { focusOnFirstDescendent, focusOnLastDescendent } from './utils';

const FocusRing = ({ topFocusBumperRef, bottomFocusBumperRef, children }) => {
  return (
    <div>
      <div ref={topFocusBumperRef} tabIndex="0" />
      {children}
      <div ref={bottomFocusBumperRef} tabIndex="0" />
    </div>
  );
};

const openFocusTraps = new Set();

const getLastItemInSet = (set) => {
  const array = Array.from(set);
  return array[array.length - 1];
};

const useFocusTrap = ({ active, returnFocusToSource = true, initialFocusRef }) => {
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
        document.removeEventListener('focusin', getLastItemInSet(openFocusTraps), true);
      }
      
       if (initialFocusRef) {
         const currentInitialFocusRef = initialFocusRef.current;
         if (currentInitialFocusRef) {
           const foundFocus = focusOnFirstDescendent(currentInitialFocusRef);
           if (!foundFocus) {
             focusOnFirstDescendent(topFocusBumperRef.current);
           }
         }
       } else if (typeof initialFocusRef === 'undefined') {
         focusOnFirstDescendent(currentFocusRef);
       } else {
         focusOnFirstDescendent(topFocusBumperRef.current);
       }

      const trapFocus = (event) => {
        if (!currentFocusRef.contains(event.target)) {
          if (document.activeElement === event.target) {
            if (event.target === topFocusBumperRef.current) {
              // Reset the focus to the last element when focusing in reverse (shift-tab)
              focusOnLastDescendent(currentFocusRef);
            } else {
              // Reset the focus to the first element after reaching
              // the last element or any other element outside of the focus trap
              focusOnFirstDescendent(currentFocusRef);
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
          document.addEventListener('focusin', getLastItemInSet(openFocusTraps), true);
        }
      };
    }
  }, [active, returnFocusToSource, ref, initialFocusRef]);

  return { ref, FocusRing: InternalFocusRing };
};

export default useFocusTrap;
