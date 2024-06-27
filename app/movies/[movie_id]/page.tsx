import Header from "./Header";
import Info from "./Info";
import CastnCrew from "./CastnCrew";

import prisma from "@/lib/db";
const getMovie = async (query: string) => {
  const movie = await prisma.movies.findUnique({
    where: {
      id: query,
    },
  });
  return movie;
};

export default async function Movie({
  params,
}: {
  params: { movie_id: string };
}) {
  const movie = await getMovie(params.movie_id);
  console.log(movie);
  return (
    <section className="">
      <Header movie={movie} />
      <Info movieId={movie?.tmdb_id} />
      <CastnCrew movieId={movie?.tmdb_id} />
    </section>
  );
}
