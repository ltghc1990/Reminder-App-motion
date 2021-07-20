import React, { useState } from "react";
import { motion } from "framer-motion";
import TodoList from "./todos/TodoList";
import AddNewTodo from "./todos/AddNewTodo";
const Reminder = ({ sidebarToggle }) => {
  const [showNewReminder, setShowNewReminder] = useState(false);

  return (
    <div className="p-6 pb-12 flex-grow bg-white relative lg:p-12">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold text-gray-700">Reminders</h1>

        <button onClick={() => setShowNewReminder(!showNewReminder)}>
          <motion.svg
            whileHover={{ rotate: "180deg", scale: 1.2 }}
            whileTap={{ scale: 0.6 }}
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
        </button>
      </div>
      <div>
        <TodoList />
        {/* hide Input when we submit a todo */}
        {showNewReminder && <AddNewTodo hideAddNewTodo={setShowNewReminder} />}
      </div>

      <motion.div
        whileHover={{ opacity: 1, cursor: "pointer" }}
        className="absolute opacity-0 top-1/2 -left-1.5 transform -translate-y-1/2 w-2.5 h-16 bg-gray-500"
        onClick={sidebarToggle}
      ></motion.div>
    </div>
  );
};

export default Reminder;
