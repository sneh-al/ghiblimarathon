import { RoughNotation } from "react-rough-notation";
import { Button } from "../ui/button";

/**
 * Renders the Title component with the text "Enter the World of Studio Ghibli" and a sub-title.
 *
 * @return {JSX.Element} The JSX for the Title component.
 */

const Title = () => {
  return (
    <div className="flex flex-col items-center gap-3 md:mb-10">
      <h1 className="title relative">
        Enter the World of{" "}
        <RoughNotation type="highlight" show={true} color="#fff176">
          <span className="text-nowrap dark:text-background">
            Studio Ghibli
          </span>
        </RoughNotation>
      </h1>
      <p className="sub-title">
        Where every frame tells a story, and every story touches the heart
      </p>
      <Button className="relative inline-flex h-12 w-32 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-background backdrop-blur-3xl dark:bg-slate-50">
          Start Now
        </span>
      </Button>
    </div>
  );
};

export default Title;
