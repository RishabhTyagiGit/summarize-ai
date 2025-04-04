import { Pizza } from "lucide-react";
import React from "react";

const DemoSection = () => {
  return (
    <section
      className="relative py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12
     flex flex-col items-center text-center space-y-4"
    >
      <div
        className="items-center justify-center p-2 rounded-2xl
       bg-gray-100/80 backdrop-blur-xs border border-gray-500/30 mb-4"
      >
        <Pizza className="w-6 h-6 text-rose-500" />
      </div>
      <h3 className="mb-16 font-bold text-3xl max-w-2xl mx-auto px-4 sm:px-6">
        Watch how Summarize{" "}
        <span className="bg-linear-to-r from-rose-500 to-rose-700 bg-clip-text text-transparent">
          this Next.js course PDF
        </span>{" "}
        into an easy-to-road summary!
      </h3>
      <div className="flex justify-center items-center px-2 sm:px-4 lg:px-6">
        {/** Summary Viewer */}
      </div>
    </section>
  );
};

export default DemoSection;
