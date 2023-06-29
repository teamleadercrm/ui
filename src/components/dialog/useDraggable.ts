import { RefObject, useEffect } from 'react';

interface UseDraggableProps {
  active?: boolean;
  dragHandleRef?: RefObject<HTMLElement | undefined>;
  dragTargetRef?: RefObject<HTMLElement | undefined>;
}

const useDraggable = ({ active = false, dragTargetRef, dragHandleRef }: UseDraggableProps) => {
  useEffect(() => {
    const currentDragTargetRef = dragTargetRef?.current;
    const currentDragHandleRef = dragHandleRef?.current;

    if (!active || !currentDragTargetRef || !currentDragHandleRef) {
      return;
    }

    let x = 0;
    let y = 0;

    const mouseMoveHandler = function (event: MouseEvent) {
      const dx = event.clientX - x;
      const dy = event.clientY - y;

      currentDragTargetRef.style.top = `${currentDragTargetRef.offsetTop + dy}px`;
      currentDragTargetRef.style.left = `${currentDragTargetRef.offsetLeft + dx}px`;

      if (currentDragTargetRef.style.position !== 'absolute') {
        currentDragTargetRef.style.position = 'absolute';
      }

      x = event.clientX;
      y = event.clientY;
    };

    const mouseUpHandler = function () {
      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseup', mouseUpHandler);
    };

    const mouseDownHandler = function (event: MouseEvent) {
      x = event.clientX;
      y = event.clientY;

      document.addEventListener('mousemove', mouseMoveHandler);
      document.addEventListener('mouseup', mouseUpHandler);
    };

    currentDragHandleRef.addEventListener('mousedown', mouseDownHandler);

    return function cleanup() {
      currentDragHandleRef.removeEventListener('mousedown', mouseDownHandler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);
};

export default useDraggable;
