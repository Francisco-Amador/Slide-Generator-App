import * as Yup from "yup";
const maxDate = new Date();
maxDate.setDate(maxDate.getDate() + 3);
const paramsMessage = Yup.object().shape({
    theme: Yup.string().required("Theme is mandatory"),
    type: Yup.string().required("Type is mandatory"),
    language: Yup.string().required("Language is mandatory")
});
export default paramsMessage;
