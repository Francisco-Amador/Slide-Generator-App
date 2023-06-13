import Layout from "@/Layout/Layout";
import { useSlideContext } from "@/context/slide.context";

export default function Generator () {
    const {slideContextValue} = useSlideContext();
    return (
        <Layout>
            <div>
                {slideContextValue}
            </div>
        </Layout>
    );
}