import React from "react";
import TodoItem from "./TodoItem";
import T from "prop-types";
import { observer } from "mobx-react";

const TodoList = ({ todos }) => {
  return (
    <div className="todolist">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

TodoList.propTypes = {
  todos: T.array.isRequired
};

export default observer(TodoList);
