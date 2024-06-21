import { statusList } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const Actions = ({ movie }: { movie: { id: number; title: string } }) => {
  return (
    <div className="z-10 mt-5 md:mt-0">
      <Dialog>
        <Button asChild className="w-full">
          <DialogTrigger>Set Status</DialogTrigger>
        </Button>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>Select your watching status.</DialogDescription>
            <DialogTitle>
              <p className="text-xl md:text-2xl">{movie.title}</p>
            </DialogTitle>
          </DialogHeader>
          <form action="" className="grid gap-5">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Set Status" />
              </SelectTrigger>
              <SelectContent>
                {statusList.map((status) => (
                  <SelectItem key={status.id} value={status.title}>
                    {status.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button>Save</Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Actions;
