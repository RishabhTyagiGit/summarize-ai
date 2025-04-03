"use client";
import { FileText } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../ui/button";
import NavLinks from "./nav-links";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <nav className="container flex items-center justify-between py-4 mx-auto px-2 lg:px-8">
      <NavLinks
        href="/"
        className="flex flex-row items-center gap-1 lg:gap-2 shrink-0"
      >
        <FileText className="w-5 h-5 lg:w-8 lg:h-8 text-gray-900 hover:rotate-12 transition-all duration-200 ease-in-out" />
        <span className="font-extrabold lg:text-xl text-gray-900">
          Summarize
        </span>
      </NavLinks>
      <div className="flex gap-4 lg:gap-12 items-center">
        <NavLinks href="/#pricing">Pricing</NavLinks>
        {isLoggedIn && <NavLinks href="/dashboard">Your Summaries</NavLinks>}
      </div>
      {isLoggedIn ? (
        <div className="flex gap-2 items-center">
          <NavLinks href="/upload">Upload a PDF</NavLinks>
          <div>Pro</div>
          <Button>User</Button>
        </div>
      ) : (
        <NavLinks href="/sign-in">Sign In</NavLinks>
      )}
    </nav>
  );
}

export default Header;
