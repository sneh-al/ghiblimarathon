import Progress from "./Progress";
import prisma from "@/lib/db";
import Dropped from "./Dropped";
import Watching from "./Watching";
import Completed from "./Completed";
import OnHold from "./OnHold";

const page = async ({ params }: { params: { userId: string } }) => {
  const user = await prisma.user.findUnique({
    where: {
      kindeId: params.userId,
    },
  });

  const data = await prisma.status.findMany({
    where: {
      userId: user?.id,
    },
    include: {
      movie: true,
    },
  });

  return (
    <section className="container">
      {data.length === 0 && (
        <article className="flex bg-secondary p-5 text-secondary-foreground">
          <p className="m-auto text-xl font-light">Start Adding to List</p>
        </article>
      )}
      <div className="m-auto grid gap-5 p-5">
        <Progress data={data} user={user} />
        <div className="flex w-full flex-wrap gap-5">
          <Watching data={data} />

          <Completed data={data} />
          <OnHold data={data} />
          <Dropped data={data} />
        </div>
        {/* <Remaining data={data} /> */}
      </div>
    </section>
  );
};

export default page;
