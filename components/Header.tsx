import Link from "next/link";
import React from "react";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Button } from "@/components/ui/button";

const Header = async () => {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const isAuth = await isAuthenticated();
  const user = await getUser();
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
          {isAuth ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="border border-secondary-foreground shadow-2xl">
                  <AvatarImage
                    src={`https://ui-avatars.com/api/?name=${user?.given_name} ${user?.family_name}&background=0D8ABC&color=fff`}
                  />
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="">
                <DropdownMenuItem>Profile</DropdownMenuItem>

                <DropdownMenuItem className="">
                  <Button asChild className="w-full" variant="destructive">
                    <LogoutLink>Logout</LogoutLink>
                  </Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
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
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
