import React, { useContext } from "react";
import { TodoContext } from "../../store/TodoProvider";
import { AnimatePresence, motion } from "framer-motion";

import TodoItem from "./TodoItem";

const TodoList = () => {
  // this is gunna rerender based on the currentList value
  const { dispatch, list, filterTodosByList } = useContext(TodoContext);

  const { currentList } = list;
  const todosFromList = filterTodosByList(currentList);

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.ul>
        {todosFromList.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />;
        })}
      </motion.ul>
    </AnimatePresence>
  );
};

export default TodoList;
