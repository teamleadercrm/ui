export const makeDraggable = (dragTargetRef, dragHandleRef) => {
  if (!dragTargetRef?.current || !dragHandleRef?.current) {
    return;
  }

  const ele = dragTargetRef.current;
  const handle = dragHandleRef.current;
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

    ele.style.top = `${ele.offsetTop + dy}px`;
    ele.style.left = `${ele.offsetLeft + dx}px`;

    x = e.clientX;
    y = e.clientY;
  };

  const mouseUpHandler = function () {
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
  };

  handle.addEventListener('mousedown', mouseDownHandler);
};
