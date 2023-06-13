import Layout from "@/Layout/Layout";
import { useSlideContext } from "@/context/slide.context";
import getSubThemes from "@/root/funtions/getSubThemes";
import { useEffect } from "react";

export default function Generator() {
    const { slideContextPrompt } = useSlideContext();

    return (
        <Layout>
            <div>
                {slideContextPrompt}
            </div>
        </Layout>
    );
}