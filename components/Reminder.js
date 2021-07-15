import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import TodoList from "./todos/TodoList";
import AddNewTodo from "./todos/AddNewTodo";
const Reminder = () => {
  const [showNewReminder, setShowNewReminder] = useState(false);

  return (
    <div className="p-6 flex-grow bg-white">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold">Reminders</h1>

        <motion.svg
          whileHover={{ rotate: "180deg", scale: 1.2 }}
          whileTap={{ scale: 0.6 }}
          onClick={() => setShowNewReminder(!showNewReminder)}
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v16m8-8H4"
          />
        </motion.svg>
      </div>
      <div>
        <TodoList />
        {/* hide Input when we submit a todo */}
        {showNewReminder && <AddNewTodo hideAddNewTodo={setShowNewReminder} />}
      </div>
    </div>
  );
};

export default Reminder;
