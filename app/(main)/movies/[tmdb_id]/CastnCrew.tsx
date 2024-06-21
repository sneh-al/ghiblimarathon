import { fetcher } from "@/lib/utils";
import Image from "next/image";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { MovieCredits } from "@/types";

const getMovieCredits = async (id: number): Promise<MovieCredits> => {
  const credits: MovieCredits = await fetcher(`/movie/${id}/credits`);

  return credits;
};
const CastnCrew = async ({ movieId }: { movieId: number }) => {
  const credits = await getMovieCredits(movieId);
  return (
    <article className="container flex flex-col gap-5 overflow-hidden">
      <div>
        <span className="heading">Cast</span>

        <ScrollArea className="max-w-7xl whitespace-nowrap rounded p-5">
          <div className="flex gap-5">
            {credits.cast.map(
              (staff: { name: string; profile_path: string }) => (
                <AvatarComponent
                  key={staff.name}
                  staff={staff}
                  thing={staff.character}
                />
              ),
            )}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
      <div className="">
        {" "}
        <span className="heading">Crew</span>
        <ScrollArea className="max-w-7xl whitespace-nowrap">
          <div className="flex gap-5">
            {credits.crew.map(
              (staff: { name: string; profile_path: string }) => (
                <AvatarComponent
                  key={staff.name}
                  staff={staff}
                  thing={staff.department}
                />
              ),
            )}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </article>
  );
};

export default CastnCrew;

const AvatarComponent = ({
  staff,
  thing,
}: {
  staff: {
    name: string;
    profile_path: string;
  };
  thing: string;
}) => {
  return (
    <div className="overflow-hidden rounded">
      <div className="relative h-44 w-44">
        <Image
          src={
            staff.profile_path == undefined
              ? `https://ui-avatars.com/api/?name=${staff.name}`
              : `${process.env.TMDB_IMAGE_LINK}${staff.profile_path}`
          }
          alt={staff.name}
          fill
          className="rounded object-cover"
        />
      </div>
      <div className="">
        <p>{staff.name}</p>
        <p className="text-sm font-light">{thing}</p>
      </div>
    </div>
  );
};
