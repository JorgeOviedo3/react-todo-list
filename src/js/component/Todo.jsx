import React, { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleKeypress = (e) => {
    if (e.keyCode === 13) {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const handleDelete = (id) => {
    setTodos(
      todos.filter((el, index) => {
        return index !== id;
      })
    );
  };

  return (
    <div>
      <h1 className="header">Todos App</h1>
      <div className="container" id="main">
        <input
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeypress}
          value={inputValue}
          placeholder="What needs to be done?"
        />
        <hr></hr>

        {todos.map((todo, id) => {
          return (
            <div key={id}>
              <div className="task">
                {todo}
                <span
                  onClick={() => {
                    handleDelete(id);
                  }}
                >
                  ✕
                </span>
              </div>
              <hr></hr>
            </div>
          );
        })}

        <p>{todos.length} items left</p>
      </div>
    </div>
  );
};

export default Todo;