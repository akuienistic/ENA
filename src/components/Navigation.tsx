import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Shield, Sun, Moon, Home, GraduationCap, Users, Info, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Set dark mode as default
    document.documentElement.classList.add('dark');
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const navLinks = [
    { name: "Home", path: "/", icon: Home },
    { name: "Scholarships", path: "/blog", icon: GraduationCap },
    { name: "Community", path: "/community", icon: Users },
    { name: "About", path: "/about", icon: Info },
    { name: "Contact", path: "/contact", icon: Mail },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
              <span className="text-primary-foreground font-heading font-bold text-xl">E</span>
            </div>
            <span className="font-heading font-bold text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors">
              ENA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 font-medium transition-all ${
                  isActive(link.path)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4/5 h-0.5 bg-primary rounded-full animate-pulse"></span>
                )}
              </Link>
            ))}
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Admin Login Link & CTA Button */}
          <div className="hidden md:flex items-center space-x-3">
            <Link
              to="/admin"
              className="text-sm text-muted-foreground hover:text-primary transition-colors px-3 py-2 flex items-center gap-1"
            >
              <Shield className="w-4 h-4" />
              Admin Login Portal
            </Link>
            <Button asChild className="shadow-md hover:scale-105 hover:shadow-lg transition-all">
              <Link to="/blog">Find Scholarships</Link>
            </Button>
          </div>

          {/* Theme Toggle Mobile & Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-16 right-0 w-56 max-w-[45vw] bg-background/95 backdrop-blur-sm border-l border-border shadow-lg animate-fade-in overflow-hidden">
            <div className="py-4 space-y-2">
              {navLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 font-medium transition-all ${
                      isActive(link.path)
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    <IconComponent size={18} />
                    {link.name}
                  </Link>
                );
              })}
              <Link
                to="/admin"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-4 py-3 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Shield size={18} />
                Admin Login
              </Link>
              <Button asChild className="w-full mt-4 mx-2">
                <Link to="/blog" onClick={() => setIsOpen(false)}>
                  Find Scholarships
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
