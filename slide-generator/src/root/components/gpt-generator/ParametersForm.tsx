import { CustomInput } from "../formik";
import { Formik, Form } from 'formik';

interface FormValues {
    theme: string;
    type: string;
    language: string;
    subThemesNumber: string;
}

export default function BuyForm() {
    const initialValues: FormValues = {} as FormValues;

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            <div className=" flex flex-col justify-center items-center w-full p-4 h-auto mb-60 m-10">
                <h1 className="text-2xl font-bold mb-4 text-center">Purchase Form</h1>
                <Form className="flex flex-col justify-center w-2/4">
                    <div className="max-h-96">
                        <CustomInput label="Date:" name="date" inputType="date" />
                        <div className="flex justify-between">
                            <div className="flex justify-between">
                            </div>
                        </div>
                    </div>
                </Form>
            </div>
        </Formik>
    );
}
