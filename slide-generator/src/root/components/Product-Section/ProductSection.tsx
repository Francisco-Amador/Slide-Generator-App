import React from 'react';
import Image from "next/image";
export default function ProductSection() {
    return (
        <section className="bg-gray-900 text-white body-font">
            <h1 className='text-center sm:text-3xl text-2xl'>Our Designs</h1>
            <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
                Our innovative platform gives you the perfect tool to create impactful and professional presentations in minutes. With our system, you ll be able to generate copy-ready text in PowerPoint and apply custom styles to create visually appealing slides.Forget about tedious and boring work hours, and bring your presentations to life with our intuitive and easy-to-use platform. Now, you ll be able to grab your audience s attention and convey your ideas effectively. Join us and discover how to stand out in your presentations easily and successfully!
            </p>
            <div className=" px-5 py-24 mx-auto">
                <div className="flex flex-wrap -mx-4 -mb-10 text-center">
                    <div className="sm:w-1/2 mb-10 px-4">
                        <div className="shadow-lg shadow-gray-800 rounded-lg h-64 overflow-hidden">
                            <Image
                                alt="content"
                                className="object-cover object-center h-full w-full"
                                src="/bus1.jpg"
                                width={1201}
                                height={501}
                            />
                        </div>
                        <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Buy YouTube Videos</h2>
                        <p className="leading-relaxed text-base">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>
                        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75  bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                Purple to pink
                            </span>
                        </button>
                    </div>
                    <div className="sm:w-1/2 mb-10 px-4">
                        <div className="shadow-lg shadow-gray-800 rounded-lg h-64 overflow-hidden">
                            <Image
                                alt="content"
                                className="object-cover object-center h-full w-full"
                                src="/bus2.jpg"
                                width={1202}
                                height={502}
                            />
                        </div>
                        <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">The Catalyzer</h2>
                        <p className="leading-relaxed text-base">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>
                        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75  bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                Purple to pink
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}