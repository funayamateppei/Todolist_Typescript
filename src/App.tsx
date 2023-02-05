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
    // const input = document.getElementById('input');
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

  const handleCheckBox = (id: number, checked: boolean) => {
    const array = todo.map((x) => {
      if (x.id === id) {
        x.checked = !checked;
      }
      return x;
    })
    setTodo(array);
  }

  const handleDelete = (id: number, checked: boolean) => {
    if (checked === false) {
      return;
    }
    const array = todo.filter((x) => {
      return x.id !== id
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
            value={inputValue}
            id = "input"
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
                disabled={x.checked}
              />
              <input
                type="checkbox"
                onChange={(e) => handleCheckBox(x.id, x.checked)}
              />
              <button
                onClick={(e) => handleDelete(x.id, x.checked)}
              >
                削除
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
