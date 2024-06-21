import Films from "@/components/FIlms";
import prisma from "@/lib/db";
import { fetcher } from "@/lib/utils";

export default async function Movies() {
  const movies = await prisma.movies.findMany();
  return (
    <section>
      <article className="container py-24">
        <Films items={movies} />
      </article>
    </section>
  );
}
