export default function Navbar() {
    return (
        <nav className="w-full bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">

                    {/* Left Section */}
                    <div className="flex items-center">
                        {/* Mobile Menu Button */}
                        <div className="flex lg:hidden">
                            <button
                                type="button"
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-200 focus:outline-none"
                            >
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>

                        {/* Logo */}
                        <a href="/" className=" text-2xl font-bold text-gray-800">
                            E-shop<span className="text-blue-600">B</span><span className="text-red-800">D</span>
                        </a>
                    </div>

                    {/* Center Menu (hidden on mobile) */}
                    <div className="hidden lg:flex space-x-6 items-center">
                        <a href="#" className="text-gray-700 hover:text-blue-600">Item 1</a>

                        {/* Dropdown */}
                        <div className="relative group">
                            <button className="text-gray-700 hover:text-blue-600">Parent</button>
                            <div className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-lg rounded-md py-2 w-40">
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Submenu 1</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Submenu 2</a>
                            </div>
                        </div>

                        <a href="#" className="text-gray-700 hover:text-blue-600">Item 3</a>
                    </div>

                    {/* Right Section */}
                    <div className="flex items-center">
                        <a
                            href="#"
                            className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
                        >
                            Button
                        </a>
                    </div>

                </div>
            </div>
        </nav>
    );
}
