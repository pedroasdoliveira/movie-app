import React from "react";
import { BsSun, BsFillMoonFill } from "react-icons/bs";
import { toggleTheme } from "../../features/theme/themeSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/storeHook";

const Header = () => {
  const { darkTheme } = useAppSelector((state) => state);

  const dispatch = useAppDispatch();

  const onToggle = () => dispatch(toggleTheme());

  return (
    <header className="mb-20">
      <nav className="border-b border-gray-200 border-opacity-25 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="#!" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap">
              Movies
            </span>
          </a>

          <div className="flex items-center lg:order-2">
            {darkTheme ? (
              <BsSun
                className="hover:opacity-50 cursor-pointer"
                onClick={() => onToggle()}
              />
            ) : (
              <BsFillMoonFill
                className="hover:opacity-50 cursor-pointer"
                onClick={() => onToggle()}
              />
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
