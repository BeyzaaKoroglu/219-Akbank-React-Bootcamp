import { useState } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import AddCategoryForm from "./components/AddCategoryForm";
import AddTodoForm from "./components/AddTodoForm";
import CategoryList from "./components/CategoryList";
import EditCategoryForm from "./components/EditCategoryForm";
import TodoList from "./components/TodoList";

function App() {
  const [categories, setCategories] = useState([]);

  const [todos, setTodos] = useState([]);

  const [editCategory, setEditCategory] = useState("");

  const [displayAC, setDisplayAC] = useState(false);
  const [displayEC, setDisplayEC] = useState(false);

  const addTodo = (todo, category) => {
    setTodos([
      ...todos,
      { id: uuid(), todo: todo, category: category, statu: "0" },
    ]);
  };

  const changeStatu = (todoID, statu) => {
    const todo = todos.find((todo) => todo.id === todoID);
    todo.statu = statu;
  };

  const deleteTodo = (todoID) => {
    setTodos(todos.filter((todo) => todo.id !== todoID));
  };

  const deleteCategory = (categoryID) => {
    if (
      window.confirm(
        `${
          todos.filter((todo) => todo.category === categoryID).length
        } adet Todo silinecek.\nKategoriyi silmek istediğinizden emin misiniz?`
      )
    ) {
      setCategories(
        categories.filter((category) => category.id !== categoryID)
      );
      setTodos(todos.filter((todo) => todo.category !== categoryID));
    }
  };

  const displayAddCategory = () => {
    setDisplayAC(!displayAC);
  };

  const displayEditCategory = () => {
    setDisplayEC(!displayEC);
  };

  const addCategory = (categoryName) => {
    setCategories([
      ...categories,
      { id: uuid(), category: categoryName, statusList: [] },
    ]);
  };

  const specifyEditCategory = (categoryID) => {
    setEditCategory(categoryID);
  };

  const editCategoryAndStatus = (newCategory, deletedStatus) => {
    const oldCategory = categories.find(
      (category) => category.id === editCategory
    );

    deletedStatus.forEach((deletedStatu) => {
      let indexOfDeleted = oldCategory.statusList.findIndex(
        (statu) => statu.id === deletedStatu
      );
      todos.forEach((todo) => {
        if (
          todo.category === editCategory &&
          todo.statu === deletedStatu &&
          oldCategory.statusList[indexOfDeleted + 1]
        ) {
          todo.statu = oldCategory.statusList[indexOfDeleted + 1].id;
        }
      });
    });
    setCategories([
      ...categories.filter((category) => category.id !== editCategory),
      newCategory,
    ]);
  };

  return (
    <div className="App">
      <div className="FormBlock">
        <CategoryList
          categories={categories}
          deleteCategory={deleteCategory}
          displayAddCategory={displayAddCategory}
          displayEditCategory={displayEditCategory}
          specifyEditCategory={specifyEditCategory}
        />
      </div>
      <div className="Todos">
        <AddTodoForm categories={categories} addTodo={addTodo} />
        <TodoList
          categories={categories}
          todos={todos}
          changeStatu={changeStatu}
          deleteTodo={deleteTodo}
        />
      </div>
      {displayAC && (
        <AddCategoryForm
          displayAddCategory={displayAddCategory}
          addCategory={addCategory}
        />
      )}
      {displayEC && (
        <EditCategoryForm
          displayEditCategory={displayEditCategory}
          editCategory={editCategory}
          categories={categories}
          editCategoryAndStatus={editCategoryAndStatus}
        />
      )}
    </div>
  );
}

export default App;
