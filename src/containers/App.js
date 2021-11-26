import { useState } from "react";
import "./App.css";
import ListItems from "../components/ListItems";

const App = () => {
  const [tasks, setTasks] = useState([
    { label: "go school", completed: false },
  ]);
  const [newTask, setNewTask] = useState("");
  const [edit, setEdit] = useState(false);

  const onAddTask = () => {
    if (!newTask) return;
    setTasks([...tasks, { label: newTask, completed: false }]);
    setNewTask("");
  };

  const onEnterTask = (e) => {
    const { value } = e.target;
    setNewTask(value);
  };

  const handleComplete = (selectedItem) => (e) => {
    const { checked } = e.target;
    selectedItem.completed = checked;
    setTasks([...tasks]);
  };

  const handleEdit = () => {
    setEdit(true);
  };

  const handleDelete = (selectedItem) => (e) => {
    const filterTasks = tasks.filter((task) => task !== selectedItem);
    setTasks(filterTasks);
  };

  const completedTask = tasks.filter((task) => task.completed);

  const todoTask = tasks.filter((task) => !task.completed);

  return (
    <div className="App">
      <div className="container">
        <h2>TODO LIST</h2>
        <h3>Add Item</h3>
        <p>
          <input
            id="new-task"
            type="text"
            value={newTask}
            onChange={onEnterTask}
          />
          <button onClick={onAddTask}>Add</button>
        </p>

        <h3>Todo</h3>
        <ul id="incomplete-tasks">
          <ListItems
            tasks={todoTask}
            handleComplete={handleComplete}
            handleDelete={handleDelete}
            handleEdit={setEdit}
          />
        </ul>

        <h3>Completed</h3>
        <ul id="completed-tasks">
          <ListItems
            tasks={completedTask}
            handleComplete={handleComplete}
            handleDelete={handleDelete}
            handleEdit={setEdit}
          />
        </ul>
      </div>
    </div>
  );
};

export default App;
