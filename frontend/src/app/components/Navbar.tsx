"use client";

import React, { useState } from "react";
import {
  Navbar as NextUINavbar,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
} from "@nextui-org/react";
import DropdownMenu from './services/DropdownMenu'; // Verifica que la ruta sea correcta
import DropdownMenu1 from './company/DropdownMenu1'; // Verifica que la ruta sea correcta
import styles from '../styles/DropdownMenu.module.css'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Home",
    "Services",
    "Company",
    // "Use Cases"
  ];

  return (
    <NextUINavbar
      onMenuOpenChange={setIsMenuOpen}
      className="bg-white w-full px-0 md:px-8 py-2 mt-1 mx-auto"
      style={{ borderBottomLeftRadius: '40px', borderBottomRightRadius: '40px' }}
    >
      <NavbarContent className="text-base relative w-full">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden absolute right-[-160px] text-black"
        />

        <Link href="/apifycloud">
          <img
            src="/apifycloud.png" 
            alt="apifycloud"
            className="h-16 md:h-16 cursor-pointer"
            />
        </Link>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-12 w-full">
        <NavbarItem>
          <Link color="foreground" href="/apifycloud" className={styles.dropdownLink}>
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <DropdownMenu />
        </NavbarItem>
        {/* <NavbarItem>
          <Link color="foreground" href="/apifycloud/use-cases" className="text-base md:text-lg">
            Use Cases
          </Link>
        </NavbarItem> */}
        <NavbarItem>
          <DropdownMenu1 />
        </NavbarItem>

      </NavbarContent>

      <NavbarContent>
        <Input className="hidden" />
      </NavbarContent>
      {/* <NavbarContent>
        <Input
          placeholder="Search..."
          className="block"
        />
      </NavbarContent> */}
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full text-lg"
              href={`/${item.toLowerCase().replace(/\s/g, '-')}`} // Esto genera hrefs válidos
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NextUINavbar>
  );
}
