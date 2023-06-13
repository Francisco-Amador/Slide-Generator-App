import Layout from "@/Layout/Layout";
import { useSlideContext } from "@/context/slide.context";
import getSubThemes from "@/root/funtions/getSubThemes";
import { useEffect } from "react";
import { IntermediateForm } from "./intermediate-form/IntermediateForm";

export default function Generator() {
    const { slideContextPrompt } = useSlideContext();

    return (
        <Layout>
            <div>
                <IntermediateForm/>
                {slideContextPrompt}
            </div>
        </Layout>
    );
}