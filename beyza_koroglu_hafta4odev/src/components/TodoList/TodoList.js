import React, { useState } from "react";
import TodoItem from "../TodoItem";
import "./TodoList.css";

function TodoList(props) {
  let todos = [];
  const [filterCategory, setFilterCategory] = useState("");
  const [filterStatu, setFilterStatu] = useState("");

  if (filterCategory !== "") {
    if (filterStatu !== "")
      todos = props.todos
        .filter((todo) => todo.category === filterCategory)
        .filter((todo) => todo.statu === filterStatu);
    else {
      todos = props.todos.filter((todo) => todo.category === filterCategory);
    }
  } else {
    todos = [...props.todos];
  }

  const handleChangeCategory = (e) => {
    setFilterCategory(e.target.value);
    setFilterStatu("");
  };

  const handleChangeStatu = (e) => {
    setFilterStatu(e.target.value);
  };

  return (
    <div className="TodoList">
      <select
        onChange={handleChangeCategory}
        value={filterCategory}
        className="TodoFilter"
      >
        <option value={""}>Kategori seç</option>
        {props.categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.category}
          </option>
        ))}
      </select>
      <select
        value={filterStatu}
        className="TodoFilter"
        onChange={handleChangeStatu}
      >
        <option value={""}>Durum seç</option>
        {filterCategory &&
          props.categories
            .find((category) => category.id === filterCategory)
            .statusList.map((statu) => (
              <option key={statu.id} value={statu.id}>
                {statu.statu}
              </option>
            ))}
      </select>
      <br />
      <ul>
        {todos.map((todo) => (
          <TodoItem
            deleteTodo={props.deleteTodo}
            changeStatu={props.changeStatu}
            key={todo.id}
            categories={props.categories}
            todoItem={todo}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
