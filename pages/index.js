import { useState, useContext } from "react";

// ui
import Container from "../components/ui/Container";
import Reminder from "../components/Reminder";
import Sidebar from "../components/Sidebar";

export default function Home() {
  // determine what reminder displays when which list is selected. default is All, if we click on home, filter task with home on reminders

  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="bg-gray-200 h-screen">
      <Container>
        <div className="flex rounded-md overflow-hidden">
          {openSidebar && <Sidebar />}
          <div
            className="absolute"
            onClick={() => setOpenSidebar(!openSidebar)}
          >
            X
          </div>
          <Reminder />
        </div>
      </Container>
    </div>
  );
}
