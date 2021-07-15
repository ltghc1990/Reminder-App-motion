import React, { useState, useContext, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { TodoContext } from "../../store/TodoProvider";

// once a task is added we want to disable the input, so we need to accept a prop from the parent
const AddNewTodo = ({ hideAddNewTodo }) => {
  const { dispatch } = useContext(TodoContext);
  const [newTodo, setNewTodo] = useState("");
  const [error, setError] = useState(false);
  const focusTask = useRef();

  // focus input when it renders
  useEffect(() => {
    focusTask.current.focus();
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
    dispatch({ type: "ADD_TODO", task: newTodo });
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
        className="border-b-2"
      >
        <div className="flex justify-between ">
          <input
            ref={focusTask}
            type="text"
            placeholder="New Reminder..."
            className="w-full py-2 outline-none  focus:ring-2 focus:ring-green-500"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <div>
            <button>Submit</button>
          </div>
        </div>
      </motion.form>
      {error && <span>Must not leave input blank!</span>}
    </>
  );
};

export default AddNewTodo;
