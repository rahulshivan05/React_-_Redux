import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem1 from "./components/TodoItem1";
import './App.css'

// Starting project from here
function App() {

  return (
    <center className="todo_container">
      <AppName /> {/*this is a component of ReactJs */}
      <AddTodo />
      <div className="items_container">
        <TodoItem1 />
        <TodoItem1 />
      </div>
    </center>
  );
}

export default App;