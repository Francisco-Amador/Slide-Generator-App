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

    return (
        <div className=" h-full grid justify-center items-center grid-cols-1 sm:grid-cols-2 gap-40 mx-9 ">
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

    )
}