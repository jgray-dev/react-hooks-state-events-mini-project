import React from "react";

function CategoryFilter({ changeFilter, categories, selectedFilter }) {
  const displayFilters = categories.map((category) => {
    if (selectedFilter === category) {
      return (
        <button
          key={category}
          className={"selected"}
          onClick={() => changeFilter(category)}
        >
          {category}
        </button>
      );
    }
    return (
      <button key={category} onClick={() => changeFilter(category)}>
        {category}
      </button>
    );
  });
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {displayFilters}
    </div>
  );
}

export default CategoryFilter;
