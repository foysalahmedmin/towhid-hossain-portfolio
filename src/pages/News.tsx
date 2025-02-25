import { ArrowRight, Calendar, Globe, Tag, User } from "lucide-react";

export default function News() {
  const featuredNews = {
    image:
      "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=1400",
    title: "Revolutionizing Business Leadership in the Digital Age",
    source: "Global Business Review",
    date: "March 20, 2024",
    author: "Sarah Chen",
    category: "Leadership",
    excerpt:
      "John Anderson shares groundbreaking insights on navigating the complexities of modern business leadership and digital transformation strategies that are reshaping industries worldwide.",
    readTime: "8 min read",
    tags: ["Digital Transformation", "Leadership", "Innovation"],
  };

  const newsItems = [
    {
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
      title: "Leading Business Innovation in the Digital Age",
      source: "Business Weekly",
      date: "March 15, 2024",
      author: "Michael Rodriguez",
      category: "Innovation",
      excerpt:
        "An in-depth analysis of how strategic leadership and innovative approaches are transforming traditional business models and creating new opportunities in the digital landscape.",
      readTime: "6 min read",
      tags: ["Innovation", "Strategy", "Digital"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
      title: "The Future of Global Business Leadership",
      source: "Innovation Magazine",
      date: "March 10, 2024",
      author: "Emily Watson",
      category: "Global Business",
      excerpt:
        "Exploring the evolving landscape of global business leadership and the key strategies that will define success in the coming decades.",
      readTime: "5 min read",
      tags: ["Global", "Future", "Strategy"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
      title: "Sustainable Business Practices in Modern Organizations",
      source: "Global Business Review",
      date: "March 5, 2024",
      author: "David Chen",
      category: "Sustainability",
      excerpt:
        "A comprehensive look at implementing sustainable practices in modern business operations while maintaining profitability and growth.",
      readTime: "7 min read",
      tags: ["Sustainability", "Business", "Growth"],
    },
  ];

  const pressReleases = [
    {
      date: "March 18, 2024",
      title: "John Anderson to Keynote Global Leadership Summit 2024",
      excerpt:
        "Announcement of keynote speech on digital transformation and future of business leadership.",
    },
    {
      date: "March 12, 2024",
      title: "Strategic Partnership Announcement with Tech Innovation Hub",
      excerpt:
        "New collaboration to accelerate digital transformation initiatives across industries.",
    },
    {
      date: "March 8, 2024",
      title: "Launch of Global Mentorship Program",
      excerpt:
        "Initiative to support emerging business leaders in developing markets.",
    },
  ];

  const upcomingEvents = [
    {
      date: "April 15, 2024",
      event: "Digital Transformation Summit",
      location: "New York",
      role: "Keynote Speaker",
    },
    {
      date: "April 20, 2024",
      event: "Global Business Forum",
      location: "London",
      role: "Panel Moderator",
    },
    {
      date: "May 5, 2024",
      event: "Innovation Leadership Conference",
      location: "Singapore",
      role: "Featured Speaker",
    },
  ];

  const categories = [
    { name: "Leadership", count: 12 },
    { name: "Innovation", count: 8 },
    { name: "Digital Transformation", count: 15 },
    { name: "Global Business", count: 10 },
    { name: "Sustainability", count: 6 },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r min-h-[60vh] flex items-center from-blue-600 to-blue-800 py-24 mb-12">
        <div className="container mx-auto px-6 text-white">
          <h1 className="text-4xl font-bold mb-6">Latest News & Updates</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Stay informed about the latest developments, insights, and
            achievements in business leadership and digital transformation.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6">
        {/* Featured Article */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Featured Story</h2>
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
            <div className="relative h-[400px]">
              <img
                src={featuredNews.image}
                alt={featuredNews.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-blue-600 px-3 py-1 rounded-full text-sm">
                    {featuredNews.category}
                  </span>
                  <span className="flex items-center text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {featuredNews.date}
                  </span>
                  <span className="flex items-center text-sm">
                    <User className="w-4 h-4 mr-1" />
                    {featuredNews.author}
                  </span>
                </div>
                <h3 className="text-3xl font-bold mb-4">
                  {featuredNews.title}
                </h3>
                <p className="text-gray-200 mb-4">{featuredNews.excerpt}</p>
                <div className="flex items-center space-x-4">
                  <a
                    href="#"
                    className="flex items-center text-blue-400 hover:text-blue-300"
                  >
                    Read More <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                  <span className="text-sm">{featuredNews.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main News Content */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>
            <div className="space-y-8">
              {newsItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-[1.02]"
                >
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-48 w-full object-cover md:h-full"
                      />
                    </div>
                    <div className="p-6 md:w-2/3">
                      <div className="flex items-center space-x-4 mb-4">
                        <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                          {item.category}
                        </span>
                        <span className="text-gray-500 text-sm flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {item.date}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{item.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <span className="text-gray-500 text-sm flex items-center">
                            <User className="w-4 h-4 mr-1" />
                            {item.author}
                          </span>
                          <span className="text-gray-500 text-sm">
                            {item.readTime}
                          </span>
                        </div>
                        <a
                          href="#"
                          className="text-blue-600 hover:text-blue-700 flex items-center"
                        >
                          Read More <ArrowRight className="w-4 h-4 ml-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Categories */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-6">Categories</h3>
              <div className="space-y-3">
                {categories.map((category, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between hover:bg-gray-50 p-2 rounded"
                  >
                    <span className="flex items-center">
                      <Tag className="w-4 h-4 mr-2 text-blue-600" />
                      {category.name}
                    </span>
                    <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-sm">
                      {category.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Press Releases */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-6">Press Releases</h3>
              <div className="space-y-4">
                {pressReleases.map((release, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-100 last:border-0 pb-4 last:pb-0"
                  >
                    <div className="text-sm text-gray-500 mb-1">
                      {release.date}
                    </div>
                    <h4 className="font-semibold mb-2">{release.title}</h4>
                    <p className="text-gray-600 text-sm">{release.excerpt}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-6">Upcoming Events</h3>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 border-b border-gray-100 last:border-0 pb-4 last:pb-0"
                  >
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Calendar className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{event.event}</h4>
                      <p className="text-gray-600 text-sm">{event.date}</p>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <Globe className="w-4 h-4 mr-1" />
                        {event.location}
                      </div>
                      <div className="text-blue-600 text-sm mt-1">
                        {event.role}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="my-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
            <p className="mb-6 opacity-90">
              Subscribe to our newsletter for the latest insights, news, and
              updates delivered directly to your inbox.
            </p>
            <div className="flex max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-l-full text-gray-900 focus:outline-none"
              />
              <button className="bg-blue-900 px-6 py-2 rounded-r-full hover:bg-blue-800 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
