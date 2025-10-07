import { GraduationCap, Briefcase, Heart } from "lucide-react";

const Impact = () => {
  const impacts = [
    {
      icon: GraduationCap,
      title: "Education Opportunities",
      description: "We share daily scholarship opportunities and provide step-by-step guidance on applications, essay writing, and interview preparation.",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Briefcase,
      title: "Entrepreneurship & Leadership",
      description: "Beyond scholarships, we foster entrepreneurial thinking and leadership skills through mentorship programs and community discussions.",
      color: "bg-secondary/10 text-secondary",
    },
    {
      icon: Heart,
      title: "Peace & Motivation",
      description: "We promote peace education and provide motivational support to help youth overcome challenges and stay focused on their goals.",
      color: "bg-accent/30 text-accent-foreground",
    },
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="font-heading font-bold">Our Impact</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transforming lives through education, leadership, and community support
          </p>
        </div>

        {/* Impact Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {impacts.map((impact, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-xl ${impact.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <impact.icon size={32} />
              </div>

              {/* Content */}
              <h3 className="font-heading font-semibold text-2xl mb-4">
                {impact.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {impact.description}
              </p>

              {/* Decorative gradient on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
