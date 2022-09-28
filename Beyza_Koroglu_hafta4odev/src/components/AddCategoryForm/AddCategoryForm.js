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
      props.onClose();
      props.onAddCategory(categoryName);
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    props.onClose();
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
          <button onClick={handleCancel} className="AddCategoryButton">
            İptal
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddCategoryForm;
