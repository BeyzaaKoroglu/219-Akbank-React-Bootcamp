import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import AddStatuForm from "../AddStatuForm";
import StatuItem from "../StatuItem";
import "./EditCategoryForm.css";

function EditCategoryForm(props) {
  const [displayAddStatu, setDisplayAddStatu] = useState(false);

  const [deletedStatus, setDeletedStatus] = useState([]);

  const [category, setCategory] = useState(
    JSON.parse(
      JSON.stringify(
        props.categories.find((category) => category.id === props.editCategory)
      )
    )
  );

  const handleCategoryNameChange = (e) => {
    setCategory({ ...category, category: e.target.value });
  };

  const handleCategoryStatuChange = (statu) => {
    const statusList = category.statusList.map((item) => {
      if (item.id === statu.id) {
        item.statu = statu.statu;
        item.color = statu.color;
      }
      return item;
    });
    setCategory({ ...category, statusList: statusList });
  };

  const handleDeleteStatu = (statuID) => {
    const statusList = category.statusList.filter(
      (statu) => statu.id !== statuID
    );
    setDeletedStatus([...deletedStatus, statuID]);
    setCategory({ ...category, statusList: statusList });
  };

  const handleAddStatu = (e) => {
    setDisplayAddStatu(!displayAddStatu);
  };

  const addStatu = (statu) => {
    const newStatu = { id: uuid(), statu: statu, color: "" };
    setCategory({
      ...category,
      statusList: [...category.statusList, newStatu],
    });
  };

  const handleEdit = (e) => {
    e.preventDefault();
    props.editCategoryAndStatus(category, deletedStatus);
    props.displayEditCategory();
  };

  const handleCansel = (e) => {
    e.preventDefault();
    props.displayEditCategory();
  };

  return (
    <div className="EditCategoryFormBackground">
      <div className="EditCategoryForm">
        <h2>Kategori Düzenle</h2>
        <form>
          <ul>
            <li className="EditCategoryFormLi">
              <label>Kategori: </label>
              <input
                className="EditCategoryInput"
                type="text"
                placeholder="Kategori giriniz"
                value={category.category}
                onChange={handleCategoryNameChange}
              />
            </li>
            {category.statusList.map((statu) => (
              <StatuItem
                key={statu.id}
                statu={statu}
                handleCategoryStatuChange={handleCategoryStatuChange}
                handleDeleteStatu={handleDeleteStatu}
              />
            ))}
            <li style={{ textAlign: "center" }}>
              <button
                type="button"
                onClick={handleAddStatu}
                className="EditCategoryButton"
              >
                Durum ekle
              </button>
            </li>
          </ul>
          <button onClick={handleEdit} className="EditCategoryButton">
            Kaydet
          </button>
          <button onClick={handleCansel} className="EditCategoryButton">
            İptal
          </button>
        </form>
        {displayAddStatu && (
          <AddStatuForm handleAddStatu={handleAddStatu} addStatu={addStatu} />
        )}
      </div>
    </div>
  );
}

export default EditCategoryForm;
