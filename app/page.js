"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";

import Hero from "@/Components/Hero";
import Top_place from "@/Components/Top_place";
import Trending_place from "@/Components/Trending_place";
import State from "@/Components/State";
import CommingSoon from "@/Components/CommingSoon";
import Work from "@/Components/HowItWork";

function Page() {
  return (
    <SessionProvider>
      <div className="space-y-6 p-4 md:p-6 lg:p-8">
        <Hero />
        <Top_place />
        <Trending_place />
        <State />
        <Work />
        <CommingSoon />
      </div>
    </SessionProvider>
  );
}

export default Page;
