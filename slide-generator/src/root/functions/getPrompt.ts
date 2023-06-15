export default function getPrompt(subtheme: string, schema: number) {
        const promptMap = [
                {
                        subTheme: subtheme,
                        descripcion: "Completa la descripción con un máximo de 15 palabras",
                        items: ["", "", ""],
                },
                {
                        subTheme: subtheme,
                        prompt1: "Define el valor de prompt para 'párrafos'",
                        prompt2: "Define el valor de prompt para 'párrafos'",
                },
                {
                        subTheme: subtheme,
                        prompt: "Define el valor de prompt para 'frases'",
                },
        ];
        return promptMap[schema];
}
