import { Bulleted } from "@/root/types";

interface BulletedSlideProps {
    data:Bulleted;
}
export default function BulletedSlide({ data }: BulletedSlideProps) {
    return (
        <div className="relative h-96  w-full bg-image">
            <div className="absolute inset-0 flex justify-center items-center text-center">
                <div className="text-white bg-Transparent text-center">
                    <h1 className="text-4xl font-bold">{data.subTheme}</h1>
                    <ul className="list-disc list-inside">
                        {data.items.map((item, index) => (
                            <li className="mb-2" key={index}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}