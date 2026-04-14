import "./FeatureHighlight.css";
import { motion } from "framer-motion";

export default function FeatureHighlight() {
  return (
    <section className="feature-section">
      <div className="feature-container">

        <motion.h2
          className="feature-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Scroll-Based Animations
        </motion.h2>

        <motion.p
          className="feature-subtitle"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Transform static layouts into fluid experiences
        </motion.p>

        <motion.div
          className="feature-points"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <p>Delight users with seamless motion and interactions</p>
          <p>Stand out with a UI that feels alive and modern</p>
        </motion.div>

      </div>
    </section>
  );
}