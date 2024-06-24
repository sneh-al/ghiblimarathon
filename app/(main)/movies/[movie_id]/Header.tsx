import Image from "next/image";
import Actions from "./Actions";

type HeaderProps = {
  movie: {
    id: string;
    title: string;
    movie_banner: string;
    image: string;
  };
};
const Header = ({ movie }: HeaderProps) => {
  return (
    <article className="relative">
      <Image
        src={movie?.movie_banner}
        fill
        alt="movie"
        priority={false}
        className="-z-0 w-full bg-red-400 bg-opacity-50 object-cover object-top opacity-20"
      />
      <div className="container p-5">
        <div className="item relative flex h-full w-full flex-col-reverse gap-5 md:flex-row">
          <div className="md:max-w-md">
            <Image
              src={movie?.image}
              height={600}
              width={450}
              alt="movie"
              priority={false}
              className="h-full w-full"
            />
            <div className="md:hidden">
              <Actions movie={movie} />
            </div>
          </div>
          <div className="flex max-w-prose flex-col items-start justify-center gap-2">
            <p className="text-2xl font-semibold">{movie?.title}</p>
            <div className="hidden md:block">
              <Actions movie={movie} />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Header;
