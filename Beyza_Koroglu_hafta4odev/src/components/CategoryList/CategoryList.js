import React from "react";
import CategoryItem from "../CategoryItem";
import "./CategoryList.css";

function CategoryList(props) {
  const handleClick = () => {
    props.onOpenAddCategory();
  };

  const handleClickEdit = (id) => {
    props.onClickEditCategory(id);
  };
  return (
    <div className="CategoryList">
      <h2>Kategori Listesi</h2>
      <ul>
        {props.categories.map((category) => (
          <CategoryItem
            key={category.id}
            category={category}
            onDeleteCategory={props.onDeleteCategory}
            onClickEdit={() => {
              handleClickEdit(category.id);
            }}
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
