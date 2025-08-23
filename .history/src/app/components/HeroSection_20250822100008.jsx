import Link from "next/link";
import hero-bg from '../../../public/assets/bg-hero.png'

export default function Hero() {
    return (
        <section
            className="relative h-screen max-h-[775px] bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: "url()" }}
        >
            {/* Overlay for dark effect */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content */}
            <div className="relative z-10 text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Discover the Best Products
                </h1>
                <p className="text-lg md:text-xl mb-6">
                    Shop the latest and greatest items, just a click away.
                </p>
                <div className="flex justify-center gap-4">
                    <Link
                        href="/products"
                        className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold shadow-lg transition"
                    >
                        Explore Products
                    </Link>
                    <Link
                        href="/login"
                        className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold shadow-lg transition"
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </section>
    );
}
