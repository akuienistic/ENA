import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const Testimonials = () => {
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  const testimonials = [
    {
      name: "Grace Akol",
      role: "University Student",
      content: "ENA changed my life! Through their scholarship guidance, I secured a full scholarship to study engineering. The community support kept me motivated throughout the application process.",
      image: "GA",
    },
    {
      name: "James Deng",
      role: "Scholarship Recipient",
      content: "I never thought I'd have a chance at higher education. ENA not only helped me find scholarships but also taught me valuable skills in leadership and entrepreneurship.",
      image: "JD",
    },
    {
      name: "Mary Ajak",
      role: "Community Member",
      content: "The mentorship and daily motivation from ENA's community has been incredible. They don't just share opportunities—they genuinely care about our success and growth.",
      image: "MA",
    },
    {
      name: "Peter Garang",
      role: "Graduate",
      content: "Thanks to ENA, I'm now pursuing my master's degree abroad. The detailed application guides and interview tips were exactly what I needed to succeed.",
      image: "PG",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="font-heading font-bold">Success Stories</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from youth whose lives have been transformed through ENA
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-5xl mx-auto">
          <Carousel
            plugins={[plugin.current]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2">
                  <Card className="p-8 h-full shadow-sm hover:shadow-md transition-shadow bg-card">
                    <div className="flex flex-col h-full">
                      {/* Quote Icon */}
                      <Quote className="text-primary mb-4" size={32} />

                      {/* Testimonial Content */}
                      <p className="text-card-foreground leading-relaxed mb-6 flex-grow">
                        "{testimonial.content}"
                      </p>

                      {/* Author Info */}
                      <div className="flex items-center gap-4 pt-4 border-t border-border">
                        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                          {testimonial.image}
                        </div>
                        <div>
                          <p className="font-semibold text-card-foreground">
                            {testimonial.name}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-8">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
