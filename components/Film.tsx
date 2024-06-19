import { film } from "@/types";
import React from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import { convertMinutesToTime } from "@/lib/utils";

const Film = ({ film }: { film: film }) => {
  return (
    <Card className="relative m-0 flex h-full flex-col overflow-hidden rounded-3xl bg-accent">
      <CardHeader className="h-full p-0">
        <Image
          src={film.image}
          alt={film.title}
          className="h-full w-full object-cover"
          width={400}
          height={600}
        />
      </CardHeader>
      <CardFooter className="mt-auto flex flex-col gap-3">
        <CardTitle className="px-5 pt-5 text-xl">{film.title}</CardTitle>
        <div className="flex flex-wrap items-center gap-1 px-5">
          <CardTitle>{film.original_title}</CardTitle>
          <CardDescription>{film.original_title_romanised}</CardDescription>
        </div>
        <div className="flex items-center justify-between gap-5">
          <span className="flex flex-wrap items-center justify-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
              />
            </svg>

            {film.release_date}
          </span>
          <span className="flex flex-wrap items-center justify-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            {convertMinutesToTime(film.running_time)}
          </span>
          <span className="flex flex-wrap items-center justify-center gap-1">
            <Image src="/rt.png" alt="rotone tomato" width={16} height={16} />
            {film.rt_score}
          </span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Film;
