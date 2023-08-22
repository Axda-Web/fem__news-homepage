"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileMenu from "../mobile-menu/";

export type Page = {
  id: number;
  name: string;
  href: string;
};

export type NavProps = {
  pages: Page[];
};
const Nav = ({ pages }: NavProps) => {
  const pathName = usePathname();
  return (
    <header className="flex justify-between items-center py-8">
      <Link href="/">
        <Image
          src="/assets/images/logo.svg"
          alt="logo"
          width={65}
          height={40}
        />
      </Link>
      <nav className="hidden md:block">
        <ul className="flex gap-x-10 text-neutral--dark-grayish-blue">
          {pages.map((page) => (
            <li
              key={page.id}
              className={`hover:text-accent--soft-red ${
                pathName === page.href && "text-accent--soft-red"
              }`}
            >
              <Link href={page.href}>{page.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <MobileMenu pages={pages} currentPath={pathName} />
    </header>
  );
};

export default Nav;
