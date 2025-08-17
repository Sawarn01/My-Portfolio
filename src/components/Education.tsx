
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const education = [
    {
      course: "BS in Data Science & AI",
      institute: "Indian Institute of Technology, Jodhpur",
      year: "2025 - 2029",
      description: "Specialized in Machine Learning Models and Software Development"
    },
    {
      course: "Senior Secondary (XII)",
      institute: "Shanti Niketan Shikshan Sansthan, Saharsa",
      year: "2022 - 2024",
      description: "Science Stream"
    }
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-section-title gradient-text mb-6">Education</h2>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            My academic journey that shaped my technical foundation
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-primary md:transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-primary rounded-full border-4 border-background md:transform md:-translate-x-1/2 z-10" />

                {/* Content Card */}
                <div className={`flex-1 ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <div className="glass rounded-xl p-6 hover-lift">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                          <GraduationCap className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-card-title gradient-text-accent mb-2">
                          {item.course}
                        </h3>
                        <p className="text-lg font-medium text-foreground mb-2">
                          {item.institute}
                        </p>
                        <div className="flex items-center gap-2 text-foreground-muted mb-3">
                          <Calendar className="w-4 h-4" />
                          <span>{item.year}</span>
                        </div>
                        <p className="text-foreground-muted">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
