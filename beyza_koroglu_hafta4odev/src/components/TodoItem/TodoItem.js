import React, { useEffect, useState } from "react";
import "./TodoItem.css";

function TodoItem(props) {
  const category = props.categories.find(
    (category) => category.id === props.todoItem.category
  );

  useEffect(() => {
    setStatu(
      category.statusList.find((item) => props.todoItem.statu === item.id)
    );
  }, [props.categories]);

  const [statu, setStatu] = useState(
    category.statusList.find((item) => props.todoItem.statu === item.id)
  );
  const background = statu ? statu.color : "white";

  const handleChange = (e) => {
    setStatu(category.statusList.find((item) => e.target.value === item.id));
    props.changeStatu(props.todoItem.id, e.target.value);
  };

  const handleClick = (e) => {
    if (
      window.confirm(
        `Todo: ${props.todoItem.todo}\nSilmek istediğinizden emin misiniz?`
      )
    )
      props.deleteTodo(props.todoItem.id);
  };

  return (
    <li className="TodoItem" style={{ backgroundColor: background }}>
      <span>{props.todoItem.todo}</span>
      <span className="TodoItemRight">
        {category.statusList.length > 0 && (
          <select
            value={props.todoItem.statu}
            className="TodoSelect"
            onChange={handleChange}
          >
            <option value="0"></option>
            {category.statusList.map((item) => (
              <option key={item.id} value={item.id}>
                {item.statu}
              </option>
            ))}
          </select>
        )}
        <button onClick={handleClick} className="DeleteTodo">
          X
        </button>
      </span>
    </li>
  );
}

export default TodoItem;
