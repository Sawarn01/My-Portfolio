
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Code2, 
  Palette, 
  Database, 
  Brain,
  Zap
} from "lucide-react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code2,
      skills: ["React", "Next.js", "Tailwind CSS"],
      color: "bg-gradient-primary"
    },
    {
      title: "Backend & Tools",
      icon: Database,
      skills: ["Python", "Node.js", "Figma"],
      color: "bg-gradient-secondary"
    },
    {
      title: "Emerging Technologies",
      icon: Brain,
      skills: ["Machine Learning", "IoTs"],
      color: "bg-gradient-accent"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-section-title gradient-text-accent mb-6">Skills & Expertise</h2>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="glass rounded-xl p-6 hover-lift group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ 
                      duration: 0.5, 
                      delay: (index * 0.1) + (skillIndex * 0.05) 
                    }}
                    className="flex items-center gap-2 group-hover:translate-x-2 transition-transform duration-300"
                  >
                    <Zap className="w-3 h-3 text-accent flex-shrink-0" />
                    <span className="text-foreground-muted text-sm">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
