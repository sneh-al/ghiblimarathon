import React from "react";
import { HoverEffect } from "./card-hover-effect";
import { film } from "@/types";
import Film from "./Film";

const Films = ({ items }: { items: film[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item, idx) => (
        <HoverEffect key={item.id} idx={idx} href={`/movies/${item.tmdb_id}`}>
          <Film film={item} />
        </HoverEffect>
      ))}
    </div>
  );
};

export default Films;
