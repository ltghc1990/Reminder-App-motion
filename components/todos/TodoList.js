import React, { useContext } from "react";
import { TodoContext } from "../../store/TodoProvider";
import { AnimatePresence, motion } from "framer-motion";

import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos, dispatch } = useContext(TodoContext);
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.ul>
        {todos.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />;
        })}
      </motion.ul>
    </AnimatePresence>
  );
};

export default TodoList;
