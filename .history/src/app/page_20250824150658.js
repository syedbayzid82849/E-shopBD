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
  if (session?.status === "loading") {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-gray-600"></div>
      </div>
    );
  }

  return (
    <div className=''>
      <Hero></Hero>
      {/* <Categories></Categories> */}
      <LatestProducts></LatestProducts>
      <About></About>
    </div>
  );
}

    </div>
  );
}
