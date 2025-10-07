import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-accent/70" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mt-5 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 animate-fade-in">
            <BookOpen size={18} className="text-white" />
            <span className="text-sm font-medium text-white">Empowering Youth Through Education</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl leading-tight text-white animate-slide-up">
            Education <span className="text-secondary">Needs</span> All
          </h1>

          {/* Subheading */}
          <p
            className="text-xl md:text-2xl text-white/95 max-w-2xl mx-auto leading-relaxed animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Connecting underprivileged South Sudanese youth with scholarship opportunities, mentorship, and the guidance
            they need to achieve their dreams.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              asChild
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all group"
            >
              <Link to="/blog">
                Find Scholarships
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 shadow-md hover:scale-105 transition-all group"
            >
              <Link to="/community">
                <Users size={18} className="mr-2" />
                Join Our Community
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-3 gap-6 pt-12 max-w-2xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="space-y-1 mb-5 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all">
              <p className="text-3xl md:text-4xl font-bold text-white">500+</p>
              <p className="text-sm text-white/90">Youth Reached</p>
            </div>
            <div className="space-y-1 mb-5 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all">
              <p className="text-3xl md:text-4xl font-bold text-white">100+</p>
              <p className="text-sm text-white/90">Scholarships Shared</p>
            </div>
            <div className="space-y-1 mb-5 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all">
              <p className="text-3xl md:text-4xl font-bold text-white">50+</p>
              <p className="text-sm text-white/90">Success Stories</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
