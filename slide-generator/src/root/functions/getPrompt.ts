export default function getPrompt(subtheme: string, schema: number, theme: string) {

        const promptMap = [
                {
                        "type": 1,
                        "theme": theme,
                        "subTheme": subtheme,
                        "descripcion": "Completa la descripción con un máximo de 15 palabras",
                        "items": ["", "", ""],
                },
                {
                        "type": 2,
                        "theme": theme,
                        "subTheme": subtheme,
                        "descripcion1": "minimo 15 palabras y maximo 16 palabras",
                        "descripcion2": "minimo 15  palabras y maximo 16 palabras",
                },
                {
                        "type": 3,
                        "theme": theme,
                        "subTheme": subtheme,
                        "descripcion": "Define el valor de prompt para 'minimo 20 palabras y maximo 30",
                },
        ];
        const prompt = promptMap[schema];
        const promptText = JSON.stringify(prompt);
        /*   const anyy ='{"theme":"El suelo","subTheme":"Formación del suelo","descripcion":"La formación del suelo es un proceso complejo que involucra la interacción de diversos factores como el clima, la vegetación y la acción de microorganismos.","items":["Clima","Vegetación","Microorganismos"]}'
          const obj = JSON.parse(any);
          console.log(obj) */
        return "no interactues con migo, rellena lo que falta, dame solo un JSON " + promptText;
}
