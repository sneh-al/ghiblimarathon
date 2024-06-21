import { convertDate, fetcher } from "@/lib/utils";
import { DateResponeTypes } from "@/types";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ListDailog from "@/components/ui/ListDailog";

const getDates = async (id: number): Promise<DateResponeTypes> => {
  const movie = await fetcher(`/movie/${id}/release_dates`);

  return movie.results;
};
const RealeaseDates = async ({ movieId }: { movieId: number }) => {
  const release_dates: DateResponeTypes = await getDates(movieId);
  return (
    <div>
      <ListDailog dailogTitle="Other Titles">
        {release_dates?.map(
          (dates: {
            iso_3166_1: string;
            release_dates: {
              certification: string;
              note: string;
              release_date: string;
              iso_639_1: string;
            }[];
          }) => (
            <li key={dates.iso_3166_1}>
              <Card>
                <CardHeader>
                  <CardTitle>{dates.iso_3166_1}</CardTitle>
                  <CardDescription>
                    <div>
                      {dates.release_dates.map((date) => (
                        <p key={date.release_date}>
                          {convertDate(date.release_date)}
                        </p>
                      ))}
                    </div>
                  </CardDescription>
                </CardHeader>
              </Card>
            </li>
          ),
        )}
      </ListDailog>
    </div>
  );
};

export default RealeaseDates;
