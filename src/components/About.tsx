
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-section-title gradient-text-secondary mb-6">About Me</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass rounded-2xl p-8 md:p-12 hover-lift"
        >
          <div className="prose prose-lg max-w-none text-foreground-muted">
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              Hello, I'm Sashwat Roy, a Web Designer & Developer with 3+ years of turning caffeine 
              into clean code and pixel-perfect designs. I'm also fluent in "client language" — 
              I can translate "make it pop" into real design magic.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              I specialize in creating seamless user experiences with modern web technologies like 
              React, Next.js, and Tailwind CSS. My journey combines technical expertise with creative 
              design thinking, allowing me to build applications that not only function flawlessly 
              but also delight users.
            </p>

            <p className="text-lg md:text-xl leading-relaxed">
              Currently pursuing BS in Data Science & AI at IIT Jodhpur, I'm expanding my skills 
              into machine learning and IoT. When I'm not coding, you'll find me exploring the 
              latest design trends or wondering why my CSS isn't centering properly (it's always flexbox).
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
