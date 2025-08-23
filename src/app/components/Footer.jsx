import React from 'react'

export default function Footer() {
    return (
        <>
            <footer className="bg-gray-100 text-gray-800 py-10 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

                    {/* Logo & About */}
                    <div>
                        <svg
                            width="50"
                            height="50"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            className="fill-current text-blue-600 mb-3"
                        >
                            <path d="M22.672 15.226l-2.432.811.841 2.515c..."></path>
                        </svg>
                        <p className="font-semibold">
                            <span className="text-blue-600">E</span>
                            <span>-Shop</span>
                            <span className="text-green-600">B</span>
                            <span className="text-red-600">D</span> Industries Ltd. <br />
                            <span className="text-sm text-gray-600">
                                Providing Selling and Buying since 2020
                            </span>
                        </p>
                    </div>

                    {/* Services */}
                    <div>
                        <h6 className="text-lg font-bold mb-3">Services</h6>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-blue-600">Branding</a></li>
                            <li><a href="#" className="hover:text-blue-600">Design</a></li>
                            <li><a href="#" className="hover:text-blue-600">Marketing</a></li>
                            <li><a href="#" className="hover:text-blue-600">Advertisement</a></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h6 className="text-lg font-bold mb-3">Company</h6>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-blue-600">About us</a></li>
                            <li><a href="#" className="hover:text-blue-600">Contact</a></li>
                            <li><a href="#" className="hover:text-blue-600">Jobs</a></li>
                            <li><a href="#" className="hover:text-blue-600">Press kit</a></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h6 className="text-lg font-bold mb-3">Legal</h6>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-blue-600">Terms of use</a></li>
                            <li><a href="#" className="hover:text-blue-600">Privacy policy</a></li>
                            <li><a href="#" className="hover:text-blue-600">Cookie policy</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom section */}
                <div className="mt-10 border-t pt-6 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} ACME Industries Ltd. All rights reserved.
                </div>
            </footer></>
    )
}
