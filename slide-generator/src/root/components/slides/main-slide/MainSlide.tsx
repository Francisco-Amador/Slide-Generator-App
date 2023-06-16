/* eslint-disable react-hooks/exhaustive-deps */
import { useSlideContext } from "@/context/slide.context";
import BulletedSlide from "../bulleted-slide/BulletedSlide";
import ParagraphColumnsSlide from "../paragraph-colums-slide/ParagraphColumsSlide";
import ParagraphSlide from "../paragraph-slide/ParagraphSlide";
import { useEffect } from "react";
import { Bulleted, ParagraphColumns } from "@/root/types";
import { Paragraph } from "@/root/types";

export default function MainSlide() {
    const { slide } = useSlideContext();



    useEffect(() => {
        console.log(slide);
    }, [slide])
    const handleClick = () => {
    }
    return (
        <div>
            <h2 className="text-center m-4 text-3xl font-bold  text-white">Your generated slides:</h2>
            <div className="overflow-x-auto overflow-y-scroll max-h-96 h-full grid justify-center items-center grid-cols-1 sm:grid-cols-2 gap-40 mx-9 ">
                {slide.map((slideItem: any, index) => {
                    if (slideItem!.type == 1) {
                        const bulleted = slideItem as Bulleted;
                        return <BulletedSlide key={index} data={bulleted}></BulletedSlide>
                    }
                    if (slideItem!.type == 2) {
                        const paragraphColumns = slideItem as ParagraphColumns;
                        return <ParagraphColumnsSlide key={index} data={paragraphColumns}></ParagraphColumnsSlide>
                    }
                    else {
                        const paragraph = slideItem as Paragraph;
                        return <ParagraphSlide key={index} data={paragraph}></ParagraphSlide>
                    }
                })}
            </div>
            <div className="mt-4 flex justify-center">
                <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={handleClick}>Delete Slides</button>
            </div>
        </div>


    )
}