import React from "react";
import { fetcher } from "@/lib/utils";

const getVidoes = async (id) => {
  const videos = await fetcher(`/movie/${id}/videos`);
  return videos.results;
};
const GetTrailer = async ({movieId}) => {
    const videos = await getVidoes(1);
  return <div>GetTrailer</div>;
};

export default GetTrailer;
