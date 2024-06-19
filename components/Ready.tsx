import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"; // Renamed from Modal to Dialog
import Link from "next/link";
import Icon from "./Bg";
import Image from "next/image";
import { DialogClose } from "@radix-ui/react-dialog";

const Ready = () => {
  return (
    <section>
      <article className="bg round-full flex h-screen p-5">
        <Card className="round-full m-auto aspect-video w-full max-w-xl text-center">
          <CardHeader>
            <Image
              alt="spirit"
              src="/spirit.png"
              width="100"
              height="100"
              className="m-auto"
            />

            <h2 className="m py-5 text-3xl font-semibold">Are you ready ?</h2>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap items-center justify-center gap-5">
              <Button
                variant="outline"
                className="rounded-3xl bg-[#fff176] hover:bg-foreground hover:text-background"
                size="lg"
              >
                Yes
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="rounded-3xl" size="lg">
                    No
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                      <Image
                        src="/mononoke.png"
                        alt="mononoke"
                        width={500}
                        height={200}
                      />
                      <p className="sub-title py-5">
                        Imagine missing out on flying castles, talking cats, and
                        epic food scenes. Trust us, one movie and you&apos;ll be
                        hooked. Plus, it&apos;s a great excuse to eat popcorn!
                        🍿✨🎬
                      </p>
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter className="w-full">
                    <Button className="w-full rounded-3xl" size="lg" asChild>
                      <Link href="signup">Start Now</Link>
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </CardContent>
        </Card>
      </article>
    </section>
  );
};

export default Ready;
