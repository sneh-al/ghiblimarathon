import { LinkPreview } from "./ui/link-preview";

import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import Link from "next/link";
import { Button } from "./ui/button";

const Footer: React.FC = () => {
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              className="mr-2 size-4"
            >
              <g>
                <g
                  fill="none"
                  fillRule="evenodd"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <g fill="#000" transform="translate(-140 -7559)">
                    <g transform="translate(56 160)">
                      <path d="M94 7399c5.523 0 10 4.59 10 10.253 0 4.529-2.862 8.371-6.833 9.728-.507.101-.687-.219-.687-.492 0-.338.012-1.442.012-2.814 0-.956-.32-1.58-.679-1.898 2.227-.254 4.567-1.121 4.567-5.059 0-1.12-.388-2.034-1.03-2.752.104-.259.447-1.302-.098-2.714 0 0-.838-.275-2.747 1.051a9.396 9.396 0 00-2.505-.345 9.375 9.375 0 00-2.503.345c-1.911-1.326-2.751-1.051-2.751-1.051-.543 1.412-.2 2.455-.097 2.714-.639.718-1.03 1.632-1.03 2.752 0 3.928 2.335 4.808 4.556 5.067-.286.256-.545.708-.635 1.371-.57.262-2.018.715-2.91-.852 0 0-.529-.985-1.533-1.057 0 0-.975-.013-.068.623 0 0 .655.315 1.11 1.5 0 0 .587 1.83 3.369 1.21.005.857.014 1.665.014 1.909 0 .271-.184.588-.683.493-3.974-1.355-6.839-5.199-6.839-9.729 0-5.663 4.478-10.253 10-10.253"></path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
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
        </ul>
      </article>
    </footer>
  );
};
export default Footer;
