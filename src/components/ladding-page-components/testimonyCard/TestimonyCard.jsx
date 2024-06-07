import "./style.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { motion } from "framer-motion";

export const TestimonyCard = ({ title, subtitle, content, image }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="testimony-card"
        >
            <div className="testimony-content">
                <div>
                    <h2>{title}</h2>
                    <h3>{subtitle}</h3>
                </div>

                <p>{content}</p>
            </div>
            <img src={image} alt="" />
        </motion.div>
    );
};
