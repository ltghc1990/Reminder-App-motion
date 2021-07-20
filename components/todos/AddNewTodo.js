import React, { useState, useContext, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { TodoContext } from "../../store/TodoProvider";

// once a task is added we want to disable the input, so we need to accept a prop from the parent
const AddNewTodo = ({ hideAddNewTodo }) => {
  const { list, dispatch } = useContext(TodoContext);
  const currentlist = list.currentList;
  const [newTodo, setNewTodo] = useState("");
  const [error, setError] = useState(false);
  const focusTask = useRef();

  // focus input when it renders
  useEffect(() => {
    focusTask.current.focus();
  }, []);

  useEffect(() => {
    // if theres a error message get rid of it in 3 secs
    if (error) {
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  }, [error]);

  const AddTodoHandler = (e) => {
    e.preventDefault();
    if (newTodo === "") {
      setError(true);
      return;
    }
    dispatch({ type: "ADD_TODO", task: newTodo, createdAt: currentlist });
    // clear input
    setNewTodo("");
    // hide input
    hideAddNewTodo(false);
  };

  console.log(newTodo);
  return (
    <>
      <motion.form
        onSubmit={AddTodoHandler}
        variants={{ init: { opacity: 0 }, animate: { opacity: 1 } }}
        initial="init"
        animate="animate"
        className="border-b-2 mb-8 lg:mb-4"
      >
        <div className="relative flex justify-between items-center ">
          <input
            ref={focusTask}
            type="text"
            placeholder="New Reminder..."
            className="w-full py-2 outline-none  focus:ring-2 focus:ring-green-500"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button className="absolute p-2 right-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </motion.form>
      {error && <span>Must not leave input blank!</span>}
    </>
  );
};

export default AddNewTodo;
