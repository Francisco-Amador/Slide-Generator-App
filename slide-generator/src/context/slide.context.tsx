import axios from "axios";
import { createContext, useContext, useState, useEffect, Dispatch, SetStateAction } from "react";
import {Parameters} from "@/root/types"
export interface ContextState {
    slideContextPrompt: string;
    setSlideContextPrompt: Dispatch<SetStateAction<string>>;
    slideContextResponse: string;
    setSlideContextResponse: Dispatch<SetStateAction<string>>;
    setStore: Dispatch<SetStateAction<Parameters>>;
    store:Object;
}

export const SlideContext = createContext<ContextState>({} as ContextState);

export const SlideProvider = ({ children }: { children: any }) => {
    const [slideContextPrompt, setSlideContextPrompt] = useState<string>('');
    const [slideContextResponse, setSlideContextResponse] = useState<string>('');
    const [store, setStore] = useState<Parameters>({ language: "", countSubtheme: 0 });
    useEffect(() => {
        const fetchData = async () => {
            setSlideContextResponse(await getGPT(slideContextPrompt));
        };

        fetchData();
    }, [slideContextPrompt]);

    return (
        <SlideContext.Provider value={{ slideContextPrompt, setSlideContextPrompt, slideContextResponse, setSlideContextResponse, 
            store, setStore }}>
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
            console.log(json);
            return json;
        } catch (error) {
            console.error(error);
            throw error;
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
};