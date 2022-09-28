import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import AddStatuForm from "../AddStatuForm";
import StatuItem from "../StatuItem";
import "./EditCategoryForm.css";

function EditCategoryForm(props) {
  const [displayAddStatu, setDisplayAddStatu] = useState(false);

  const [deletedStatus, setDeletedStatus] = useState([]);

  const [category, setCategory] = useState(props.currentCategory);

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

  const handleDisplayAddStatu = (e) => {
    setDisplayAddStatu(!displayAddStatu);
  };

  const handleAddStatu = (statu) => {
    const newStatu = { id: uuid(), statu: statu, color: "" };
    setCategory({
      ...category,
      statusList: [...category.statusList, newStatu],
    });
  };

  const handleEdit = (e) => {
    e.preventDefault();
    props.onEditCategoryAndStatus(category, deletedStatus);
    props.onClose();
  };

  const handleCancel = (e) => {
    e.preventDefault();
    props.onClose();
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
                onCategoryStatuChange={handleCategoryStatuChange}
                onDeleteStatu={handleDeleteStatu}
              />
            ))}
            <li style={{ textAlign: "center" }}>
              <button
                type="button"
                onClick={handleDisplayAddStatu}
                className="EditCategoryButton"
              >
                Durum ekle
              </button>
            </li>
          </ul>
          <button onClick={handleEdit} className="EditCategoryButton">
            Kaydet
          </button>
          <button onClick={handleCancel} className="EditCategoryButton">
            İptal
          </button>
        </form>
        {displayAddStatu && (
          <AddStatuForm
            onClose={handleDisplayAddStatu}
            onAddStatu={handleAddStatu}
          />
        )}
      </div>
    </div>
  );
}

export default EditCategoryForm;
