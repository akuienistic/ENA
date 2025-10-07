import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowLeft, ArrowRight } from "lucide-react";
import ScrollToTop from "@/components/ScrollToTop";
import blogStudy from "@/assets/blog-study.jpg";
import blogNetworking from "@/assets/blog-networking.jpg";

// Sample blog posts data (shared with Blog.tsx)
const samplePosts = [
  {
    id: 1,
    title: "Fully Funded Mastercard Foundation Scholarships 2025",
    category: "Scholarships",
    date: "2025-01-15",
    image: blogStudy,
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
  },
  {
    id: 2,
    title: "How to Write a Winning Scholarship Essay",
    category: "Guides",
    date: "2025-01-12",
    image: blogNetworking,
    content: `
      <h2>Introduction</h2>
      <p>Writing a scholarship essay is your opportunity to showcase your unique story, experiences, and aspirations. A compelling essay can make the difference between receiving funding or missing out.</p>

      <h2>Understanding the Prompt</h2>
      <p>Before you start writing, carefully analyze the essay prompt. What specific qualities or experiences are they looking for? Make sure you address all aspects of the question.</p>

      <h2>Structure Your Essay</h2>
      <p>A strong scholarship essay typically follows this structure:</p>
      <ul>
        <li><strong>Introduction:</strong> Grab attention with a compelling hook</li>
        <li><strong>Body:</strong> Develop your story with specific examples</li>
        <li><strong>Conclusion:</strong> Tie everything together and restate your goals</li>
      </ul>

      <h2>Key Elements of Success</h2>
      <ul>
        <li>Be authentic and genuine</li>
        <li>Use specific examples and anecdotes</li>
        <li>Show rather than tell</li>
        <li>Demonstrate self-awareness</li>
        <li>Connect your past experiences to future goals</li>
      </ul>
    `,
  },
  {
    id: 3,
    title: "Top 10 Scholarships for South Sudanese Students",
    category: "Scholarships",
    date: "2025-01-10",
    image: blogStudy,
    content: `
      <h2>Overview</h2>
      <p>South Sudanese students have access to numerous scholarship opportunities worldwide. Here are the top 10 scholarships that South Sudanese students should consider for 2025.</p>

      <h2>1. Mastercard Foundation Scholars Program</h2>
      <p>Full funding for undergraduate and graduate studies at partner universities across Africa and beyond.</p>

      <h2>2. African Leadership Academy Scholarships</h2>
      <p>Two-year pre-university program in South Africa with full funding and leadership development.</p>

      <h2>3. Mandela Rhodes Scholarship</h2>
      <p>Postgraduate funding for students studying in South Africa with a focus on leadership and reconciliation.</p>

      <h2>4. Chevening Scholarships</h2>
      <p>UK government scholarships for master's degrees at any UK university.</p>

      <h2>5. Commonwealth Scholarships</h2>
      <p>Various opportunities for master's and PhD studies in the UK.</p>

      <h2>6. DAAD Scholarships</h2>
      <p>German Academic Exchange Service scholarships for study and research in Germany.</p>

      <h2>7. Australia Awards</h2>
      <p>Full scholarships for undergraduate and postgraduate study in Australia.</p>

      <h2>8. Swedish Institute Scholarships</h2>
      <p>Funding for master's level studies in Sweden.</p>

      <h2>9. Holland Scholarship</h2>
      <p>Merit-based scholarships for international students studying in the Netherlands.</p>

      <h2>10. Norwegian Quota Scholarship Scheme</h2>
      <p>Funding for bachelor's, master's, and PhD programs in Norway.</p>
    `,
  },
  {
    id: 4,
    title: "Success Story: From South Sudan to Harvard",
    category: "Motivation",
    date: "2025-01-08",
    image: blogStudy,
    content: `
      <h2>The Beginning</h2>
      <p>Born and raised in Juba, South Sudan, Mary's journey to Harvard University seemed impossible. Growing up during a time of conflict and instability, she faced challenges that would deter most people from pursuing higher education.</p>

      <h2>Overcoming Challenges</h2>
      <p>Despite limited resources and educational opportunities, Mary excelled in her studies. She walked miles to school each day and studied by candlelight when electricity was unavailable. Her determination caught the attention of teachers who encouraged her to apply for scholarships.</p>

      <h2>The Scholarship Application Process</h2>
      <p>Mary applied to multiple scholarship programs, spending months preparing applications, essays, and recommendation letters. Her persistence paid off when she received the Mastercard Foundation Scholarship.</p>

      <h2>Life at Harvard</h2>
      <p>Arriving at Harvard was both exciting and challenging. Mary had to adapt to a new culture, climate, and academic system. However, with the support of the scholarship program and her own resilience, she thrived.</p>

      <h2>Giving Back</h2>
      <p>Today, Mary is not only a Harvard graduate but also an advocate for education in South Sudan. She regularly returns home to mentor young students and support educational initiatives.</p>

      <h2>Key Takeaways</h2>
      <ul>
        <li>Education can break cycles of poverty and conflict</li>
        <li>Persistence and determination are crucial</li>
        <li>Scholarship programs open doors that seem closed</li>
        <li>Success comes with a responsibility to give back</li>
      </ul>
    `,
  },
  {
    id: 5,
    title: "Scholarship Interview Preparation Guide",
    category: "Guides",
    date: "2025-01-05",
    image: blogNetworking,
    content: `
      <h2>Why Interviews Matter</h2>
      <p>Scholarship interviews are often the final stage in the selection process. They provide an opportunity for the selection committee to assess your personality, communication skills, and genuine interest in the scholarship program.</p>

      <h2>Preparation Strategies</h2>
      <p>Effective preparation is key to interview success:</p>
      <ul>
        <li>Research the scholarship organization thoroughly</li>
        <li>Practice common interview questions</li>
        <li>Prepare questions to ask the interviewers</li>
        <li>Dress professionally and appropriately</li>
        <li>Arrive early and be confident</li>
      </ul>

      <h2>Common Questions</h2>
      <p>Be prepared to answer questions like:</p>
      <ul>
        <li>Tell us about yourself</li>
        <li>Why do you deserve this scholarship?</li>
        <li>What are your career goals?</li>
        <li>How will you contribute to your community?</li>
        <li>What challenges have you overcome?</li>
      </ul>

      <h2>During the Interview</h2>
      <p>Remember these tips during your interview:</p>
      <ul>
        <li>Maintain good eye contact</li>
        <li>Speak clearly and confidently</li>
        <li>Use specific examples to support your answers</li>
        <li>Show enthusiasm and genuine interest</li>
        <li>Be honest and authentic</li>
      </ul>
    `,
  },
  {
    id: 6,
    title: "African Union Scholarship Programme 2025",
    category: "Scholarships",
    date: "2025-01-03",
    image: blogStudy,
    content: `
      <h2>Program Overview</h2>
      <p>The African Union Scholarship Programme aims to enhance the human resource capacity of African Union Member States. The program provides full scholarships for postgraduate studies in various fields.</p>

      <h2>Available Programs</h2>
      <p>The scholarship covers:</p>
      <ul>
        <li>Master's degree programs (2 years)</li>
        <li>PhD programs (3-4 years)</li>
        <li>Short-term specialized training programs</li>
      </ul>

      <h2>Eligibility Requirements</h2>
      <p>To be eligible for the AU Scholarship:</p>
      <ul>
        <li>Must be a citizen of an African Union Member State</li>
        <li>Age limit: 35 years for master's, 40 years for PhD</li>
        <li>Bachelor's degree for master's applicants</li>
        <li>Master's degree for PhD applicants</li>
        <li>Relevant work experience preferred</li>
      </ul>

      <h2>Fields of Study</h2>
      <p>The scholarship supports studies in:</p>
      <ul>
        <li>Agriculture and Food Security</li>
        <li>Health and Medical Sciences</li>
        <li>Engineering and Technology</li>
        <li>Natural Sciences</li>
        <li>Social Sciences and Governance</li>
        <li>Education and Training</li>
      </ul>

      <h2>Application Process</h2>
      <p>The application process involves:</p>
      <ol>
        <li>Online application through the AU portal</li>
        <li>Submission of academic transcripts</li>
        <li>Research proposal (for PhD applicants)</li>
        <li>Recommendation letters</li>
        <li>Language proficiency certificates</li>
      </ol>
    `,
  },
];

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

  // Find the post based on the ID parameter
  const post = samplePosts.find(p => p.id === parseInt(id || '1'));

  // If post not found, use the first post as fallback
  const currentPost = post || samplePosts[0];

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
                {currentPost.category}
              </Badge>

              <h1 className="font-heading font-bold text-4xl md:text-5xl">
                {currentPost.title}
              </h1>

              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar size={16} />
                <time>{new Date(currentPost.date).toLocaleDateString()}</time>
              </div>
            </header>

            {/* Featured Image */}
            <div className="rounded-2xl overflow-hidden mb-12 shadow-md">
              <img
                src={currentPost.image}
                alt={currentPost.title}
                className="w-full h-[400px] object-cover"
              />
            </div>

            {/* Article Content */}
            <div
              className="prose prose-lg prose-headings:font-heading prose-headings:text-foreground prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-p:text-foreground prose-p:leading-relaxed prose-p:mb-6 prose-ul:text-foreground prose-ol:text-foreground prose-li:mb-2 prose-strong:text-foreground max-w-none"
              dangerouslySetInnerHTML={{ __html: currentPost.content }}
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
