import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { statusList } from "@/lib/utils";
import Actions from "../movies/[movie_id]/Actions";

const Watching = async ({ data }) => {
  const watchingMovies = data?.filter((movie) => movie?.status === "Watching");
  console.log(watchingMovies);
  return (
    <div className="flex flex-wrap gap-5">
      <h3>Watching </h3>
      {watchingMovies.map((item, idx) => (
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

export default Watching;
