import { createContext, useContext, useState, useEffect, Dispatch, SetStateAction } from "react";
import { Parameters } from "@/root/types"
import { getGPT } from "./getGPTresponse";

export interface ContextState {
    slideContextPrompt: string;
    setSlideContextPrompt: Dispatch<SetStateAction<string>>;
    slideContextResponse: string;
    setSlideContextResponse: Dispatch<SetStateAction<string>>;
    setStore: Dispatch<SetStateAction<Parameters>>;
    store: Parameters;
    generateSlide: (prompts: string[]) => void;
    setSlide: Dispatch<SetStateAction<JSON[]>>;
    slide: JSON[];
    loading: boolean;
}

export const SlideContext = createContext<ContextState>({} as ContextState);

export const SlideProvider = ({ children }: { children: any }) => {
    const [slideContextPrompt, setSlideContextPrompt] = useState<string>('');
    const [slide, setSlide] = useState<JSON[]>([]);
    const [slideContextResponse, setSlideContextResponse] = useState<string>('');
    const [store, setStore] = useState<Parameters>({ language: "", countSubtheme: 0, theme: "", countSlide: 0 });
    const [loading, setLoading] = useState<boolean>(false)
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            if (slideContextPrompt.length > 0) setSlideContextResponse(await getGPT(slideContextPrompt));
            setLoading(false);
        };
        fetchData();
    }, [slideContextPrompt]);

    const generateSlide = async (prompts: string[]) => {
        console.log(prompts, "all prompt");
        setLoading(true);
        await Promise.all(
            prompts.map(async (prompt) => {

                const newSlide = await getGPT(prompt);
                setSlide((prevSlide) => [...prevSlide, JSON.parse(newSlide)]);

            })
        );
        setLoading(false);
    };


    return (
        <SlideContext.Provider value={{
            slideContextPrompt, setSlideContextPrompt, slideContextResponse, setSlideContextResponse,
            store, setStore, generateSlide, slide, setSlide, loading
        }}>
            {children}
        </SlideContext.Provider>
    );
};

export const useSlideContext = () => {
    const context = useContext(SlideContext);
    if (context === undefined) {
        throw new Error('SlideContext must be used within a SlideProvider');
    }
    return context;
};