import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Target, Heart, Users, BookOpen, Lightbulb, Shield } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Empowerment",
      description: "We believe in empowering youth to take control of their educational journey and future.",
    },
    {
      icon: Users,
      title: "Community",
      description: "We foster a supportive community where youth can connect, learn, and grow together.",
    },
    {
      icon: BookOpen,
      title: "Access to Education",
      description: "We are committed to making education accessible to all, regardless of background or circumstances.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We continuously seek innovative ways to connect youth with opportunities and resources.",
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "We operate with transparency, honesty, and accountability in all our interactions.",
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in every resource we share and every connection we facilitate.",
    },
  ];

  const team = [
    {
      name: "Simon Akuien Atem",
      role: "Founder & Director",
      description: "Visionary leader driving ENA's mission to empower South Sudanese youth through education and opportunity access.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format",
      linkedin: "#",
    },
    {
      name: "Dr. Mary Wani",
      role: "Scholarship Coordinator",
      description: "Expert in identifying and curating scholarship opportunities from around the world for our community members.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face&auto=format",
      linkedin: "#",
    },
    {
      name: "James Lual",
      role: "Community Manager",
      description: "Building and nurturing our vibrant community across WhatsApp, Facebook, and LinkedIn platforms.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format",
      linkedin: "#",
    },
    {
      name: "Sarah Nyibol",
      role: "Content Creator",
      description: "Creating engaging educational content and success stories that inspire our community members.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face&auto=format",
      linkedin: "#",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-accent/10 to-background py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30">
                <Users size={18} className="text-primary" />
                <span className="text-sm font-medium">Founded 2024 • 500+ Youth Empowered</span>
              </div>

              <h1 className="font-heading font-bold">About ENA</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Education Needs All is a youth empowerment initiative dedicated to bridging the education gap for underprivileged South Sudanese youth through access to scholarships, mentorship, and community support.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Card className="p-8 md:p-12 shadow-md">
                <h2 className="font-heading font-bold text-3xl mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    ENA (Education Needs All) was born from a simple yet powerful realization: countless talented and motivated South Sudanese youth were missing out on life-changing educational opportunities simply because they didn't know where to look or how to apply.
                  </p>
                  <p>
                    Founded by a group of passionate volunteers who had themselves benefited from scholarships, ENA started as a small WhatsApp group sharing scholarship links. What began with just 20 members has now grown into a thriving community of over 500 youth, all supporting each other's educational dreams.
                  </p>
                  <p>
                    Today, ENA operates across multiple platforms—WhatsApp, Facebook, and LinkedIn—providing not just scholarship information, but comprehensive support including application guidance, mentorship, motivational content, and a strong peer network.
                  </p>
                  <p>
                    Our mission remains unchanged: to ensure that every South Sudanese youth with the determination to succeed has access to the information, guidance, and support they need to pursue higher education and achieve their dreams.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
              <Card className="p-8 shadow-md">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="text-primary" size={32} />
                </div>
                <h2 className="font-heading font-bold text-3xl mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To empower underprivileged South Sudanese youth by providing accessible information about scholarship opportunities, comprehensive application guidance, mentorship, and a supportive community that enables them to pursue higher education and achieve their full potential.
                </p>
              </Card>

              <Card className="p-8 shadow-md">
                <div className="w-16 h-16 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
                  <Heart className="text-secondary" size={32} />
                </div>
                <h2 className="font-heading font-bold text-3xl mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  A South Sudan where every youth, regardless of their economic background, has equal access to quality education and the opportunity to develop into future leaders, entrepreneurs, and change-makers who will contribute to building a peaceful and prosperous nation.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Our Core Values</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="text-primary" size={24} />
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Meet Our Team</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Dedicated volunteers working to empower youth
              </p>
            </div>

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card
                  key={index}
                  className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 ring-2 ring-primary/20">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-primary mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Our Impact</h2>
                <p className="text-xl text-muted-foreground">
                  Making a difference in young lives
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center space-y-2">
                  <p className="text-4xl md:text-5xl font-bold text-primary">500+</p>
                  <p className="text-muted-foreground">Youth Reached</p>
                </div>
                <div className="text-center space-y-2">
                  <p className="text-4xl md:text-5xl font-bold text-primary">100+</p>
                  <p className="text-muted-foreground">Scholarships Shared</p>
                </div>
                <div className="text-center space-y-2">
                  <p className="text-4xl md:text-5xl font-bold text-primary">50+</p>
                  <p className="text-muted-foreground">Success Stories</p>
                </div>
                <div className="text-center space-y-2">
                  <p className="text-4xl md:text-5xl font-bold text-primary">3</p>
                  <p className="text-muted-foreground">Active Platforms</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
