import { Bulleted } from "@/root/types";

interface BulletedSlideProps {
    data: Bulleted;
}
export default function BulletedSlide({ data }: BulletedSlideProps) {
    return (
        <div className="min-h-96  h-full w-full lg:m-4 text-white bg-image rounded-md">
            <div className=" flex flex-col justify-center h-full items-center text-center">
                <h3 className="text-2xl lg:text-4xl font-bold my-10">{data.subTheme}</h3>
                <div className="h-60 flex justify-center items-center ">
                    <div className="text-white text-center">
                        <ul className="list-disc list-inside">
                            {data.items.map((item, index) => (
                                <li className="mb-2 text-base lg:text-lg mx-5 font-medium" key={index}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
}