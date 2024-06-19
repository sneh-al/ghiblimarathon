import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

const Header = () => {
  return (
    <header className="bottom-0 z-50 w-full">
      <nav className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-5 p-5 md:flex-row md:justify-between">
        <div className="text-2xl md:text-4xl">
          <a
            href="/"
            className="flex flex-col items-center text-nowrap font-semibold"
          >
            🏃‍♂️ Ghibli Marathon
          </a>
        </div>
        <ul className="flex flex-wrap items-center justify-center gap-5">
          <li className="">
            <Link href="/movies" className="link">
              Movies
            </Link>
          </li>
          <li>
            <LoginLink className="link">Sign in</LoginLink>
          </li>

          <li className="">
            <Button asChild>
              <RegisterLink className="">
                Sign Up
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="ml-1 size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </RegisterLink>
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
