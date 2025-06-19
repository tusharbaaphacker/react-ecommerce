import React, { useState } from 'react';

function DragDropList() {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData('itemIndex', index);
  };

  const handleDrop = (e, dropIndex) => {
    e.preventDefault();
    const dragIndex = e.dataTransfer.getData('itemIndex');
    const newItems = [...items];
    const [draggedItem] = newItems.splice(dragIndex, 1);
    newItems.splice(dropIndex, 0, draggedItem);
    setItems(newItems);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <style>
        {`
          .todo-item {
            padding: 8px;
            margin: 4px;
            background: black;
            border: 1px solid #ddd;
            display: flex;
            align-items: center;
            gap: 8px;
            color: #F5F5F5; /* Light gray for text */
          }
          .todo-item:hover {
            background: #FFFFE0; /* Light yellow */
            color: #808080; /* Gray for text */
          }
          .todo-item svg {
            width: 16px;
            height: 16px;
            fill: #F5F5F5; /* Light gray for SVG */
          }
          .todo-item:hover svg {
            fill: #808080; /* Gray for SVG */
          }
        `}
      </style>
      <div style={{ padding: '8px', background: '#f0f0f0', width: '300px' }}>
        {items.map((item, index) => (
          <div
            key={index}
            className="todo-item"
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDrop={(e) => handleDrop(e, index)}
            onDragOver={handleDragOver}
          >
            <svg
              className="MuiSvgIcon-root"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
            >
              <path
                transform="translate(2, 2)"
                d="M0.048762 0.743164L7.77054 11.0679L0 19.4624H1.74884L8.55193 12.1129L14.0486 19.4624H20L11.8438 8.55687L19.0765 0.743164H17.3277L11.0624 7.51188L6.00012 0.743164H0.048762ZM2.62056 2.03136H5.35462L17.4278 18.174H14.6937L2.62056 2.03136Z"
              />
            </svg>
            {item}
          </div>
        ))}
      </div>
    </>
  );
}

export default DragDropList;