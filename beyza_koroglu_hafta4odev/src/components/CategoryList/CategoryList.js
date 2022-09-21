import React from "react";
import CategoryItem from "../CategoryItem";
import "./CategoryList.css";

function CategoryList(props) {
  const handleClick = () => {
    props.displayAddCategory();
  };

  return (
    <div className="CategoryList">
      <h2>Kategori Listesi</h2>
      <ul>
        {props.categories.map((category) => (
          <CategoryItem
            key={category.id}
            category={category}
            deleteCategory={props.deleteCategory}
            displayEditCategory={props.displayEditCategory}
            specifyEditCategory={props.specifyEditCategory}
          />
        ))}
      </ul>
      <button onClick={handleClick} className="AddCategoryButton">
        Kategori ekle
      </button>
    </div>
  );
}

export default CategoryList;
