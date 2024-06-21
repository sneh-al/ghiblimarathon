import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

type Props = {
  title?: string;
  dailogTitle: string;
  children: React.ReactNode;
};
const ListDailog = ({ title, dailogTitle, children }: Props) => {
  return (
    <div>
      <Dialog>
        <DialogTrigger className="flex gap-2">
          {title}
          <svg
            fill="cureentColor"
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            id="list-square"
            data-name="Line Color"
            xmlns="http://www.w3.org/2000/svg"
            className="icon line-color size-4"
          >
            <line
              id="secondary-upstroke"
              x1={7.45}
              y1={8}
              x2={7.55}
              y2={8}
              style={{
                fill: "none",
                stroke: "rgb(44, 169, 188)",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
              }}
            />
            <line
              id="secondary-upstroke-2"
              data-name="secondary-upstroke"
              x1={7.45}
              y1={12}
              x2={7.55}
              y2={12}
              style={{
                fill: "none",
                stroke: "rgb(44, 169, 188)",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
              }}
            />
            <line
              id="secondary-upstroke-3"
              data-name="secondary-upstroke"
              x1={7.45}
              y1={16}
              x2={7.55}
              y2={16}
              style={{
                fill: "none",
                stroke: "rgb(44, 169, 188)",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
              }}
            />
            <path
              id="secondary"
              d="M12,8h5m-5,4h5m-5,4h5"
              style={{
                fill: "none",
                stroke: "rgb(44, 169, 188)",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
              }}
            />
            <rect
              id="primary"
              x={3}
              y={3}
              width={18}
              height={18}
              rx={1}
              style={{
                fill: "none",
                stroke: "rgb(0, 0, 0)",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
              }}
            />
          </svg>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{dailogTitle}</DialogTitle>
            <DialogDescription className="">
              <ScrollArea className="h-96">
                <ul className="flex flex-col gap-5 text-start">{children}</ul>
                <ScrollBar />
              </ScrollArea>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ListDailog;
