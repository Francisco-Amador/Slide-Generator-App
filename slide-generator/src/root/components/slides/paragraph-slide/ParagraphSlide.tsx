interface ParagraphSlideProps {
    data: {
        type:number;
        theme: string;
        subTheme: string;
        descripcion: string;
    };
}
export default function ParagraphSlide({data}:ParagraphSlideProps) {
    return (
        <div className="h-96  w-full lg:m-4 text-white bg-image2 rounded-md ">
            <div className="flex justify-center items-center text-center">
                <div className="text-white bg-Transparent text-center">
                    <h3 className="text-2xl lg:text-4xl font-bold my-10">{data.subTheme} </h3>
                    <p className="text-sm lg:text-base mx-5 font-medium">{data.descripcion}</p>
                </div>
            </div>
        </div>
    );

}