import { LinkPreview } from "./ui/link-preview";

import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import Link from "next/link";
import { Button } from "./ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
const Footer: React.FC = async () => {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const user = await getUser();
  const isAuth = await isAuthenticated();
  console.log(user);
  return (
    <footer className="container flex flex-col items-center justify-center gap-5 py-24 md:py-44">
      <article className="flex flex-col items-center gap-5">
        <h1 className="title">🏃‍♂️ </h1>
        <h1 className="title"> Ghibli Marathon</h1>
        <p className="text-3xl">
          Devlope and Desing with ❤️ by{" "}
          <LinkPreview
            url="https://sneh-al.github.io/"
            className="font-bold underline"
          >
            Snehal
          </LinkPreview>
        </p>

        <Button className="w-full" variant="secondary" asChild>
          <Link
            href="http://sneh-al.github.io"
            className=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubLogoIcon className="mr-2 size-6" />
            View Code{" "}
          </Link>
        </Button>
      </article>
      <hr />
      <article>
        <ul className="flex flex-wrap items-center gap-5 p-5">
          <li>
            <Link href="movies" className="link">
              Movies
            </Link>
          </li>
          {isAuth ? (
            <Avatar>
              <AvatarImage
                src={`https://ui-avatars.com/api/?name=${user?.given_name} ${user?.family_name}`}
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          ) : (
            <>
              <li>
                <LoginLink className="link">Sign in</LoginLink>
              </li>
              <li className="">
                <Button asChild>
                  <RegisterLink className="link">
                    Sign Up{" "}
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
      </article>
    </footer>
  );
};
export default Footer;
