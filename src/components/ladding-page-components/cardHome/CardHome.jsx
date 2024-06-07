import "./style.css";
import { motion } from "framer-motion";
export const CardHome = (props) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: props.delay }}
            className={`card-home ${props.color}`}
        >
            <img src={props.image} alt="" />
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </motion.div>
    );
};
