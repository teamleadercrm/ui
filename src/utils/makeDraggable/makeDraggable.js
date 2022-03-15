export const makeDraggable = (dragTargetRef, dragHandleRef) => {
  if (!dragTargetRef?.current || !dragHandleRef?.current) {
    return;
  }

  const dragTarget = dragTargetRef.current;
  const dragHandle = dragHandleRef.current;
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

    dragTarget.style.top = `${dragTarget.offsetTop + dy}px`;
    dragTarget.style.left = `${dragTarget.offsetLeft + dx}px`;

    x = e.clientX;
    y = e.clientY;
  };

  const mouseUpHandler = function () {
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
  };

  dragHandle.addEventListener('mousedown', mouseDownHandler);
};
