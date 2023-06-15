import { paramsMessage } from "@/schemas";
import { CustomInput } from "../formik";
import { Formik, Form } from 'formik';
import CustomSelect from "../formik/CustomSelect";
import { ItemCounter } from "../formik/ItemCounter";
import { useState } from "react";
import { useSlideContext } from "@/context/slide.context";
import { Parameters, firstPrompt } from "@/root/"
import { options, languages } from '@/root/selector'
interface FormValues {
    theme: string;
    type: string;
    language: string;
}
export default function ParametersForm() {
    const [subThemesNumber, setSubThemesNumber] = useState<number>(10);
    const { setSlideContextPrompt, setStore } = useSlideContext();
    const initialValues: FormValues = {} as FormValues;
    const onSubmit = (values: FormValues) => {
        const { theme, type, language } = values;
        const newParams = { language, countSubtheme: subThemesNumber } as Parameters;
        setStore(newParams);
        const prompt = firstPrompt(subThemesNumber, theme, type, language)
        setSlideContextPrompt(prompt);
    }
    return (
        <Formik id="parametersForm" initialValues={initialValues} validationSchema={paramsMessage} onSubmit={onSubmit}>
            <div className="flex flex-col justify-center items-center w-screen p-4 h-auto mb-60 m-10">
                <h2 className="text-white text-2xl font-bold mb-4 text-center">Parameters Form</h2>
                <Form className="border-2 p-4 rounded-lg border-blue-500 flex flex-col justify-center  w-2/4">
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
                        <div className="flex flex-row m-4">
                            <label className="text-white  m-4 mr-2 p-2">SubThemes:</label>
                            <ItemCounter setCounter={setSubThemesNumber} />
                        </div>
                        <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" type="submit"> Send </button>
                    </div>
                </Form>
            </div>
        </Formik>
    );
}