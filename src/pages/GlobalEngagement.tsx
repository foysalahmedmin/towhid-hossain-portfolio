import { ArrowRight, Calendar, CheckCircle, MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";
import globalPresence from "../assets/data/globalPresence";

export default function GlobalEngagement() {
  const impactMetrics = [
    {
      number: "15+",
      label: "Countries",
      description: "Active business presence",
    },
    {
      number: "20+",
      label: "Partnerships",
      description: "Global strategic alliances",
    },
    {
      number: "1k+",
      label: "People Reached",
      description: "Through global initiatives",
    },
    {
      number: "50+",
      label: "Global Events",
      description: "Annual speaking engagements",
    },
  ];

  const upcomingEvents = [
    {
      title: "Global Leadership Summit",
      date: "April 15-17, 2024",
      location: "London, UK",
      type: "Keynote Speaker",
      audience: "500+ Global Leaders",
      topics: [
        "Digital Transformation",
        "Future of Leadership",
        "Global Innovation",
      ],
    },
    {
      title: "Asia Pacific Business Forum",
      date: "May 10-12, 2024",
      location: "Singapore",
      type: "Panel Moderator",
      audience: "300+ Business Leaders",
      topics: ["Market Expansion", "Regional Collaboration", "Innovation"],
    },
    {
      title: "Tech Innovation Conference",
      date: "June 5-7, 2024",
      location: "San Francisco, USA",
      type: "Featured Speaker",
      audience: "1000+ Industry Leaders",
      topics: ["AI in Business", "Digital Strategy", "Future Tech"],
    },
  ];

  const globalInitiatives = [
    {
      title: "BPO Excellence & Job Creation",
      description: "Leading digital innovation across global markets",
      achievements: [
        "Expanding BPO services across global markets",
        "Creating thousands of jobs in multiple sectors",
        "Providing training to build skilled workforces",
      ],
    },
    {
      title: "Sustainable Business Practices",
      description: "Promoting sustainable practices worldwide",
      achievements: [
        "Replacing plastic with eco-friendly jute goods",
        "Launching green projects in 10+ global regions",
        "Cutting carbon emissions by 30% worldwide",
      ],
    },
    {
      title: "Empowering Communities",
      description: "Building next-generation global leaders",
      achievements: [
        "Training 500+ women and minority workers",
        "Building leaders through global mentorships",
        "Achieving 90% success in growth programs",
      ],
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative min-h-[60vh] flex items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000"
          alt="Global Engagement"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-600/80"></div>
        <div className="relative h-full container mx-auto px-6 flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">Global Engagement</h1>
            <p className="text-xl opacity-90">
              Driving innovation, fostering collaboration, and creating lasting
              impact across international markets through strategic leadership
              and sustainable practices.
            </p>
          </div>
        </div>
      </div>

      {/* Impact Metrics */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg text-center transform hover:scale-105 transition-transform duration-300"
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {metric.number}
                </div>
                <div className="font-semibold mb-2">{metric.label}</div>
                <div className="text-sm text-gray-600">
                  {metric.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Global Presence */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-16 text-center">
            Global Presence
          </h2>
          <div className="space-y-20">
            {globalPresence?.map((region, index) => (
              <Link
                key={index}
                to={"/global-presence" + "/" + region?.id}
                target="_blank"
                className="relative block hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <div className="relative h-[300px]">
                    <img
                      src={region.image}
                      alt={region.region}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-8 text-white">
                      <h3 className="text-3xl font-bold mb-4">
                        {region.region}
                      </h3>
                      <div className="grid grid-cols-3 gap-8">
                        <div>
                          <div className="text-2xl font-bold">
                            {region.metrics.partnerships}
                          </div>
                          <div className="text-sm opacity-80">Partnerships</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold">
                            {region.metrics.reach}
                          </div>
                          <div className="text-sm opacity-80">
                            People Reached
                          </div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold">
                            {region.metrics.events}
                          </div>
                          <div className="text-sm opacity-80">
                            Annual Events
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold mb-4">Key Initiatives</h4>
                        <ul className="space-y-3">
                          {region.initiatives.map((initiative, i) => (
                            <li key={i} className="flex items-center space-x-2">
                              <CheckCircle className="w-5 h-5 text-blue-600" />
                              <span>{initiative}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-4">Key Markets</h4>
                        <div className="grid grid-cols-2 gap-3">
                          {region.keyMarkets.map((market, i) => (
                            <div
                              key={i}
                              className="flex items-center space-x-2 text-gray-600"
                            >
                              <MapPin className="w-4 h-4 text-blue-600" />
                              <span>{market}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Global Initiatives */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-16 text-center">
            Global Impact & Sustainable Growth
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {globalInitiatives.map((initiative, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4">
                  {initiative.title}
                </h3>
                <p className="text-gray-600 mb-6">{initiative.description}</p>
                <div className="space-y-3">
                  {initiative.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Upcoming Global Events */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-16 text-center">
            Upcoming Global Events
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold">{event.title}</h3>
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Calendar className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Users className="w-5 h-5 text-blue-600" />
                    <span>{event.audience}</span>
                  </div>
                  <div>
                    <div className="font-semibold mb-2">Topics:</div>
                    <div className="flex flex-wrap gap-2">
                      {event.topics.map((topic, i) => (
                        <span
                          key={i}
                          className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-20">
        <div className="container mx-auto px-6 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Go Global?</h2>
          <p className="text-xl mb-8 opacity-90">
            Connect with us to explore international business opportunities and
            strategic partnerships
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors"
          >
            Get in Touch <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
}
