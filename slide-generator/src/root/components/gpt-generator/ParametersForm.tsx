import { paramsMessage } from "@/schemas";
import { CustomInput } from "../formik";
import { Formik, Form } from 'formik';
import CustomSelect from "../formik/CustomSelect";
import { ItemCounter } from "../formik/ItemCounter";
import { useEffect, useState } from "react";
import { useSlideContext } from "@/context/slide.context";

interface FormValues {
    theme: string;
    type: string;
    language: string;
}
const options = [
    { option: "Select type" },
    { option: "Formal" },
    { option: "Creativo" },
    { option: "Académico" }
];


const languages = [
    { language: "Select language" },
    { language: "English" },
    { language: "Spanish" },
    { language: "French" }
];

export default function ParametersForm() {

    const [subThemesNumber, setSubThemesNumber] = useState<number>(10);
    const { setSlideContextPrompt } = useSlideContext();
    const initialValues: FormValues = {} as FormValues;

    const onSubmit = (values: FormValues) => {
        const { theme, type, language } = values;
        const propmt = "Necesito exactamente " + subThemesNumber + " subtemas sobre " + theme.toUpperCase() + " de tipo " + type.toUpperCase() + " en el idioma " + language + ", solamente los subtemas, deben ir separados por &, sin introducción ni conclusión, sin en listar ni enumerar, sin mensaje al inicio. No quiero la respuesta en formato lista. No quiero que salgan acompañados de números al inicio."
        console.log(propmt, "000000000000000000000000000000")
        setSlideContextPrompt(propmt);
    }
    return (
        <div id="parametersForm">
            <Formik initialValues={initialValues} validationSchema={paramsMessage} onSubmit={onSubmit}>
                <div className=" flex flex-col justify-center items-center w-full p-4 h-auto mb-60 m-10">
                    <h1 className="text-2xl font-bold mb-4 text-center">Purchase Form</h1>
                    <Form className="flex flex-col justify-center  w-2/4">
                        <div className="flex flex-col justify-center items-center">
                            <CustomInput label="Theme:" name="theme" inputType="text" placeholder="Type a subject" />
                            <CustomSelect label="Type" name="type" >
                                {options.map((option) => (
                                    <option key={option.option} value={option.option}>
                                        {option.option}
                                    </option>
                                ))}
                            </CustomSelect>
                            <CustomSelect label="Language" name="language" >
                                {languages.map((language) => (
                                    <option key={language.language} value={language.language}>
                                        {language.language}
                                    </option>
                                ))}
                            </CustomSelect>
                            <ItemCounter setCounter={setSubThemesNumber} />
                            <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" type="submit"> Send </button>
                        </div>
                    </Form>
                </div>
            </Formik>
        </div>

    );
}
