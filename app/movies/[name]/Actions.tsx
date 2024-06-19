import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { statusList } from "@/lib/utils";

const Actions = ({ movie }: { movie: { id: number; title: string } }) => {
  return (
    <div className="z-10">
      <Dialog>
        <DialogTrigger>Set Status</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Select your watching status.</DialogTitle>
            <DialogDescription>
              <p className="text-xl md:text-2xl">Title</p>
              <form action="">
                <select name="" id="">
                  {statusList.map((status) => (
                    <option key={status.id} value={status.id}>
                      {status.title}
                    </option>
                  ))}
                </select>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Actions;
