import {
  ArrowRight,
  Award,
  BookOpen,
  Briefcase,
  Calendar,
  CheckCircle,
  Globe,
  Lightbulb,
  Medal,
  ShieldCheck,
  Target,
  Trophy,
  UserCheck,
  Users,
} from "lucide-react";
import { useState } from "react";

export default function Awards() {
  const [isShow, setIsShow] = useState(false);

  const majorAwards = [
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
    {
      icon: <Medal className="w-12 h-12 text-teal-600" />,
      title: "Award for BPO Industry Contribution",
      organization: "BPO Industry Recognition",
      year: "2023",
      description:
        "Recognized for significant contributions to the BPO sector in Bangladesh",
      impact: [
        "Honored for excellence and innovation in the BPO industry",
        "Recognized for fostering the growth and development of the BPO sector",
        "Celebrated for driving advancements in business process outsourcing",
      ],
    },
    {
      icon: <Globe className="w-12 h-12 text-purple-500" />,
      title: "NFCON Awards 2023",
      organization: "NFCON",
      year: "2023",
      description:
        "Recognized for significant contributions to Asia's largest freelancer conference",
      impact: [
        "Honored for promoting freelancing and financial inclusion",
        "Honored for participation as a panel speaker",
        "Celebrated for sharing insights on the future of freelancing",
      ],
      link: "https://www.tbsnews.net/economy/corporates/freelancers-briefed-bringing-their-income-through-bkash-nfcon-2023-693902?utm_source=chatgpt.com",
    },
    {
      icon: <Users className="w-12 h-12 text-yellow-500" />,
      title: "Awards for the Youth to Drive",
      organization: "Bangladeshi Youth to Drive the BPO Industry",
      year: "2023",
      description:
        "Honored for inspiring youth to seize opportunities and excel in the BPO industry",
      impact: [
        "Honored for inspiring youth in the BPO industry",
        "Recognized for promoting innovation and consistency",
        "Celebrated for empowering young minds to excel globally",
      ],
      link: "#",
    },
    {
      icon: <BookOpen className="w-12 h-12 text-yellow-500" />,
      title: "Awards for the Best Trainee",
      organization: "Skills for Employment Investment Program (SEIP)",
      year: "2023",
      description:
        "Recognized for exceptional performance and contributions to the BPO sector",
      impact: [
        "Honored for outstanding achievement in BPO training",
        "Recognized for dedication to skill enhancement",
        "Celebrated for advancing the BPO industry in Bangladesh",
      ],
      link: "#",
    },
    {
      icon: <Lightbulb className="w-12 h-12 text-blue-500" />,
      title: "Award for Smart Bangladesh",
      organization: "FBCCI Smart Bangladesh Awards",
      year: "2023",
      description:
        "Honored for pioneering contributions to Bangladesh’s digital transformation",
      impact: [
        "Recognized for leadership in promoting smart solutions",
        "Celebrated for advancing Bangladesh’s digital landscape",
        "Acknowledged for driving innovation for a Smart Bangladesh",
      ],
      link: "#",
    },
    {
      icon: <ShieldCheck className="w-12 h-12 text-green-500" />,
      title: "Special Guest Award",
      organization: "Kaspersky Cyber Security Challenge",
      year: "2023",
      description:
        "Recognized for outstanding contributions to cybersecurity awareness",
      impact: [
        "Honored for leadership in advocating digital safety",
        "Recognized for strengthening cybersecurity measures",
        "Celebrated for promoting a safer online environment",
      ],
      link: "#",
    },
    {
      icon: <Briefcase className="w-12 h-12 text-yellow-500" />,
      title: "BPO Summit Award",
      organization: "BPO Summit Bangladesh",
      year: "2018",
      description:
        "Recognized for exceptional leadership and contributions to BPO inclusivity",
      impact: [
        "Honored for promoting career opportunities for youth and women",
        "Recognized for leadership in driving BPO sector growth",
        "Celebrated for inspiring diverse talents to pursue careers in BPO",
      ],
      link: "#",
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-yellow-500" />,
      title: "Certificate of Recognition",
      organization: "Little Bangladesh Community Recognition",
      year: "2023",
      description:
        "Honored for significant contributions to arts, culture, and cuisine",
      impact: [
        "Recognized for enriching the cultural landscape of Los Angeles",
        "Celebrated for fostering cultural heritage and diversity",
        "Acknowledged for positive impact on the Little Bangladesh community",
      ],
      link: "#",
    },
    {
      icon: <UserCheck className="w-12 h-12 text-pink-500" />,
      title: "Award for International Women Empower",
      organization: "International Women Entrepreneurs Summit",
      year: "2022",
      description: "Recognized for empowering women entrepreneurs worldwide",
      impact: [
        "Honored for championing women’s leadership in business",
        "Celebrated for fostering global opportunities for female entrepreneurs",
        "Appreciated for promoting gender equality in entrepreneurship",
      ],
      link: "#",
    },
  ];

  const industryRecognitions = [
    {
      year: "2023",
      recognitions: [
        {
          title: "Top 40 Under 40",
          organization: "Business Weekly",
          description: "Recognized among the top young business leaders",
        },
        {
          title: "Innovation Champion",
          organization: "Tech Innovation Forum",
          description: "Awarded for driving technological advancement",
        },
      ],
    },
    {
      year: "2022",
      recognitions: [
        {
          title: "Digital Transformation Leader",
          organization: "Digital Business Awards",
          description: "Honored for excellence in digital transformation",
        },
        {
          title: "Sustainability Pioneer",
          organization: "Global Sustainability Council",
          description: "Recognized for sustainable business practices",
        },
      ],
    },
  ];

  const speakingEngagements = [
    {
      event: "Global Leadership Summit",
      location: "New York",
      date: "December 2023",
      topic: "Future of Business Leadership",
      audience: "500+ C-level executives",
    },
    {
      event: "Tech Innovation Conference",
      location: "London",
      date: "October 2023",
      topic: "Digital Transformation Strategy",
      audience: "1000+ industry leaders",
    },
    {
      event: "Business Excellence Forum",
      location: "Singapore",
      date: "September 2023",
      topic: "Building Sustainable Organizations",
      audience: "300+ business leaders",
    },
  ];

  const impactMetrics = [
    {
      number: "30+",
      label: "Awards & Honors",
      description: "International recognition for business excellence",
    },
    {
      number: "50+",
      label: "Speaking Events",
      description: "Global speaking engagements",
    },
    {
      number: "100+",
      label: "Lives Impacted",
      description: "Through leadership initiatives",
    },
    {
      number: "15+",
      label: "Countries",
      description: "International recognition",
    },
  ];

  return (
    <div className="py-20 bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-24 mb-20">
        <div className="container mx-auto px-6 text-white">
          <h1 className="text-4xl font-bold mb-6">Awards & Recognition</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            A testament to excellence in business leadership, innovation, and
            organizational transformation through sustained commitment to
            excellence and impactful initiatives.
          </p>
        </div>
      </div>

      {/* Impact Metrics */}
      <div className="container mx-auto px-6 mb-20">
        <div className="grid md:grid-cols-4 gap-8">
          {impactMetrics.map((metric, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl text-center shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {metric.number}
              </div>
              <div className="font-semibold mb-2">{metric.label}</div>
              <div className="text-sm text-gray-600">{metric.description}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Major Awards */}
      <div className="container mx-auto px-6 mb-20">
        <h2 className="text-3xl font-bold mb-12 text-center">Major Awards</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {majorAwards
            .slice(0, isShow ? majorAwards?.length : 3)
            .map((award, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-lg">
                <div className="flex justify-center mb-6">{award.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-center">
                  {award?.title}
                </h3>
                <div className="text-blue-600 mb-2 text-center">
                  {award?.organization}
                </div>
                <div className="text-gray-600 mb-4 text-center">
                  {award?.year}
                </div>
                <p className="text-gray-700 mb-4">{award.description}</p>
                <div className="space-y-2">
                  {award.impact.map((item, i) => (
                    <div key={i} className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-[2px] flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <a
                    className="text-blue-600 cursor-pointer hover:underline"
                    target="_blank"
                    href={award?.link}
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))}
        </div>
        {!isShow && (
          <div className="text-center mt-6">
            <button
              onClick={() => setIsShow(true)}
              className="inline-flex gap-2 hover:gap-4 transition-all duration-300 items-center bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90"
            >
              {isShow ? <span>Show Less</span> : <span>More Awards</span>}
              <ArrowRight className="size-5" />
            </button>
          </div>
        )}
      </div>

      {/* Industry Recognitions Timeline */}
      <div className="bg-gray-50 py-20 mb-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Industry Recognition Timeline
          </h2>
          <div className="space-y-12">
            {industryRecognitions.map((yearGroup, index) => (
              <div key={index} className="relative">
                <div className="text-2xl font-bold text-blue-600 mb-6">
                  {yearGroup.year}
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {yearGroup.recognitions.map((recognition, i) => (
                    <div key={i} className="bg-white p-6 rounded-xl shadow-lg">
                      <h3 className="text-xl font-semibold mb-2">
                        {recognition.title}
                      </h3>
                      <p className="text-blue-600 mb-2">
                        {recognition.organization}
                      </p>
                      <p className="text-gray-600">{recognition.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Speaking Engagements */}
      <div className="container mx-auto px-6 mb-20">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Notable Speaking Engagements
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {speakingEngagements.map((engagement, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">{engagement.event}</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Globe className="w-5 h-5 text-blue-600" />
                  <span>{engagement.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <span>{engagement.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Target className="w-5 h-5 text-blue-600" />
                  <span>{engagement.topic}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span>{engagement.audience}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
        <div className="container mx-auto px-6 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Interested in Speaking Engagements?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book John Anderson for your next event or conference
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}
