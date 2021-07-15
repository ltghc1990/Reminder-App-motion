import React, { useState } from "react";
import { motion } from "framer-motion";

// the parent will decide if its open or not
const Sidebar = ({ setOpenSidebar }) => {
  // need somethign to toggle the css when the list is clicked
  const lists = ["All", "Home", "Work"];

  return (
    <motion.div className="w-3/12 bg-gray-700 text-gray-100 pt-8 px-6 flex flex-col ">
      <h3 className="flex-shrink-0 w-full border">THE SIDEBAR</h3>
      <ul className="mt-4">
        {lists.map((list) => {
          return (
            <li className="" style={{}} key={list}>
              {list}
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
};

export default Sidebar;
