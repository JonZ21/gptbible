// components/Navbar.js
import Link from "next/link";

function Navbar() {
  return (
    <div className="navbar">
      <Link href={"/"}>Home</Link>
      <a href="/about">About</a>
    </div>
  );
}

export default Navbar;
