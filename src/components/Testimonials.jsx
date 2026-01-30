import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import elec from "../assets/testimonials/elec.jpg";

const testimonials = [
  {
    name: "Arun Kumar",
    role: "Home Owner",
    text: "Professional work and excellent finishing. Highly recommended.",
    image: elec,
  },
  {
    name: "Priya Sharma",
    role: "Office Manager",
    text: "Clean wiring and on-time delivery. Very satisfied.",
    image: elec,
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="testimonials-section">
      <h2 className="section-title">What Our Clients Say</h2>

      <div className="testimonial-wrapper">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="testimonial-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
          >
            {/* arrows INSIDE card */}
            <button className="arrow left" onClick={prev}>‹</button>
            <button className="arrow right" onClick={next}>›</button>

            <img
              src={testimonials[index].image}
              alt={testimonials[index].name}
              className="testimonial-img"
            />

            <p className="testimonial-text">
              “{testimonials[index].text}”
            </p>

            <h4 className="testimonial-name">
              {testimonials[index].name}
            </h4>
            <span className="testimonial-role">
              {testimonials[index].role}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Testimonials;
