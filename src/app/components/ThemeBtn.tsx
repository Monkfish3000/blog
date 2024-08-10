"use client";

import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

const ThemeBtn = ({ mobile }) => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? (
        <SunIcon
          className={`h-8 w-8 text-white  ${mobile ? "" : "hidden sm:flex"}`}
        />
      ) : (
        <MoonIcon
          className={`h-8 w-8 text-slate-800  ${
            mobile ? "" : "hidden sm:flex"
          }`}
        />
      )}
    </button>
  );
};

export default ThemeBtn;
