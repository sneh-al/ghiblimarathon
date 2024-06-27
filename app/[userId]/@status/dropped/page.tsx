import ProgressTile from "@/components/ui/ProgressTile";
import { statusComponetsProps } from "@/types";
import React from "react";

const Dropped = ({ data }: statusComponetsProps) => {
  const droppedMovies = data?.filter((movie) => movie?.status === "Dropped");
  return (
    <div className="flex flex-wrap">
      <ProgressTile
        title=" Dropped Movie"
        bg_color="dropped"
        length={droppedMovies?.length}
      />
    </div>
  );
};

export default Dropped;
