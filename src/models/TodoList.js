import { types } from "mobx-state-tree";
import TodoModel from "./Todo";

const TodoListModel = types
  .model("TodoListModel", {
    todos: types.array(TodoModel)
  })
  .actions(store => ({
    add(todo) {
      store.todos.unshift(todo);
    }
  }));

export default TodoListModel;
