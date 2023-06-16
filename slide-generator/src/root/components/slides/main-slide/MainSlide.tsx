import BulletedSlide from "../bulleted-slide/BulletedSlide";
import ParagraphColumnsSlide from "../paragraph-colums-slide/ParagraphColumsSlide";
import ParagraphSlide from "../paragraph-slide/ParagraphSlide";

export default function MainSlide() {
    return (
        <div className="flex flex-row">
            <div className="flex flex-row">
                <ParagraphSlide />
                <ParagraphColumnsSlide/>
            </div>
            <div>
                <BulletedSlide />
            </div>
        </div>
    )
}