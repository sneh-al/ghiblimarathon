import { Button } from "@/components/ui/button";
import { fetcher } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const getMovieInfo = async (id: number) => {
  const movie = await fetcher(`/movie/${id}`);

  return movie;
};

const Info = async ({ movieId }: { movieId: number }) => {
  const movie = await getMovieInfo(movieId);

  return (
    <>
      <p className="bg-secondary p-5 text-center text-xl font-light italic text-secondary-foreground md:text-2xl">
        {movie.tagline}
      </p>
      <article className="container">
        <div className="flex flex-col items-start justify-center gap-5 py-24 md:flex-row md:gap-10">
          <div className="flex flex-col gap-3">
            <div>
              <span className="heading">Genres</span>
              <p>{movie.original_title}</p>
            </div>
            <div className="">
              <span className="heading">Genres</span>

              <p className="flex flex-wrap gap-3">
                :{" "}
                {movie.genres.map((genre: { id: number; name: string }) => (
                  <span key={genre.id}>{genre.name}</span>
                ))}
              </p>
            </div>
            <div>
              <span className="heading">Orignal Release Date</span>

              <p>{movie.release_date}</p>
            </div>

            <Button asChild>
              <Link
                href={movie.homepage}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Homepage
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="ml-2 size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </Link>
            </Button>
          </div>
          <div className="max-w-prose">
            <div>
              <span className="heading">Overview</span>
              <p className="text-xl">{movie.overview}</p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Info;
