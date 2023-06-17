import Layout from "@/Layout/Layout";
import { useSlideContext } from "@/context/slide.context";
import { IntermediateForm, ParametersForm } from "@/root/components";
import MainSlide from "@/root/components/slides/main-slide/MainSlide";

export default function Home() {
  const { slideContextResponse, slide} = useSlideContext();
  return (
        <Layout>
            <div className="w-full">
                {slideContextResponse.length < 1 ? (<ParametersForm />) : ""}
                {slideContextResponse.length > 2 ? (slide.length > 0 ? (<MainSlide />) : (<IntermediateForm />)) : ""}
            </div>
        </Layout>
  )
}
