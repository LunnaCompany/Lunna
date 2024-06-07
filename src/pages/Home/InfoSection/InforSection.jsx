import "./style.css";
import { motion } from "framer-motion";
import mainImg from "../../../assets/info-section-image.png";
import penciel from "../../../assets/pencil-info-section.png";
import { SectionBanner } from "../../../components/ladding-page-components/section-banner/Section";

export const InfoSection = ({ translateText }) => {
    return (
        <section className="info-home-lunna-section">
            <div className="box-info-home-lunna-section">
                <div className="box-content-info-home">
                    <div className="title-info-home">
                        <motion.h2
                            initial={{ opacity: 0, x: -25 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            {translateText.oque_acompanhamento_lunna}
                        </motion.h2>
                        <motion.img
                            initial={{ opacity: 0, x: 25 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            src={penciel}
                            alt="pincel"
                        />
                    </div>
                    <motion.p
                        initial={{ opacity: 0, y: -15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {translateText.info_section_main_text}
                    </motion.p>
                </div>
                <motion.img
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    src={mainImg}
                    alt=""
                />
            </div>

            <SectionBanner />
        </section>
    );
};
