import React, { useState, createContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const initialTodos = [
    { id: 1, task: "walk the dog", createdAt: "Home" },
    { id: 2, task: "walk the dog 3", createdAt: "All" },
    { id: 3, task: "eat food", createdAt: "All" },
    { id: 4, task: "Home Work", createdAt: "All" },
    { id: 5, task: "Read Book", createdAt: "All" },
  ];

  const todoReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TODO":
        return [
          ...state,
          { id: uuidv4(), task: action.task, createdAt: action.createdAt },
        ];
      case "DELETE_TODO":
        return state.filter((todo) => todo.id !== action.id);
      case "DELETE_TODOS":
        return state.filter((todo) => todo.createdAt !== action.listname);
      default:
        return state;
    }
  };
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);

  // i guess we fetch our todos from the list,
  const [list, setList] = useState({
    currentList: "All",
    lists: [
      { name: "All", id: uuidv4() },
      { name: "Home", id: uuidv4() },
      { name: "Work", id: uuidv4() },
    ],
  });

  // param is just a string
  // this is only for the sidebar since if we use filterTodosBylist, it will return us our todos which the sidebar doesnt use
  const setCurrentList = (listname) => {
    setList({
      ...list,
      currentList: listname,
    });
  };

  const addList = (listname) => {
    // create the list obj
    let newList = { name: listname, id: uuidv4() };
    console.log(newList);

    setList({ ...list, lists: [...list.lists, newList] });
  };

  const deleteList = (listname) => {
    // list removal
    const allList = list.lists;
    const newList = allList.filter((list) => list.name !== listname);
    // also need to set the current list after delete
    setList({
      currentList: "All",
      lists: newList,
    });
    // need to also remove the todos associated with the list
    dispatch({ type: "DELETE_TODOS", listname });
  };

  const filterTodosByList = (list) => {
    if (list === "All") {
      return todos;
    }
    const filteredTodos = todos.filter((todo) => todo.createdAt === list);
    return filteredTodos;
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        dispatch,
        list,
        setCurrentList,
        filterTodosByList,
        addList,
        deleteList,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
