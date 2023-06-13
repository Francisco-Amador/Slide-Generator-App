import Layout from "@/Layout/Layout";
import { useSlideContext } from "@/context/slide.context";
import getSubThemes from "@/root/funtions/getSubThemes";
import { useEffect } from "react";
import { IntermediateForm } from "./intermediate-form/IntermediateForm";
import ParametersForm from "./ParametersForm";

export default function Generator() {
    const { slideContextResponse } = useSlideContext();

    return (
        <Layout>
            <div>
                <ParametersForm />
                {slideContextResponse.length > 2 ? (<IntermediateForm />) : ""}
            </div>

        </Layout>
    );
}