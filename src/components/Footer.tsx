import { Link } from "react-router-dom";
import { Facebook, Linkedin, MessageCircle, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    quickLinks: [
      { name: "Home", path: "/" },
      { name: "Scholarships", path: "/blog" },
      { name: "About Us", path: "/about" },
      { name: "Contact", path: "/contact" },
    ],
    community: [
      { name: "Join WhatsApp", path: "/community" },
      { name: "Facebook Page", path: "/community" },
      { name: "LinkedIn", path: "/community" },
    ],
  };

  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      url: "#",
      color: "hover:text-blue-600",
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: "#",
      color: "hover:text-green-500",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "#",
      color: "hover:text-blue-500",
    },
  ];

  return (
    <footer className="bg-muted border-t border-border mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-xl">E</span>
              </div>
              <span className="font-heading font-bold text-2xl text-foreground">ENA</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Empowering underprivileged South Sudanese youth through education, leadership, and scholarship opportunities.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg bg-background hover:bg-primary transition-all ${social.color}`}
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Community</h3>
            <ul className="space-y-2">
              {footerLinks.community.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <a
                href="mailto:info@ena-community.org"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Mail size={16} />
                <span>info@ena-community.org</span>
              </a>
              <p className="text-muted-foreground text-sm">
                South Sudan
              </p>
            </div>
          </div>

          {/* Admin */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Admin</h3>
            <div className="space-y-2">
              <Link
                to="/admin"
                className="text-muted-foreground hover:text-primary transition-colors text-sm block"
              >
                Login to Dashboard
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col items-center space-y-4 text-center">
            <p className="text-muted-foreground text-sm">
              © {currentYear} ENA - Education Needs All. All rights reserved.
            </p>
            <div className="flex flex-col items-center space-y-2">
              <p className="text-muted-foreground text-sm">
                Designed and Built by{" "}
                <a
                  href="https://www.linkedin.com/in/simon-akuien-atem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium transition-colors"
                >
                  Simon Akuien Atem
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
