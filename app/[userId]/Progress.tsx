import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import prisma from "@/lib/db";
import { calculatePercentage } from "@/lib/utils";
import { Progress as ProgressBar } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
export default async function Progress({
  data,
  user,
}: {
  data: {
    status: string;
  }[];
  user: { name: string; imageUrl?: string };
}) {
  const completedMoveis = data?.filter(
    (movie) => movie?.status === "Completed",
  );
  console.log(completedMoveis.length);
  //for dynamic data of movies
  // const movies = await prisma.movies.findMany();

  const progress = calculatePercentage(completedMoveis.length, 23);
  return (
    <div className="">
      <div>
        <div className="flex flex-col gap-6">
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage
                    src={
                      user?.imageUrl ||
                      `https://ui-avatars.com/api/?name=${user?.name}&background=0D8ABC&color=fff`
                    }
                  />
                  <AvatarFallback>JP</AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="text-2xl font-bold capitalize">
                    {user?.name}
                  </h1>
                </div>
              </div>
              <span className="text-xl font-bold text-primary">
                {progress}%
              </span>
            </div>

            <div className="mt-4">
              <div className="mt-2 h-2.5 w-full rounded-full">
                <ProgressBar value={progress} className={`w-[${progress}%]`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
