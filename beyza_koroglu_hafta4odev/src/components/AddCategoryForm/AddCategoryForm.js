import React from "react";
import "./AddCategoryForm.css";

function AddCategoryForm(props) {
  let categoryName = "";

  const handleChange = (e) => {
    categoryName = e.target.value;
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (categoryName === "") alert("Kategori ismi boş bırakılamaz.");
    else {
      props.displayAddCategory();
      props.addCategory(categoryName);
    }
  };

  const handleCansel = (e) => {
    e.preventDefault();
    props.displayAddCategory();
  };

  return (
    <div className="AddCategoryFormBackground">
      <div className="AddCategoryForm">
        <h2>Kategori Ekle</h2>
        <form>
          <ul>
            <li className="AddCategoryFormLi">
              <input
                onChange={handleChange}
                className="CategoryInput"
                type="text"
                placeholder="Kategori giriniz"
              />
            </li>
          </ul>
          <button onClick={handleAdd} className="AddCategoryButton">
            Ekle
          </button>
          <button onClick={handleCansel} className="AddCategoryButton">
            İptal
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddCategoryForm;
