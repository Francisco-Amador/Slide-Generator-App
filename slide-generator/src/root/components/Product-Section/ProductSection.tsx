import React from 'react';
import DesignsCard from './DesignCard';
export default function ProductSection() {
    const designs = [
        {
            imageSrc: "/info1.png",
            title: "Paragraphs",
            description: "Our paragraph design allows you to present your ideas clearly and convincingly...",
        },
        {
            imageSrc: "/info2.png",
            title: "Bullet points",
            description: "Bullet points are a great way to highlight important information in a visually appealing way...",
        },
        {
            imageSrc: "/info3.png",
            title: "Paragraph Columns",
            description: "If you want to add a touch of dynamism to your slides, our two-column paragraphs are the perfect choice...",
        },
    ];

    return (
        <section className="p-6 bg-gray-900 text-white body-font">
            <div className="border-2 p-4 rounded-lg border-slate-700 shadow-lg shadow-gray-800 bg-gray-800 container px-5 py-24 mx-auto">
                <div className="flex flex-col">
                    <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                        <h1 className="sm:w-2/5 text-white font-medium title-font text-2xl mb-2 sm:mb-0">
                            Create Slide Text that Highlights and Communicates Clearly
                        </h1>
                        <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
                            Our innovative slide text creation tool provides you with all the features needed to generate captivating and effective content. With our platform, you can transform your ideas into impactful messages and communicate your key concepts clearly and concisely.
                        </p>
                    </div>
                </div>
                <h2 className="sm:w-2/5 text-white font-medium title-font text-2xl mb-4">Our Designs:</h2>
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                    {designs.map((design, index) => (
                        <DesignsCard key={index} design={design}/>
                    ))}
                </div>
            </div>
        </section>
    );
}