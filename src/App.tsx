import React from "react";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todo, setTodo] = useState<Todo[]>([]);

  const todoHandleChange = (e: { target: { value: string } }) => {
    setInputValue(e.target.value);
  };

  const submitHandleClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const array: Todo = {
      inputValue: inputValue,
      id: todo.length,
      checked: false,
    };
    setTodo([array, ...todo]);
    setInputValue("");
    // console.log(todo);
  };

  const handleEdit = (id: number, inputValue: string) => {
    const array = todo.map((x) => {
      if (x.id === id) {
        x.inputValue = inputValue;
      }
      return x;
    })
    setTodo(array);
  }

  type Todo = {
    inputValue: string;
    id: number;
    checked: boolean;
  };

  return (
    <div className="App">
      <div>
        <h2>TODO LIST with Typescript</h2>
        <form onSubmit={submitHandleClick}>
          <input
            type="text"
            onChange={todoHandleChange}
            className="inputText"
          />
          <button type="submit" className="submitButton">
            登録
          </button>
        </form>
        <ul>
          {todo.map((x, i) => (
            <li key={i}>
              {/* <li>{x.inputValue}</li> */}
              <input
                type="text"
                value={x.inputValue}
                className="inputText"
                onChange={(e) => handleEdit(x.id, e.target.value)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
