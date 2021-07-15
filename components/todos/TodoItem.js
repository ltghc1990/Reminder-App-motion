import React from "react";

// Motion Stuff
import { motion } from "framer-motion";
import { FadeIn } from "../../lib/motionUtil";

const TodoItem = ({ todo, dispatch }) => {
  const { id } = todo;

  const deleteTodo = () => {
    dispatch({ type: "DELETE_TODO", id: id });
  };

  return (
    <motion.li
      key={id}
      variants={FadeIn}
      initial="init"
      animate="animate"
      exit="exit"
      className="flex justify-between py-2 border-b-2"
    >
      <p>{todo.task}</p>

      <motion.svg
        // have it so it hovers when we hover over the li
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        whileTap={{ scale: 0.6 }}
        onClick={deleteTodo}
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 cursor-pointer"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </motion.svg>
    </motion.li>
  );
};

export default TodoItem;
