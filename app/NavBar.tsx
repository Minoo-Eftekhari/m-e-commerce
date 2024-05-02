"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { ImWink2 } from "react-icons/im";
import classnames from "classnames";

const NavBar = () => {
  const currentPath = usePathname();
  console.log(currentPath);
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
              className={classnames({
                "!text-zinc-900": link.href === currentPath,
                "!text-zinc-500": link.href !== currentPath,
                "hover:text-zinc-800 transition-colors": true,
              })}
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
