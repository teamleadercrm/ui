import { useEffect } from 'react';

const useDraggable = ({ active, dragTargetRef, dragHandleRef }) => {
  useEffect(() => {
    const currentDragTargetRef = dragTargetRef.current;
    const currentDragHandleRef = dragHandleRef?.current;

    if (!active || !currentDragTargetRef || !currentDragHandleRef) {
      return;
    }

    let x = 0;
    let y = 0;

    const mouseDownHandler = function (event) {
      x = event.clientX;
      y = event.clientY;

      document.addEventListener('mousemove', mouseMoveHandler);
      document.addEventListener('mouseup', mouseUpHandler);
    };

    const mouseMoveHandler = function (event) {
      const dx = event.clientX - x;
      const dy = event.clientY - y;

      currentDragTargetRef.style.top = `${currentDragTargetRef.offsetTop + dy}px`;
      currentDragTargetRef.style.left = `${currentDragTargetRef.offsetLeft + dx}px`;

      x = event.clientX;
      y = event.clientY;
    };

    const mouseUpHandler = function () {
      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseup', mouseUpHandler);
    };

    currentDragHandleRef.addEventListener('mousedown', mouseDownHandler);

    return function cleanup() {
      currentDragHandleRef.removeEventListener('mousedown', mouseDownHandler);
    };
  }, [active]);
};

export default useDraggable;
