/**
 * v0 by Vercel.
 * @see https://v0.dev/t/0dUlWUmPl8m
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import prisma from "@/lib/db";
import { calculatePercentage } from "@/lib/utils";
import { Progress as ProgressBar } from "@/components/ui/progress";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
export default async function Progress({ data, user }) {
  const completedMoveis = data?.filter(
    (movie) => movie?.status === "Completed",
  );
  console.log(completedMoveis.length);
  const movies = await prisma.movies.findMany();

  const progress = calculatePercentage(completedMoveis.length, movies.length);
  return (
    <Card className="bg-secondary text-secondary-foreground">
      <CardHeader></CardHeader>
      <CardContent>
        <div className="flex flex-col gap-6">
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
              <h1 className="text-2xl font-bold capitalize">{user?.name}</h1>
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold">Your Progress</h1>
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground">
                  Movie Completed
                </span>
                <span className="text-sm font-medium">{progress}</span>
              </div>
              <div className="mt-2 h-2.5 w-full rounded-full bg-muted">
                <ProgressBar
                  value={progress.toString()}
                  className={`w-[${progress}%]`}
                />
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
