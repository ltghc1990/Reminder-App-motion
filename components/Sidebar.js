import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import { TodoContext } from "../store/TodoProvider";

// the parent will decide if its open or not
const Sidebar = () => {
  const { list, setCurrentList, AddList } = useContext(TodoContext);
  const { lists } = list;
  console.log(lists);

  // activate css on a item in a list
  const [selected, setSelected] = useState(null);

  const onListClick = (i, listname) => {
    // need to apply or deselect css and need to setcurrentlist
    // should trigger a rerender in todolist
    if (selected !== i) {
      setSelected(i);
    } else {
      setSelected(null);
    }
    setCurrentList(listname);
  };

  // parent div has flex
  return (
    <motion.div className="w-44 max-w-xs lg:flex-grow  bg-gray-700 text-gray-100 pt-8 px-6">
      <h3 className="w-full border">THE SIDEBAR</h3>
      <ul className="mt-4">
        {lists.map((list, i) => {
          return (
            <li
              className={`cursor-pointer ${
                selected === i && "bg-gray-200 text-gray-900"
              }`}
              key={list.id}
              onClick={() => onListClick(i, list.name)}
            >
              {list.name}
            </li>
          );
        })}
      </ul>
      {/* Add a component where we can use addList to create a new list */}
    </motion.div>
  );
};

export default Sidebar;
