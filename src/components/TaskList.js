import React, { useState } from "react";
import Task from "./Task";

function TaskList({ tasks, selectedFilter, removeTask }) {
  const filteredTasks = tasks.filter((task) => {
    return task.category === selectedFilter || selectedFilter === "All";
  });

  const taskElements = filteredTasks.map((task, index) => {
    return (
      <Task
        key={index}
        category={task.category}
        text={task.text}
        removeTask={() => removeTask(task)}
      />
    );
  });

  return <div className="tasks">{taskElements}</div>;
}

export default TaskList;
