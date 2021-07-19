import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex items-center py-10 space-x-3">
      <Link href="/">
        <a className=" border-b-2 focus:border-gray-900">Reminders</a>
      </Link>
      <nav>
        <ul>
          <Link href="/About">
            <a className=" border-b-2 focus:border-gray-900">About</a>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
