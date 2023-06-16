import { ParagraphColumns } from "@/root/types";

interface ParagraphColumnsSlideProps {
    data: ParagraphColumns;
}
export default function ParagraphColumnsSlide({data}:ParagraphColumnsSlideProps) {
    return (
        <div className="relative h-96  w-3/4 m-4 bg-image ">
            <div className="absolute inset-0 flex justify-center items-center text-center">
                <div className="text-black bg-Transparent text-center">
                    <h1 className="text-4xl font-bold">{data.subTheme}</h1>
                    <div className="flex justify-center">
                        <div className="w-1/2">
                            <p className="text-lg font-medium">{data.descripcion}</p>
                        </div>
                        <div className="w-1/2">
                            <p className="text-lg font-medium">{data.descripcion2}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    }