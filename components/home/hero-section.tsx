import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="flex flex-col mx-auto items-center justify-center py-16 sm:py-20 lg:pb-28 transition-all animate-in lg-px-12 max-w-7xl">
      <Badge
        className="bg-white font-medium px-6 py-2 rounded-full border border-rose-500 hover:bg-linear-to-r
       hover:from-rose-100 hover:via-rose-200 hover:to-rose-300 hover:animate-gradiant-x"
      >
        <Sparkles className="mr-2 animate-pulse text-rose-600" />
        <span className="text-rose-600 text-base">Powered by AI</span>
      </Badge>
      <h1 className="font-bold py-6 text-center">
        Transform PDFs into{" "}
        <span className="relative inline-block">
          <span className="z-10 px-2">concise</span>
          <span className="absolute inset-0 bg-rose-200/50 -rotate-2 rounded-lg transform -skew-y-1"></span>
        </span>{" "}
        summaries
      </h1>
      <h2 className="text-lg sm:text-xl lg:text-2xl text-cnter px-4 lg:px-0 lg:max-w-4xl text-gray-600">
        Get a beautiful summary reel of the document in seconds.
      </h2>
      <Button
        variant="link"
        className="text-white mt-6 text-base sm:text-lg
         lg:text-xl rounded-full px-8 sm:px-10 lg:px-12 py-6 sm:py-7 lg:py-8
         bg-linear-to-r from-slate-900 to-rose-500 hover:from-rose-500 hover:to-slate-900 hover:no-underline
         font-bold shadoe-lg transform duration-300"
      >
        <Link href="/#pricing" className="flex gap-2 items-center">
          <span>Try Sommarize</span>
          <ArrowRight className="animate-pulse" />
        </Link>
      </Button>
    </section>
  );
};

export default HeroSection;
