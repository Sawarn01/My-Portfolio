
import { motion } from "framer-motion";
import { Heart, Github, Linkedin, Mail, ExternalLink, Globe, SmileIcon, HammerIcon, X, TwitchIcon, TwitterIcon } from "lucide-react";
import { HeadRow } from "react-day-picker";

const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "http://github.com/Sawarn01"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/sashwat-roy888/"
    },
    {
      name: "Twitter",
      icon: TwitterIcon,
      href: "https://x.com/just_sawarn",
    },
    {
      name: "Website",
      icon: Globe,
      href: "https://www.sashwatsawarn.site"
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:hello@sashwatsawarn.site"
    }
  ];

  return (
    <footer className="py-12 px-4 border-t border-border-muted">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center space-y-6"
        >
          {/* Social Links */}
          <div className="flex items-center space-x-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : '_self'}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="w-10 h-10 bg-surface-card hover:bg-gradient-primary rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                  <link.icon className="w-5 h-5 text-foreground-muted group-hover:text-white transition-colors" />
                </div>
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center space-y-2"
          >
            <p className="text-foreground-muted flex items-center justify-center gap-2">
              Developed<HammerIcon className="w-4 h-4 text-red-500 animate-pulse" /> by Sashwat Roy
            </p>
            <p className="text-sm text-foreground-subtle">
              © {new Date().getFullYear()} All rights reserved. Based in Patna, Bihar
            </p>
          </motion.div>

          {/* Back to Top */}
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-2 text-foreground-muted hover:text-foreground transition-colors"
          >
            <span className="text-sm">Back to top</span>
            <ExternalLink className="w-4 h-4 rotate-90 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
