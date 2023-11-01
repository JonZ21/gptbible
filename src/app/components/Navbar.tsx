// components/Navbar.js
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  return (
    <div className="navbar flex items-center">
      <Link href={"/"}>
        <Image
          src="/logos/logo_transparent.png"
          width={50}
          height={50}
          alt={"logo"}
          className="cursor-pointer mt-0 mb-0"
        />
      </Link>
      <a href="/about">About</a>
    </div>
  );
}

export default Navbar;
