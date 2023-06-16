import Image from "next/image";
export default function ParagraphSlide() {
    return (
        <div className="relative">
            <div className="absolute inset-0 flex justify-center items-center text-center">
                <div className="text-black bg-Transparent text-center">
                    <h1 className="text-4xl font-bold">TITULO</h1>
                    <p className="text-lg font-medium">PARRAFO</p>
                </div>
            </div>
            <img
                className=" object-cover"
                src='/wave-haikei (3).png'
                alt="Primary image"
            />
        </div>
    );

}