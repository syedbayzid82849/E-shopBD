"use client"; 
import Image from "next/image";
import styles from "./page.module.css";
import Layout from "./layouts/page";
import Navbar from "./components/Navbar";
import Hero from "./components/HeroSection";
import Categories from "./categories/page";
import LatestProducts from "./components/LatestProducts";
import About from "./components/About";
import { useSession } from "next-auth/react";

export default function Home() {
  const session = useSession();
  console.log(session?.status);
if(session?.status === "loading"){
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
<div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-default-600"></div>        </div>
        <p className="mt-2 text-gray-600">Loading...</p>
      </div>
    </div>
  )
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
