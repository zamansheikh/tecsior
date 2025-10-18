"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, User, Search, ArrowRight, BookOpen, TrendingUp, Lightbulb, Target, Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Posts")
  const blogPosts = [
    {
      slug: "future-mobile-app-development-2024",
      title: "The Future of Mobile App Development in 2024",
      excerpt: "Explore the latest trends, technologies, and best practices shaping mobile app development this year.",
      author: "Alex Johnson",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "Mobile Development",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop&crop=center",
      featured: true,
      tags: ["React Native", "Flutter", "iOS", "Android"],
      content: `
        <h2>The Evolution of Mobile Development</h2>
        <p>Mobile app development has undergone tremendous transformation over the past decade. From native development to cross-platform frameworks, the landscape continues to evolve rapidly. In 2024, we're seeing unprecedented innovation that promises to reshape how we build and deploy mobile applications.</p>

        <h2>Key Trends Shaping 2024</h2>
        <h3>1. Cross-Platform Frameworks Dominance</h3>
        <p>React Native and Flutter continue to lead the cross-platform development space. With improved performance, better native integrations, and extensive community support, these frameworks are now mature enough for enterprise applications.</p>

        <h3>2. AI-Powered Development Tools</h3>
        <p>Artificial intelligence is revolutionizing mobile development. From code generation to automated testing, AI tools are helping developers build better apps faster. Tools like GitHub Copilot and Appy Pie are making development more accessible.</p>

        <h3>3. 5G and Edge Computing</h3>
        <p>The widespread adoption of 5G networks is enabling new possibilities for mobile applications. Edge computing allows for real-time processing and reduced latency, opening doors for augmented reality and IoT applications.</p>

        <h2>Best Practices for 2024</h2>
        <ul>
          <li>Adopt modular architecture for better maintainability</li>
          <li>Implement comprehensive testing strategies</li>
          <li>Focus on user experience and accessibility</li>
          <li>Consider performance optimization from day one</li>
          <li>Plan for scalability and future updates</li>
        </ul>

        <h2>Looking Ahead</h2>
        <p>The future of mobile app development is bright. With emerging technologies like AR/VR, machine learning, and advanced AI integration, developers have unprecedented opportunities to create innovative solutions that enhance user experiences and solve real-world problems.</p>
      `,
    },
    {
      slug: "building-scalable-backend-apis-nodejs",
      title: "Building Scalable Backend APIs with Node.js",
      excerpt: "Learn how to design and implement robust, scalable backend services that can handle millions of requests.",
      author: "Sarah Chen",
      date: "March 12, 2024",
      readTime: "12 min read",
      category: "Backend Development",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop&crop=center",
      featured: true,
      tags: ["Node.js", "API Design", "Scalability", "Performance"],
      content: `
        <h2>Why Node.js for Scalable APIs?</h2>
        <p>Node.js has become the go-to choice for building scalable backend APIs. Its event-driven, non-blocking I/O model makes it perfect for handling high-concurrency applications. Combined with JavaScript's ubiquity, it allows for full-stack development with a single language.</p>

        <h2>Architecture Principles</h2>
        <h3>Microservices vs Monolithic</h3>
        <p>Understanding when to use microservices versus monolithic architecture is crucial. While microservices offer better scalability and maintainability, they also introduce complexity in deployment and inter-service communication.</p>

        <h3>Database Design</h3>
        <p>Choosing the right database and designing efficient schemas is fundamental. Whether you opt for SQL databases like PostgreSQL or NoSQL solutions like MongoDB, the key is understanding your data access patterns and query requirements.</p>

        <h2>Performance Optimization</h2>
        <ul>
          <li>Implement caching strategies (Redis, in-memory)</li>
          <li>Use connection pooling for databases</li>
          <li>Implement rate limiting and request throttling</li>
          <li>Optimize database queries and indexes</li>
          <li>Use compression for API responses</li>
        </ul>

        <h2>Security Best Practices</h2>
        <p>Security should be baked into your API design from the start. Implement proper authentication, authorization, input validation, and protection against common vulnerabilities like SQL injection and XSS attacks.</p>

        <h2>Monitoring and Maintenance</h2>
        <p>Building scalable APIs is just the beginning. Implementing comprehensive monitoring, logging, and automated testing ensures your APIs remain reliable and performant as they grow.</p>
      `,
    },
    {
      slug: "ui-ux-design-trends-2024",
      title: "UI/UX Design Trends That Will Dominate 2024",
      excerpt: "Discover the design trends that are reshaping user experiences and how to implement them effectively.",
      author: "Mike Rodriguez",
      date: "March 10, 2024",
      readTime: "6 min read",
      category: "Design",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop&crop=center",
      featured: false,
      tags: ["UI/UX", "Design Trends", "User Experience"],
      content: `
        <h2>The Evolution of Digital Design</h2>
        <p>UI/UX design continues to evolve at a rapid pace, driven by technological advancements and changing user expectations. In 2024, we're seeing a convergence of design principles that prioritize user-centric experiences above all else.</p>

        <h2>Key Design Trends</h2>
        <h3>1. Dark Mode Everywhere</h3>
        <p>Dark mode has moved beyond being a preference to becoming an expectation. Modern applications must support both light and dark themes, with seamless transitions between them.</p>

        <h3>2. Micro-Interactions</h3>
        <p>Small, thoughtful animations and interactions that provide feedback and enhance user engagement. These subtle details can significantly improve the overall user experience.</p>

        <h3>3. Voice User Interfaces</h3>
        <p>With the rise of voice assistants and smart devices, designing for voice interactions is becoming increasingly important. This includes both spoken commands and voice feedback.</p>

        <h2>Accessibility First</h2>
        <p>Inclusive design is no longer optional. WCAG 2.1 compliance and accessibility best practices should be integrated into every design process from the beginning.</p>

        <h2>Tools and Technologies</h2>
        <p>Modern design tools like Figma, Adobe XD, and Sketch continue to evolve, offering better collaboration features and design systems. The rise of design tokens and component libraries ensures consistency across platforms.</p>

        <h2>The Future of Design</h2>
        <p>As technology advances, design will continue to push boundaries. From AR/VR experiences to AI-assisted design, the future promises exciting possibilities for creating meaningful user experiences.</p>
      `,
    },
    {
      slug: "devops-best-practices-modern-web-apps",
      title: "DevOps Best Practices for Modern Web Applications",
      excerpt: "A comprehensive guide to implementing DevOps practices that improve deployment speed and reliability.",
      author: "Emily Davis",
      date: "March 8, 2024",
      readTime: "10 min read",
      category: "DevOps",
      image: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=500&h=300&fit=crop&crop=center",
      featured: false,
      tags: ["DevOps", "CI/CD", "Docker", "Kubernetes"],
      content: `
        <h2>What is DevOps?</h2>
        <p>DevOps represents a cultural shift that bridges the gap between development and operations teams. It's about fostering collaboration, automation, and continuous improvement throughout the software development lifecycle.</p>

        <h2>Core DevOps Practices</h2>
        <h3>Continuous Integration (CI)</h3>
        <p>Regularly merging code changes into a central repository, followed by automated testing. This practice helps catch bugs early and ensures code quality.</p>

        <h3>Continuous Deployment (CD)</h3>
        <p>Automating the release process to deploy applications quickly and reliably. CD ensures that software can be released to production at any time.</p>

        <h3>Infrastructure as Code</h3>
        <p>Managing and provisioning infrastructure through machine-readable definition files. Tools like Terraform and CloudFormation make infrastructure changes repeatable and versioned.</p>

        <h2>Essential Tools</h2>
        <ul>
          <li><strong>Version Control:</strong> Git, GitHub, GitLab</li>
          <li><strong>CI/CD:</strong> Jenkins, GitHub Actions, CircleCI</li>
          <li><strong>Containerization:</strong> Docker, Kubernetes</li>
          <li><strong>Monitoring:</strong> Prometheus, Grafana, ELK Stack</li>
          <li><strong>Cloud Platforms:</strong> AWS, Azure, Google Cloud</li>
        </ul>

        <h2>Security in DevOps (DevSecOps)</h2>
        <p>Integrating security practices throughout the development pipeline. This includes automated security testing, vulnerability scanning, and compliance checks.</p>

        <h2>Measuring Success</h2>
        <p>Key metrics to track include deployment frequency, lead time for changes, change failure rate, and mean time to recovery. These metrics help teams continuously improve their DevOps practices.</p>

        <h2>Getting Started</h2>
        <p>Begin with small, incremental changes. Start by automating your build and test processes, then gradually expand to include deployment automation and infrastructure management.</p>
      `,
    },
    {
      slug: "securing-web-applications-developer-guide",
      title: "Securing Your Web Applications: A Developer's Guide",
      excerpt: "Essential security practices every developer should know to protect applications from common vulnerabilities.",
      author: "David Wilson",
      date: "March 5, 2024",
      readTime: "9 min read",
      category: "Security",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&h=300&fit=crop&crop=center",
      featured: false,
      tags: ["Security", "Web Development", "Best Practices"],
      content: `
        <h2>Why Security Matters</h2>
        <p>In today's digital landscape, security is not optional—it's essential. A single security breach can compromise user data, damage your reputation, and result in significant financial losses. As developers, we have a responsibility to build secure applications from the ground up.</p>

        <h2>Common Vulnerabilities</h2>
        <h3>SQL Injection</h3>
        <p>One of the most common web vulnerabilities. Always use parameterized queries or ORM libraries to prevent malicious SQL code execution.</p>

        <h3>Cross-Site Scripting (XSS)</h3>
        <p>Attackers inject malicious scripts into web pages viewed by other users. Sanitize all user input and use Content Security Policy (CSP) headers.</p>

        <h3>Cross-Site Request Forgery (CSRF)</h3>
        <p>Tricks users into performing unwanted actions. Implement CSRF tokens and validate request origins.</p>

        <h2>Authentication & Authorization</h2>
        <h3>Strong Password Policies</h3>
        <p>Enforce complex passwords and implement multi-factor authentication (MFA). Never store passwords in plain text—always use strong hashing algorithms like bcrypt.</p>

        <h3>Session Management</h3>
        <p>Use secure session cookies with appropriate flags (HttpOnly, Secure, SameSite). Implement session timeouts and proper logout functionality.</p>

        <h2>Data Protection</h2>
        <ul>
          <li>Encrypt sensitive data at rest and in transit</li>
          <li>Implement proper access controls (RBAC)</li>
          <li>Use HTTPS everywhere</li>
          <li>Regular security audits and penetration testing</li>
          <li>Keep dependencies updated and monitor for vulnerabilities</li>
        </ul>

        <h2>Security Headers</h2>
        <p>Implement essential security headers like:</p>
        <ul>
          <li>Content Security Policy (CSP)</li>
          <li>X-Frame-Options</li>
          <li>X-Content-Type-Options</li>
          <li>Strict-Transport-Security</li>
          <li>Referrer-Policy</li>
        </ul>

        <h2>Monitoring & Response</h2>
        <p>Implement logging and monitoring to detect suspicious activities. Have an incident response plan ready and regularly test your security measures.</p>

        <h2>Continuous Learning</h2>
        <p>Security is an ongoing process. Stay updated with the latest threats and best practices through resources like OWASP, security blogs, and conferences.</p>
      `,
    },
    {
      slug: "rise-ai-software-development",
      title: "The Rise of AI in Software Development",
      excerpt: "How artificial intelligence is transforming the way we write code and build applications.",
      author: "Lisa Thompson",
      date: "March 3, 2024",
      readTime: "7 min read",
      category: "AI & Technology",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop&crop=center",
      featured: false,
      tags: ["AI", "Machine Learning", "Development Tools"],
      content: `
        <h2>AI's Impact on Development</h2>
        <p>Artificial intelligence is revolutionizing software development in ways we couldn't have imagined just a few years ago. From code generation to automated testing, AI tools are making developers more productive and helping democratize software creation.</p>

        <h2>Code Generation & Assistance</h2>
        <h3>AI-Powered Code Completion</h3>
        <p>Tools like GitHub Copilot and Tabnine use machine learning to suggest code completions, reducing repetitive coding tasks and helping developers focus on higher-level problem-solving.</p>

        <h3>Automated Code Review</h3>
        <p>AI systems can analyze code for bugs, security vulnerabilities, and style issues, providing instant feedback and suggestions for improvement.</p>

        <h2>Testing & Quality Assurance</h2>
        <p>AI is transforming testing practices:</p>
        <ul>
          <li>Automated test case generation</li>
          <li>Visual regression testing</li>
          <li>Performance anomaly detection</li>
          <li>Intelligent bug prioritization</li>
        </ul>

        <h2>Design & UX</h2>
        <p>AI tools are helping designers create better user experiences:</p>
        <ul>
          <li>Automated wireframe generation</li>
          <li>User behavior analysis</li>
          <li>A/B testing optimization</li>
          <li>Accessibility compliance checking</li>
        </ul>

        <h2>DevOps & Deployment</h2>
        <h3>Intelligent Monitoring</h3>
        <p>AI-powered monitoring systems can predict failures, optimize performance, and automatically scale resources based on usage patterns.</p>

        <h3>Automated Deployment</h3>
        <p>Machine learning algorithms can optimize deployment strategies, predict deployment success rates, and automatically roll back problematic releases.</p>

        <h2>Challenges & Considerations</h2>
        <h3>Code Quality</h3>
        <p>While AI can generate code quickly, ensuring code quality and maintainability remains a human responsibility. AI-generated code should always be reviewed and tested.</p>

        <h3>Security Concerns</h3>
        <p>AI systems trained on public code repositories may inadvertently include security vulnerabilities or licensing issues in generated code.</p>

        <h2>The Future of AI in Development</h2>
        <p>As AI technology continues to advance, we can expect:</p>
        <ul>
          <li>More sophisticated code generation</li>
          <li>AI-assisted architecture design</li>
          <li>Automated documentation</li>
          <li>Intelligent project management</li>
          <li>Personalized development environments</li>
        </ul>

        <h2>Embracing AI as a Developer</h2>
        <p>Rather than fearing AI, developers should embrace it as a powerful tool that augments human capabilities. The most successful developers will be those who learn to effectively collaborate with AI systems, using them to handle routine tasks while focusing on creative problem-solving and innovation.</p>
      `,
    },
  ]

  const categories = [
    { name: "All Posts", count: blogPosts.length },
    { name: "Mobile Development", count: blogPosts.filter(post => post.category === "Mobile Development").length },
    { name: "Web Development", count: blogPosts.filter(post => post.category === "Web Development").length },
    { name: "Backend Development", count: blogPosts.filter(post => post.category === "Backend Development").length },
    { name: "Design", count: blogPosts.filter(post => post.category === "Design").length },
    { name: "DevOps", count: blogPosts.filter(post => post.category === "DevOps").length },
    { name: "Security", count: blogPosts.filter(post => post.category === "Security").length },
    { name: "AI & Technology", count: blogPosts.filter(post => post.category === "AI & Technology").length },
  ]

  // Filter posts based on selected category
  const filteredPosts = selectedCategory === "All Posts"
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory)

  const featuredPosts = filteredPosts.filter(post => post.featured)
  const regularPosts = filteredPosts.filter(post => !post.featured)

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Hero Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-emerald-200/30 to-teal-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-cyan-200/30 to-blue-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 md:px-6 relative">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <Badge
              variant="outline"
              className="border-emerald-200 text-emerald-700 bg-emerald-50/50 backdrop-blur-sm px-6 py-3 rounded-full text-base"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Tech Insights & Tutorials
            </Badge>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Our{" "}
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Tech Blog
              </span>
            </h1>

            <p className="text-xl text-slate-600 max-w-[800px] mx-auto leading-relaxed">
              Stay ahead of the curve with our latest insights, tutorials, and industry trends. Learn from our experts
              and discover the technologies shaping the future.
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                <Input
                  placeholder="Search articles..."
                  className="pl-10 rounded-full border-slate-200 focus:border-emerald-500 focus:ring-emerald-500 bg-white/80 backdrop-blur-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center space-y-6 mb-16">
            <Badge
              variant="outline"
              className="border-emerald-200 text-emerald-700 bg-emerald-50/50 backdrop-blur-sm px-6 py-3 rounded-full"
            >
              <TrendingUp className="mr-2 h-5 w-5" />
              Featured Articles
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Latest{" "}
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Tech Insights
              </span>
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {featuredPosts
              .map((post, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={500}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Badge className="absolute top-4 left-4 bg-emerald-500 hover:bg-emerald-600 text-white">
                      {post.category}
                    </Badge>
                  </div>
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-4 text-sm text-slate-500 mb-4">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {post.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-600 transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-slate-600 mb-4 leading-relaxed">{post.excerpt}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {post.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Link href={`/blog/${post.slug}`}>
                      <Button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-full group">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-4">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm sticky top-8">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="mr-2 h-5 w-5 text-emerald-600" />
                    Categories
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {categories.map((category, index) => (
                    <Button
                      key={index}
                      variant={selectedCategory === category.name ? "default" : "ghost"}
                      onClick={() => setSelectedCategory(category.name)}
                      className={`w-full justify-between rounded-xl ${selectedCategory === category.name
                        ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white"
                        : "hover:bg-emerald-50 text-slate-700"
                        }`}
                    >
                      <span>{category.name}</span>
                      <Badge variant={selectedCategory === category.name ? "secondary" : "outline"} className="ml-2">
                        {category.count}
                      </Badge>
                    </Button>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Posts Grid */}
            <div className="lg:col-span-3">
              <div className="grid gap-8 md:grid-cols-2">
                {regularPosts
                  .map((post, index) => (
                    <Card
                      key={index}
                      className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-white/80 backdrop-blur-sm"
                    >
                      <div className="relative overflow-hidden">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          width={500}
                          height={300}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <Badge className="absolute top-3 left-3 bg-cyan-500 hover:bg-cyan-600 text-white text-xs">
                          {post.category}
                        </Badge>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-3 text-xs text-slate-500 mb-3">
                          <div className="flex items-center">
                            <User className="h-3 w-3 mr-1" />
                            {post.author}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            {post.date}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {post.readTime}
                          </div>
                        </div>

                        <h3 className="text-lg font-bold mb-2 group-hover:text-cyan-600 transition-colors line-clamp-2">
                          {post.title}
                        </h3>

                        <p className="text-slate-600 text-sm mb-4 leading-relaxed line-clamp-3">{post.excerpt}</p>

                        <div className="flex flex-wrap gap-1 mb-4">
                          {post.tags.slice(0, 2).map((tag, tagIndex) => (
                            <Badge key={tagIndex} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                          {post.tags.length > 2 && (
                            <Badge variant="secondary" className="text-xs">
                              +{post.tags.length - 2}
                            </Badge>
                          )}
                        </div>

                        <Link href={`/blog/${post.slug}`}>
                          <Button
                            size="sm"
                            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-full w-full group"
                          >
                            Read Article
                            <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 py-6 text-lg border-2 hover:bg-emerald-50 hover:border-emerald-200 bg-transparent"
                >
                  <Lightbulb className="mr-2 h-5 w-5" />
                  Load More Articles
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600"></div>
        <div className="absolute inset-0 bg-black/10"></div>

        <div className="container mx-auto max-w-7xl px-4 md:px-6 relative">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">
              Stay Updated with{" "}
              <span className="relative">
                Tech Trends
                <div className="absolute -bottom-2 left-0 right-0 h-3 bg-white/20 rounded-full transform rotate-1"></div>
              </span>
            </h2>
            <p className="text-xl text-emerald-100 max-w-[700px] mx-auto leading-relaxed">
              Subscribe to our newsletter and get the latest tech insights, tutorials, and industry news delivered
              straight to your inbox.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <Input
                placeholder="Enter your email"
                className="rounded-full bg-white/90 backdrop-blur-sm border-0 text-slate-800 placeholder:text-slate-500"
              />
              <Button
                size="lg"
                className="bg-white text-emerald-600 hover:bg-emerald-50 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-full px-8 font-semibold whitespace-nowrap"
              >
                <Heart className="mr-2 h-5 w-5" />
                Subscribe
              </Button>
            </div>

            <p className="text-sm text-emerald-100/80">
              Join 5,000+ developers who trust our insights. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
