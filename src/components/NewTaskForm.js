import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, updateFormText] = useState("");
  const [category, updateFormCategory] = useState("Code");

  function handleSubmit(e, text, category) {
    e.preventDefault();
    if (category === "") {
      updateFormCategory("Code");
    } else {
      e.preventDefault();
      if (text !== "") {
        onTaskFormSubmit({
          text: text,
          category: category,
        });
      } else {
        alert("Please enter a task");
      }
    }
  }

  const categoryOptions = categories.map((category) => {
    if (category !== "All") {
      return (
        <option name={category} key={category}>
          {category}
        </option>
      );
    }
  });
  return (
    <form
      className="new-task-form"
      onSubmit={(e) => handleSubmit(e, text, category)}
    >
      <label>
        Text
        <input
          type="text"
          name="text"
          value={text}
          onChange={(e) => updateFormText(e.target.value)}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={category}
          onChange={(e) => updateFormCategory(e.target.value)}
        >
          {categoryOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
