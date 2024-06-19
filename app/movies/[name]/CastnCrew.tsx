import { fetcher } from "@/lib/utils";
import React from "react";

const getMovieCredits = async (id: number) => {
  const credits = await fetcher(`/movie/${id}/credits`);

  return credits;
};
const CastnCrew = async ({ movieId }: { movieId: number }) => {
  const credits = await getMovieCredits(movieId);
  console.log(credits);
  return <div>CastnCrew</div>;
};

export default CastnCrew;
