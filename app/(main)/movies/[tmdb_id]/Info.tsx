import { Button } from "@/components/ui/button";
import { fetcher } from "@/lib/utils";
import Link from "next/link";
import ReleaseDates from "./ReleaseDates";
import ExternalLinks from "./ExternalLinks";
import { Badge } from "@/components/ui/badge";
import { MovieResponse } from "@/types";
import Titles from "./Titles";
import { ExternalLinkIcon } from "@radix-ui/react-icons";

const getMovieInfo = async (id: number): Promise<MovieResponse> => {
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
        <div className="flex flex-col gap-5 py-24 md:flex-row md:gap-10">
          <Left movieId={movieId} movie={movie} />
          <div className="max-w-prose">
            <div>
              <span className="heading">Overview</span>
              <p className="text-xl leading-relaxed">{movie.overview}</p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

const Left = ({
  movieId,
  movie,
}: {
  movieId: number;
  movie: MovieResponse;
}) => (
  <div className="flex w-full max-w-xs flex-col gap-3">
    <div>
      <span className="heading">Original Title</span>
      <p>{movie.original_title}</p>
      <Titles id={movieId} />
    </div>
    <div className="">
      <span className="heading">Genres</span>

      <div className="flex flex-wrap gap-2">
        {movie.genres.map((genre: { id: number; name: string }) => (
          <Badge className="" key={genre.id} variant="outline">
            {genre.name}
          </Badge>
        ))}
      </div>
    </div>
    <div>
      <span className="heading">Orignal Release Date</span>

      <div className="flex gap-2">
        {movie.release_date} <ReleaseDates movieId={movieId} />
      </div>
    </div>
    <div className="flex flex-wrap gap-2">
      <ExternalLinks movieId={movieId} />
      <Button asChild>
        <Link href={movie.homepage} target="_blank" rel="noopener noreferrer">
          Visit Homepage
          <ExternalLinkIcon className="ml-2 size-4" />
        </Link>
      </Button>
    </div>
  </div>
);
export default Info;
