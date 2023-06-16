import Image from "next/image";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from "react";
import DesignModal from "./DesignModal";
interface DesignsProps {
    design: {
        imageSrc: string,
        title: string,
        description: string,
    }
}
export default function DesignsCard({ design }: DesignsProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
                <Image
                    src={design.imageSrc}
                    width={1000}
                    height={1000}
                    alt="content"
                    className="hover:scale-105 transform-gpu duration-200 cursor-pointer"
                    onClick={openModal}
                />
                <DesignModal closeModal={closeModal} isModalOpen={isModalOpen} imageSrc={design.imageSrc} />
            </div>
            <h2 className="text-2xl font-medium text-white mt-5">{design.title}</h2>
            <p className="text-base leading-relaxed mt-2 text-gray-300">{design.description}</p>
            <Link href="#parametersForm" className="text-indigo-500 inline-flex items-center mt-3">
                <motion.span
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center"
                >
                    Get Started
                    <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 ml-2 align-middle"
                        viewBox="0 0 24 24"
                    >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </motion.span>
            </Link>
        </div>
    )
}