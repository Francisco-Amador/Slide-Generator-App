
export default function getPrompt(subtheme: string, schema: string) {
        const promptMap = {
                viñetas: /* definir el valor de prompt para "viñetas" */,
                párrafos: /* definir el valor de prompt para "párrafos" */,
                frases: /* definir el valor de prompt para "frases" */,
        };

        const prompt = promptMap[schema];
        if (prompt) {
                setSlideContextPrompt(prompt);
        }
}