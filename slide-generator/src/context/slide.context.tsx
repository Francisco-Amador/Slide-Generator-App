import axios from "axios";
import { createContext, useContext, useState, useEffect, Dispatch, SetStateAction } from "react";
import { Parameters } from "@/root/types"
interface OpenAIResponse {
    choices: { text: string }[];
}
export interface ContextState {
    slideContextPrompt: string;
    setSlideContextPrompt: Dispatch<SetStateAction<string>>;
    slideContextResponse: string;
    setSlideContextResponse: Dispatch<SetStateAction<string>>;
    setStore: Dispatch<SetStateAction<Parameters>>;
    store: Parameters;
    ///setSlideGeneratePrompt: Dispatch<SetStateAction<string>>;
    slideGenerate: string[];
    generateSlide: (prompts: string[]) => void;
}

export const SlideContext = createContext<ContextState>({} as ContextState);

export const SlideProvider = ({ children }: { children: any }) => {
    const [slideContextPrompt, setSlideContextPrompt] = useState<string>('');
        const [slideGeneratePrompt, setSlideGeneratePrompt] = useState<string>('');
    const [slideContextResponse, setSlideContextResponse] = useState<string>('');
    const [slideGenerate, setSlideGenerate] = useState<string[]>([]);
    const [store, setStore] = useState<Parameters>({ language: "", countSubtheme: 0, theme: "" });

    useEffect(() => {
        const fetchData = async () => {
            if (slideContextPrompt.length > 0) setSlideContextResponse(await getGPT(slideContextPrompt));
        };
        fetchData();
    }, [slideContextPrompt]);

    const generateSlide = async (prompts: string[]) => {
        console.log(prompts, "all prompt");
        await Promise.all(
            prompts.map(async (prompt) => {
                console.log(prompt);
                const newSlide = await getGPT(prompt);
                setSlideGenerate([...slideGenerate, newSlide]);
            })
        );
    };


    return (
        <SlideContext.Provider value={{
            slideContextPrompt, setSlideContextPrompt, slideContextResponse, setSlideContextResponse,
            store, setStore, slideGenerate, generateSlide
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


const getGPT = async (prompt1: string): Promise<string> => {
    try {
        console.log(prompt1)
        if (prompt1.length < 2) {
            return ""
        }
        const prompt = prompt1;
        const payload = {
            model: "text-davinci-003",
            prompt,
            temperature: 0.7,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
            max_tokens: 100,
            n: 1,
        };
        try {
            const response = await axios.post("https://api.openai.com/v1/completions", payload, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer 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",//TODO pasarlo env
                },
            });
            const json = response.data.choices[0].text as string;
            console.log(json.replace(/\n\n/g, ""), "API response");
            return json.replace(/\n\n/g, "");
        } catch (error) {
            console.error(error);
            throw error;
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
};