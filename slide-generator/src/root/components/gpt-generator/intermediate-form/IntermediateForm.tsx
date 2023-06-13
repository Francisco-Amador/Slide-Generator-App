import CardTheme from "./CardTheme";
import CheckBoxSchema from "./CheckBoxScheme";

export function IntermediateForm() {
    const schemas = ["viñetas", "párrafos", "frases"];
    const subThemes = ["Theme1", "Theme2", "Theme3"];

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Select your preferred subThemes and outline types (bullets, paragraphs, sentences)</h2>
            <div className="items-start">
                <div className="flex flex-row ">
                    {schemas.map((schema, index) => (
                        <CheckBoxSchema key={index} schema={schema} />
                    ))}
                </div>
                <div className="flex flex-row items-start">
                    {subThemes.map((subTheme, index) => (
                        <CardTheme key={index} subTheme={subTheme} />
                    ))}
                </div>
            </div>
        </div>
    );
}