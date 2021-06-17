import React from 'react'
import Link from "next/link"

const Header = () => {
  return (
    <div className="flex justify-between">
      <Link href="/">
        <a className="btn">HOME</a>
      </Link>
      <nav>
        <ul>
          <li className="btn">Tutorials</li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
