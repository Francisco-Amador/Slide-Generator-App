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
                        "description1": "minimo 15 palabras y maximo 16 palabras",
                        "description2": "minimo 15  palabras y maximo 16 palabras",
                },
                {
                        "type": 3,
                        "theme": theme.theme,
                        "subTheme": subtheme,
                        "description": "minimo 20 palabras y maximo 30",
                },
        ];
        const prompt = promptMap[schema-1];
        const promptText = JSON.stringify(prompt);
        return `No interactúes conmigo, rellena lo que falta solamente en el idioma ${theme.language}, dame solo un JSON completo no olvides cerrar el JSON ${promptText}`;
}