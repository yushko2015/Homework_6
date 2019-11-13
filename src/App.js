import React from "react";
import Input from "./components/Input";
import TodoList from "./components/TodoList";
import store from "./stores/RootStore";
import uuid from "uuid";

store.groupsList.add("Group 1");

const App = () => {
  return (
    <div className="App">
      <div className="main-container">
        <div className="left-panel">
          <ul>
            {store.groupsList.groups.map(group => (
              <li key={uuid()}>{group.title}</li>
            ))}
          </ul>
        </div>
        <div className="right-panel">
          <Input />
          <TodoList todos={store.todosList.todos} />
        </div>
      </div>
    </div>
  );
};

export default App;
