import { cn } from "@/lib/utils";
import { ArrowRight, CheckIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

type PriceType = {
  name: string;
  price: number;
  description: string;
  items: string[];
  id: string;
  paymentLink: string;
  priceId: string;
};

const plans = [
  {
    id: "basic",
    name: "Basic",
    price: 9,
    description: "Perfect for occasional use",
    items: [
      "5 PDF summaries per month",
      "Standard processing speed",
      "Email support",
    ],
    paymentLink: "",
    priceId: "",
  },
  {
    id: "pro",
    name: "Pro",
    price: 19,
    description: "For professionals and teams",
    items: [
      "Unlimited PDF summaries",
      "Priority processing",
      "24/7 priority support",
      "Markdown Export",
    ],
    paymentLink: "",
    priceId: "",
  },
];

const PricingCard = ({
  name,
  price,
  description,
  items,
  id,
  paymentLink,
  priceId,
}: PriceType) => {
  return (
    <div
      className={cn(
        "w-full max-w-lg hover:scale-105 transition-all duration-300 flex flex-col h-full gap-4 lg:gap-8 z-10 p-8 border-1 border-gray-500/20 rounded-2xl",
        id === "pro" && "border-rose-500 gap-5 border-2"
      )}
    >
      <div className="flex flex-col">
        <p className="text-lg lg:text-xl font-bold capitalize">{name}</p>
        <p className="text-base-content/80 mt-2">{description}</p>
      </div>
      <div className="flex gap-2">
        <p className="text-5xl tracking-tight font-extrabold">${price}</p>
        <div className="flex flex-col text-xs justify-end mb-1">
          <p className="uppercase font-semibold">USD</p>
          <p>/month</p>
        </div>
      </div>
      <div className="space-y-2.5 leading-relaxed text-base flex-1">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center gap-2">
            <CheckIcon size={18} />
            <span>{item}</span>
          </li>
        ))}
      </div>
      <Link
        href={paymentLink}
        className={cn(
          "w-full rounded-full flex items-center justify-center gap-2 bg-linear-to-r",
          "from-rose-800 to-rose-500",
          "hover:from-rose-500 hover:to-rose-800 text-white border-2 py-2",
          id === "pro"
            ? "border-rose-900"
            : "border-rose-100 from-rose-400 to-rose-500"
        )}
      >
        Buy Now <ArrowRight size={18} />
      </Link>
    </div>
  );
};

const PricingSection = () => {
  return (
    <section className="relative py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12">
      <h2 className="uppercase font-bold text-center text-xl mb-20 text-rose-500">
        Pricing
      </h2>
      <div className="flex justify-center flex-col lg:flex-row items-center lg:items-stretch gap-8">
        {plans.map((plan) => (
          <PricingCard key={plan.id} {...plan} />
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
