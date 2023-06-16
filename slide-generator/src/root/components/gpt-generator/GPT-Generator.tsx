import Layout from "@/Layout/Layout";
import { useSlideContext } from "@/context/slide.context";
import getSubThemes from "@/root/functions/getSubThemes";
import { useEffect } from "react";
import { IntermediateForm } from "./intermediate-form/IntermediateForm";
import ParametersForm from "./ParametersForm";
import ParagraphSlide from "../slides/paragraph-slide/ParagraphSlide";
import MainSlide from "../slides/main-slide/MainSlide";

export default function Generator() {
    const { slideContextResponse, slide} = useSlideContext();

    return (
        <Layout>
            <div className="w-full">
                <ParametersForm />
                {slideContextResponse.length > 2 ? (slide.length > 0 ? (<MainSlide />) : (<IntermediateForm />)) : ""}
            </div>
        </Layout>
    );
}