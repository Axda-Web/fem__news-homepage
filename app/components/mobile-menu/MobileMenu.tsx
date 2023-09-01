"use client";

import Image from "next/image";
import Link from "next/link";
import { Page } from "../nav/Nav";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
} from "@chakra-ui/react";

type MobileMenuProps = {
  pages: Page[];
  currentPath: string;
};

const MobileMenu = ({ pages, currentPath }: MobileMenuProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="block md:hidden">
      <button onClick={onOpen}>
        <Image
          src="/assets/images/icon-menu.svg"
          alt="menu icon"
          width={40}
          height={17}
        />
      </button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay className="bg-neutral--very-dark-blue/50" />
        <DrawerContent className="bg-neutral--off-white p-6 max-w-[256px]">
          <div className="flex justify-end mb-20">
            <button onClick={onClose}>
              <Image
                src="/assets/images/icon-menu-close.svg"
                alt="menu icon"
                width={32}
                height={32}
              />
            </button>
          </div>
          <DrawerBody>
            <nav>
              <ul className="flex flex-col gap-y-6 text-lg text-neutral--very-dark-blue">
                {pages.map((page) => (
                  <li
                    key={page.id}
                    className={`hover:text-accent--soft-red ${
                      currentPath === page.href && "text-accent--soft-red"
                    }`}
                  >
                    <Link href={page.href}>{page.name}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};
export default MobileMenu;
