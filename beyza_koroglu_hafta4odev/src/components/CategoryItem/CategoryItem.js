import React from "react";
import "./CategoryItem.css";

function CategoryItem(props) {
  const handleEdit = () => {
    props.specifyEditCategory(props.category.id);
    props.displayEditCategory();
  };

  const handleDelete = () => {
    props.deleteCategory(props.category.id);
  };

  return (
    <li className="Category" key={props.category.id}>
      <span>{props.category.category}</span>
      <span className="CategoryListButtons">
        <button onClick={handleEdit} className="EditButton">
          Düzenle
        </button>
        <button onClick={handleDelete} className="DeleteButton">
          Sil
        </button>
      </span>
    </li>
  );
}

export default CategoryItem;
