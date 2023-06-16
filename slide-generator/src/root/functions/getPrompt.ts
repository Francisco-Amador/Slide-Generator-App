import { Parameters } from '@/root/types'
export default function getPrompt(subtheme: string, schema: number, theme: Parameters) {

        const promptMap = [
                {
                        "type": 1,
                        "theme": theme.theme,
                        "subTheme": subtheme,
                        "items": ["", "", ""],
                },
                {
                        "type": 2,
                        "theme": theme.theme,
                        "subTheme": subtheme,
                        "descripcion1": "minimo 15 palabras y maximo 16 palabras",
                        "descripcion2": "minimo 15  palabras y maximo 16 palabras",
                },
                {
                        "type": 3,
                        "theme": theme.theme,
                        "subTheme": subtheme,
                        "descripcion": "minimo 20 palabras y maximo 30",
                },
        ];
        const prompt = promptMap[schema];
        const promptText = JSON.stringify(prompt);
        return `No interactúes conmigo, rellena lo que falta en el idioma ${theme.language}, dame solo un JSON: ${promptText}`;
}