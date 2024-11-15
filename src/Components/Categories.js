import React, { useState } from "react";

const Categories = ({ categories, filteredMenus }) => {
  const [mainCategory, setMainCategory] = useState("all");

  return (
    <div className="btn-container">
      {categories.map((category, index) => (
        <button
          key={index}
          type="button"
          // highlight class  for highlight main category
          className={
            category === mainCategory ? "filter-btn highlight" : "filter-btn"
          }
          onClick={() => {
            setMainCategory(category);
            filteredMenus(category);
          }}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
