
interface subThemeProp {
    subTheme: string;
}
export default function CardTheme({ subTheme }: subThemeProp) {
    return (
        <div className="rounded-lg bg-white p-4 m-4 sm:p-6">
                <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                    {subTheme}
                </h3>
            <div className="mt-4 flex flex-wrap gap-1">
                <button
                    className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
                >
                    Delete
                </button>
            </div>
        </div>
    )
}