import {
  BarChart,
  Briefcase,
  CheckCircle,
  Leaf,
  Target,
  Trophy,
  Users,
} from "lucide-react";

export default function CommercialSuccess() {
  const keyMetrics = [
    {
      number: "10%",
      label: "Revenue Growth",
      description: "Year-over-year growth through digital transformation",
    },
    {
      number: "20%",
      label: "Cost Reduction",
      description: "Operational cost savings through innovation",
    },
    {
      number: "$10M+",
      label: "Portfolio Value",
      description: "Strategic partnerships managed",
    },
    {
      number: "50+",
      label: "National and Global Markets",
      description: "Successfully penetrated markets",
    },
  ];

  const achievements = [
    {
      icon: <Trophy className="w-12 h-12 text-blue-600" />,
      title: "Business Growth",
      description:
        "Expanded BPO operations, creating 8,000+ jobs and increasing service capacity by 200%.",
      metrics: [
        "$10M+ in outsourcing contracts secured",
        "20% market expansion across multiple regions",
        "60% increase in client acquisitions",
      ],
    },
    {
      icon: <BarChart className="w-12 h-12 text-green-600" />,
      title: "Operational Excellence",
      description:
        "Enhanced workforce efficiency through training and process optimization, reducing costs by 20%.",
      metrics: [
        "$1M+ in annual savings through streamlined operations",
        "30% improvement in process efficiency",
        "30% reduction through sustainable alternatives",
      ],
    },
    {
      icon: <Users className="w-12 h-12 text-purple-600" />,
      title: "Industry Leadership",
      description:
        "Managed large-scale partnerships, fostering sustainable growth in IT/ITES and BPO sectors.",
      metrics: [
        "$1M+ in strategic partnerships with global enterprises",
        "50% client retention rate through service excellence",
        "20k+ professionals trained under industry development programs",
      ],
    },
  ];

  const strategies = [
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "Market Expansion",
      description:
        "Expanded BPO operations across 50+ markets, creating new job opportunities.",
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Workforce Empowerment",
      description:
        "Trained and upskilled thousands, focusing on women and minority communities.",
    },
    {
      icon: <Briefcase className="w-8 h-8 text-purple-600" />,
      title: "Operational Excellence",
      description:
        "Built high-performing teams to enhance efficiency and service quality.",
    },
    {
      icon: <Leaf className="w-8 h-8 text-teal-600" />,
      title: "Sustainability Initiatives",
      description:
        "Reduced carbon footprint by promoting jute products as a polymer alternative.",
    },
  ];

  const successStories = [
    {
      company: "FIFOTech",
      industry: "IT & Technology",
      achievement: "100% growth in 5 years",
      impact: "Transformed digital infrastructure and expanded market presence",
      image: "/story-fifo-tech.jpg",
    },
    {
      company: "Golden Fiber Asia",
      industry: "Sustainable Manufacturing ",
      achievement: "30% cost reduction",
      impact:
        "Advocating for sustainability by reducing carbon footprints through eco-friendly products",
      image: "/story-golden-fiber.jpg",
    },
  ];

  const milestones = [
    {
      year: "2023",
      title: "Record-Breaking Growth",
      description:
        "Achieved the highest revenue growth in company history, solidifying market leadership.",
    },
    {
      year: "2022",
      title: "Global Expansion",
      description:
        "Successfully entered 10 new international markets, extending our global reach.",
    },
    {
      year: "2021",
      title: "Digital Transformation",
      description:
        "Launched significant digital infrastructure upgrades, driving operational efficiency.",
    },
    {
      year: "2020",
      title: "Job Creation",
      description:
        "Created over 8,000 new jobs, supporting economic growth through BPO operations.",
    },
    {
      year: "2019",
      title: "Sustainability Milestone",
      description:
        "Introduced eco-friendly jute-based products, reducing carbon footprint and promoting sustainable manufacturing.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r min-h-[60vh] flex items-center from-blue-600 to-blue-800 py-20 mb-20">
        <div className="container mx-auto px-6 text-white">
          <h1 className="text-4xl font-bold mb-6">Commercial Success</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Achieving sustainable growth through strategic innovation,
            operational excellence, and visionary leadership across national and
            global markets.
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
