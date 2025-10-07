import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowLeft, ArrowRight } from "lucide-react";
import ScrollToTop from "@/components/ScrollToTop";

// Sample data - will be replaced with database
const samplePost = {
  id: 1,
  title: "Fully Funded Mastercard Foundation Scholarships 2025",
  category: "Scholarships",
  date: "2025-01-15",
  image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80",
  content: `
    <h2>Overview</h2>
    <p>The Mastercard Foundation Scholars Program is one of the most prestigious scholarship opportunities available for African students. This comprehensive program covers tuition, accommodation, books, and living expenses.</p>
    
    <h2>Eligibility Criteria</h2>
    <ul>
      <li>Must be a citizen of an African country</li>
      <li>Demonstrated financial need</li>
      <li>Strong academic performance</li>
      <li>Leadership potential and commitment to giving back</li>
      <li>Must be applying to or enrolled in a partner institution</li>
    </ul>
    
    <h2>What's Covered</h2>
    <p>The scholarship provides comprehensive support including:</p>
    <ul>
      <li>Full tuition fees</li>
      <li>Accommodation and meals</li>
      <li>Books and learning materials</li>
      <li>Travel expenses</li>
      <li>Health insurance</li>
      <li>Mentorship and career guidance</li>
    </ul>
    
    <h2>Application Process</h2>
    <p>To apply for the Mastercard Foundation Scholarship:</p>
    <ol>
      <li>Research partner universities and their programs</li>
      <li>Prepare your academic transcripts and certificates</li>
      <li>Write a compelling personal statement</li>
      <li>Secure strong recommendation letters</li>
      <li>Submit your application before the deadline</li>
    </ol>
    
    <h2>Tips for Success</h2>
    <p>Here are some key tips to strengthen your application:</p>
    <ul>
      <li>Start your application early</li>
      <li>Highlight your leadership experiences and community involvement</li>
      <li>Be authentic in your essays and personal statement</li>
      <li>Demonstrate how you plan to give back to your community</li>
      <li>Proofread everything carefully</li>
    </ul>
    
    <h2>Important Deadlines</h2>
    <p>Application deadlines vary by partner institution. Most fall between January and March 2025. Check the specific university's website for exact dates.</p>
  `,
};

const relatedPosts = [
  {
    id: 2,
    title: "How to Write a Winning Scholarship Essay",
    category: "Guides",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&q=80",
  },
  {
    id: 3,
    title: "Top 10 Scholarships for South Sudanese Students",
    category: "Scholarships",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&q=80",
  },
];

const BlogPost = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <ScrollToTop />

      <main className="flex-grow">
        <article className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            {/* Back Button */}
            <Button asChild variant="ghost" className="mb-8">
              <Link to="/blog">
                <ArrowLeft size={18} className="mr-2" />
                Back to Scholarships
              </Link>
            </Button>

            {/* Article Header */}
            <header className="space-y-6 mb-8">
              <Badge className="bg-primary text-primary-foreground">
                {samplePost.category}
              </Badge>

              <h1 className="font-heading font-bold text-4xl md:text-5xl">
                {samplePost.title}
              </h1>

              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar size={16} />
                <time>{new Date(samplePost.date).toLocaleDateString()}</time>
              </div>
            </header>

            {/* Featured Image */}
            <div className="rounded-2xl overflow-hidden mb-12 shadow-md">
              <img
                src={samplePost.image}
                alt={samplePost.title}
                className="w-full h-[400px] object-cover"
              />
            </div>

            {/* Article Content */}
            <div
              className="prose prose-lg prose-headings:font-heading prose-headings:text-foreground prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-p:text-foreground prose-p:leading-relaxed prose-p:mb-6 prose-ul:text-foreground prose-ol:text-foreground prose-li:mb-2 prose-strong:text-foreground max-w-none"
              dangerouslySetInnerHTML={{ __html: samplePost.content }}
            />

            {/* Call to Action */}
            <div className="mt-12 p-8 bg-accent/20 rounded-2xl border border-accent/30">
              <h3 className="font-heading font-semibold text-2xl mb-4">
                Need Help With Your Application?
              </h3>
              <p className="text-muted-foreground mb-6">
                Join our community for personalized guidance, mentorship, and support throughout your scholarship journey.
              </p>
              <Button asChild>
                <Link to="/community">Join Our Community</Link>
              </Button>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <h2 className="font-heading font-bold text-3xl mb-8">Related Articles</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {relatedPosts.map((post) => (
                <Card
                  key={post.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow group"
                >
                  <Link to={`/blog/${post.id}`}>
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

                    <div className="p-6">
                      <h3 className="font-heading font-semibold text-xl group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-4 text-primary">
                        <span className="text-sm font-medium">Read Article</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
