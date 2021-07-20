import React, { useState, useContext } from "react";
import { TodoContext } from "../../store/TodoProvider";

// motion
import { motion } from "framer-motion";
import { FadeIn } from "../../lib/motionUtil";

// can prob make this a generic component which we pass prop
const AddNewList = ({ hideInput }) => {
  const { addList } = useContext(TodoContext);
  const [inputValue, setInputValue] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (inputValue === "") {
      return;
    }
    addList(inputValue);
    setInputValue("");
    hideInput();
  };
  return (
    <motion.form
      onSubmit={onSubmitHandler}
      className="flex"
      variants={FadeIn}
      initial="init"
      animate="animate"
    >
      <div className="relative w-full">
        <div
          className="absolute flex justify-center items-center h-full p-2 right-0 cursor-pointer"
          onClick={onSubmitHandler}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 transform hover:scale-125"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <input
          className="w-full py-1.5 pl-6 text-white bg-gray-700 border"
          placeholder="New List..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
    </motion.form>
  );
};

export default AddNewList;
