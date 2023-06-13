import axios from "axios";
import { createContext, useContext, useState, useEffect, Dispatch, SetStateAction } from "react";

export interface ContextState {
    slideContextPrompt: string;
    setSlideContextPrompt: Dispatch<SetStateAction<string>>;
    slideContextResponse: string;
    setSlideContextResponse:  Dispatch<SetStateAction<string>>;
}

export const SlideContext = createContext<ContextState>({} as ContextState);

export const SlideProvider = ({ children }: { children: any }) => {
    const [slideContextPrompt, setSlideContextPrompt] = useState<string>('');
    const [slideContextResponse, setSlideContextResponse] = useState<string>('');

    useEffect(() => {
        const fetchData = async () => {
            setSlideContextResponse(await getGPT(slideContextPrompt));
        };

        fetchData();
    }, [slideContextPrompt]);

    return (
        <SlideContext.Provider value={{ slideContextPrompt, setSlideContextPrompt, slideContextResponse, setSlideContextResponse }}>
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
        const prompt = prompt1 || "Necesito exactamente ' 15 ' subtemas sobre 'SOBRE POBLACION' de tipo 'FORMAL' en el idioma 'ESPAÑOL', solamente los subtemas, deben ir separados por &, sin introducción ni conclusión, sin en listar ni enumerar, sin mensaje al inicio. No quiero la respuesta en formato lista. No quiero que salgan acompañados de números al inicio.";
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
                    Authorization: "Bearer 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",
                },
            });

            const json = response.data.choices[0].text as string;

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