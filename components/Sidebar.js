import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import { TodoContext } from "../store/TodoProvider";

// smaller components
import AddNewList from "./todos/AddNewList";

// the parent will decide if its open or not
const Sidebar = () => {
  // need to focus the child input when we click

  const { list, setCurrentList } = useContext(TodoContext);
  const { lists } = list;

  // if true show the addlistInput
  // the AddNewList needs this as well since we want to close the input once its submited
  const [showAddNewList, setShowAddNewList] = useState(false);

  // activate css on a item in a list
  const [selected, setSelected] = useState(0);

  const onListClick = (i, listname) => {
    // need to apply and need to setcurrentlist
    // should trigger a rerender in todolist
    if (selected !== i) {
      setSelected(i);
    } else {
      setSelected(selected);
    }
    setCurrentList(listname);
  };

  const toggleAddNewList = () => {
    setShowAddNewList(!setShowAddNewList);
  };

  // parent div has flex
  return (
    <motion.div className="w-44 max-w-xs lg:flex-grow bg-gray-700 text-gray-100 py-8 relative ">
      <ul className="mt-4 mb-8">
        {lists.map((list, i) => {
          return (
            <li
              className={`cursor-pointer py-1.5 pl-6 text-gray-400 hover:text-gray-200 ${
                selected === i && "bg-gray-400 text-gray-900"
              }`}
              key={list.id}
              onClick={() => onListClick(i, list.name)}
            >
              {list.name}
            </li>
          );
        })}
        {showAddNewList && <AddNewList hideInput={toggleAddNewList} />}
      </ul>
      {/* Add a component where we can use addList to create a new list */}
      <button
        onClick={() => setShowAddNewList(!showAddNewList)}
        className="flex items-center absolute bottom-6 left-6"
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
        <span className="text-xs text-gray-400 hover:text-gray-50">
          Add List
        </span>
      </button>
    </motion.div>
  );
};

export default Sidebar;
