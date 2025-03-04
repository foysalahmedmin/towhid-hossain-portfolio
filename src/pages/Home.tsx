import {
  ArrowRight,
  Award,
  Briefcase,
  Calendar,
  BarChart as ChartBar,
  CheckCircle,
  Github,
  Globe,
  Lightbulb,
  Linkedin,
  Mail,
  Quote,
  Target,
  Twitter,
  Users,
} from "lucide-react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import news from "../assets/data/news";

import "swiper/css";
import "swiper/css/navigation";

export default function Home() {
  const expertise = [
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "Strategic Vision",
      description:
        "Developing and executing transformative business strategies that drive sustainable growth.",
    },
    {
      icon: <ChartBar className="w-8 h-8 text-blue-600" />,
      title: "Business Development",
      description:
        "Building strategic partnerships and expanding market presence across global markets.",
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: "Global Leadership",
      description:
        "Leading diverse teams and managing international operations across multiple regions.",
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-blue-600" />,
      title: "Innovation",
      description:
        "Driving digital transformation and implementing cutting-edge business solutions.",
    },
  ];

  const stats = [
    { number: "20+", label: "Years Experience" },
    { number: "1k+", label: "Team Members" },
    { number: "10M+", label: "Revenue Generated" },
    { number: "15+", label: "Countries" },
  ];

  const achievements = [
    "Worked alongside top professionals in the BPO and IT/ITES sectors.",
    "Contributed to organizational growth by driving innovation and operational excellence.",
    "Played a key role in FIFOTech’s merger with two IT firms, forming a competitive consortium.",
    "Recognized for leadership roles in BACCO, ISC, and ICT, driving industry growth.",
    "Created over 8,000 job placements, fostering employment opportunities.",
    "Trained 20,000+ students under BACCO’s Skills for Employment Investment Program (SEIP).",
  ];

  const testimonials = [
    {
      quote:
        "Through his leadership and dedication, Mr. Towhid Hossain has played a key role in elevating FIFOTech and Bangladesh’s ICT sector on the global stage.",
      author: "Abdullah Hel Kafi",
      position: "Lifetime Honorary Chairman",
      company: "ASOCIO Former President, BCS",
    },
    {
      quote:
        "Mr. Towhid Hossain’s mentorship has been a driving force in empowering women in technology and advancing digital innovation.",
      author: "Achia Nila",
      position: "Founder & CEO",
      company: "Women in Digital",
    },
    {
      quote:
        "Under Mr. Towhid Hossain’s leadership, FIFOTech has achieved remarkable global success, pushing the boundaries of innovation in the BPO industry.",
      author: "Haroonor Rashid",
      position: "CEO",
      company: "Sameer Inc.",
    },
    {
      quote:
        "With vision and leadership, Mr. Towhid Hossain propelled FIFOTech globally while making a lasting impact through mentorship in the BPO sector.",
      author: "Wajed Roger Salam",
      position: "Founder & CEO",
      company: "USA Property Network, LLC",
    },
  ];

  const latestNews = news?.filter((news) => !!news?.isFeatured).slice(1, 3);

  return (
    <div>
      {/* Hero Section */}
      <header className="relative min-h-[60vh] flex items-center overflow-hidden">
        <img
          src="/home-banner.png"
          alt="Leading Role"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-600/50"></div>
        <div className="relative h-full container mx-auto px-6 flex items-center">
          <div className="text-white max-w-4xl">
            <h1 className="text-5xl font-bold mb-4">Towhid Hossain</h1>
            <p className="text-xl mb-6">
              Visionary Leader in BPO & IT/ITES Innovation, Sustainability, and
              Workforce Empowerment
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 md:gap-20 items-center">
            <div>
              <div className="aspect-square rounded-full overflow-hidden border-4 border-blue-600">
                <img
                  src="/profile.png"
                  alt="Towhid Hossain"
                  className="rounded-lg size-full object-cover object-center shadow-xl"
                />
              </div>
            </div>
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold mb-6">About Me</h2>
              <p className="text-gray-600 mb-6">
                I have dedicated more than two decades to the Business Process
                Outsourcing (BPO) industry. My professional journey has been
                deeply rooted in innovation, leadership, and the belief that
                collaboration across borders can create shared success. As I
                reflect on my career and envision its future trajectory, my
                long-term goal has always been aligned with the country that
                stands as a beacon of opportunity, technological advancement,
                and economic innovation.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start space-x-2">
                  <Briefcase className="text-blue-600" />
                  <span>Business Strategy</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Users className="text-blue-600" />
                  <span>Community Building</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Award className="text-blue-600" />
                  <span>Outsourcing Innovation</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Calendar className="text-blue-600" />
                  <span>Workforce Empowerment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600">
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
          <h2 className="text-3xl font-bold text-center mb-12">
            Areas of Expertise
          </h2>
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
          <h2 className="text-3xl font-bold text-center mb-12">
            Key Achievements
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg"
              >
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
            <a
              href="/news"
              className="flex items-center text-blue-600 hover:text-blue-700"
            >
              View All <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {latestNews?.map((news, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg"
              >
                <img
                  src={news?.image}
                  alt={news?.title}
                  className="w-full h-60 object-cover"
                />
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{news?.date}</p>
                  <h3 className="text-xl font-semibold mb-4">{news?.title}</h3>
                  <a
                    href={news?.link}
                    className="text-blue-600 hover:text-blue-700"
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            What People Say
          </h2>
          {/* <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl relative">
                <Quote className="w-8 h-8 text-blue-600 mb-4" />
                <p className="text-gray-700 mb-6 text-lg">
                  {testimonial.quote}
                </p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-gray-600">{testimonial.position}</p>
                  <p className="text-blue-600">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div> */}
          <div className="relative">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              loop={true}
              modules={[Navigation, Autoplay]}
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div
                    key={index}
                    className="bg-gray-50 p-8 md:mx-40 rounded-xl relative"
                  >
                    <Quote className="w-8 h-8 text-blue-600 mb-4" />
                    <p className="text-gray-700 mb-6 text-lg">
                      {testimonial.quote}
                    </p>
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-gray-600">{testimonial.position}</p>
                      <p className="text-blue-600">{testimonial.company}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div className="swiper-button-prev invisible sm:visible"></div>
              <div className="swiper-button-next invisible sm:visible"></div>
            </Swiper>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-xl mb-8 opacity-90">
            Looking to transform your business or need strategic guidance? Let's
            connect and explore how we can achieve your goals.
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
