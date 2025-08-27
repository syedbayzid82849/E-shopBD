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
  return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-default-600">
Task Overview
Build a simple application using Next.js 15 (App Router). The app will have public and protected pages with basic authentication using NextAuth.js. Users can view a landing page, visit product details, and after logging in, access a protected product management page to add new products.



Core Features to Build

1. Landing Page (/)
Must include 4 sections: Navbar, Hero, Product Highlights, Footer
Navigation to login and products
No authentication required
2. Login with NextAuth (/login)
Implement social login (e.g.,Google) or credential login using NextAuth
Redirect to /products after successful login
3. Product List Page (/products)
Publicly accessible
Fetch and show a list of products from a mock backend or file
Each product will include: name, description, price, and a details button
4. Product Details Page (/products/[id])
Show full details of a single product
Publicly accessible
5. Protected Page: Add Product (/dashboard/add-product)
Only accessible when logged in
A form to add a new product and store the product data in database
Redirect unauthenticated users to login


Optional Enhancements
Show a loading spinner when submitting forms
Display toast message on successful product add
Add a theme toggle (light/dark)


Technologies to Use
Next.js 15 (App Router)
NextAuth.js for authentication
Use Route Handlers (/api) for backend, or simple Express.js server for fetching or creating data


Submission Requirements
GitHub Repository link
Live Site link (e.g., Vercel)
README.md including:
Short project description
Setup & installation instructions</div>
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
