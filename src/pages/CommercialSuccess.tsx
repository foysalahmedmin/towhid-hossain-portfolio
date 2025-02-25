import {
  BarChart,
  CheckCircle,
  DollarSign,
  Globe,
  Target,
  TrendingUp,
  Trophy,
  Users,
} from "lucide-react";

export default function CommercialSuccess() {
  const keyMetrics = [
    {
      number: "150%",
      label: "Revenue Growth",
      description: "Year-over-year growth through digital transformation",
    },
    {
      number: "40%",
      label: "Cost Reduction",
      description: "Operational cost savings through innovation",
    },
    {
      number: "$50M+",
      label: "Portfolio Value",
      description: "Strategic partnerships managed",
    },
    {
      number: "25+",
      label: "Global Markets",
      description: "Successfully penetrated markets",
    },
  ];

  const achievements = [
    {
      icon: <Trophy className="w-12 h-12 text-blue-600" />,
      title: "Revenue Growth",
      description:
        "Led digital transformation initiatives resulting in 150% revenue growth over 3 years",
      metrics: [
        "$100M+ in new revenue",
        "60% increase in digital sales",
        "35% market share growth",
      ],
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-blue-600" />,
      title: "Cost Optimization",
      description:
        "Implemented innovative solutions reducing operational costs by 40%",
      metrics: [
        "$20M annual savings",
        "30% process efficiency improvement",
        "50% reduction in manual tasks",
      ],
    },
    {
      icon: <DollarSign className="w-12 h-12 text-blue-600" />,
      title: "Client Portfolio",
      description:
        "Managed $50M+ worth of strategic partnerships with Fortune 500 companies",
      metrics: [
        "95% client retention rate",
        "40+ active partnerships",
        "20% YoY portfolio growth",
      ],
    },
  ];

  const strategies = [
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "Market Expansion",
      description:
        "Strategic entry into 25+ new markets with localized approaches",
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Team Building",
      description: "Built high-performing teams across global offices",
    },
    {
      icon: <BarChart className="w-8 h-8 text-blue-600" />,
      title: "Data-Driven Decisions",
      description: "Implemented advanced analytics for strategic planning",
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: "Global Operations",
      description: "Streamlined operations across international markets",
    },
  ];

  const successStories = [
    {
      company: "TechGlobal Solutions",
      industry: "Technology",
      achievement: "200% growth in 18 months",
      impact: "Transformed digital infrastructure and expanded market presence",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    },
    {
      company: "InnovateCorp",
      industry: "Manufacturing",
      achievement: "40% cost reduction",
      impact: "Modernized operations and improved efficiency",
      image:
        "https://images.unsplash.com/photo-1455849318743-b2233052fcff?auto=format&fit=crop&q=80&w=800",
    },
  ];

  const milestones = [
    {
      year: "2023",
      title: "Record-Breaking Growth",
      description: "Achieved highest revenue growth in company history",
    },
    {
      year: "2022",
      title: "Global Expansion",
      description: "Successfully entered 10 new international markets",
    },
    {
      year: "2021",
      title: "Digital Transformation",
      description: "Completed major digital infrastructure overhaul",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r min-h-[60vh] flex items-center from-blue-600 to-blue-800 py-20 mb-20">
        <div className="container mx-auto px-6 text-white">
          <h1 className="text-4xl font-bold mb-6">Commercial Success</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Driving sustainable growth through strategic innovation, operational
            excellence, and transformative leadership in global markets.
          </p>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="container mx-auto px-6 mb-20">
        <div className="grid md:grid-cols-4 gap-8">
          {keyMetrics.map((metric, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {metric.number}
              </div>
              <div className="font-semibold mb-2">{metric.label}</div>
              <div className="text-sm text-gray-600">{metric.description}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Achievements */}
      <div className="container mx-auto px-6 mb-20">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Key Achievements
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-lg">
              <div className="flex justify-center mb-6">{achievement.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-center">
                {achievement.title}
              </h3>
              <p className="text-gray-600 mb-6 text-center">
                {achievement.description}
              </p>
              <ul className="space-y-3">
                {achievement.metrics.map((metric, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">{metric}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Strategic Approach */}
      <div className="bg-gray-50 py-20 mb-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Strategic Approach
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {strategies.map((strategy, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="mb-4">{strategy.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{strategy.title}</h3>
                <p className="text-gray-600">{strategy.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="container mx-auto px-6 mb-20">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {successStories.map((story, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={story.image}
                alt={story.company}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">
                      {story.company}
                    </h3>
                    <p className="text-gray-600">{story.industry}</p>
                  </div>
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                    {story.achievement}
                  </span>
                </div>
                <p className="text-gray-700">{story.impact}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Key Milestones
          </h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="flex items-start gap-4 md:gap-6 flex-col md:flex-row"
              >
                <div className="w-24 flex-shrink-0">
                  <div className="text-xl font-bold text-blue-600">
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-grow bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-lg font-semibold mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
