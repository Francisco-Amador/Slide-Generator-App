import { ParagraphColumns } from "@/root/types";

interface ParagraphColumnsSlideProps {
    data: ParagraphColumns;
}
export default function ParagraphColumnsSlide({ data }: ParagraphColumnsSlideProps) {
    return (
        <div className=" h-96  w-full lg:m-4 text-white bg-image3 rounded-md">
            <h3 className="text-center text-2xl lg:text-4xl font-bold my-10">{data.subTheme}</h3>
            <div className=" flex justify-center items-center text-center">
                <div className="flex justify-center h-full p-4 mt-4">
                    <div className="w-1/2">
                        <p className="text-sm lg:text-lg mx-5 font-medium">{data.description1}</p>
                    </div>
                    <div className="w-1/2">
                        <p className="text-sm lg:text-lg mx-5 font-medium">{data.description2}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}