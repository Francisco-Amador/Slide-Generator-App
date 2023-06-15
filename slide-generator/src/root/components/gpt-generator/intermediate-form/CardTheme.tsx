
interface subThemeProp {
    subTheme: string;
    handleSubThemeChange(subTheme: string, index: number ):void
    index: number;
}
export default function CardTheme({ subTheme, handleSubThemeChange, index }: subThemeProp) {
    return (
        <div className="w-full h-full p-4">
        <div className="flex flex-col justify-center items-center border-4 border-blue-200 p-6 rounded-lg bg-white h-full">
            <h2 className="text-lg text-gray-900 font-medium title-font mb-2 text-center">{subTheme}</h2>
            <div className="flex justify-center mt-4">
                <button onClick={() => handleSubThemeChange(subTheme, index)} className="bg-white hover:bg-blue-200 border-2 border-blue-600 text-blue-500 font-bold py-2 px-4 rounded">
                    Delete subTheme
                </button>
            </div>
        </div>
    </div>
    );

}