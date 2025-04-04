import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative py-12 lg:py-24 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12 flex flex-col space-y-4">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
        Ready to Save Hours of Reading Time?
      </h2>
      <p className="mx-auto max-w-2xl text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
        Transform lengthy documents into clear, actionable insights with our
        AI-powered summarizer.
      </p>
      <Button
        size="lg"
        variant={"link"}
        className="mx-auto max-w-fit bg-linear-to-r 
       from-slate-900 to-rose-500 hover:from-rose-500 
       hover:to-slate-900 text-white 
        transition-all duration-300 no-underline hover:no-underline"
      >
        <Link href="/pricing" className="flex items-center justify-center">
          Get Started <ArrowRight className="ml-2 h-4 w-4 animate-pulse" />
        </Link>
      </Button>
    </section>
  );
};

export default CTASection;
