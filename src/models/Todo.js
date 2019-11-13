import { types } from "mobx-state-tree";

const TodoModel = types
  .model("TodoModel", {
    id: types.string,
    name: types.string,
    isCompleted: types.boolean,
    isFavorite: types.boolean
  })
  .actions(todo => ({
    triggerComplete() {
      todo.isCompleted = !todo.isCompleted;
    },
    triggerFavorite() {
      todo.isFavorite = !todo.isFavorite;
    }
  }));

export default TodoModel;
