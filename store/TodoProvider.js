import React, { useState, createContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const initialTodos = [{ id: 1, task: "walk the dog", completed: false }];

  const todoReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TODO":
        return [
          ...state,
          { id: uuidv4(), task: action.task, completed: false },
        ];
      case "DELETE_TODO":
        return state.filter((todo) => todo.id !== action.id);
      default:
        return state;
    }
  };

  const [todos, dispatch] = useReducer(todoReducer, initialTodos);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
