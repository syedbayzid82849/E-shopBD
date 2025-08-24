"use client";


import { useSession } from "next-auth/react";
import LatestProducts from "./components/LatestProducts";
import About from "./components/About";
import Hero from "./components/HeroSection";

export default function Home() {
  const { status, data: session } = useSession();

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-gray-600"></div>
      </div>
    );
  }

  return (
    <>
      <Hero/>
      {/* <Categories /> */}
      <LatestProducts />
      <About />
    </>
  );
}
