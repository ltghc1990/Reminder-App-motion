import React, { useContext } from "react";
import { TodoContext } from "../../store/TodoProvider";
import { motion } from "framer-motion";

import TodoItem from "./TodoItem";

const TodoList = () => {
  // this is gunna rerender based on the currentList value
  const { dispatch, list, filterTodosByList, deleteList } =
    useContext(TodoContext);

  const { currentList } = list;
  const todosFromList = filterTodosByList(currentList);
  console.log(currentList);

  return (
    <motion.ul className="">
      {todosFromList.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />;
      })}
      {currentList === "All" && todosFromList.length < 1 && (
        <div>All Done!</div>
      )}
      {currentList !== "All" && (
        <button
          onClick={() => deleteList(currentList)}
          className="flex items-center absolute bottom-6 right-6"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-xs">Delete List</span>
        </button>
      )}
    </motion.ul>
  );
};

export default TodoList;
