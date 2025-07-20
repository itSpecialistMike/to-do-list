import { motion } from "framer-motion";

export default function AnimatedBlock() {
    const box = {
        width: 100,
        height: 100,
        backgroundColor: "#40739e",
        borderRadius: 5,
    };
    return(
        
        <motion.div
            className="shadow-xl w-[100px] h-[100px] flex-shrink-0"
            animate={{
                scale: [1, 1.3, 1.3, 1],
                rotate: [0, 0, 180, 180, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                backgroundColor: ["#40739e", "#3498db", "#2ecc71", "#e67e22", "#40739e"]
            }}
            transition={{
                duration: 3,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1,
            }}
            />
    );
}