import { types as t } from "mobx-state-tree";
import TodoModel from "./Todo";

const GroupModel = t
  .model("GroupModel", {
    id: t.string,
    title: t.string,
    todos: t.optional(t.array(TodoModel), [])
  })
  .actions(store => ({
    add(todo) {
      store.todos.unshift(todo);
    }
  }));

export default GroupModel;
