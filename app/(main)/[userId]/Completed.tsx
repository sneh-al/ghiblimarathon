import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Actions from "../movies/[movie_id]/Actions";

const Completed = async ({ data }) => {
  const completedMovies = data?.filter(
    (movie) => movie?.status === "Completed",
  );
  console.log(completedMovies);
  return (
    <div className="flex flex-wrap gap-5">
      <h3>Complted Movies </h3>
      {completedMovies.map((item, idx) => (
        <Card
          className="flex w-full items-center justify-between"
          key={item.id}
        >
          <CardHeader>
            <CardTitle>{item?.movie?.title}</CardTitle>
          </CardHeader>
          <CardFooter>
            <Actions movie={item.movie} statusId={item?.id} />
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default Completed;
