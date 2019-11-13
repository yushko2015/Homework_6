import { types as t } from "mobx-state-tree";
import GroupModel from "./Group";
import uuid from "uuid";

const GroupListModel = t
  .model("GroupListModel", {
    groups: t.array(GroupModel)
  })
  .actions(store => ({
    add(title) {
      const group = {
        id: uuid(),
        title
      };
      store.groups.unshift(group);
    }
  }));

export default GroupListModel;
