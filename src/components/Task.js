import React from "react";

function Task({ category, text, removeTask }) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button
        className="delete"
        onClick={() => removeTask({ category: category, text: text })}
      >
        X
      </button>
    </div>
  );
}

export default Task;
