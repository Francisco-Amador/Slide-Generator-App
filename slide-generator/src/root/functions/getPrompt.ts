export default function getPrompt(subtheme: string, schema: number , theme: string) {

        const promptMap = [
                {       
                        "theme": theme ,
                        "subTheme": subtheme,
                        "descripcion": "Completa la descripción con un máximo de 15 palabras",
                        "items": ["", "", ""],
                },
                {
                        "theme": theme ,
                        "subTheme": subtheme,
                        "descripcion1": "minimo 15 palabras y maximo 16 palabras",
                        "descripcion2": "minimo 15  palabras y maximo 16 palabras",
                },
                {
                        "theme": theme,
                        "subTheme": subtheme,
                        "descripcion":"Define el valor de prompt para 'minimo 20 palabras y maximo 30",
                },
        ];
        return "no interactues con migo, rellena lo que falta"+ promptMap[schema];
}
