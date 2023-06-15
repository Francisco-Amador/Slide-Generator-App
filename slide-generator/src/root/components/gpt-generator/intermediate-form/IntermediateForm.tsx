import { useSlideContext } from "@/context/slide.context";
import { getPrompt, getSubThemes } from "@/root/functions";
import { useState } from "react";
import CheckBoxSchema from "./CheckBoxScheme";
import CardThemeList from "./CardThemeList";

export function IntermediateForm() {
    const schemas = [1, 2, 3];
    const { slideContextResponse } = useSlideContext();
    const subThemes = getSubThemes(slideContextResponse);
    const [selectedSchemas, setSelectedSchemas] = useState<number[]>([]);
    const [selectedSubThemes, setSelectedSubThemes] = useState<string[]>(subThemes);
    const handleSchemaChange = (schema: number) => {
        if (selectedSchemas.includes(schema)) {
            setSelectedSchemas(selectedSchemas.filter((item) => item !== schema));

        } else {
            setSelectedSchemas([...selectedSchemas, schema]);

        }

    };
    const getRandomNumber = () => {
        return Math.floor(Math.random() * selectedSchemas.length);
    };
    const handleClick = () => {

        
        const n = getRandomNumber()
        console.log(n, "aleatorio")
        const shemassel = selectedSchemas[n]
        console.log("type", shemassel)

    };
    return (
        <div >
            <h2 className="text-center text-3xl font-bold mb-6">Select your preferred subThemes and outline types (bullets, paragraphs, sentences)</h2>
            <div className="flex flex-row justify-center items-center">
                {schemas.map((schema, index) => (
                    <CheckBoxSchema key={index} schema={schema} handleSchemaChange={handleSchemaChange} />
                ))}
            </div>
            <CardThemeList selectedSubThemes={selectedSubThemes} setSelectedSubThemes={setSelectedSubThemes} />
            <div className="flex justify-center">
                <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={handleClick}>Generate</button>
            </div>
        </div>
    );
}