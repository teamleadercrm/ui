import { useEffect } from 'react';

export const useDraggable = (active, dragTargetRef, dragHandleRef) => {
  useEffect(() => {
    const currentDragTargetRef = dragTargetRef.current;
    const currentDragHandleRef = dragHandleRef?.current;

    if (!active || !currentDragTargetRef || !currentDragHandleRef) {
      return;
    }

    let x = 0;
    let y = 0;

    const mouseDownHandler = function (e) {
      x = e.clientX;
      y = e.clientY;

      document.addEventListener('mousemove', mouseMoveHandler);
      document.addEventListener('mouseup', mouseUpHandler);
    };

    const mouseMoveHandler = function (e) {
      const dx = e.clientX - x;
      const dy = e.clientY - y;

      currentDragTargetRef.style.top = `${currentDragTargetRef.offsetTop + dy}px`;
      currentDragTargetRef.style.left = `${currentDragTargetRef.offsetLeft + dx}px`;

      x = e.clientX;
      y = e.clientY;
    };

    const mouseUpHandler = function () {
      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseup', mouseUpHandler);
    };

    currentDragHandleRef.addEventListener('mousedown', mouseDownHandler);

    return function cleanup () {
      currentDragHandleRef.removeEventListener('mousedown', mouseDownHandler);
    };
  }, [active]);
};
