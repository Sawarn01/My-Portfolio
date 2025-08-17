import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projects = [
    {
      title: "Digital Health Bharat",
      description:
        "Comprehensive healthcare management platform for patients to track health records, medications, and schedule doctor appointments with secure data handling.",
      image: "https://limegreen-jaguar-967852.hostingersite.com/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-16-at-23.06.38-scaled.jpeg",
      tags: ["React", "Node.js", "Healthcare", "Security"],
      liveUrl: "https://digitalhealthbharat.com",
      githubUrl: "#",
    },
    {
      title: "AxesFlow",
      description:
        "Increased clients' subscribers by 50% by integrating email marketing software into their websites and making a customizable checkout process.",
      image: "https://limegreen-jaguar-967852.hostingersite.com/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-16-at-22.56.58-scaled.jpeg",
      tags: ["React", "Email Marketing", "E-commerce", "UI/UX"],
      liveUrl: "https://axesflow.com",
      githubUrl: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "Modern, responsive portfolio website showcasing web development skills with clean design and smooth animations built with React and Tailwind CSS.",
      image: "https://limegreen-jaguar-967852.hostingersite.com/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-16-at-23.08.01-scaled.jpeg",
      tags: ["React", "Tailwind CSS", "Framer Motion", "Responsive"],
      liveUrl: "https://www.sashwatsawarn.site",
      githubUrl: "#",
    },
    {
      title: "Terminal Styled Chat Application",
      description:
        "Matrix styled Terminal Admin-User Chat Application. Admin can send messages to all users and users can send messages to admin. Implemented real-time chat functionality using WebSockets. Designed a sleek, terminal-like user interface with React and Tailwind CSS",
      image: "https://limegreen-jaguar-967852.hostingersite.com/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-17-at-09.27.37-scaled.jpeg",
      tags: ["React", "Tailwind CSS", "Framer Motion", "Responsive", "Firebase Realtime", "Web Sockets"],
      liveUrl: "https://protocol.foolsman.site",
      githubUrl: "#",
    },
    {
      title: "Resume Analyzer & Enhancer",
      description:
        "AI Based Resume analyzer and enahancements recommender along with personalised resume builder. Designed a sleek and modern dashboard user interface with React and Tailwind CSS",
      image: "https://limegreen-jaguar-967852.hostingersite.com/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-17-at-17.11.30-scaled.jpeg",
      tags: ["React", "Tailwind CSS", "Framer Motion", "Responsive", "Supabase", "API Integration", "Gemini"],
      liveUrl: "https://careerdive.in",
      githubUrl: "#",
    },
    {
      title: "Inventory Management System",
      description:
        "AxesFlow's Inventory Management Application for coworking businesses. Specialised in dynamice and daily use management. Automated alarming and query sending functionality. Designed a sleek and modern dashboard user interface with React and Tailwind CSS",
      image: "https://limegreen-jaguar-967852.hostingersite.com/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-17-at-17.35.34-scaled.jpeg",
      tags: ["React", "Tailwind CSS", "Framer Motion", "Responsive", "Supabase", "API Integration", "Cron Jobs"],
      liveUrl: "https://axesflow.app",
      githubUrl: "#",
    },
  ];

  const openInNewTab = (url) => {
    if (url && url !== "#") {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-section-title gradient-text mb-6">Portfolio</h2>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            Showcase of projects that demonstrate my skills and creativity
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="glass rounded-xl overflow-hidden hover-lift group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48 bg-surface-elevated">
  <img
    src={project.image}
    alt={project.title}
    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
  />

  {/* Hover overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
    <div className="flex gap-3">
      <Button
        variant="hero"
        size="sm"
        onClick={() => openInNewTab(project.liveUrl)}
      >
        <ExternalLink className="w-4 h-4 mr-2" />
        Live Demo
      </Button>
      <Button
        variant="hero-outline"
        size="sm"
        onClick={() => openInNewTab(project.githubUrl)}
      >
        <Github className="w-4 h-4 mr-2" />
        Code
      </Button>
    </div>
  </div>
</div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-card-title gradient-text-accent mb-3">
                  {project.title}
                </h3>
                <p className="text-foreground-muted mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs bg-surface-elevated text-foreground-muted rounded-full border border-border-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    variant="hero"
                    size="sm"
                    className="flex-1"
                    onClick={() => openInNewTab(project.liveUrl)}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View
                  </Button>
                  <Button
                    variant="hero-outline"
                    size="sm"
                    className="flex-1"
                    onClick={() => openInNewTab(project.githubUrl)}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
