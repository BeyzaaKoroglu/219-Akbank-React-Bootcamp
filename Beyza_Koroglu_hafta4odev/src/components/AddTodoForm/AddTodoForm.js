import React, { useState } from "react";
import "./AddTodoForm.css";

function AddTodoForm(props) {
  const [todo, setTodo] = useState("");
  const [category, setCategory] = useState("");

  const handleTodoChange = (e) => {
    setTodo(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();

    if (!todo || !category) {
      let warning = "";
      if (!todo) warning += "Todo giriniz.";
      if (!category)
        warning += "\nKategori seçiniz.\nEğer yoksa kategori ekleyiniz.";
      alert(warning);
    } else {
      props.onAddTodo(todo, category);
      setTodo("");
      setCategory("");
    }
  };

  return (
    <div className="AddTodoForm">
      <form>
        <input
          className="TodoInput"
          type="text"
          placeholder="Todo giriniz"
          onChange={handleTodoChange}
          value={todo}
        />
        <select
          className="AddTodoSelect"
          onChange={handleCategoryChange}
          value={category}
        >
          <option>Kategori seçiniz.</option>
          {props.categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.category}
            </option>
          ))}
        </select>
        <button className="AddTodoButton" onClick={handleClick}>
          Ekle
        </button>
      </form>
    </div>
  );
}

export default AddTodoForm;
