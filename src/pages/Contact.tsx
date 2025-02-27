import {
  AlertCircle,
  CheckCircle,
  Clock,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
  Users,
} from "lucide-react";
import React, { useState } from "react";

export default function Contact() {
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["contact@johnanderson.com", "speaking@johnanderson.com"],
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Office",
      details: ["123 Business Avenue", "New York, NY 10001"],
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "EST (UTC-5)"],
    },
  ];

  const inquiryTypes = [
    "Speaking Engagement",
    "Business Consultation",
    "Media Inquiry",
    "Partnership Opportunity",
    "General Inquiry",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus("success");
    // Reset after 3 seconds
    setTimeout(() => setFormStatus("idle"), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-24">
        <div className="container mx-auto px-6 text-center text-white">
          <h1 className="text-4xl font-bold mb-6">Let's Connect</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Whether you're interested in speaking engagements, business
            consulting, or exploring partnership opportunities, I'm here to
            help.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 -mt-16">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">
                    Contact Information
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Reach out through any of these channels or fill out the
                    contact form. I typically respond within 24-48 hours.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{item.title}</h3>
                        {item.details.map((detail, i) => (
                          <p key={i} className="text-gray-600">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div>
                  <h3 className="font-semibold mb-4">
                    Connect on Social Media
                  </h3>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="bg-gray-100 p-3 rounded-lg hover:bg-blue-100 transition-colors"
                    >
                      <Linkedin className="w-6 h-6 text-gray-700 hover:text-blue-600" />
                    </a>
                    <a
                      href="#"
                      className="bg-gray-100 p-3 rounded-lg hover:bg-blue-100 transition-colors"
                    >
                      <Twitter className="w-6 h-6 text-gray-700 hover:text-blue-600" />
                    </a>
                    <a
                      href="mailto:contact@johnanderson.com"
                      className="bg-gray-100 p-3 rounded-lg hover:bg-blue-100 transition-colors"
                    >
                      <Mail className="w-6 h-6 text-gray-700 hover:text-blue-600" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Inquiry Type
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select an inquiry type</option>
                      {inquiryTypes.map((type, index) => (
                        <option key={index} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  ></textarea>
                </div>

                {formStatus !== "idle" && (
                  <div
                    className={`p-4 rounded-lg ${
                      formStatus === "success"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      {formStatus === "success" ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : (
                        <AlertCircle className="w-5 h-5" />
                      )}
                      <span>
                        {formStatus === "success"
                          ? "Message sent successfully!"
                          : "There was an error sending your message. Please try again."}
                      </span>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Global Presence */}
      <div className="container mx-auto px-6 py-20">
        <h2 className="text-2xl font-bold mb-12 text-center">
          Global Presence
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Globe className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-semibold mb-2">International Offices</h3>
            <p className="text-gray-600">
              Present in major business hubs across North America, Europe, and
              Asia
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Clock className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-600">
              Global team available round the clock for urgent inquiries
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-semibold mb-2">Local Teams</h3>
            <p className="text-gray-600">
              Dedicated regional teams for personalized support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
