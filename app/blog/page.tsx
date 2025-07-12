import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, User, Search, ArrowRight, BookOpen, TrendingUp, Lightbulb, Target, Heart } from "lucide-react"
import Image from "next/image"

export default function BlogPage() {
  const blogPosts = [
    {
      title: "The Future of Mobile App Development in 2024",
      excerpt: "Explore the latest trends, technologies, and best practices shaping mobile app development this year.",
      author: "Alex Johnson",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "Mobile Development",
      image: "/placeholder.svg?height=300&width=500",
      featured: true,
      tags: ["React Native", "Flutter", "iOS", "Android"],
    },
    {
      title: "Building Scalable Backend APIs with Node.js",
      excerpt:
        "Learn how to design and implement robust, scalable backend services that can handle millions of requests.",
      author: "Sarah Chen",
      date: "March 12, 2024",
      readTime: "12 min read",
      category: "Backend Development",
      image: "/placeholder.svg?height=300&width=500",
      featured: true,
      tags: ["Node.js", "API Design", "Scalability", "Performance"],
    },
    {
      title: "UI/UX Design Trends That Will Dominate 2024",
      excerpt: "Discover the design trends that are reshaping user experiences and how to implement them effectively.",
      author: "Mike Rodriguez",
      date: "March 10, 2024",
      readTime: "6 min read",
      category: "Design",
      image: "/placeholder.svg?height=300&width=500",
      featured: false,
      tags: ["UI/UX", "Design Trends", "User Experience"],
    },
    {
      title: "DevOps Best Practices for Modern Web Applications",
      excerpt: "A comprehensive guide to implementing DevOps practices that improve deployment speed and reliability.",
      author: "Emily Davis",
      date: "March 8, 2024",
      readTime: "10 min read",
      category: "DevOps",
      image: "/placeholder.svg?height=300&width=500",
      featured: false,
      tags: ["DevOps", "CI/CD", "Docker", "Kubernetes"],
    },
    {
      title: "Securing Your Web Applications: A Developer's Guide",
      excerpt:
        "Essential security practices every developer should know to protect applications from common vulnerabilities.",
      author: "David Wilson",
      date: "March 5, 2024",
      readTime: "9 min read",
      category: "Security",
      image: "/placeholder.svg?height=300&width=500",
      featured: false,
      tags: ["Security", "Web Development", "Best Practices"],
    },
    {
      title: "The Rise of AI in Software Development",
      excerpt: "How artificial intelligence is transforming the way we write code and build applications.",
      author: "Lisa Thompson",
      date: "March 3, 2024",
      readTime: "7 min read",
      category: "AI & Technology",
      image: "/placeholder.svg?height=300&width=500",
      featured: false,
      tags: ["AI", "Machine Learning", "Development Tools"],
    },
  ]

  const categories = [
    { name: "All Posts", count: 24, active: true },
    { name: "Mobile Development", count: 8 },
    { name: "Web Development", count: 6 },
    { name: "Backend Development", count: 5 },
    { name: "Design", count: 4 },
    { name: "DevOps", count: 3 },
    { name: "Security", count: 2 },
    { name: "AI & Technology", count: 1 },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Hero Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-emerald-200/30 to-teal-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-cyan-200/30 to-blue-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container px-4 md:px-6 relative">
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
        <div className="container px-4 md:px-6">
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
            {blogPosts
              .filter((post) => post.featured)
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

                    <Button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-full group">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
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
                      variant={category.active ? "default" : "ghost"}
                      className={`w-full justify-between rounded-xl ${
                        category.active
                          ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white"
                          : "hover:bg-emerald-50 text-slate-700"
                      }`}
                    >
                      <span>{category.name}</span>
                      <Badge variant={category.active ? "secondary" : "outline"} className="ml-2">
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
                {blogPosts
                  .filter((post) => !post.featured)
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

                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-full w-full group"
                        >
                          Read Article
                          <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                        </Button>
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

        <div className="container px-4 md:px-6 relative">
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
