import "./App.css";
import ToDoRows from "./components/ToDoRows";
function App() {
  return (
    <div>
      <div className="TodoListTitle">
        <h1 className="TitleText"> ToDo List </h1>
      </div>
      <ToDoRows/>
    </div>
  );
}

export default App;
