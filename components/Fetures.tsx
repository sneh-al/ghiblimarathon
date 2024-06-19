import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Feature = {
  icon: string;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: "🎬",
    title: "Track Your Progress",
    description:
      "Easily set the status of each movie—complete, watching, or on hold. Stay organized and see where you left off in your marathon.",
  },
  {
    icon: "💬",
    title: "Share Your Progress",
    description:
      "Share your profile with others to show how much you've completed. Let friends and fellow fans see your journey through the Studio Ghibli films.",
  },
  {
    icon: "📝",
    title: "Share Thoughts",
    description:
      "Post and share your thoughts on each movie. Leave comments and engage with others under each film.",
  },
  {
    icon: "🎉",
    title: "Challenge Others",
    description:
      "Invite friends and challenge them to join the marathon. Compare progress and enjoy the magical journey together.",
  },
];

const Features = (): JSX.Element => {
  return (
    <section className="py-24 md:py-44">
      <article className="container">
        <header className="mx-auto flex max-w-5xl flex-col gap-10 text-center">
          <h3 className="title">All you need is a timeline.</h3>
        </header>
        <main className="mx-auto mt-10 max-w-5xl">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {features.map((feature) => (
              <Card key={feature.title}>
                <CardHeader>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </article>
    </section>
  );
};
export default Features;
