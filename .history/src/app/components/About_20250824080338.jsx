"use client";
import { motion } from "framer-motion";

const About = () => {
    return (
        <section className="bg-base-100 py-16 px-6 md:px-12 lg:px-24">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="max-w-7xl mx-auto text-center"
            >
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                            About E-shopBD
                        </h2>

                        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                            Welcome to <span className="font-semibold text-secondary">E-shopBD</span> —
                            Bangladesh’s trusted online marketplace. Discover thousands of products across
                            electronics, fashion, home essentials, and more — all at fair prices with fast delivery.
                        </p>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 text-left">
                            <Feature title="Huge Selection" desc="Top brands & local sellers in one place." />
                            <Feature title="Secure Payments" desc="Card, MFS, and COD with encryption." />
                            <Feature title="Fast Delivery" desc="Nationwide shipping, real-time tracking." />
                            <Feature title="Easy Returns" desc="7-day hassle-free returns on eligible items." />
                        </div>

                        <div className="mt-10 flex items-center justify-center gap-3">
                            <Link
                                href="/products"
                                className="px-5 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
                            >
                                Browse Products
                            </Link>
                            <Link
                                href="/login"
                                className="px-5 py-3 rounded-lg border font-semibold hover:bg-gray-50 transition"
                            >
                                Login / Register
                            </Link>
                        </div>
                   
            </motion.div>
        </section>
    );
};

export default About;
