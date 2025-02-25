import {
  Award,
  CheckCircle,
  Globe,
  Lightbulb,
  ShieldCheck,
  Target,
  Trophy,
  Users,
  Zap,
} from "lucide-react";

export default function LeadingRole() {
  const currentRole = {
    position: "Chief Executive Officer",
    company: "Anderson Global Ventures",
    period: "2020 - Present",
    overview:
      "Leading a global organization with 500+ employees across 15 countries, driving innovation and sustainable growth in the technology and business consulting sectors.",
    keyResponsibilities: [
      "Strategic Planning & Execution",
      "Global Team Leadership",
      "Innovation Management",
      "Stakeholder Relations",
      "Digital Transformation",
      "Market Expansion",
    ],
  };

  const impactMetrics = [
    {
      number: "500+",
      label: "Team Members",
      description: "Leading a diverse, global workforce",
    },
    {
      number: "15",
      label: "Countries",
      description: "Direct operational presence",
    },
    {
      number: "200%",
      label: "Growth",
      description: "Revenue growth under leadership",
    },
    {
      number: "40+",
      label: "Partners",
      description: "Strategic partnerships established",
    },
  ];

  const leadershipAreas = [
    {
      icon: <Target className="w-10 h-10 text-blue-600" />,
      title: "Strategic Vision",
      description:
        "Developing and executing comprehensive business strategies that align with market opportunities and organizational capabilities.",
    },
    {
      icon: <Users className="w-10 h-10 text-blue-600" />,
      title: "Team Development",
      description:
        "Building and mentoring high-performing teams, fostering a culture of innovation and continuous improvement.",
    },
    {
      icon: <Globe className="w-10 h-10 text-blue-600" />,
      title: "Global Operations",
      description:
        "Managing complex international operations and ensuring seamless coordination across multiple regions.",
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-blue-600" />,
      title: "Innovation Leadership",
      description:
        "Driving technological advancement and digital transformation initiatives across the organization.",
    },
  ];

  const initiatives = [
    {
      title: "Digital Transformation",
      description: "Led company-wide digital transformation initiative",
      metrics: [
        "Implemented AI-driven analytics platform",
        "Reduced operational costs by 40%",
        "Increased digital service adoption by 200%",
      ],
    },
    {
      title: "Market Expansion",
      description: "Spearheaded international market entry strategy",
      metrics: [
        "Established presence in 5 new markets",
        "Achieved 150% revenue growth in new regions",
        "Built strategic partnerships with 20+ local entities",
      ],
    },
    {
      title: "Team Excellence",
      description: "Developed high-performance organizational culture",
      metrics: [
        "Reduced employee turnover by 45%",
        "Implemented leadership development program",
        "Achieved 90% employee satisfaction rate",
      ],
    },
  ];

  const achievements = [
    {
      icon: <Trophy className="w-12 h-12 text-purple-500" />,
      title: "Award for Outstanding Tech Company",
      organization: "ASOCIO Summit Awards",
      year: "2022",
      description:
        "Recognized for significant contributions to the IT sector in Bangladesh",
      impact: [
        "Honored for excellence in the ICT sector",
        "Recognized for contributions to technology innovation",
        "Celebrated for leadership in the global tech industry",
      ],
      link: "https://www.prothomalo.com/technology/yxzzvo3okh",
    },
    {
      icon: <Award className="w-12 h-12 text-yellow-500" />,
      title: "Award for the Best IT Company",
      organization: "National Award of Digital Bangladesh",
      year: "2020",
      description:
        "Recognized for exceptional contributions to digital transformation",
      impact: [
        "Excellence in technological advancements",
        "Impact in public services, education, and economics",
        "Advancing the vision of Digital Bangladesh",
      ],
      link: "https://www.bbarta24.net/science-and-technology/135718",
    },
    {
      icon: <ShieldCheck className="w-12 h-12 text-blue-600" />,
      title: "Award of Post & Telecom",
      organization: "National Awards for Posts and Telecoms",
      year: "2023",
      description:
        "Recognized for outstanding contributions to the Telecoms sector",
      impact: [
        "Honored for innovation and excellence in the BPO sector",
        `Significant contributions to building a "Digital Bangladesh"`,
        "Recognized for excellence in contact center development",
      ],
      link: "https://www.jagonews24.com/technology/news/829175",
    },
  ];

  const testimonials = [
    {
      quote:
        "John's visionary leadership has transformed our organization, setting new standards for innovation and growth.",
      author: "Sarah Chen",
      position: "Board Member",
      company: "Anderson Global Ventures",
    },
    {
      quote:
        "His ability to inspire teams and drive results while maintaining a strong focus on innovation is remarkable.",
      author: "David Martinez",
      position: "Senior VP",
      company: "Global Tech Partners",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-24">
        <div className="container mx-auto px-6 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">Leadership & Impact</h1>
            <p className="text-xl opacity-90">
              Driving organizational excellence through strategic vision,
              innovative leadership, and sustainable growth initiatives in the
              global business landscape.
            </p>
          </div>
        </div>
      </div>

      {/* Current Role Overview */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="flex flex-col md:flex-row md:items-start md:space-x-12">
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold mb-4">
                  {currentRole.position}
                </h2>
                <div className="text-blue-600 text-lg mb-6">
                  {currentRole.company} | {currentRole.period}
                </div>
                <p className="text-gray-700 mb-8">{currentRole.overview}</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {currentRole.keyResponsibilities.map(
                    (responsibility, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-blue-600" />
                        <span>{responsibility}</span>
                      </div>
                    )
                  )}
                </div>
              </div>
              <div className="hidden md:block md:w-1/3">
                <img
                  src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=800"
                  alt="Office"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Metrics */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            Leadership Impact
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg text-center"
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {metric.number}
                </div>
                <div className="font-semibold text-gray-800 mb-2">
                  {metric.label}
                </div>
                <div className="text-gray-600">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Leadership Areas */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            Leadership Focus Areas
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadershipAreas.map((area, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-lg">
                <div className="mb-6">{area.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{area.title}</h3>
                <p className="text-gray-600">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Initiatives */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            Key Initiatives
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4">
                  {initiative.title}
                </h3>
                <p className="text-gray-600 mb-6">{initiative.description}</p>
                <ul className="space-y-3">
                  {initiative.metrics.map((metric, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <Zap className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{metric}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            Recognition & Awards
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl shadow-lg text-center"
              >
                <div className="flex justify-center mb-6">
                  {achievement.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {achievement.title}
                </h3>
                <p className="text-blue-600 mb-1">{achievement.organization}</p>
                <p className="text-gray-600">{achievement.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            Leadership Impact
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <p className="text-gray-700 text-lg mb-6">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold text-gray-800">
                    {testimonial.author}
                  </p>
                  <p className="text-gray-600">{testimonial.position}</p>
                  <p className="text-blue-600">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
