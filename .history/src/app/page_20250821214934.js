import Image from "next/image";
import styles from "./page.module.css";
import Layout from "./layouts/page";

export default function Home() {
  return (
    <div className='border max-w-7xl mx-auto'>
      <Layout></Layout>
    </div>
  );
}
