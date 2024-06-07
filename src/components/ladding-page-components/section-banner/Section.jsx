import image1 from "../../../assets/section-banner1.png";
import image2 from "../../../assets/section-banner2.png";
import image3 from "../../../assets/section-banner3.png";
import image4 from "../../../assets/section-banner4.png";
import { motion } from "framer-motion";
import "./style.css";

export const SectionBanner = () => {
    return (
        <div className="section-banner">
            <motion.img
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0 }}
                src={image1}
                alt=""
            />
            <motion.img
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                src={image2}
                alt=""
            />
            <motion.img
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                src={image3}
                alt=""
            />
            <motion.img
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                src={image4}
                alt=""
            />
        </div>
    );
};
