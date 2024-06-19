import { fetcher } from "@/lib/utils";
import Header from "./Header";
import Info from "./Info";
const getMovie = async (query: string, year: string) => {
  const movie = await fetcher(`/search/movie?query=${query}&year=${year}`);
  return movie.results[0];
};

export default async function Movie({
  params,
  searchParams,
}: {
  params: { name: string };
  searchParams: {
    year: string;
  };
}) {
  const movie = await getMovie(params.name, searchParams.year);

  return (
    <section className="">
      <Header movie={movie} />
      <Info movieId={movie.id} />
    </section>
  );
}
