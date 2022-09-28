import { useState, useMemo } from "react";
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

  const handleAddTodo = (todo, category) => {
    setTodos([
      ...todos,
      { id: uuid(), todo: todo, category: category, statu: "0" },
    ]);
  };

  const handleChangeStatu = (todoID, statu) => {
    const todo = todos.find((todo) => todo.id === todoID);
    todo.statu = statu;
  };

  const handleDeleteTodo = (todoID) => {
    setTodos(todos.filter((todo) => todo.id !== todoID));
  };

  const handleDeleteCategory = (categoryID) => {
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

  const handleDisplayAddCategory = () => {
    setDisplayAC(!displayAC);
  };

  const handleDisplayEditCategory = () => {
    setDisplayEC(!displayEC);
  };

  const handleAddCategory = (categoryName) => {
    setCategories([
      ...categories,
      { id: uuid(), category: categoryName, statusList: [] },
    ]);
  };

  const handleClickEditCategory = (id) => {
    setEditCategory(id);
    setDisplayEC(true);
  };

  const handleEditCategoryAndStatus = (newCategory, deletedStatus) => {
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

  const currentCategory = useMemo(() => {
    return categories.find((category) => category.id === editCategory);
  }, [editCategory, categories]);

  return (
    <div className="App">
      <div className="FormBlock">
        <CategoryList
          categories={categories}
          onDeleteCategory={handleDeleteCategory}
          onOpenAddCategory={handleDisplayAddCategory}
          onClickEditCategory={handleClickEditCategory}
        />
      </div>
      <div className="Todos">
        <AddTodoForm categories={categories} onAddTodo={handleAddTodo} />
        <TodoList
          categories={categories}
          todos={todos}
          onChangeStatu={handleChangeStatu}
          onDeleteTodo={handleDeleteTodo}
        />
      </div>
      {displayAC && (
        <AddCategoryForm
          onClose={handleDisplayAddCategory}
          onAddCategory={handleAddCategory}
        />
      )}
      {displayEC && (
        <EditCategoryForm
          onClose={handleDisplayEditCategory}
          currentCategory={currentCategory}
          onEditCategoryAndStatus={handleEditCategoryAndStatus}
        />
      )}
    </div>
  );
}

export default App;
