import { CardHeader, Card, CardTitle, CardFooter } from "@/components/ui/card";
import prisma from "@/lib/db";
import Actions from "../movies/[movie_id]/Actions";
import { statusComponetsProps } from "@/types";

const Remaining = async ({ data }: statusComponetsProps) => {
  const movies = await prisma.movies.findMany();
  const remainMovies = movies.filter(
    (movie) => !data.some((d) => d.movieId === movie.id),
  );
  return (
    <div className="flex flex-wrap gap-5">
      <h3>Remaining Movies</h3>
      {remainMovies.map((item, idx) => (
        <Card
          className="flex w-full items-center justify-between"
          key={item.id}
        >
          <CardHeader>
            <CardTitle>{item?.title}</CardTitle>
          </CardHeader>
          <CardFooter>
            <Actions movie={item} />
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default Remaining;
