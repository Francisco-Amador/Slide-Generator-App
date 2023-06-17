import { Link } from 'react-scroll';

import { motion } from 'framer-motion';
import Image from "next/image";
export default function NavBar() {

    return (
        <nav className=" p-4 bg-gradient-to-r from-purple-900 via-purple-800 to-purple-700 border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="flex items-center">
                    <Image width={100} height={10} src={"/icon2.png"} alt="content" className="mr-4" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                        Slide-Generator
                    </span>
                </div>
                <div className="hidden w-full md:block md:w-auto">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
                        <li className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Link
                                    to="parametersForm"
                                    smooth={true}
                                    duration={500}
                                    offset={-50}
                                    className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                                >
                                    Generate Slides now!
                                </Link>
                            </motion.div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
