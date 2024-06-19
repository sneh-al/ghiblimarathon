import Image from "next/image";
import Actions from "./Actions";
import { getCategoryById } from "@/lib/utils";

const Header = ({
  movie,
}: {
  movie: {
    title: string;
    id: number;
    genre_ids?: number[];
    release_date?: string;
    original_title: string;
    overview: string;
    backdrop_path: string;
    poster_path: string;
  };
}) => {
  return (
    <article className="relative">
      <Image
        src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
        fill
        alt="movie"
        priority={false}
        className="-z-0 w-full bg-red-400 bg-opacity-50 object-cover object-top opacity-20"
      />
      <div className="container p-5">
        <div className="item relative flex h-full w-full flex-col-reverse justify-center gap-5 md:flex-row">
          <div className="md:max-w-xs">
            <Image
              src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
              height={600}
              width={450}
              alt="movie"
              priority={false}
              className="h-full w-full"
            />
          </div>
          <div className="flex max-w-prose flex-col items-start justify-center gap-2">
            <p className="text-2xl font-semibold">{movie?.title}</p>
            <Actions movie={movie} />
          </div>
        </div>
      </div>
    </article>
  );
};

export default Header;
