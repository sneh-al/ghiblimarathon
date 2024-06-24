import Progress from "./Progress";
import prisma from "@/lib/db";
import Remaining from "./Remaining";
import Watching from "./Watching";
import Completed from "./Completed";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OnHold from "./OnHold";

const page = async ({ params }: { params: { userId: string } }) => {
  console.log(params.userId);
  const user = await prisma.user.findUnique({
    where: {
      kindeId: params.userId,
    },
  });

  const data = await prisma.status.findMany({
    where: {
      userId: new Number(params.userId),
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
      <div className="m-auto p-5">
        <Progress data={data} user={user} />
        <Tabs defaultValue="Completed" className="wrap">
          <TabsList>
            <TabsTrigger value="Watching">Watching</TabsTrigger>
            <TabsTrigger value="Completed">Completed</TabsTrigger>
            <TabsTrigger value="onHold">On Hold</TabsTrigger>
            <TabsTrigger value="Dropped">Dropped</TabsTrigger>
            <TabsTrigger value="Reamining">Reamining</TabsTrigger>
          </TabsList>
          <TabsContent value="Watching">
            <Watching data={data} />
          </TabsContent>
          <TabsContent value="Completed">
            <Completed data={data} />
          </TabsContent>
          <TabsContent value="onHold">
            <OnHold data={data} />
          </TabsContent>
          <TabsContent value="Dropped">
            <OnHold data={data} />
          </TabsContent>
          <TabsContent value="Reamining">
            <Remaining data={data} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default page;
