import React from 'react';
import { Github, Linkedin, Mail, Twitter, Briefcase, Users, Award, Calendar, Target, BarChart as ChartBar, Globe, Lightbulb, CheckCircle, Newspaper, Quote, ArrowRight } from 'lucide-react';

export default function Home() {
  const expertise = [
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "Strategic Vision",
      description: "Developing and executing transformative business strategies that drive sustainable growth."
    },
    {
      icon: <ChartBar className="w-8 h-8 text-blue-600" />,
      title: "Business Development",
      description: "Building strategic partnerships and expanding market presence across global markets."
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: "Global Leadership",
      description: "Leading diverse teams and managing international operations across multiple regions."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-blue-600" />,
      title: "Innovation",
      description: "Driving digital transformation and implementing cutting-edge business solutions."
    }
  ];

  const stats = [
    { number: "15+", label: "Years Experience" },
    { number: "500+", label: "Team Members" },
    { number: "50M+", label: "Revenue Generated" },
    { number: "20+", label: "Countries" }
  ];

  const achievements = [
    "Led digital transformation initiatives resulting in 150% revenue growth",
    "Successfully expanded operations into 20+ international markets",
    "Built and mentored high-performing teams of 500+ professionals",
    "Secured strategic partnerships with Fortune 500 companies"
  ];

  const testimonials = [
    {
      quote: "John's strategic vision and leadership have been instrumental in our company's transformation.",
      author: "Sarah Chen",
      position: "CEO, TechGlobal Inc."
    },
    {
      quote: "Working with John has been a game-changer for our business development initiatives.",
      author: "Michael Rodriguez",
      position: "Director, Innovation Labs"
    }
  ];

  const latestNews = [
    {
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800",
      title: "Keynote Speaker at Global Business Summit 2024",
      date: "March 15, 2024"
    },
    {
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
      title: "New Strategic Partnership Announcement",
      date: "March 10, 2024"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <header className="relative h-[60vh] bg-gradient-to-r from-blue-600 to-blue-800 pt-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-6 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-5xl font-bold mb-4">John Anderson</h1>
            <p className="text-xl mb-6">Business Development Executive & Community Leader</p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
                alt="John Anderson"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">About Me</h2>
              <p className="text-gray-600 mb-6">
                With over 15 years of experience in business development and community leadership,
                I specialize in building bridges between organizations and creating meaningful
                connections that drive growth and positive change.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Briefcase className="text-blue-600" />
                  <span>Business Strategy</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="text-blue-600" />
                  <span>Community Building</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="text-blue-600" />
                  <span>Leadership</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="text-blue-600" />
                  <span>Event Management</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Areas of Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Achievements Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Key Achievements</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <p className="text-gray-700">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Latest News</h2>
            <a href="/news" className="flex items-center text-blue-600 hover:text-blue-700">
              View All <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {latestNews.map((news, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg">
                <img src={news.image} alt={news.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{news.date}</p>
                  <h3 className="text-xl font-semibold mb-4">{news.title}</h3>
                  <a href="/news" className="text-blue-600 hover:text-blue-700">Read More</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">What People Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl relative">
                <Quote className="w-8 h-8 text-blue-600 mb-4" />
                <p className="text-gray-700 mb-6 text-lg">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-gray-600">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-xl mb-8 opacity-90">
            Looking to transform your business or need strategic guidance?
            Let's connect and explore how we can achieve your goals.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}