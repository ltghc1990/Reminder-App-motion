import { useState } from "react";

// ui
import Reminder from "../components/Reminder";
import Sidebar from "../components/Sidebar";

export default function Home() {
  // determine what reminder displays when which list is selected. default is All, if we click on home, filter task with home on reminders

  const [openSidebar, setOpenSidebar] = useState(false);

  const sidebarToggle = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <div className="pb-8">
      <div className="flex rounded-md overflow-hidden shadow-xl">
        {openSidebar && <Sidebar />}

        <Reminder sidebarToggle={sidebarToggle} />
      </div>
    </div>
  );
}
