import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import {
  HomeIcon,
  ListBulletIcon,
  LockClosedIcon,
} from "@radix-ui/react-icons";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const FloatingNavBar = async () => {
  const { getUser, isAuthenticated } = await getKindeServerSession();
  const user = await getUser();
  const isAuth = await isAuthenticated();

  const authLinks = [
    {
      name: "Home",
      link: "/",
      icon: <HomeIcon />,
    },
    { name: "Movies", link: "/movies", icon: <ListBulletIcon /> },
    {
      link: "/profile",
      name: user?.given_name,
      icon: (
        <Avatar>
          <AvatarImage
            src={`https://ui-avatars.com/api/?name=${user?.given_name} ${user?.family_name}`}
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      ),
    },
  ];
  const unAuthLinks = [
    {
      name: "Home",
      link: "#top",
      icon: <HomeIcon />,
    },
    { name: "Movies", link: "/movies", icon: <ListBulletIcon /> },
    { name: "Signup", link: "/signup", icon: <LockClosedIcon /> },
    { name: "signin", link: "/signin", icon: <LockClosedIcon /> },
  ];
  return <FloatingNav navItems={isAuth ? authLinks : unAuthLinks} />;
};

export default FloatingNavBar;
