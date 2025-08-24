"use client";import { motion } from "framer-motion";

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
                    About Us
                </h2>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    Welcome to <span className="font-semibold text-secondary">PetCare</span>,
                    your trusted platform for managing and caring for your beloved pets.
                    From booking vet appointments to tracking health updates, we make pet
                    management simple, fast, and stress-free.
                </p>
                <p className="mt-4 text-base md:text-lg text-gray-600 leading-relaxed">
                    Our mission is to create a reliable space for pet owners where they
                    can connect, manage bookings, and ensure the best care for their
                    furry friends. With a friendly interface and secure system, we
                    believe in making every pet’s life happier.
                </p>
            </motion.div>
        </section>
    );
};

export default About;
