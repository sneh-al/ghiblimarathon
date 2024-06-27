import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ProgressTile = ({
  length,
  title,
  bg_color,
}: {
  length: number;
  title: string;
  bg_color: string;
}) => {
  return (
    <Card className={`bg-${bg_color} text-${bg_color}-foreground `}>
      <CardHeader>
        <CardTitle className="text-3xl font-extrabold">{length}</CardTitle>
        <CardDescription className="text-xl font-extrabold text-primary">
          {title}
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default ProgressTile;
