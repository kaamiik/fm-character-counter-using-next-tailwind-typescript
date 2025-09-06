"use client";
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import DarkLightToggle from "../DarkLightToggle";
import { useTheme } from "../ThemeProvider";

function Header() {
  const { theme } = useTheme();
  return (
    <header className="py-4 md:py-[1.125rem] lg:py-0 flex justify-between items-center">
      <Link href="/">
        <Image
          src={`/assets/images/logo-${theme}-theme.svg`}
          alt=""
          width={185}
          height={30}
          className="h-auto md:w-[245px]"
        />
        <span className="sr-only">CHARACTER COUNTER HOME</span>
      </Link>
      <DarkLightToggle />
    </header>
  );
}

export default Header;
