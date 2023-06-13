import { useEffect, useState } from "react";
import CardTheme from "./CardTheme";
import CheckBoxSchema from "./CheckBoxScheme";
import { useSlideContext } from "@/context/slide.context";
import { getSubThemes } from "@/root/funtions";

export function IntermediateForm() {
    const schemas = ["viñetas", "párrafos", "frases"];
    const { slideContextResponse } = useSlideContext();

    const subThemes = getSubThemes(slideContextResponse);
    const [selectedSchemas, setSelectedSchemas] = useState<string[]>([]);
    const [selectedSubThemes, setSelectedSubThemes] = useState<string[]>(subThemes);


    const handleSchemaChange = (schema: string) => {
        if (selectedSchemas.includes(schema)) {
            setSelectedSchemas(selectedSchemas.filter((item) => item !== schema));
        } else {
            setSelectedSchemas([...selectedSchemas, schema]);
        }
    };

    const handleSubThemeChange = (subTheme: string) => {
        if (selectedSubThemes.includes(subTheme) &&  selectedSubThemes.length > 5 ) {
            setSelectedSubThemes(selectedSubThemes.filter((item) => item !== subTheme));
        }
    };
    return (
        <div >
            <h2 className=" text-3xl font-bold mb-6">Select your preferred subThemes and outline types (bullets, paragraphs, sentences)</h2>
            <div className="flex flex-row justify-center items-center">
                {schemas.map((schema, index) => (
                    <CheckBoxSchema key={index} schema={schema} handleSchemaChange={handleSchemaChange} />
                ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 ">
                {selectedSubThemes.map((subTheme, index) => (
                    <CardTheme key={index} subTheme={subTheme} handleSubThemeChange={handleSubThemeChange} />
                ))}
            </div>
        </div>
    );
}