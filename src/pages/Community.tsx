import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Facebook, Linkedin, MessageCircle, Users, Calendar, MessageSquare, Mail } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Community = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Successfully subscribed!",
        description: "You'll receive updates about scholarships and events.",
      });
      setEmail("");
    }
  };

  const platforms = [
    {
      name: "WhatsApp Community",
      icon: MessageCircle,
      description: "Join our active WhatsApp group for daily scholarship links, peer support, and quick Q&A sessions. Connect with fellow students and get real-time updates.",
      benefits: [
        "Daily scholarship opportunities",
        "Peer-to-peer mentorship",
        "Quick application tips",
        "Motivational support",
      ],
      buttonText: "Join WhatsApp Group",
      buttonLink: "#",
      color: "bg-green-500 hover:bg-green-600",
      iconBg: "bg-green-500/10",
      iconColor: "text-green-600",
    },
    {
      name: "Facebook Page",
      icon: Facebook,
      description: "Follow our Facebook page for detailed posts, success stories, event announcements, and community discussions. Engage with a larger network of youth.",
      benefits: [
        "Detailed scholarship guides",
        "Success stories & motivation",
        "Event announcements",
        "Community discussions",
      ],
      buttonText: "Follow on Facebook",
      buttonLink: "#",
      color: "bg-blue-600 hover:bg-blue-700",
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-600",
    },
    {
      name: "LinkedIn Network",
      icon: Linkedin,
      description: "Connect with us on LinkedIn for professional networking, career opportunities, and insights from successful alumni. Build your professional presence.",
      benefits: [
        "Professional networking",
        "Career opportunities",
        "Alumni connections",
        "Leadership content",
      ],
      buttonText: "Connect on LinkedIn",
      buttonLink: "#",
      color: "bg-blue-500 hover:bg-blue-600",
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-500",
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
                <span className="text-sm font-medium">500+ Active Members</span>
              </div>

              <h1 className="font-heading font-bold">Join Our Community</h1>

              <p className="text-xl text-muted-foreground">
                Connect with fellow South Sudanese youth, access mentorship, and stay updated on scholarship opportunities across our active online platforms.
              </p>
            </div>
          </div>
        </section>

        {/* Community Platforms */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto space-y-12">
              {platforms.map((platform, index) => (
                <Card
                  key={platform.name}
                  className="overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                    <div className="space-y-6">
                      <div className={`w-16 h-16 rounded-xl ${platform.iconBg} flex items-center justify-center`}>
                        <platform.icon size={32} className={platform.iconColor} />
                      </div>

                      <div>
                        <h3 className="font-heading font-bold text-2xl mb-3">
                          {platform.name}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {platform.description}
                        </p>
                      </div>

                      <Button
                        asChild
                        className={`${platform.color} text-white shadow-md`}
                        size="lg"
                      >
                        <a href={platform.buttonLink} target="_blank" rel="noopener noreferrer">
                          <platform.icon size={18} className="mr-2" />
                          {platform.buttonText}
                        </a>
                      </Button>
                    </div>

                    <div className="bg-muted/30 rounded-xl p-6">
                      <h4 className="font-heading font-semibold text-lg mb-4">
                        What You'll Get:
                      </h4>
                      <ul className="space-y-3">
                        {platform.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Community Activities */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="font-heading font-bold">What Happens in Our Community?</h2>

              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                    <Calendar className="text-primary" size={24} />
                  </div>
                  <h3 className="font-heading font-semibold text-xl">Weekly Events</h3>
                  <p className="text-muted-foreground">
                    Live mentorship calls, Q&A sessions, and workshop events every week
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mx-auto">
                    <MessageSquare className="text-secondary" size={24} />
                  </div>
                  <h3 className="font-heading font-semibold text-xl">Daily Support</h3>
                  <p className="text-muted-foreground">
                    Get answers to your questions and motivation when you need it most
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/30 flex items-center justify-center mx-auto">
                    <Users className="text-accent-foreground" size={24} />
                  </div>
                  <h3 className="font-heading font-semibold text-xl">Peer Network</h3>
                  <p className="text-muted-foreground">
                    Connect with like-minded youth pursuing similar educational goals
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="max-w-2xl mx-auto p-8 md:p-12 text-center shadow-md">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Mail className="text-primary" size={28} />
              </div>

              <h2 className="font-heading font-bold text-3xl mb-4">
                Subscribe to Our Newsletter
              </h2>

              <p className="text-muted-foreground mb-8">
                Get weekly scholarship opportunities and updates delivered straight to your inbox
              </p>

              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-grow"
                  required
                />
                <Button type="submit" size="lg">
                  Subscribe
                </Button>
              </form>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Community;
