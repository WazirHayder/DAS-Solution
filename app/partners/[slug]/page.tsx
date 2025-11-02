import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { notFound } from "next/navigation";
import Image from "next/image";
import {
  CheckCircle,
  BarChart,
  Wrench,
  ShieldCheck,
  PhoneCall,
  Network,
  Wifi,
  Smartphone,
  Zap,
  Radio,
  Users,
  TrendingUp,
  Clock,
  Target,
  Award,
  ArrowRight,
  Star,
  Globe,
  Layers,
  Cpu,
  Settings,
  Monitor,
  Database,
  Cloud,
  Rocket,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const partnerData: {
  [key: string]: {
    name: string;
    tagline: string;
    description: string;
    fullDescription: string;
    logo: string;
    gradient: string;
    icon: React.ReactNode;
    primaryColor: string;
    secondaryColor: string;
    capabilities: { title: string; description: string; icon: React.ReactNode }[];
    benefits: { title: string; description: string }[];
    useCases: string[];
    stats: { value: string; label: string }[];
    features: string[];
    integration: string[];
    content: string | React.ReactNode;
  };
} = {
  ibwave: {
    name: "iBwave",
    tagline: "Design Excellence. Deploy with Confidence.",
    description: "Leading DAS and small cell design and deployment software platform",
    fullDescription:
      "iBwave is the industry-leading platform for designing, planning, and deploying Distributed Antenna Systems (DAS) and small cell networks. Trusted by network operators and system integrators worldwide, iBwave provides comprehensive tools for accurate RF prediction, 3D modeling, and seamless project execution.",
    logo: "/IbWAVE.jpg",
    gradient: "from-red-600 via-red-500 to-red-700",
    icon: <Radio className="w-16 h-16" />,
    primaryColor: "red",
    secondaryColor: "orange",
    capabilities: [
      {
        title: "3D Building Modeling",
        description: "Create accurate 3D models of your facility for precise network planning and visualization.",
        icon: <Layers className="w-8 h-8" />,
      },
      {
        title: "RF Prediction & Analysis",
        description: "Advanced algorithms predict coverage, capacity, and interference with industry-leading accuracy.",
        icon: <BarChart className="w-8 h-8" />,
      },
      {
        title: "Automated Design Tools",
        description: "Intelligent automation reduces design time while ensuring optimal network performance.",
        icon: <Zap className="w-8 h-8" />,
      },
      {
        title: "Project Management",
        description: "End-to-end project tracking from initial design through deployment and optimization.",
        icon: <Target className="w-8 h-8" />,
      },
    ],
    benefits: [
      {
        title: "Reduce Design Time by 60%",
        description: "Automated design tools and templates accelerate project timelines dramatically.",
      },
      {
        title: "Improve Accuracy by 95%",
        description: "Advanced RF prediction algorithms minimize design errors and post-deployment issues.",
      },
      {
        title: "Lower Deployment Costs",
        description: "Optimize equipment placement and reduce over-provisioning with precise planning.",
      },
    ],
    useCases: [
      "Large venue DAS deployments",
      "5G small cell network planning",
      "In-building coverage optimization",
      "Multi-carrier network design",
      "Public safety communications",
      "Enterprise campus networks",
    ],
    stats: [
      { value: "150+", label: "Countries" },
      { value: "500K+", label: "Projects Designed" },
      { value: "99%", label: "Accuracy Rate" },
      { value: "60%", label: "Time Savings" },
    ],
    features: [
      "3D building modeling and visualization",
      "Multi-technology support (DAS, Wi-Fi, Small Cells)",
      "Real-time collaboration tools",
      "Carrier-grade RF prediction",
      "Automated design optimization",
      "Comprehensive project documentation",
      "Integration with leading equipment vendors",
      "Cloud-based and on-premise deployment",
    ],
    integration: [
      "Leading DAS equipment manufacturers",
      "Carrier network planning systems",
      "CAD and BIM platforms",
      "Project management tools",
      "Network monitoring platforms",
    ],
    content: <></>,
  },
  eino: {
    name: "Eino",
    tagline: "Intelligent RF. Optimized Performance.",
    description: "Advanced RF optimization and network performance analytics",
    fullDescription:
      "Eino revolutionizes network optimization with AI-powered analytics and predictive intelligence. Our platform transforms raw network data into actionable insights, enabling operators to maximize performance, minimize costs, and deliver exceptional user experiences across wireless networks.",
    logo: "/Eino.jpg",
    gradient: "from-green-500 via-emerald-500 to-teal-600",
    icon: <BarChart className="w-16 h-16" />,
    primaryColor: "green",
    secondaryColor: "emerald",
    capabilities: [
      {
        title: "AI-Powered Analytics",
        description: "Machine learning algorithms analyze network patterns and predict performance issues before they impact users.",
        icon: <Cpu className="w-8 h-8" />,
      },
      {
        title: "Real-Time Monitoring",
        description: "Continuous network health monitoring with instant alerts for anomalies and performance degradation.",
        icon: <Monitor className="w-8 h-8" />,
      },
      {
        title: "Predictive Optimization",
        description: "Proactively optimize network parameters based on predictive analytics and traffic forecasting.",
        icon: <TrendingUp className="w-8 h-8" />,
      },
      {
        title: "Performance Intelligence",
        description: "Deep insights into network KPIs, user experience metrics, and optimization opportunities.",
        icon: <Database className="w-8 h-8" />,
      },
    ],
    benefits: [
      {
        title: "30% Performance Improvement",
        description: "Optimized network parameters deliver measurable improvements in throughput and coverage.",
      },
      {
        title: "50% Reduction in OPEX",
        description: "Automated optimization reduces manual tuning and operational overhead significantly.",
      },
      {
        title: "Proactive Problem Resolution",
        description: "Identify and resolve issues before users experience service degradation.",
      },
    ],
    useCases: [
      "Network performance optimization",
      "Capacity planning and forecasting",
      "Anomaly detection and troubleshooting",
      "Automated parameter tuning",
      "QoE and KPI monitoring",
      "Multi-vendor network management",
    ],
    stats: [
      { value: "100+", label: "Networks Managed" },
      { value: "30%", label: "Performance Gain" },
      { value: "50%", label: "OPEX Reduction" },
      { value: "24/7", label: "AI Monitoring" },
    ],
    features: [
      "AI and machine learning analytics",
      "Real-time network monitoring",
      "Predictive performance optimization",
      "Multi-technology support (4G, 5G, Wi-Fi)",
      "Automated parameter tuning",
      "Advanced reporting and dashboards",
      "API integration capabilities",
      "Cloud-native architecture",
    ],
    integration: [
      "Major network equipment vendors",
      "OSS and NMS platforms",
      "Cloud analytics platforms",
      "Custom enterprise systems",
      "Third-party monitoring tools",
    ],
    content: <></>,
  },
  ekahow: {
    name: "Ekahow",
    tagline: "Orchestrate Networks. Simplify Operations.",
    description: "Enterprise wireless network management and orchestration platform",
    fullDescription:
      "Ekahow provides unified network orchestration and management for enterprise wireless infrastructure. Our platform simplifies complex network operations, automates routine tasks, and delivers centralized visibility and control across your entire wireless ecosystem.",
    logo: "/Ekahow.png",
    gradient: "from-blue-500 via-cyan-500 to-indigo-600",
    icon: <Settings className="w-16 h-16" />,
    primaryColor: "blue",
    secondaryColor: "cyan",
    capabilities: [
      {
        title: "Unified Network Management",
        description: "Single pane of glass for managing all wireless technologies across your enterprise.",
        icon: <Network className="w-8 h-8" />,
      },
      {
        title: "Automated Orchestration",
        description: "Intelligent automation streamlines network provisioning, configuration, and optimization workflows.",
        icon: <Settings className="w-8 h-8" />,
      },
      {
        title: "Multi-Vendor Support",
        description: "Manage equipment from multiple vendors through unified APIs and standardized interfaces.",
        icon: <Globe className="w-8 h-8" />,
      },
      {
        title: "Cloud & On-Premise",
        description: "Flexible deployment options including cloud, hybrid, and on-premise configurations.",
        icon: <Cloud className="w-8 h-8" />,
      },
    ],
    benefits: [
      {
        title: "70% Faster Deployment",
        description: "Automated workflows reduce deployment time from weeks to days.",
      },
      {
        title: "Unified Operations",
        description: "Centralized management eliminates the complexity of multiple vendor tools.",
      },
      {
        title: "Scalable Architecture",
        description: "Scale from small deployments to enterprise-wide networks seamlessly.",
      },
    ],
    useCases: [
      "Multi-vendor network management",
      "Automated network provisioning",
      "Policy-based configuration",
      "Network lifecycle management",
      "Unified monitoring and reporting",
      "Enterprise Wi-Fi and DAS orchestration",
    ],
    stats: [
      { value: "500+", label: "Enterprises" },
      { value: "70%", label: "Time Savings" },
      { value: "99.9%", label: "Uptime" },
      { value: "Zero", label: "Vendor Lock-in" },
    ],
    features: [
      "Unified network dashboard",
      "Automated provisioning and configuration",
      "Multi-vendor equipment support",
      "Policy-based network management",
      "Real-time monitoring and alerts",
      "Comprehensive analytics and reporting",
      "RESTful API integration",
      "Role-based access control",
    ],
    integration: [
      "Enterprise network equipment",
      "Network monitoring systems",
      "IT service management platforms",
      "Cloud orchestration platforms",
      "Custom business applications",
    ],
    content: <></>,
  },
};

export default async function PartnerPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const partner = partnerData[slug];
  if (!partner) {
    notFound();
  }

  const gradientColors = {
    ibwave: "from-red-600 via-red-500 to-red-700",
    eino: "from-green-500 via-emerald-500 to-teal-600",
    ekahow: "from-blue-500 via-cyan-500 to-indigo-600",
  };

  const borderColors = {
    ibwave: "border-red-500",
    eino: "border-green-500",
    ekahow: "border-blue-500",
  };

  const bgColors = {
    ibwave: "bg-red-50",
    eino: "bg-green-50",
    ekahow: "bg-blue-50",
  };

  const textColors = {
    ibwave: "text-red-600",
    eino: "text-green-600",
    ekahow: "text-blue-600",
  };

  return (
    <div className="bg-white">
      <Header />
      <main>
        {/* Hero Section - Unique Design */}
        <section className={`relative py-24 md:py-32 overflow-hidden bg-gradient-to-br ${gradientColors[slug as keyof typeof gradientColors]} text-white`}>
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
                  Technology Partner
                </div>
                <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
                  {partner.name}
                </h1>
                <p className="text-2xl md:text-3xl font-bold mb-6 text-white/90">
                  {partner.tagline}
                </p>
                <p className="text-xl text-white/80 mb-8 leading-relaxed">
                  {partner.fullDescription}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-white text-gray-900 hover:bg-gray-100 text-lg px-8 py-6 rounded-full shadow-xl font-bold"
                  >
                    <Link href="/contact">
                      Get Started <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-md p-8 border border-white/20">
                  <div className="aspect-square flex items-center justify-center">
                    <div className="text-9xl opacity-80">{partner.icon}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section - Floating Cards */}
        <section className="py-16 bg-white -mt-12 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {partner.stats.map((stat, index) => (
                <div
                  key={index}
                  className={`relative p-6 rounded-2xl bg-white shadow-xl border-2 ${borderColors[slug as keyof typeof borderColors]} hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 transform`}
                >
                  <div className={`text-5xl font-extrabold ${textColors[slug as keyof typeof textColors]} mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                    {stat.label}
                  </div>
                  <div className={`absolute -top-3 -right-3 w-12 h-12 rounded-full bg-gradient-to-br ${gradientColors[slug as keyof typeof gradientColors]} flex items-center justify-center text-white text-xl font-bold shadow-lg`}>
                    {index + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Grid - Hexagonal Style */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                Platform Capabilities
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive tools and features designed for enterprise-grade network operations
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {partner.capabilities.map((capability, index) => (
                <div
                  key={index}
                  className={`group relative p-6 rounded-2xl bg-white border-2 border-gray-200 ${
                    slug === "ibwave" ? "hover:border-red-500" : slug === "eino" ? "hover:border-green-500" : "hover:border-blue-500"
                  } transition-all duration-300 hover:shadow-xl hover:-translate-y-2`}
                >
                  <div className={`mb-4 ${
                    slug === "ibwave" ? "text-red-600" : slug === "eino" ? "text-green-600" : "text-blue-600"
                  }`}>
                    {capability.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{capability.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{capability.description}</p>
                  <div className={`absolute inset-0 rounded-2xl ${
                    slug === "ibwave" ? "bg-gradient-to-br from-red-600 via-red-500 to-red-700" : 
                    slug === "eino" ? "bg-gradient-to-br from-green-500 via-emerald-500 to-teal-600" : 
                    "bg-gradient-to-br from-blue-500 via-cyan-500 to-indigo-600"
                  } opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Showcase - Side by Side */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {partner.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`relative p-8 rounded-2xl ${
                    slug === "ibwave" ? "bg-red-50 border-l-4 border-red-500" : 
                    slug === "eino" ? "bg-green-50 border-l-4 border-green-500" : 
                    "bg-blue-50 border-l-4 border-blue-500"
                  } hover:shadow-xl transition-all duration-300`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-16 h-16 rounded-full ${
                      slug === "ibwave" ? "bg-gradient-to-br from-red-600 via-red-500 to-red-700" : 
                      slug === "eino" ? "bg-gradient-to-br from-green-500 via-emerald-500 to-teal-600" : 
                      "bg-gradient-to-br from-blue-500 via-cyan-500 to-indigo-600"
                    } text-white flex items-center justify-center text-2xl font-bold shadow-lg`}>
                      {index + 1}
                    </div>
                    <div className="flex-grow">
                      <h3 className={`text-2xl font-bold ${
                        slug === "ibwave" ? "text-red-600" : slug === "eino" ? "text-green-600" : "text-blue-600"
                      } mb-3`}>
                        {benefit.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases & Features - Split Layout */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16">
              {/* Use Cases */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className={`w-12 h-1 ${
                    slug === "ibwave" ? "bg-red-50" : slug === "eino" ? "bg-green-50" : "bg-blue-50"
                  } rounded-full`}></div>
                  <h2 className="text-3xl font-bold text-gray-900">Use Cases</h2>
                </div>
                <div className="grid gap-4">
                  {partner.useCases.map((useCase, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-200 hover:shadow-md transition-all duration-300 group"
                    >
                      <div className={`flex-shrink-0 w-10 h-10 rounded-lg ${
                        slug === "ibwave" ? "bg-red-50" : slug === "eino" ? "bg-green-50" : "bg-blue-50"
                      } flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <CheckCircle className={`w-6 h-6 ${
                          slug === "ibwave" ? "text-red-600" : slug === "eino" ? "text-green-600" : "text-blue-600"
                        }`} />
                      </div>
                      <p className="text-gray-700 font-medium pt-1.5">{useCase}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className={`w-12 h-1 ${
                    slug === "ibwave" ? "bg-red-50" : slug === "eino" ? "bg-green-50" : "bg-blue-50"
                  } rounded-full`}></div>
                  <h2 className="text-3xl font-bold text-gray-900">Key Features</h2>
                </div>
                <div className="space-y-3">
                  {partner.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-lg bg-white border border-gray-200 hover:border-gray-300 transition-colors"
                    >
                      <Star className={`w-5 h-5 ${
                        slug === "ibwave" ? "text-red-600" : slug === "eino" ? "text-green-600" : "text-blue-600"
                      } flex-shrink-0`} />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                Seamless Integration
              </h2>
              <p className="text-xl text-gray-600">
                Works with your existing technology ecosystem
              </p>
            </div>
            <div className="grid md:grid-cols-5 gap-6">
              {partner.integration.map((item, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg text-center"
                >
                  <Globe className={`w-8 h-8 ${
                    slug === "ibwave" ? "text-red-600" : slug === "eino" ? "text-green-600" : "text-blue-600"
                  } mx-auto mb-3`} />
                  <p className="text-sm font-semibold text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Modern Design */}
        <section className={`py-20 bg-gradient-to-br ${gradientColors[slug as keyof typeof gradientColors]} text-white relative overflow-hidden`}>
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-block p-4 bg-white/20 backdrop-blur-sm rounded-full mb-8">
              {partner.icon}
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              Ready to Transform Your Network Operations?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
              Discover how {partner.name} can revolutionize your wireless network management and deliver measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-100 text-lg px-10 py-6 rounded-full shadow-2xl font-bold"
              >
                <Link href="/contact">
                  Schedule Demo <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 text-lg px-10 py-6 rounded-full font-bold"
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

