import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

//console.log("Here's the data you're working with");
//console.log({ CATEGORIES, TASKS });

function App() {
  const [selectedFilter, updateFilter] = useState("All");
  const [tasks, updatedTasks] = useState(TASKS);

  function removeTask(taskToRemove) {
    let newArr = tasks.filter((task) => {
      return task !== taskToRemove;
    });
    updatedTasks(newArr);
  }

  function changeFilter(newFilter) {
    updateFilter(newFilter);
  }

  function onTaskFormSubmit(taskToAdd) {
    updatedTasks([...tasks, taskToAdd]);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        changeFilter={changeFilter}
        categories={CATEGORIES}
        selectedFilter={selectedFilter}
      />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList
        tasks={tasks}
        selectedFilter={selectedFilter}
        removeTask={removeTask}
      />
    </div>
  );
}

export default App;
