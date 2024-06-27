import ProgressTile from "@/components/ui/ProgressTile";
import { statusComponetsProps } from "@/types";
import React from "react";

const OnHold = ({ data }: statusComponetsProps) => {
  const moviesOnHold = data?.filter((movie) => movie?.status === "OnHold");
  return (
    <div className="">
      <ProgressTile
        title="  Movies on hold"
        bg_color="onhold"
        length={moviesOnHold?.length}
      />
    </div>
  );
};

export default OnHold;
