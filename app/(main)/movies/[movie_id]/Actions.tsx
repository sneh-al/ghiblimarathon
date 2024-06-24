import { statusList } from "@/lib/utils";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { setStatus } from "@/app/actions";
import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Actions = async ({
  movie,
  statusId,
}: {
  movie: { id: string; title: string };
}) => {
  const movieId = movie?.id.toString();
  const ids = {
    movieId,
    statusId,
  };
  const updateUserWithId = setStatus.bind(null, ids);
  const { isAuthenticated } = getKindeServerSession();
  const isAuth = await isAuthenticated();
  if (!isAuth) {
    return null;
  }
  return (
    <div className="z-10 mt-5 md:mt-0">
      <Dialog>
        <Button asChild className="m-auto w-full">
          <DialogTrigger>Set Status</DialogTrigger>
        </Button>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>Select your watching status.</DialogDescription>
            <DialogTitle>
              <p className="text-xl md:text-2xl">{movie.title}</p>
            </DialogTitle>
          </DialogHeader>
          <form action={updateUserWithId} method="POST" className="grid gap-5">
            <select
              className="font-semibol block w-full rounded-md border border-input px-3 py-2 text-background shadow-sm focus:outline-none focus:ring-1 focus:ring-ring"
              name="status"
            >
              {statusList.map((status) => (
                <option key={status.id} value={status.title}>
                  {status.title}
                </option>
              ))}
            </select>
            <DialogClose asChild>
              <Button type="submit">Save</Button>
            </DialogClose>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Actions;
