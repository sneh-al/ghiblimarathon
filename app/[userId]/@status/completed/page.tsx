import ProgressTile from "@/components/ui/ProgressTile";
import { statusComponetsProps } from "@/types";

const Completed = async ({ data }: statusComponetsProps) => {
  const completedMovies = data?.filter(
    (movie) => movie?.status === "Completed",
  );

  return (
    <div className="">
      <ProgressTile
        title=" Completed Movie"
        bg_color="success"
        length={completedMovies?.length}
      />
      {/*        
        <DialogContent>
          <ScrollArea className="h-96 w-full">
            {completedMovies.map((item, idx) => (
              <Card
                className="flex w-full items-center justify-center"
                key={item.id}
              >
                <CardHeader>
                  <CardTitle>{item?.movie?.title}</CardTitle>
                </CardHeader>
                <CardFooter className="aspect-video bg-red-500">
                  <Actions movie={item.movie} statusId={item?.id} />
                </CardFooter>
              </Card>
            ))}
            <ScrollBar />
          </ScrollArea>
        </DialogContent> */}
    </div>
  );
};

export default Completed;
