import { ArrowRight, Calendar, Globe, Tag, User } from "lucide-react";
import { useState } from "react";

export default function News() {
  const [newsTab, setNewsTab] = useState("All");

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

  const allNews = [
    {
      category: "Business Process Outsourcing",
      tags: ["Business Process Outsourcing", "Skill Development", "Technology"],
      image:
        "https://tfe-bd.sgp1.cdn.digitaloceanspaces.com/uploads/1577336073.jpg",
      title: "BPO Sector Needs a Plan, Skilled Human Resource",
      source: "The Financial Express",
      date: "December 26, 2019",
      excerpt:
        "An analysis of the challenges in Bangladesh’s BPO sector and how integrating advanced technologies and focus groups can boost employment and exports.",
      author: "Saif Uddin",
      readTime: "16 min read",
      link: "https://thefinancialexpress.com.bd/trade/bpo-sector-needs-plan-skilled-human-resource-1577336073",
    },
    {
      category: "Business Process Outsourcing",
      tags: ["Business Process Outsourcing", "Digital Platforms", "AI"],
      image:
        "https://cdn.banglatribune.net/contents/cache/images/1100x617x1/uploads/media/2021/10/23/3ce160d12a96066bdf2b43f70613101d-6173272966db3.JPG?jadewits_media_id=755252",
      title: "Business Process Outsourcing is Rebounding",
      source: "Bangla Tribune",
      date: "October 23, 2024",
      excerpt:
        "An exploration of the BPO sector’s recovery after the pandemic, with growth in digital platforms, healthcare, and education despite challenges like AI-driven solutions.",
      author: "A Halim",
      readTime: "3 min read",
      link: "https://www.banglatribune.com/tech-and-gadget/techsclusive/708647/%E2%80%98%E0%A6%98%E0%A7%81%E0%A6%B0%E0%A7%87-%E0%A6%A6%E0%A6%BE%E0%A6%81%E0%A7%9C%E0%A6%BE%E0%A6%9A%E0%A7%8D%E0%A6%9B%E0%A7%87-%E0%A6%AC%E0%A6%BF%E0%A6%9C%E0%A6%A8%E0%A7%87%E0%A6%B8-%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%B8%E0%A7%87%E0%A6%B8-%E0%A6%86%E0%A6%89%E0%A6%9F%E0%A6%B8%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%BF%E0%A6%82%E2%80%99",
    },
    {
      category: "Business Process Outsourcing",
      tags: ["Business Excellence", "Awards", "Leadership"],
      image:
        "https://www.dhakatimes24.com/assets/news_photos/2023/01/29/image-296861.jpg",
      title: "FIFOTech: Leading the BPO Sector in Building Digital Bangladesh",
      source: "Staff Correspondent",
      date: "January 29, 2023",
      excerpt:
        "FIFOTech receives the Post and Telecommunication Award 2023 for outstanding contributions to Digital Bangladesh.",
      author: "Staff Correspondent",
      readTime: "7 min read",
      link: "https://www.dhakatimes24.com/2023/01/29/296861",
    },
    {
      category: "Business Process Outsourcing",
      tags: ["Industry Growth", "Skill Development", "Global Partnerships"],
      image: "https://img.youtube.com/vi/JgzG1x1s2OE/mqdefault.jpg",
      title:
        "BPO Summit 2019 Talk Show with N M Zeaul Alam PAA, Wahid Sharif, and Towhid Hossain",
      source: "Youtube",
      date: "June 17, 2021",
      excerpt:
        "Insights into the growth and challenges of Bangladesh’s BPO industry, skill development, and global partnerships.",
      author: "",
      readTime: "7 min read",
      link: "https://www.youtube.com/watch?v=JgzG1x1s2OE",
    },
    {
      category: "Business Process Outsourcing",
      tags: ["Industry Trends", "Challenges", "Growth"],
      image: "https://img.youtube.com/vi/3w6FN1yJ5QM/mqdefault.jpg",
      title: "Towhid Hossain Interview in Bela Sheshe | SATV",
      source: "Youtube",
      date: "June 3, 2021",
      excerpt:
        "A conversation on the growth, challenges, and employment potential of the BPO sector in Bangladesh.",
      author: "",
      readTime: "7 min read",
      link: "https://www.youtube.com/watch?v=3w6FN1yJ5QM",
    },
    {
      category: "Business Process Outsourcing",
      tags: ["Outsourcing", "Global Market", "Competitive Edge"],
      image: "https://img.youtube.com/vi/7Z0J2t8k_bs/mqdefault.jpg",
      title: "The Name of Potential: Outsourcing at News 24 Channel",
      source: "Youtube",
      date: "June 14, 2021",
      excerpt:
        "A discussion on the outsourcing sector’s role in economic growth and Bangladesh’s competitive edge in the global market.",
      author: "",
      readTime: "7 min read",
      link: "https://www.youtube.com/watch?v=7Z0J2t8k_bs",
    },
    // -----
    {
      category: "Entrepreneurship & Startups",
      tags: ["Entrepreneurship", "Leadership", "Digital Economy"],
      image: "",
      title: "I Want to Create Employment for Five Thousand People",
      source: "M. Mizanur Rahman Sohel",
      date: "January 21, 2017",
      excerpt:
        "Towhid Hossain shares his journey in the BPO sector, his leadership at FIFOTech, and his vision for job creation in Bangladesh’s digital economy.",
      author: "M. Mizanur Rahman Sohel",
      readTime: "11 min read",
      link: "https://m.priyo.com/articles/five-thousand-people-to-employment-2017121",
    },
    {
      category: "Entrepreneurship & Startups",
      tags: ["Startups", "Entrepreneurship", "Job Opportunities"],
      image:
        "https://cdn.risingbd.com/media/imgAll/2019September/bg/Startups20190918154545.jpg",
      title: "Startup Idea Seminar Starts for Generating Jobs",
      source: "Science and Technology Desk",
      date: "September 18, 2019",
      excerpt:
        "A discussion on fostering innovation and entrepreneurship in Bangladesh’s IT and BPO sectors to create job opportunities for the youth.",
      author: "Science and Technology Desk",
      readTime: "9 min read",
      link: "https://www.risingbd.com/scienceand-technology/news/311511",
    },
    {
      category: "Entrepreneurship & Startups",
      tags: ["Entrepreneurship", "AI", "Opportunities"],
      image:
        "https://www.kalbela.com/assets/news_photos/2023/09/03/image-20302-1693688231.jpg",
      title: "Towhid Hossain’s Insights to Start as a BPO Entrepreneur",
      source: "Kalbela Correspondent",
      date: "September 3, 2023",
      excerpt:
        "A look into the future of BPO entrepreneurship, AI’s role in the industry, and the opportunities it creates rather than replaces.",
      author: "Kalbela Correspondent",
      readTime: "5 min read",
      link: "https://www.kalbela.com/ajkerpatrika/information-technology/20302",
    },
    {
      category: "Entrepreneurship & Startups",
      tags: ["Success & Leadership", "Success", "Leadership", "Education"],
      image: "https://img.youtube.com/vi/D1ofdhbnMlM/mqdefault.jpg",
      title: "Want to Succeed in Your Life? 5 Tips from Towhid Hossain",
      source: "Youtube",
      date: "March 11, 2020",
      excerpt:
        "Practical insights on education, goal setting, adaptability, and social contribution for long-term success.",
      author: "",
      readTime: "8 min read", // Randomly generated
      link: "https://www.youtube.com/watch?v=D1ofdhbnMlM",
    },
    // -----
    {
      category: "International Collaboration",
      tags: [
        "International Collaboration",
        "Entrepreneurship",
        "Collaboration",
      ],
      image: "",
      title: "BACCO Organizes B2B Matchmaking Session with IT Park, Uzbekistan",
      source: "Bangladesh Post Desk",
      date: "December 10, 2022",
      excerpt:
        "A strategic initiative to foster bilateral ties between the BPO industries of Bangladesh and Uzbekistan, promoting entrepreneurship and collaboration.",
      author: "Bangladesh Post Desk",
      readTime: "8 min read",
      link: "",
    },
    // -----
    {
      category: "Economic Development",
      tags: ["Employment", "Global Standards", "Outsourcing"],
      image:
        "https://www.saradin.news/wp-content/uploads/2024/08/KSRM_Tunnel_-320-x-100.png",
      // image:
      //   "https://www.saradin.news/wp-content/uploads/2022/05/%E0%A6%A4%E0%A7%8C%E0%A6%B9%E0%A6%BF%E0%A6%A6-%E0%A6%B9%E0%A7%8B%E0%A6%B8%E0%A7%87%E0%A6%A8-.png",
      title: "I Never Emphasize Certificates for Call Center Jobs",
      source: "Shahjalal Rohan",
      date: "May 31, 2022",
      excerpt:
        "Towhid Hossain discusses his vision of creating a global-standard workspace for 5,000 people and advancing Bangladesh’s outsourcing industry.",
      author: "Shahjalal Rohan",
      readTime: "3 min read",
      link: "https://www.saradin.news/news/117746",
    },
    {
      category: "Economic Development",
      tags: [
        "Economic Development",
        "International Expansion",
        "Workforce Development",
      ],
      image: "https://img.youtube.com/vi/0JjFL7XHv5Y/mqdefault.jpg",
      title:
        "Billion-Dollar Revenue Target in the Business Process Outsourcing Industry",
      source: "Youtube",
      date: "July 24, 2023",
      excerpt:
        "A vision for Bangladesh’s BPO sector to reach a billion-dollar revenue milestone through international expansion and workforce development.",
      author: "",
      readTime: "6 min read", // Randomly generated
      link: "https://www.youtube.com/watch?v=0JjFL7XHv5Y",
    },
    {
      category: "Economic Development",
      tags: ["Job Creation", "Economic Opportunities", "Growth"],
      image: "https://img.youtube.com/vi/BNb28GNX0w8/mqdefault.jpg",
      title: "Expansion of the BPO Sector, New Doors for Employment",
      source: "Youtube",
      date: "November 16, 2016",
      excerpt:
        "An exploration of the BPO industry’s rapid growth and its role in creating jobs and economic opportunities.",
      author: "",
      readTime: "4 min read", // Randomly generated
      link: "https://www.youtube.com/watch?v=BNb28GNX0w8",
    },
    {
      category: "Economic Development",
      tags: ["National Transformation", "Innovation", "Skill Enhancement"],
      image: "https://img.youtube.com/vi/UKpICjcmWZg/mqdefault.jpg",
      title: "Let’s Change Our Country with Towhid Hossain at Desh Rupantor",
      source: "Youtube",
      date: "March 26, 2022",
      excerpt:
        "A vision for national development through innovation, skill enhancement, and job creation in the IT and BPO sectors.",
      author: "",
      readTime: "10 min read", // Randomly generated
      link: "https://www.youtube.com/watch?v=UKpICjcmWZg",
    },
    // -----
    {
      category: "Technology & Media",
      tags: ["Media Freedom", "Digital Bangladesh", "Responsibility"],
      image:
        "https://samakal.com/media/imgAll/2024April/bijf-ifter-24-edit-1712411637.jpg",
      title: "Media Freedom is Crucial for Building a Smart Bangladesh",
      source: "ICT DESK",
      date: "April 6, 2024",
      excerpt:
        "A significant event where technology journalists, academicians, and industry leaders emphasized future planning and responsibility as the foundation for Digital Bangladesh’s success.",
      author: "ICT DESK",
      readTime: "7 min read",
      link: "https://samakal.com/technology/article/231486",
    },
    {
      category: "Technology & Media",
      tags: ["Technology", "Digital Innovation", "Job Creation"],
      image: "https://img.youtube.com/vi/t8f_i4tNuBQ/mqdefault.jpg",
      title: "Ranga Shokal Show with Towhid Hossain at Maasranga TV",
      source: "Youtube",
      date: "April 9, 2018",
      excerpt:
        "A discussion on IT and BPO industry opportunities, digital innovation, and job creation in Bangladesh.",
      author: "",
      readTime: "5 min read", // Randomly generated
      link: "https://www.youtube.com/watch?v=t8f_i4tNuBQ",
    },
    {
      category: "Technology & Media",
      tags: ["Leadership", "Entrepreneurship", "Digital Bangladesh"],
      image: "https://img.youtube.com/vi/pklA0JSGSMM/mqdefault.jpg",
      title: "Inspiring Bangladesh Presents CORE Talk with Towhid Hossain",
      source: "Youtube",
      date: "April 30, 2020",
      excerpt:
        "An in-depth discussion on innovation, entrepreneurship, and FIFOTech’s role in building Digital Bangladesh.",
      author: "",
      readTime: "9 min read", // Randomly generated
      link: "https://www.youtube.com/watch?v=pklA0JSGSMM",
    },
    {
      category: "Technology & Media",
      tags: ["Digital Literacy", "Social Media", "Ethics"],
      image: "https://img.youtube.com/vi/qWFerAtnijY/mqdefault.jpg",
      title: "How to Use Social Media; Misuse of Information Technology",
      source: "Youtube",
      date: "December 6, 2020",
      excerpt:
        "A discussion on responsible social media usage, digital literacy, and the ethical use of technology.",
      author: "",
      readTime: "3 min read", // Randomly generated
      link: "https://www.youtube.com/watch?v=qWFerAtnijY",
    },
    // -----
    {
      category: "Industry Discussions & Interviews",
      tags: ["Industry Discussion", "Technological Adoption", "BPO Industry"],
      image: "https://img.youtube.com/vi/N3YVIa8cTWs/mqdefault.jpg",
      title: "Interview at Sopnodhora about BPO Industry in Spice FM 96.4",
      source: "Youtube",
      date: "September 27, 2020",
      excerpt:
        "A conversation on Bangladesh’s evolving BPO industry, skill development, and technological adoption.",
      author: "",
      readTime: "7 min read", // Randomly generated
      link: "https://www.youtube.com/watch?v=N3YVIa8cTWs",
    },
    {
      category: "Industry Discussions & Interviews",
      tags: ["Industry Future", "Opportunities", "Global Positioning"],
      image: "https://img.youtube.com/vi/3w6FN1yJ5QM/mqdefault.jpg",
      title: "Towhid Hossain’s Interview with Bela Sheshe about BPO at SATV",
      source: "Youtube",
      date: "June 3, 2021",
      excerpt:
        "A deep dive into the challenges, opportunities, and global positioning of Bangladesh’s BPO industry.",
      author: "",
      readTime: "6 min read", // Randomly generated
      link: "https://www.youtube.com/watch?v=3w6FN1yJ5QM",
    },
    {
      category: "Industry Discussions & Interviews",
      tags: ["Business Growth", "Skilled Labor", "FIFOTech"],
      image: "https://img.youtube.com/vi/PJ2wPRPHBE0/mqdefault.jpg",
      title:
        "News 24 Presents Business Process Outsourcing in Bangladesh with Towhid Hossain",
      source: "Youtube",
      date: "June 13, 2021",
      excerpt:
        "A look at Bangladesh’s rapid BPO growth, FIFOTech’s contributions, and the need for skilled labor.",
      author: "",
      readTime: "8 min read", // Randomly generated
      link: "https://www.youtube.com/watch?v=PJ2wPRPHBE0",
    },
    {
      category: "Industry Discussions & Interviews",
      tags: ["Career Development", "Technical Skills", "Soft Skills"],
      image: "https://img.youtube.com/vi/QI-9IooX-3M/mqdefault.jpg",
      title: "Learn What Qualifications Are Needed for Outsourcing Work",
      source: "Youtube",
      date: "June 7, 2022",
      excerpt:
        "An overview of technical and soft skills required for success in the global outsourcing industry.",
      author: "",
      readTime: "5 min read", // Randomly generated
      link: "https://www.youtube.com/watch?v=QI-9IooX-3M",
    },
  ];

  // const sortedNews = allNews.sort((a, b) => {
  //   const dateA = new Date(a.date);
  //   const dateB = new Date(b.date);

  //   return dateB - dateA;
  // });

  const news =
    newsTab.toLocaleLowerCase() === "all"
      ? allNews
      : allNews?.filter(
          (news) =>
            news.category.toLocaleLowerCase() === newsTab.toLocaleLowerCase()
        );

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
    { name: "Business Process Outsourcing", count: 6 },
    { name: "Entrepreneurship & Startups", count: 4 },
    { name: "International Collaboration", count: 1 },
    { name: "Economic Development", count: 4 },
    { name: "Technology & Media", count: 4 },
    { name: "Industry Discussions & Interviews", count: 4 },
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
              {news.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-[1.02]"
                >
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={item.image || "/news-demo.jpeg"}
                        alt={item.title}
                        className="h-48 w-full object-cover md:h-full"
                      />
                    </div>
                    <div className="p-6 md:w-2/3">
                      <div className="flex items-center space-x-4 mb-4">
                        <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                          {item.tags?.[0]}
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
                        <div className="flex items-center gap-4">
                          {item?.author && (
                            <span className="text-gray-500 text-sm flex items-center">
                              <User className="w-4 h-4 mr-1" />
                              {item?.author}
                            </span>
                          )}
                          {item?.readTime && (
                            <span className="text-gray-500 text-sm">
                              {item?.readTime}
                            </span>
                          )}
                        </div>
                        <a
                          href={item?.link}
                          target="_blank"
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
                    onClick={() => setNewsTab(category?.name)}
                    className={`flex items-center cursor-pointer justify-between p-2 rounded ${
                      newsTab === category?.name
                        ? "bg-blue-300"
                        : "hover:bg-gray-50"
                    }`}
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
