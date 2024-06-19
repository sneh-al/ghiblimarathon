import Films from "@/components/FIlms";
import { fetcher } from "@/lib/utils";

const getMovies = async () => {
  const movies = await fetch("https://ghibli.rest/films");
  return movies.json();
};

export default async function Movies() {
  const films = await getMovies();
  return (
    <section>
      <article className="container py-24">
        <Films items={films} />
      </article>
    </section>
  );
}
