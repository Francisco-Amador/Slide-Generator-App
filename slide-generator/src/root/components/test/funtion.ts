import axios, { AxiosResponse } from 'axios';

export default async function getGPT(): Promise<string> {
    try {
        const prompt = "Necesito exactamente ' 15 ' subtemas sobre 'SOBRE POBLACION' de tipo 'FORMAL' en el idioma 'ESPAÑOL', solamente los subtemas, deben ir separados por &, sin introducción ni conclusión, sin en listar ni enumerar, sin mensaje al inicio. No quiero la respuesta en formato lista. No quiero que salgan acompañados de números al inicio.";
        const payload = {
            model: "text-davinci-003",
            prompt,
            temperature: 0.7,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
            max_tokens: 10,
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
}
