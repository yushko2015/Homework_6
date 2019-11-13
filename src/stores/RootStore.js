import { types as t } from "mobx-state-tree";
import TodoListModel from "../models/TodoList";
import GroupListModel from "../models/GroupList";

const RootStore = t.model("RootStore", {
  todosList: t.optional(TodoListModel, {}),
  groupsList: t.optional(GroupListModel, {})
});

export default RootStore.create({});
