import Image from "next/image";
import styles from "./page.module.css";
import Layout from "./layouts/page";
import Navbar from "./components/Navbar";
import Hero from "./components/HeroSection";
import Categories from "./categories/page";
import LatestProducts from "./components/LatestProducts";
import About from "./components/About";

export default function Home() {
  const session 
  return (

    <div className=''>
      <Hero></Hero>
      {/* <Categories></Categories> */}
      <LatestProducts></LatestProducts>
      <About></About>
    </div>
  );
}
