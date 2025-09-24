"use client";
import { useSession } from "next-auth/react";
import Hero from "./components/HeroSection";
import LatestProducts from "./components/LatestProducts";
import About from "./components/About";

export default function Home() {
  const { data: session, status } = useSession();
  console.log("Session status:", status);

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-default-600"></div>
          <p className="mt-2 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Hero />
      {/* <Categories /> */}
      <LatestProducts />
      <About />
    </>
  );
}
