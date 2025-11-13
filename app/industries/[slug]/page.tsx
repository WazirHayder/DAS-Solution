import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { notFound } from "next/navigation";
import Image from "next/image";
import {
  CheckCircle,
  Building,
  Hospital,
  Plane,
  ShoppingBag,
  BarChart,
  Wrench,
  ShieldCheck,
  PhoneCall,
  Network,
  Wifi,
  Smartphone,
  Zap,
  Warehouse,
  School,
  Hotel,
  Radio,
  Users,
  TrendingUp,
  Clock,
  Target,
  Award,
  ArrowRight,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const industryData: {
  [key: string]: {
    title: string;
    description: string;
    subtitle: string;
    heroImage: string;
    stats: { value: string; label: string; icon: React.ReactNode }[];
    challenges: string[];
    solutions: { title: string; description: string; icon: React.ReactNode }[];
    features: { title: string; points: string[]; image: string }[];
    impact: { metric: string; description: string }[];
    content: string | React.ReactNode;
  };
} = {
  healthcare: {
    title: "Healthcare",
    description: "Reliable connectivity for critical medical communications.",
    subtitle: "Where Every Second Matters",
    heroImage: "/health industries.jpg",
    stats: [
      { value: "99.9%", label: "Uptime Guarantee", icon: <ShieldCheck className="w-8 h-8" /> },
      { value: "<1ms", label: "Network Latency", icon: <Zap className="w-8 h-8" /> },
      { value: "24/7", label: "Support Coverage", icon: <Clock className="w-8 h-8" /> },
      { value: "HIPAA", label: "Compliant", icon: <Award className="w-8 h-8" /> },
    ],
    challenges: [
      "Critical communication failures during emergencies",
      "HIPAA compliance and data security requirements",
      "Medical device connectivity and integration",
      "High-density device usage in patient rooms",
    ],
    solutions: [
      {
        title: "Mission-Critical Networks",
        description: "Dedicated wireless infrastructure designed for zero-downtime operation in healthcare facilities.",
        icon: <Hospital className="w-12 h-12" />,
      },
      {
        title: "Secure Patient Data",
        description: "End-to-end encryption and network segmentation to protect sensitive medical information.",
        icon: <ShieldCheck className="w-12 h-12" />,
      },
      {
        title: "Device Integration",
        description: "Seamless connectivity for wireless medical devices, patient monitors, and IoT sensors.",
        icon: <Network className="w-12 h-12" />,
      },
    ],
    features: [
      {
        title: "Emergency Communications",
        points: [
          "Guaranteed connectivity for first responders",
          "Real-time emergency alert systems",
          "Critical device connectivity priority",
        ],
        image: "/industries-healthcare-emergency.jpg",
      },
      {
        title: "Digital Health Integration",
        points: [
          "EHR system connectivity",
          "Telemedicine platform support",
          "Remote patient monitoring",
        ],
        image: "/industries-healthcare-digital.jpg",
      },
    ],
    impact: [
      { metric: "45%", description: "Reduction in communication delays" },
      { metric: "100%", description: "HIPAA compliance rate" },
      { metric: "60%", description: "Faster emergency response time" },
    ],
    content: <></>,
  },
  corporate: {
    title: "Corporate & Enterprise",
    description: "Seamless coverage for modern offices and campuses.",
    subtitle: "Empowering Modern Workforces",
    heroImage: "/Corporate & Enterprise industry.jpg",
    stats: [
      { value: "10K+", label: "Devices Supported", icon: <Smartphone className="w-8 h-8" /> },
      { value: "Gigabit", label: "Wi-Fi Speeds", icon: <Wifi className="w-8 h-8" /> },
      { value: "99.5%", label: "User Satisfaction", icon: <TrendingUp className="w-8 h-8" /> },
      { value: "Zero", label: "Downtime Incidents", icon: <CheckCircle className="w-8 h-8" /> },
    ],
    challenges: [
      "High-density device connections in open offices",
      "Multi-building campus connectivity",
      "BYOD policies and security",
      "Conference room and meeting space coverage",
    ],
    solutions: [
      {
        title: "Enterprise Wi-Fi 6/6E",
        description: "Next-generation wireless networks supporting thousands of simultaneous connections with blazing-fast speeds.",
        icon: <Wifi className="w-12 h-12" />,
      },
      {
        title: "Campus-Wide Coverage",
        description: "Seamless roaming across multiple buildings with intelligent handoff and load balancing.",
        icon: <Building className="w-12 h-12" />,
      },
      {
        title: "Advanced Security",
        description: "Network segmentation, guest access controls, and threat detection for enterprise-grade security.",
        icon: <ShieldCheck className="w-12 h-12" />,
      },
    ],
    features: [
      {
        title: "High-Density Connectivity",
        points: [
          "Support for 100+ devices per access point",
          "Conference room optimization",
          "Large meeting space coverage",
        ],
        image: "/industries-corporate-connectivity.jpg",
      },
      {
        title: "Productivity Tools",
        points: [
          "Seamless collaboration apps",
          "Cloud service integration",
          "Video conferencing optimization",
        ],
        image: "/industries-corporate-productivity.jpg",
      },
    ],
    impact: [
      { metric: "30%", description: "Increase in productivity" },
      { metric: "95%", description: "Faster file transfers" },
      { metric: "Zero", description: "Security breaches" },
    ],
    content: <></>,
  },
  transportation: {
    title: "Airports & Transportation",
    description: "Massive capacity networks for travelers and staff.",
    subtitle: "Connecting Millions, Every Day",
    heroImage: "/airport industry.jpg",
    stats: [
      { value: "1M+", label: "Daily Passengers", icon: <Users className="w-8 h-8" /> },
      { value: "Multi", label: "Carrier Support", icon: <Network className="w-8 h-8" /> },
      { value: "99.9%", label: "Operational Uptime", icon: <CheckCircle className="w-8 h-8" /> },
      { value: "24/7", label: "Network Monitoring", icon: <Clock className="w-8 h-8" /> },
    ],
    challenges: [
      "Handling peak travel traffic surges",
      "Multi-carrier cellular coverage",
      "Critical operational system connectivity",
      "International traveler device compatibility",
    ],
    solutions: [
      {
        title: "High-Capacity Networks",
        description: "Engineered to handle millions of concurrent connections during peak travel periods without degradation.",
        icon: <BarChart className="w-12 h-12" />,
      },
      {
        title: "Multi-Carrier DAS",
        description: "Comprehensive coverage for all major cellular carriers ensuring connectivity for international travelers.",
        icon: <Radio className="w-12 h-12" />,
      },
      {
        title: "Operational Excellence",
        description: "Dedicated networks for baggage systems, flight displays, security, and critical infrastructure.",
        icon: <Plane className="w-12 h-12" />,
      },
    ],
    features: [
      {
        title: "Passenger Experience",
        points: [
          "High-speed Wi-Fi throughout terminals",
          "Seamless cellular coverage",
          "Real-time flight information access",
        ],
        image: "/industries-transportation-passenger.jpg",
      },
      {
        title: "Operations Infrastructure",
        points: [
          "Baggage handling system connectivity",
          "Security system networks",
          "Staff communication systems",
        ],
        image: "/industries-transportation-ops.jpg",
      },
    ],
    impact: [
      { metric: "50%", description: "Reduction in connectivity complaints" },
      { metric: "99.9%", description: "System uptime achieved" },
      { metric: "40%", description: "Faster check-in processes" },
    ],
    content: <></>,
  },
  retail: {
    title: "Retail & Malls",
    description: "Enhancing shopper experience and store operations.",
    subtitle: "Elevating the Shopping Experience",
    heroImage: "/Retail & Malls industry.jpg",
    stats: [
      { value: "5X", label: "Faster Checkout", icon: <Zap className="w-8 h-8" /> },
      { value: "98%", label: "Wi-Fi Coverage", icon: <Wifi className="w-8 h-8" /> },
      { value: "35%", label: "Sales Increase", icon: <TrendingUp className="w-8 h-8" /> },
      { value: "Real-time", label: "Inventory Sync", icon: <Network className="w-8 h-8" /> },
    ],
    challenges: [
      "Mobile payment system reliability",
      "POS terminal connectivity",
      "Customer Wi-Fi experience",
      "Inventory management systems",
    ],
    solutions: [
      {
        title: "Guest Wi-Fi Excellence",
        description: "Fast, secure networks that enhance customer experience and support mobile shopping applications.",
        icon: <Wifi className="w-12 h-12" />,
      },
      {
        title: "POS Connectivity",
        description: "Dedicated networks ensuring seamless, reliable transactions at point-of-sale terminals.",
        icon: <ShoppingBag className="w-12 h-12" />,
      },
      {
        title: "Smart Retail Systems",
        description: "Support for RFID, inventory tracking, and real-time analytics for operational efficiency.",
        icon: <BarChart className="w-12 h-12" />,
      },
    ],
    features: [
      {
        title: "Customer Engagement",
        points: [
          "Loyalty app connectivity",
          "Mobile payment support",
          "In-store navigation assistance",
        ],
        image: "/industries-retail-customer.jpg",
      },
      {
        title: "Operational Efficiency",
        points: [
          "Real-time inventory tracking",
          "Staff communication devices",
          "Security system integration",
        ],
        image: "/industries-retail-operations.jpg",
      },
    ],
    impact: [
      { metric: "35%", description: "Increase in customer satisfaction" },
      { metric: "25%", description: "Faster transaction processing" },
      { metric: "20%", description: "Reduction in inventory loss" },
    ],
    content: <></>,
  },
  logistics: {
    title: "Logistics & Warehousing",
    description: "Connecting automated systems and workforce devices.",
    subtitle: "Optimizing Supply Chain Operations",
    heroImage: "/logistic industry.jpg",
    stats: [
      { value: "99.8%", label: "System Uptime", icon: <CheckCircle className="w-8 h-8" /> },
      { value: "Real-time", label: "Data Tracking", icon: <Network className="w-8 h-8" /> },
      { value: "30%", label: "Efficiency Gain", icon: <TrendingUp className="w-8 h-8" /> },
      { value: "IoT", label: "Device Support", icon: <Radio className="w-8 h-8" /> },
    ],
    challenges: [
      "Automated system connectivity",
      "Handheld device reliability",
      "Real-time inventory tracking",
      "Warehouse-wide coverage",
    ],
    solutions: [
      {
        title: "Industrial IoT Networks",
        description: "Specialized wireless infrastructure supporting thousands of sensors, scanners, and automated systems.",
        icon: <Warehouse className="w-12 h-12" />,
      },
      {
        title: "Workforce Mobility",
        description: "Reliable connectivity for barcode scanners, mobile computers, and communication devices.",
        icon: <Smartphone className="w-12 h-12" />,
      },
      {
        title: "Automation Support",
        description: "Network infrastructure for robotics, automated storage systems, and material handling equipment.",
        icon: <Zap className="w-12 h-12" />,
      },
    ],
    features: [
      {
        title: "Smart Warehousing",
        points: [
          "RFID system integration",
          "Automated inventory management",
          "Real-time stock tracking",
        ],
        image: "/industries-logistics-warehouse.jpg",
      },
      {
        title: "Workforce Efficiency",
        points: [
          "Handheld device connectivity",
          "Mobile data collection",
          "Voice picking system support",
        ],
        image: "/industries-logistics-workforce.jpg",
      },
    ],
    impact: [
      { metric: "30%", description: "Faster order fulfillment" },
      { metric: "25%", description: "Reduction in errors" },
      { metric: "40%", description: "Increase in throughput" },
    ],
    content: <></>,
  },
  education: {
    title: "Education",
    description: "High-density Wi-Fi for modern learning environments.",
    subtitle: "Connecting the Next Generation",
    heroImage: "/education industry.jpg",
    stats: [
      { value: "1:1", label: "Device Programs", icon: <School className="w-8 h-8" /> },
      { value: "10Gbps", label: "Network Capacity", icon: <Wifi className="w-8 h-8" /> },
      { value: "95%", label: "Student Satisfaction", icon: <Star className="w-8 h-8" /> },
      { value: "24/7", label: "Learning Access", icon: <Clock className="w-8 h-8" /> },
    ],
    challenges: [
      "One-to-one device program support",
      "Digital learning platform connectivity",
      "Campus-wide coverage",
      "Content filtering and security",
    ],
    solutions: [
      {
        title: "Education Wi-Fi Networks",
        description: "High-density wireless networks designed to support thousands of student devices simultaneously.",
        icon: <Wifi className="w-12 h-12" />,
      },
      {
        title: "Digital Learning Support",
        description: "Optimized connectivity for e-learning platforms, video streaming, and cloud-based applications.",
        icon: <School className="w-12 h-12" />,
      },
      {
        title: "Comprehensive Coverage",
        description: "Seamless connectivity across classrooms, libraries, dormitories, and outdoor learning spaces.",
        icon: <Building className="w-12 h-12" />,
      },
    ],
    features: [
      {
        title: "Modern Learning",
        points: [
          "Online course platform support",
          "Video streaming optimization",
          "Collaborative tool connectivity",
        ],
        image: "/industries-education-learning.jpg",
      },
      {
        title: "Campus Infrastructure",
        points: [
          "Multi-building coverage",
          "Outdoor space connectivity",
          "Dormitory network access",
        ],
        image: "/industries-education-campus.jpg",
      },
    ],
    impact: [
      { metric: "40%", description: "Improvement in engagement" },
      { metric: "90%", description: "Students satisfied with connectivity" },
      { metric: "Zero", description: "Security incidents" },
    ],
    content: <></>,
  },
  hospitality: {
    title: "Hospitality",
    description: "Exceptional guest connectivity and hotel operations.",
    subtitle: "Elevating Guest Experiences",
    heroImage: "/hospitality industry.jpg",
    stats: [
      { value: "Gigabit", label: "Guest Wi-Fi Speed", icon: <Wifi className="w-8 h-8" /> },
      { value: "99.9%", label: "Guest Satisfaction", icon: <Star className="w-8 h-8" /> },
      { value: "Zero", label: "Complaints", icon: <CheckCircle className="w-8 h-8" /> },
      { value: "24/7", label: "Network Monitoring", icon: <Clock className="w-8 h-8" /> },
    ],
    challenges: [
      "High-speed guest Wi-Fi expectations",
      "Property-wide coverage",
      "Bandwidth management during peak times",
      "Secure guest and operational networks",
    ],
    solutions: [
      {
        title: "Premium Guest Wi-Fi",
        description: "High-speed, reliable internet access that exceeds guest expectations and supports streaming services.",
        icon: <Wifi className="w-12 h-12" />,
      },
      {
        title: "Property-Wide Coverage",
        description: "Seamless connectivity from guest rooms to pools, restaurants, and conference facilities.",
        icon: <Hotel className="w-12 h-12" />,
      },
      {
        title: "Smart Bandwidth Management",
        description: "Intelligent traffic shaping to ensure consistent performance even during peak usage periods.",
        icon: <BarChart className="w-12 h-12" />,
      },
    ],
    features: [
      {
        title: "Guest Experience",
        points: [
          "High-speed streaming support",
          "Seamless room-to-room roaming",
          "Conference facility connectivity",
        ],
        image: "/industries-hospitality-guest.jpg",
      },
      {
        title: "Operations Excellence",
        points: [
          "PMS system connectivity",
          "POS terminal networks",
          "Staff communication systems",
        ],
        image: "/industries-hospitality-operations.jpg",
      },
    ],
    impact: [
      { metric: "45%", description: "Increase in guest satisfaction scores" },
      { metric: "30%", description: "Improvement in online ratings" },
      { metric: "25%", description: "Reduction in support tickets" },
    ],
    content: <></>,
  },
};

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = industryData[slug];
  if (!industry) {
    notFound();
  }

  return (
    <div className="bg-white">
      <Header />
      <main>
        {/* Modern Hero Section with Gradient */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#246598] via-[#1a4a70] to-[#246598]"></div>
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
                  {industry.subtitle}
                </div>
                <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                  {industry.title}
                </h1>
                <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                  {industry.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-[#8fc447] hover:bg-[#79a93b] text-white text-lg px-8 py-6 rounded-full shadow-xl"
                  >
                    <Link href="/contact">
                      Get Consultation <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 text-lg px-8 py-6 rounded-full"
                  >
                    <Link href="/solutions">View Solutions</Link>
                  </Button>
                </div>
              </div>
              <div className="relative card-3d group">
                {/* 3D Glow Effect Behind */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#8fc447]/40 via-[#246598]/40 to-[#8fc447]/40 rounded-3xl blur-3xl opacity-60 -z-10 transition-opacity duration-700 group-hover:opacity-80"></div>
                
                {/* Main 3D Container */}
                <div className="relative rounded-3xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6),0_0_80px_rgba(36,101,152,0.4),inset_0_1px_0_rgba(255,255,255,0.1)] card-3d-container">
                  {/* Animated Border Glow */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-white/30 group-hover:border-white/50 transition-all duration-500 shadow-[0_0_30px_rgba(143,196,71,0.3)] group-hover:shadow-[0_0_50px_rgba(143,196,71,0.5)] pointer-events-none"></div>
                  
                  {/* Image Container with 3D Effect */}
                  <div className="relative aspect-video overflow-hidden card-3d-image">
                    <div className="w-full h-full transition-transform duration-700 group-hover:scale-110">
                      <Image
                        src={industry.heroImage}
                        alt={industry.title}
                        width={800}
                        height={600}
                        className="w-full h-full object-cover"
                        priority
                      />
                    </div>
                    
                    {/* Multi-layer Gradient Overlays for 3D Depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#246598]/30 via-transparent to-[#8fc447]/30"></div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10"></div>
                    
                    {/* Animated Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-in-out"></div>
                    
                    {/* Corner Highlights for 3D Look */}
                    <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-white/20 to-transparent rounded-br-full opacity-50"></div>
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-white/10 to-transparent rounded-tl-full opacity-30"></div>
                  </div>
                  
                  {/* 3D Drop Shadow Effect */}
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[85%] h-12 bg-black/40 rounded-full blur-2xl group-hover:bg-black/50 group-hover:h-16 transition-all duration-500"></div>
                </div>
                
                {/* Floating Depth Elements */}
                <div className="absolute -top-6 -right-6 w-28 h-28 bg-gradient-to-br from-[#8fc447]/30 to-[#246598]/30 rounded-full blur-3xl opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700 -z-10"></div>
                <div className="absolute -bottom-6 -left-6 w-36 h-36 bg-gradient-to-br from-[#246598]/25 to-[#8fc447]/25 rounded-full blur-3xl opacity-50 group-hover:opacity-70 group-hover:scale-110 transition-all duration-700 -z-10"></div>
                
                {/* Additional Light Reflection */}
                <div className="absolute top-1/4 right-1/4 w-20 h-20 bg-white/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section - Modern Grid */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {industry.stats.map((stat, index) => (
                <div
                  key={index}
                  className="group text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#246598] to-[#1a4a70] text-white mb-4 group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-extrabold text-[#246598] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Challenges & Solutions - Split Layout */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 mb-20">
              {/* Challenges */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-1 bg-red-500 rounded-full"></div>
                  <h2 className="text-3xl font-bold text-gray-900">Common Challenges</h2>
                </div>
                <ul className="space-y-4">
                  {industry.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-4 group">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center group-hover:bg-red-500 transition-colors">
                        <span className="text-red-600 group-hover:text-white font-bold text-sm">
                          {index + 1}
                        </span>
                      </div>
                      <p className="text-lg text-gray-700 pt-1">{challenge}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solutions */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-1 bg-[#8fc447] rounded-full"></div>
                  <h2 className="text-3xl font-bold text-gray-900">Our Solutions</h2>
                </div>
                <div className="space-y-6">
                  {industry.solutions.map((solution, index) => (
                    <div
                      key={index}
                      className="p-6 rounded-xl bg-white border-l-4 border-[#8fc447] shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="flex items-start gap-4">
                        <div className="text-[#246598] flex-shrink-0">{solution.icon}</div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {solution.title}
                          </h3>
                          <p className="text-gray-600">{solution.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Showcase - Modern Card Layout */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                Comprehensive Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Tailored wireless infrastructure designed specifically for your industry needs
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              {industry.features.map((feature, index) => (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-2xl ${
                    index % 2 === 0
                      ? "bg-gradient-to-br from-[#246598] to-[#1a4a70] text-white"
                      : "bg-gradient-to-br from-[#8fc447] to-[#79a93b] text-white"
                  } shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105`}
                >
                  <div className="p-8">
                    <h3 className="text-3xl font-bold mb-6">{feature.title}</h3>
                    <ul className="space-y-3">
                      {feature.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-center gap-3">
                          <CheckCircle className="w-6 h-6 flex-shrink-0" />
                          <span className="text-lg">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10">
                    {index % 2 === 0 ? (
                      <Network className="w-full h-full" />
                    ) : (
                      <Zap className="w-full h-full" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Metrics - Visual Display */}
        <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                Measurable Impact
              </h2>
              <p className="text-xl text-gray-600">
                Real results from our industry-focused solutions
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {industry.impact.map((item, index) => (
                <div
                  key={index}
                  className="relative p-8 rounded-2xl bg-white shadow-xl border-t-4 border-[#246598] hover:border-[#8fc447] transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                >
                  <div className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#246598] to-[#8fc447] mb-4">
                    {item.metric}
                  </div>
                  <p className="text-lg text-gray-700">{item.description}</p>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#246598]/10 to-transparent rounded-bl-3xl"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modern CTA Section */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#246598] to-[#1a4a70]"></div>
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-block p-4 bg-white/20 backdrop-blur-sm rounded-full mb-8">
              {industry.title === "Healthcare" && <Hospital className="w-16 h-16 text-white" />}
              {industry.title === "Corporate & Enterprise" && <Building className="w-16 h-16 text-white" />}
              {industry.title === "Airports & Transportation" && <Plane className="w-16 h-16 text-white" />}
              {industry.title === "Retail & Malls" && <ShoppingBag className="w-16 h-16 text-white" />}
              {industry.title === "Logistics & Warehousing" && <Warehouse className="w-16 h-16 text-white" />}
              {industry.title === "Education" && <School className="w-16 h-16 text-white" />}
              {industry.title === "Hospitality" && <Hotel className="w-16 h-16 text-white" />}
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Ready to Transform Your {industry.title} Operations?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
              Let's discuss how our tailored wireless solutions can revolutionize your connectivity and drive measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-[#8fc447] hover:bg-[#79a93b] text-white text-lg px-10 py-6 rounded-full shadow-2xl"
              >
                <Link href="/contact">
                  Schedule Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 text-lg px-10 py-6 rounded-full"
              >
                <Link href="/solutions">Explore Solutions</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
