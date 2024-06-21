import { fetcher } from "@/lib/utils";
import Header from "./Header";
import Info from "./Info";
import CastnCrew from "./CastnCrew";
const getMovie = async (query: string) => {
  const movie = await fetcher(`/movie/${query}`);
  return movie;
};

export default async function Movie({
  params,
}: {
  params: { tmdb_id: string };
}) {
  const movie = await getMovie(params.tmdb_id);
  return (
    <section className="">
      <Header movie={movie} />
      <Info movieId={movie.id} />
      <CastnCrew movieId={movie.id} />
    </section>
  );
}
