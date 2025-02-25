import { ArrowRight, Calendar, CheckCircle, MapPin, Users } from "lucide-react";

export default function GlobalEngagement() {
  const globalPresence = [
    {
      region: "North America",
      image:
        "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?auto=format&fit=crop&q=80&w=1400",
      metrics: {
        partnerships: "50+",
        reach: "1M+",
        events: "25+",
      },
      initiatives: [
        "Strategic partnerships with Fortune 500 companies",
        "Innovation hubs in major tech corridors",
        "Leadership development programs",
      ],
      keyMarkets: ["New York", "San Francisco", "Toronto", "Chicago"],
    },
    {
      region: "Europe",
      image:
        "https://images.unsplash.com/photo-1485081669829-bacb8c7bb1f3?auto=format&fit=crop&q=80&w=1400",
      metrics: {
        partnerships: "40+",
        reach: "800K+",
        events: "20+",
      },
      initiatives: [
        "Digital transformation consulting",
        "Sustainable business practices",
        "Cross-border collaboration programs",
      ],
      keyMarkets: ["London", "Paris", "Berlin", "Amsterdam"],
    },
    {
      region: "Asia Pacific",
      image:
        "https://images.unsplash.com/photo-1480796927426-f609979314bd?auto=format&fit=crop&q=80&w=1400",
      metrics: {
        partnerships: "35+",
        reach: "1.2M+",
        events: "30+",
      },
      initiatives: [
        "Market expansion strategies",
        "Technology innovation centers",
        "Regional leadership forums",
      ],
      keyMarkets: ["Singapore", "Tokyo", "Sydney", "Shanghai"],
    },
  ];

  const impactMetrics = [
    {
      number: "15+",
      label: "Countries",
      description: "Active business presence",
    },
    {
      number: "5+",
      label: "Partnerships",
      description: "Global strategic alliances",
    },
    {
      number: "1k+",
      label: "People Reached",
      description: "Through global initiatives",
    },
    {
      number: "100+",
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
      title: "Digital Transformation",
      description: "Leading digital innovation across global markets",
      achievements: [
        "Implemented AI solutions in 15+ countries",
        "Reduced operational costs by 40%",
        "Increased digital adoption by 200%",
      ],
    },
    {
      title: "Sustainable Business",
      description: "Promoting sustainable practices worldwide",
      achievements: [
        "Launched green initiatives in 10+ regions",
        "Reduced carbon footprint by 30%",
        "Established sustainability guidelines",
      ],
    },
    {
      title: "Leadership Development",
      description: "Building next-generation global leaders",
      achievements: [
        "Mentored 500+ emerging leaders",
        "Created leadership programs in 12 countries",
        "90% program success rate",
      ],
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
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
            {globalPresence.map((region, index) => (
              <div key={index} className="relative">
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
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Global Initiatives */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-16 text-center">
            Global Initiatives
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
