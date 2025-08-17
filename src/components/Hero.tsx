
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Download, Mail, Sparkles } from "lucide-react";

const Hero = () => {
  const handleDownloadResume = () => {
  const link = document.createElement("a");
  link.href = "https://drive.google.com/uc?export=download&id=1w2fLvzBpTf7aMAOpahpp7nXbjM-PNSEl";
  link.download = "Sashwat_Roy_Resume.pdf"; // Suggested filename
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  // Animation variants with proper TypeScript types
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  };

  const floatingVariants = {
    float: {
      y: [-20, 20, -20],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 4,
        ease: [0.42, 0, 0.58, 1] as const,
        repeat: Infinity
      }
    }
  };

  const nameVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
        type: "spring" as const,
        stiffness: 100
      }
    }
  };

  const buttonHoverVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: [0.42, 0, 0.58, 1] as const
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Primary floating orb */}
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-primary rounded-full opacity-20 blur-3xl"
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -40, 20, 0],
            scale: [1, 1.1, 0.9, 1]
          }}
          transition={{
            duration: 8,
            ease: [0.42, 0, 0.58, 1],
            repeat: Infinity
          }}
        />
        
        {/* Secondary floating orb */}
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-secondary rounded-full opacity-15 blur-3xl"
          animate={{
            x: [0, -25, 35, 0],
            y: [0, 30, -25, 0],
            scale: [1, 0.8, 1.2, 1]
          }}
          transition={{
            duration: 10,
            ease: [0.42, 0, 0.58, 1],
            repeat: Infinity,
            delay: 2
          }}
        />
        
        {/* Center accent orb */}
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-accent rounded-full opacity-5 blur-3xl"
          animate={{
            scale: [1, 1.05, 0.95, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity
          }}
        />

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary rounded-full opacity-40"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [-20, -60, -20],
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 3 + i * 0.5,
              ease: [0.42, 0, 0.58, 1],
              repeat: Infinity,
              delay: i * 0.3
            }}
          />
        ))}
      </div>

      <motion.div 
        className="relative z-10 text-center max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Decorative element */}
        <motion.div
          className="flex justify-center mb-6"
          variants={itemVariants}
        >
          <motion.div
            className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20"
            variants={floatingVariants}
            animate="float"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-foreground-muted">Available for work</span>
            <Sparkles className="w-4 h-4 text-primary" />
          </motion.div>
        </motion.div>

        {/* Main heading with enhanced animation */}
        <motion.h1 
          className="text-hero gradient-text mb-6"
          variants={nameVariants}
        >
          Sashwat Roy
        </motion.h1>
        
        {/* Subtitle with typewriter effect */}
        <motion.p 
          className="text-lg md:text-xl lg:text-2xl text-foreground-muted mb-8 max-w-2xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          Web Designer & Developer with 3+ years of turning caffeine into clean code 
          and pixel-perfect designs. Also fluent in "client language" — can translate 
          "make it pop" into real design magic.
        </motion.p>

        {/* Enhanced buttons with hover effects */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          variants={itemVariants}
        >
          <motion.div
            variants={buttonHoverVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Button 
              variant="hero" 
              size="lg"
              onClick={handleScrollToContact}
              className="group relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
              <Mail className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform relative z-10" />
              <span className="relative z-10">Contact Me</span>
            </Button>
          </motion.div>
          
          <motion.div
            variants={buttonHoverVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Button 
              variant="hero-outline" 
              size="lg"
              onClick={handleDownloadResume}
              className="group relative overflow-hidden"
            >
              <Download className="w-5 h-5 mr-2 group-hover:translate-y-1 transition-transform" />
              Download Resume
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Enhanced scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            ease: [0.42, 0, 0.58, 1],
            repeat: Infinity
          }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-foreground-subtle uppercase tracking-wider">Scroll Down</span>
          <ChevronDown className="w-6 h-6 text-foreground-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
