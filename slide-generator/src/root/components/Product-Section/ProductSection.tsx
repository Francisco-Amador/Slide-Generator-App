import React from 'react';
import Link from "next/link";
import Image from "next/image";
export default function ProductSection() {
    const products = [
        {
            title: "Casual Trainers",
            imageUrl: "/bus1.jpg",
            liStyle: ""
        },
        {
            title: "Winter Jumpers",
            imageUrl: "/bus2.jpg",
            liStyle: ""
        },
        {
            title: "Skinny Jeans Blue",
            imageUrl: "/bus3.jpg",
            liStyle: "lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1"
        },
    ];
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-wrap">
                <div className="flex w-full mb-20 flex-wrap">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
                        Our Designs
                    </h1>
                    <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
                        Our innovative platform gives you the perfect tool to create impactful and professional presentations in minutes. With our system, you ll be able to generate copy-ready text in PowerPoint and apply custom styles to create visually appealing slides.Forget about tedious and boring work hours, and bring your presentations to life with our intuitive and easy-to-use platform. Now, you ll be able to grab your audience s attention and convey your ideas effectively. Join us and discover how to stand out in your presentations easily and successfully!
                    </p>
                </div>
                <div className="flex flex-wrap md:-m-2 -m-1">
                    <div className="flex flex-wrap w-1/2">
                        <div className="md:p-2 p-1 w-1/2">
                            <Image
                                alt="gallery"
                                width={1000}
                                height={1000}
                                className="w-full object-cover h-full object-center block"
                                src="/bus3.jpg"
                            />
                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                            <Image
                                alt="gallery"
                                width={1000}
                                height={1000}
                                className="w-full object-cover h-full object-center block"
                                src="/bus3.jpg"
                            />
                        </div>
                        <div className="md:p-2 p-1 w-full">
                            <Image
                                alt="gallery"
                                width={1000}
                                height={1000}
                                className="w-full h-full object-cover object-center block"
                                src="/bus3.jpg"
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap w-1/2">
                        <div className="md:p-2 p-1 w-full">
                            <Image
                                alt="gallery"
                                width={1000}
                                height={1000}
                                className="w-full h-full object-cover object-center block"
                                src="/bus3.jpg"
                            />
                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                            <Image
                                alt="gallery"
                                width={1000}
                                height={1000}
                                className="w-full object-cover h-full object-center block"
                                src="/bus3.jpg"
                            />
                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                            <Image
                                alt="gallery"
                                width={1000}
                                height={1000}
                                className="w-full object-cover h-full object-center block"
                                src="/bus3.jpg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

