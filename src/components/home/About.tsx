import { BookOpen, Target, Heart } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <h2 className="font-heading font-bold text-primary">About ENA</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We believe every young person deserves access to quality education and opportunities to grow.
            </p>
          </div>

          {/* Main Description */}
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-soft mb-12 animate-slide-up">
            <p className="text-lg leading-relaxed text-card-foreground">
              <span className="font-semibold text-primary">ENA (Education Needs All)</span> empowers 
              underprivileged South Sudanese youth by connecting them with scholarship opportunities, 
              mentorship, and motivational guidance. Through our online platforms—including blogs, 
              events, and active social communities—we help young people discover and apply for 
              scholarships that can transform their lives.
            </p>
          </div>

          {/* Mission & Vision Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Target className="text-primary" size={24} />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To bridge the education gap by providing accessible information and guidance on 
                scholarship opportunities for South Sudanese youth.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                <Heart className="text-secondary" size={24} />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                A future where every South Sudanese youth has equal access to education and the 
                opportunity to reach their full potential.
              </p>
            </div>

            {/* Values */}
            <div className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-accent/30 flex items-center justify-center mb-4">
                <BookOpen className="text-accent-foreground" size={24} />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3">Core Values</h3>
              <p className="text-muted-foreground leading-relaxed">
                Empowerment, accessibility, community support, and the belief that education is 
                a fundamental right for all.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
