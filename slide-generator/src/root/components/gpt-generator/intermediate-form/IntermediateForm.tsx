import { useState } from "react";
import CardTheme from "./CardTheme";
import CheckBoxSchema from "./CheckBoxScheme";

export function IntermediateForm() {
    const schemas = ["viñetas", "párrafos", "frases"];
    const subThemes = ["Theme1", "Theme2", "Theme3"];
    const [selectedSchemas, setSelectedSchemas] = useState<string[]>([]);
    const [selectedSubThemes, setSelectedSubThemes] = useState<string[]>([]);
    const handleSchemaChange = (schema:string) => {
        if (selectedSchemas.includes(schema)) {
            setSelectedSchemas(selectedSchemas.filter((item) => item !== schema));
        } else {
            setSelectedSchemas([...selectedSchemas, schema]);
        }
    };

    const handleSubThemeChange = (subTheme:string) => {
        if (selectedSubThemes.includes(subTheme)) {
            setSelectedSubThemes(selectedSubThemes.filter((item) => item !== subTheme));
        }
    };
    return (
        <div >
            <h2 className=" text-3xl font-bold mb-6">Select your preferred subThemes and outline types (bullets, paragraphs, sentences)</h2>
            <div className="flex flex-row justify-center items-center">
                {schemas.map((schema, index) => (
                    <CheckBoxSchema key={index} schema={schema} handleSchemaChange={handleSchemaChange}/>
                ))}
            </div>
            <div className="flex flex-row">
                {subThemes.map((subTheme, index) => (
                    <CardTheme key={index} subTheme={subTheme} handleSubThemeChange={handleSubThemeChange}/>
                ))}
            </div>
        </div>
    );
}