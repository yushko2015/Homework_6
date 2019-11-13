import React, { useState } from "react";
import store from "../stores/RootStore";
import uuid from "uuid";

const Input = () => {
  const [value, setInputValue] = useState("");
  const onChange = event => setInputValue(event.target.value);

  const onSubmit = event => {
    event.preventDefault();
    if (value === "") return;
    store.todosList.add({
      id: uuid(),
      name: value,
      isCompleted: false,
      isFavorite: false
    });
    setInputValue("");
  };

  return (
    <form className="todo-form" onSubmit={onSubmit}>
      <div className="search-input-container">
        <label htmlFor="inp" className="inp">
          <input
            type="text"
            id="inp"
            placeholder="&nbsp;"
            {...{ value }}
            onChange={onChange}
          />
          <span className="label">Todo name...</span>
          <svg width="120px" height="26px" viewBox="0 0 120 26">
            <path d="M0,25 C21,25 46,25 74,25 C102,25 118,25 120,25" />
          </svg>
          <span className="border" />
        </label>
      </div>
    </form>
  );
};

export default Input;
