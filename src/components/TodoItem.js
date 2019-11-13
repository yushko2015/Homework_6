import React, { useState } from "react";
import T from "prop-types";
import { observer } from "mobx-react";

const TodoItem = ({ todo }) => {
  return (
    <div className="todo-item">
      <div>{todo.name}</div>
      <div onClick={() => todo.triggerFavorite()} className="fav-icon">
        <svg>
          <use
            xlinkHref={`/symbol-defs.svg#${
              todo.isFavorite ? "icon-star-full" : "icon-star"
            }`}
          />
        </svg>
      </div>
    </div>
  );
};

TodoItem.propTypes = {
  todo: T.shape({
    id: T.string,
    name: T.string,
    isCompleted: T.boolean,
    isFavorite: T.boolean
  }).isRequired
};

export default observer(TodoItem);
