import React from 'react';
import Image from "next/image";
import Link from 'next/link';
export default function ProductSection() {
    return (
        <section className="bg-gray-900 text-white body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col">
                    <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                        <h1 className="sm:w-2/5 text-white font-medium title-font text-2xl mb-2 sm:mb-0">Create Slide Text that Highlights and Communicates Clearly</h1>
                        <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Our innovative slide text creation tool provides you with all the features needed to generate captivating and effective content. With our platform, you can transform your ideas into impactful messages and communicate your key concepts clearly and concisely.</p>
                    </div>
                </div>
                <h2 className="sm:w-2/5 text-white font-medium title-font text-2xl  mb-4">Our Designs:</h2>
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                    <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                        <div className="rounded-lg h-64 overflow-hidden">
                            <Image width={1000} height={1000} src={"/paragraph-image.png"} alt="content" className="object-cover object-center h-full w-full" />
                        </div>
                        <h2 className="text-xl font-medium title-font text-white mt-5">Paragraphs:</h2>
                        <p className="text-base leading-relaxed mt-2">Our paragraph design allows you to present your ideas clearly and convincingly. With a clean and readable format, you can organize your content into blocks of text that will capture the attention of your audience. Highlights key points, provides relevant details, and develops strong arguments in well-structured paragraphs.</p>
                        <Link href="#parametersForm" className="text-indigo-500 inline-flex items-center mt-3">Get Started
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </Link>
                    </div>
                    <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                        <div className="rounded-lg h-64 overflow-hidden">
                            <Image width={1000} height={1000} alt="content" className="object-cover object-center h-full w-full" src={"/bullet-image.png"}/>
                        </div>
                        <h2 className="text-xl font-medium title-font text-white mt-5">Bullets points:</h2>
                        <p className="text-base leading-relaxed mt-2">Bullet points are a great way to highlight important information in a visually appealing way. Our app offers you a variety of bullet styles and layouts so you can choose the one that best suits your content. Use custom bullet points, icons, or markers to emphasize key points and make it easier for your audience to understand.</p>
                        <Link href="#parametersForm" className="text-indigo-500 inline-flex items-center mt-3">Get Started
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </Link>
                    </div>
                    <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                        <div className="rounded-lg h-64 overflow-hidden">
                            <Image width={1000} height={1000} alt="content" className="object-cover object-center h-full w-full" src={"/paragraph-colums-image.png"}/>
                        </div>
                        <h2 className="text-xl font-medium title-font text-white mt-5">Paragraph Columns:</h2>
                        <p className="text-base leading-relaxed mt-2">If you want to add a touch of dynamism to your slides, our two-column paragraphs are the perfect choice. This design allows you to present information in two distinct sections, making it easy to compare concepts, present pros and cons, or explore different points of view. It achieves a visual balance and provides a clear and organized structure to your ideas.</p>
                        <Link href="#parametersForm" className="text-indigo-500 inline-flex items-center mt-3">Get Started
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}