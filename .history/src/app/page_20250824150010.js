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
  return (
{
  session?.status
}
  );
}
