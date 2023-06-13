import React from 'react';
import Link from "next/link";
import Image from "next/image";
export default function ProductSection() {
    return (
        <section>
            <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
                <header className="text-center">
                    <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Slide-Generator</h2>

                    <p className="max-w-md mx-auto mt-4 text-gray-500">
                        Our innovative platform gives you the perfect tool to create impactful and professional presentations in minutes. With our system, you'll be able to generate copy-ready text in PowerPoint and apply custom styles to create visually appealing slides.Forget about tedious and boring work hours, and bring your presentations to life with our intuitive and easy-to-use platform. Now, you'll be able to grab your audience's attention and convey your ideas effectively. Join us and discover how to stand out in your presentations easily and successfully!
                    </p>
                </header>

                <ul className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
                    <li>
                        <Link href="#" className="relative block group">
                            <Image
                                src={"/bus1.jpg"}
                                alt=""
                                width={1000} height={1000}
                                className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                            />

                            <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                                <h3 className="text-xl font-medium text-white">Casual Trainers</h3>

                                <button
                                    className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                                >
                                    Shop Now
                                </button>
                            </div>
                        </Link>
                    </li>

                    <li>
                        <Link href="#" className="relative block group">
                            <Image
                                src={"/bus2.jpg"}
                                alt=""
                                width={1000} height={1000}
                                className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                            />

                            <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                                <h3 className="text-xl font-medium text-white">Winter Jumpers</h3>

                                <button
                                    className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                                >
                                    Shop Now
                                </button>
                            </div>
                        </Link>
                    </li>
                    <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
                        <a href="#" className="relative block group">
                            <Image
                                src={"/bus3.jpg"}
                                alt=""
                                width={1000} height={1000}
                                className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                            />

                            <div
                                className="absolute inset-0 flex flex-col items-start justify-end p-6"
                            >
                                <h3 className="text-xl font-medium text-white">Skinny Jeans Blue</h3>

                                <button
                                    className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                                >
                                    Shop Now
                                </button>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    )
}

