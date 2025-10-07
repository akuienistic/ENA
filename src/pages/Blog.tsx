import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Calendar, ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import blogStudy from "@/assets/blog-study.jpg";
import blogNetworking from "@/assets/blog-networking.jpg";
import ScrollToTop from "@/components/ScrollToTop";

// Sample blog posts (will be replaced with database data)
const samplePosts = [
  {
    id: 1,
    title: "Fully Funded Mastercard Foundation Scholarships 2025",
    excerpt: "Discover comprehensive scholarship opportunities covering tuition, accommodation, and living expenses for African students.",
    category: "Scholarships",
    date: "2025-01-15",
    image: blogStudy,
  },
  {
    id: 2,
    title: "How to Write a Winning Scholarship Essay",
    excerpt: "Learn proven strategies and tips to craft compelling scholarship essays that stand out from the competition.",
    category: "Guides",
    date: "2025-01-12",
    image: blogNetworking,
  },
  {
    id: 3,
    title: "Top 10 Scholarships for South Sudanese Students",
    excerpt: "A curated list of the best scholarship opportunities specifically available for South Sudanese youth in 2025.",
    category: "Scholarships",
    date: "2025-01-10",
    image: blogStudy,
  },
  {
    id: 4,
    title: "Success Story: From South Sudan to Harvard",
    excerpt: "An inspiring journey of perseverance and determination that led one student to achieve their dream education.",
    category: "Motivation",
    date: "2025-01-08",
    image: blogStudy,
  },
  {
    id: 5,
    title: "Scholarship Interview Preparation Guide",
    excerpt: "Master the art of scholarship interviews with expert tips, common questions, and practice strategies.",
    category: "Guides",
    date: "2025-01-05",
    image: blogNetworking,
  },
  {
    id: 6,
    title: "African Union Scholarship Programme 2025",
    excerpt: "Complete information about the AU scholarship program, eligibility criteria, and application deadlines.",
    category: "Scholarships",
    date: "2025-01-03",
    image: blogStudy,
  },
];

const categories = ["All", "Scholarships", "Guides", "Motivation"];

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = samplePosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <ScrollToTop />

      <main className="flex-grow">
        {/* Page Header */}
        <section className="bg-gradient-to-br from-primary/10 via-accent/10 to-background py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30">
                <BookOpen size={18} className="text-primary" />
                <span className="text-sm font-medium">100+ Scholarships Available</span>
              </div>

              <h1 className="font-heading font-bold">Scholarships & Resources</h1>
              <p className="text-xl text-muted-foreground">
                Your gateway to education opportunities, application guides, and motivational stories
              </p>

              {/* Search Bar */}
              <div className="relative max-w-2xl mx-auto mt-8">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                <Input
                  type="text"
                  placeholder="Search scholarships, guides, stories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 py-6 text-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 border-b border-border bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {filteredPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <Card
                    key={post.id}
                    className="overflow-hidden hover:shadow-lg hover:scale-105 transition-all duration-300 group animate-fade-in"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                        {post.category}
                      </Badge>
                    </div>

                    <div className="p-6 space-y-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar size={14} />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>

                      <h3 className="font-heading font-semibold text-xl line-clamp-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>

                      <p className="text-muted-foreground line-clamp-3">
                        {post.excerpt}
                      </p>

                      <Button asChild variant="link" className="p-0 h-auto group/btn">
                        <Link to={`/blog/${post.id}`}>
                          Read More
                          <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-xl text-muted-foreground">
                  No posts found matching your search criteria
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
