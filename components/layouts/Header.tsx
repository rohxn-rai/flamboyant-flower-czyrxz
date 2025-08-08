import Link from "next/link";
import ThemeToggle from "../theme-toggle";
import NavHeader from "./NavHeader";

const Header = async () => {
  return (
    <header className="border-b border-border py-1.5 sticky top-0">
      <nav className="container mx-auto flex flex-row justify-between">
        <Link href="/" className="text-2xl font-bold">
          To-Do List
        </Link>

        <div className="flex flex-row gap-8 align-middle">
          <NavHeader />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Header;
