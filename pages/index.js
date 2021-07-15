import { useState } from "react";
// ui
import Container from "../components/ui/Container";
import Reminder from "../components/Reminder";
import Sidebar from "../components/Sidebar";

//  we need a function to stop the animation from happening everytime, so what we can do is have a useEffect we know means the animation has rendered and then turn of the animation
export default function Home() {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <div className="bg-gray-200 h-screen">
      <Container>
        <div className="flex border-2">
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
