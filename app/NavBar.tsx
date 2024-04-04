import Link from "next/link";
import React from "react";
import { ImWink2 } from "react-icons/im";

const NavBar = () => {
  const links = [
    { label: "Cart", href: "/cart" },
    { label: "Sign In", href: "/signin" },
  ];

  return (
    <nav>
      <div className="navbar justify-between px-5 border-b">
        <Link href="/">
          <ImWink2 />
        </Link>
        <ul className="flex space-x-6">
          {links.map((link) => (
            <Link
              key={link.href}
              className="text-zinc-500 hover:text-zinc-800 transition-colors"
              href={link.href}
            >
            {link.label}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
