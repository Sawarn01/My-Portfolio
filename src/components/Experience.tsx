
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const experiences = [
    {
      role: "Web Developer",
      company: "Digital Health Bharat", 
      location: "Remote",
      timeline: "January 2025 – August 2025",
      description: [
        "Developed a platform for patients to manage their health records",
        "Built medication tracking and reminder systems",
        "Created doctor appointment scheduling functionality",
        "Implemented secure patient data management with privacy compliance"
      ]
    },
    {
      role: "Frontend Developer",
      company: "AxesFlow",
      location: "Remote", 
      timeline: "March 2024 – January 2025",
      description: [
        "Increased clients' subscribers by 50% by integrating email marketing software into their websites",
        "Developed a customizable checkout process for e-commerce clients",
        "Built responsive user interfaces using React and modern CSS frameworks",
        "Collaborated with design teams to implement pixel-perfect UI components"
      ]
    },
    {
      role: "Full Stack Developer",
      company: "Foolsman",
      location: "Remote", 
      timeline: "June 2025 – August 2025",
      description: [
        "Matrix styled Terminal Admin-User Chat Application",
        "Admin can send messages to all users",
        "Users can send messages to admin",
        "Implemented real-time chat functionality using WebSockets",
        "Designed a sleek, terminal-like user interface with React and Tailwind CSS"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-section-title gradient-text-secondary mb-6">Experience</h2>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            My professional journey in the world of technology
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-secondary md:transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-secondary rounded-full border-4 border-background md:transform md:-translate-x-1/2 z-10" />

                {/* Content Card */}
                <div className={`flex-1 ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <div className="glass rounded-xl p-6 hover-lift">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center">
                          <Briefcase className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-card-title gradient-text mb-1">
                          {exp.role}
                        </h3>
                        <p className="text-lg font-medium text-foreground mb-2">
                          {exp.company}
                        </p>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-foreground-muted mb-4">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">{exp.timeline}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm">{exp.location}</span>
                          </div>
                        </div>

                        <ul className="space-y-2">
                          {exp.description.map((item, i) => (
                            <li key={i} className="text-foreground-muted flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                              <span className="text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
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

export default Experience;
