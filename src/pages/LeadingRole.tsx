import {
  ArrowRight,
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
import { useState } from "react";

export default function LeadingRole() {
  const [isShow, setIsShow] = useState(false);
  const professionalExperience = [
    {
      position: "Managing Director & CEO",
      company: "FIFOTech",
      websiteLink: "https://fifo-tech.com/",
      image: "/fifo-tech-logo.jpg",
      period: "2004 - Present",
      overview:
        "Leading a pioneering IT firm with 350+ in-house employees and 700+ remote staff, driving operational excellence, service quality, and strategic mergers to enhance industry leadership.",
      keyResponsibilities: [
        "Operational Improvements & Efficiency",
        "Service Quality Enhancement",
        "Strategic Mergers & Partnerships",
        "Client Portfolio Expansion",
        "Leadership & Team Development",
      ],
    },
    {
      position: "Co-Founder & Managing Director",
      company: "Golden Fiber Asia",
      websiteLink: "https://goldenfiberasia.com/",
      image: "/golden-fiber-logo.jpg",
      period: "2016 - Present",
      overview:
        "Steering the company toward eco-friendly solutions by promoting jute-based products, expanding domestic and international market reach, and advancing infrastructure development.",
      keyResponsibilities: [
        "Eco-friendly Product Development",
        "Market Expansion & Infrastructure Growth",
        "Strategic Partnerships & Visionary Leadership",
      ],
    },
    {
      position: "Co-Founder & Managing Director",
      company: "Shera Bangla 64",
      websiteLink: "https://sherabangla64.com/",
      image: "/shera-bangla64-logo.jpg",
      period: "2020 - Present",
      overview:
        "Enhancing culinary traditions and expanding market reach for a leading Bangladeshi restaurant chain, both locally and internationally.",
      keyResponsibilities: [
        "Culinary Brand Expansion",
        "Market Reach & Growth",
        "High-Quality Experience Design",
      ],
    },
    {
      position: "Editor",
      company: "Dainik Eidin",
      websiteLink: "https://www.dainikeidin.com/",
      image: "/ei-din-logo.jpg",
      period: "2019 - Present",
      overview:
        "Driving the company’s vision towards becoming a trusted news platform by leading infrastructure development and enhancing content quality.",
      keyResponsibilities: [
        "Content Strategy & Development",
        "Stakeholder Relationship Management",
        "Brand Positioning & Growth",
      ],
    },
    {
      position: "Owner",
      company: "FIFOTech Marketing and Social Media Services",
      websiteLink: "https://fifo-tech.com/",
      image: "/fifo-tech-marketing-logo.jpg",
      period: "2020 - Present",
      overview:
        "Providing innovative and reliable social media marketing services, growing the company’s global reach, and delivering tailored digital marketing solutions.",
      keyResponsibilities: [
        "Digital Marketing Strategy",
        "Social Media Marketing Expertise",
        "Global Client Reach & Service Expansion",
      ],
    },
    {
      position: "Former Secretary General",
      company: "Bangladesh Association of Contact Center & Outsourcing (BACCO)",
      websiteLink: "https://www.bacco.org.bd/ec_committee/present_ec_committe",
      image: "/bacco-logo.jpg",
      period: "2010 - 2024",
      overview:
        "Led initiatives in IT regulations, governance of BTRC, and growth of the contact center/BPO industry, training over 20,000 students under national skills programs.",
      keyResponsibilities: [
        "IT Regulation Development & Governance",
        "Industry Growth & Advocacy",
        "Educational Program Leadership",
      ],
    },
  ];

  const impactMetrics = [
    {
      number: "1k+",
      label: "Team Members",
      description: "Leading a diverse, global workforce",
    },
    {
      number: "15+",
      label: "Countries",
      description: "Direct operational presence",
    },
    {
      number: "200%",
      label: "Growth",
      description: "Revenue growth under leadership",
    },
    {
      number: "50+",
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
      title: "Operational Excellence",
      description:
        "Led initiatives to streamline operations and improve efficiency",
      metrics: [
        "Enhanced service quality by implementing targeted operational changes",
        "Improved company performance and set new industry standards",
        "Facilitated the merger of FIFOTech with two leading IT firms",
      ],
    },
    {
      title: "Sustainability & Green Innovation",
      description:
        "Pioneered the use of jute-based products to reduce plastic pollution",
      metrics: [
        "Developed 300+ eco-friendly jute products for domestic and international markets",
        "Increased Golden Fiber Asia’s market reach by expanding globally",
        "Strengthened industry relationships to promote sustainable solutions",
      ],
    },
    {
      title: "Strategic Market Expansion",
      description:
        "Drove market expansion for Shera Bangla 64 locally and internationally",
      metrics: [
        "Expanded the brand to new regions both inside and outside Bangladesh",
        "Increased recognition for providing high-quality culinary experiences",
        "Enhanced infrastructure to support growth and improve service quality",
      ],
    },
    {
      title: "Digital Transformation & Social Media Marketing",
      description:
        "Established and expanded FIFOTech Marketing and Social Media Services",
      metrics: [
        "Created tailored social media strategies for a diverse range of clients",
        "Expanded services globally by entering new international markets",
        "Built a reputation for excellence in digital marketing services worldwide",
      ],
    },
    {
      title: "Industry Advocacy & Skill Development",
      description:
        "Led initiatives to advance industry standards and skill-building efforts",
      metrics: [
        "Trained over 20,000 students through BACCO’s SEIP program",
        "Contributed to the development of IT regulations and industry governance",
        "Supported the growth of the contact center and BPO sectors in Bangladesh",
      ],
    },
    {
      title: "Leadership & Organizational Development",
      description:
        "Fostered a culture of leadership and performance across multiple organizations",
      metrics: [
        "Developed leadership programs that improved team performance",
        "Built and maintained high-performing teams across all key initiatives",
        "Empowered employees and promoted team collaboration at all levels",
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
        "Mr. Towhid Hossain’s visionary leadership has transformed our organization, setting new standards for innovation and growth.",
      author: "Wahidur Sharif",
      position: "Managing Partner",
      company: "Impetus Global LLC",
    },

    {
      quote:
        "His ability to inspire teams and drive results while maintaining a strong focus on innovation is remarkable.",
      author: "Mizanur Rahman",
      position: "Founder & CEO",
      company: "Marcy construction",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative min-h-[60vh] flex items-center overflow-hidden">
        <img
          src="/leading-role-banner.png"
          alt="Leading Role"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-600/80"></div>
        <div className="relative h-full container mx-auto px-6 flex items-center">
          <div className="text-white max-w-3xl">
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
        <div className="container space-y-12 mx-auto px-6">
          {professionalExperience?.map((experience, i) => (
            <div
              key={i}
              className="bg-gray-50 group rounded-2xl p-8 md:p-12 shadow-lg"
            >
              <div className="flex flex-col md:flex-row md:group-even:flex-row-reverse md:gap-12 md:items-center">
                <div className="md:w-2/3">
                  <h2 className="text-3xl font-bold mb-4">
                    {experience.position}
                  </h2>
                  <div className="text-blue-600 text-lg mb-6">
                    <a
                      className="hover:underline cursor-pointer"
                      href={experience?.websiteLink}
                      target="_blank"
                    >
                      {experience?.company}
                    </a>{" "}
                    | <span>{experience?.period}</span>
                  </div>
                  <p className="text-gray-700 mb-8">{experience.overview}</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {experience.keyResponsibilities.map(
                      (responsibility, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-2"
                        >
                          <CheckCircle className="w-5 h-5 text-blue-600" />
                          <span>{responsibility}</span>
                        </div>
                      )
                    )}
                  </div>
                </div>
                <a
                  href={experience?.websiteLink}
                  target="_blank"
                  className="hidden md:block md:w-1/3"
                >
                  <img
                    src={
                      experience?.image ||
                      "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=800"
                    }
                    alt="Office"
                    className="rounded-lg shadow-lg"
                  />
                </a>
              </div>
            </div>
          ))}
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
            {initiatives
              .slice(0, isShow ? initiatives?.length : 3)
              .map((initiative, index) => (
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
          {!isShow && (
            <div className="text-center mt-6">
              <button
                onClick={() => setIsShow(true)}
                className="inline-flex gap-2 hover:gap-4 transition-all duration-300 items-center bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90"
              >
                {isShow ? (
                  <span>Show Less</span>
                ) : (
                  <span>More Initiatives</span>
                )}
                <ArrowRight className="size-5" />
              </button>
            </div>
          )}
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
