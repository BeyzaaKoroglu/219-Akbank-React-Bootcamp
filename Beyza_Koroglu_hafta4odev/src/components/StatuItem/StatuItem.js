import React, { useState } from "react";

function StatuItem(props) {
  const colors = ["#F06292", "#BA68C8", "#FFD54F", "#4FC3F7", "#AED581"];

  const [statu, setStatu] = useState({ ...props.statu });

  const handleStatuNameChange = (e) => {
    setStatu({ ...statu, statu: e.target.value });
    props.onCategoryStatuChange({ ...statu, statu: e.target.value });
  };

  const handleStatuColorChange = (e) => {
    setStatu({ ...statu, color: e.target.value });
    props.onCategoryStatuChange({ ...statu, color: e.target.value });
  };

  const handleClick = () => {
    props.onDeleteStatu(statu.id);
  };

  return (
    <li className="EditCategoryFormLi">
      <label>Durum: </label>
      <input
        className="StatuInput"
        type="text"
        placeholder="Durum giriniz"
        value={statu.statu}
        onChange={handleStatuNameChange}
      />
      <select
        style={{ backgroundColor: statu.color }}
        className="SelectColor"
        value={statu.color}
        onChange={handleStatuColorChange}
      >
        <option>Renk seçiniz.</option>
        {colors.map((color, idx) => (
          <option key={idx} value={color} style={{ backgroundColor: color }}>
            {color}
          </option>
        ))}
      </select>
      <button onClick={handleClick} className="DeleteStatu">
        Sil
      </button>
    </li>
  );
}

export default StatuItem;
