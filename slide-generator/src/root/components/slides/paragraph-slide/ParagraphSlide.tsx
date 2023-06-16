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
        <div className="relative m-4 h-64  w-96 bg-image">
            <div className="absolute inset-0 flex justify-center items-center text-center">
                <div className="text-black bg-Transparent text-center">
                    <h1 className="text-4xl font-bold">{data.subTheme} </h1>
                    <p className="text-lg font-medium">{data.descripcion}</p>
                </div>
            </div>
        </div>
    );

}