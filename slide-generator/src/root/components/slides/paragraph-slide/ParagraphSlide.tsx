import { Paragraph } from "@/root/types";

interface ParagraphSlideProps {
    data: Paragraph
}
export default function ParagraphSlide({ data }: ParagraphSlideProps) {


    return (
        <div className="min-h-96 h-full w-full lg:m-4 text-white bg-image2 rounded-md ">
            <div className="flex justify-center items-center text-center">
                <div className="text-white bg-Transparent text-center">
                    <h3 className="text-2xl lg:text-4xl font-bold my-10">{data.subTheme} </h3>
                    <p className="text-sm h-60 lg:text-base mx-5 font-medium text-justify">{data.description? data.description: "no hay nada" }</p>
                </div>
            </div>
        </div>
    );

}
