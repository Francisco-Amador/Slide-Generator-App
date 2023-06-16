
export default function ParagraphColumnsSlide() {
    return (
        <div className="relative">
            <div className="absolute inset-0 flex justify-center items-center text-center">
                <div className="text-black bg-Transparent text-center">
                    <h1 className="text-4xl font-bold">TITULO</h1>
                    <div className="flex justify-center">
                        <div className="w-1/2">
                            <p className="text-lg font-medium">PARRAFO 1</p>
                        </div>
                        <div className="w-1/2">
                            <p className="text-lg font-medium">PARRAFO 2</p>
                        </div>
                    </div>
                </div>
            </div>
            <img
                className="object-cover"
                src="/wave-haikei (3).png"
                alt="Primary image"
            />
        </div>
    );
    }