import { fetcher } from "@/lib/utils";
import { MovieTitles } from "@/types";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
  CardHeader,
} from "@/components/ui/card";
import ListDailog from "@/components/ui/ListDailog";
const getTitles = async (id: number): Promise<MovieTitles> => {
  const movie = await fetcher(`/movie/${id}/alternative_titles`);

  return movie;
};
const Titles = async ({ id }: { id: number }) => {
  const titles = await getTitles(id);
  const title = titles?.titles?.find((title) => title.iso_3166_1 === "JP");

  return (
    <div>
      <ListDailog title={title?.title} dailogTitle="Other Titles">
        {titles?.titles?.map((title) => (
          <li key={title.title}>
            <Card>
              <CardHeader>
                <CardTitle>{title.title}</CardTitle>
                <CardDescription>{title.iso_3166_1}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{title.type}</p>
              </CardContent>
            </Card>
          </li>
        ))}
      </ListDailog>
    </div>
  );
};

export default Titles;
