import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between py-2 mb-14">
      <Link href="/">
        <a className="btn">HOME</a>
      </Link>
      <nav>
        <ul>
          <Link href="/About">
            <a className="btn">About</a>
          </Link>
          <Link href="/Contacts">
            <a className="btn">Contacts</a>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
