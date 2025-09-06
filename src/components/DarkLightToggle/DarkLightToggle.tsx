import * as React from "react";
import Image from "next/image";
import Cookie from "js-cookie";
import { useTheme } from "../ThemeProvider";

function DarkLightToggle() {
  const { theme, setTheme } = useTheme();

  function handleClick() {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);

    Cookie.set("color-theme", nextTheme, {
      expires: 1000,
    });

    const root = document.documentElement;
    root.setAttribute("data-theme", nextTheme);
  }
  return (
    <button
      type="button"
      onClick={handleClick}
      className="bg-neutral-100 dark:bg-neutral-700 rounded-4 p-1.5 md:p-3 cursor-pointer"
    >
      <Image
        src={
          theme === "light"
            ? "/assets/images/icon-moon.svg"
            : "/assets/images/icon-sun.svg"
        }
        alt=""
        width={20}
        height={20}
        className="h-auto md:w-[22px]"
      />
      <span className="sr-only">
        {theme === "light" ? "Enable Dark Mode" : "Enable Light Mode"}
      </span>
    </button>
  );
}

export default DarkLightToggle;
