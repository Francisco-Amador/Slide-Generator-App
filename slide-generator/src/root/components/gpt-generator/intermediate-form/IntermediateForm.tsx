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
        console.log(selectedSchemas)
    };
    const getRandomNumber = () => {
        return Math.floor(Math.random() * selectedSchemas.length) + 1;
    };
    const handleClick = () => {
        const n = getRandomNumber()
        console.log(n)
        const shemassel = selectedSchemas[n]
        console.log(shemassel)
        /*        selectedSubThemes.forEach((subTheme) => {
                   const randomNumber = getRandomNumber();
                   getPrompt(subTheme, randomNumber);
               });  */
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
            <div>
                <button onClick={handleClick}>Generate</button>
            </div>
        </div>
    );
}