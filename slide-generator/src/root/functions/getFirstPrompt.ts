
export default function firstPrompt(subThemesNumber: number, theme:string, type:string, language:string){
    return  "Necesito exactamente " + (subThemesNumber+5) + " subtemas sobre " + theme.toUpperCase() + " de tipo " + type.toUpperCase() + " en el idioma " + language + ", solamente los subtemas, deben ir separados por &, sin introducción ni conclusión, sin en listar ni enumerar, sin mensaje al inicio. No quiero la respuesta en formato lista. No quiero que salgan acompañados de números al inicio."
}