"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavHeader = () => {
  const pathname = usePathname();

  const links = [
    { label: "log out", href: "/logout" },
    { label: "sign up", href: "/register" },
    { label: "log in", href: "/login" },
  ];

  return (
    <nav className="flex gap-8 py-1">
      {links.map((link, index) => {
        return (
          <Link
            href={link.href}
            key={index}
            className={`${
              link.href === pathname && "border-b-2 border-foreground"
            } capitalize hover:border-foreground/70 hover:border-b-2`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavHeader;
