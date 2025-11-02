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
  ClipboardList,
  DraftingCompass,
  HardHat,
  Network,
  Wifi,
  Smartphone,
  Zap,
  Factory,
  Warehouse,
  Briefcase,
  School,
  Hotel,
  Radio,
  // Consulting, // This icon does not exist, causing the error.
  Users, // Using a better, existing icon for consulting/partnership
} from "lucide-react";
import { Button } from "@/components/ui/button"; // Assuming you have a button component
import React from "react";

const solutionData: {
  [key: string]: {
    title: string;
    description: string;
    content: string | React.ReactNode;
  };
} = {
  "in-building-coverage": {
    title: "In-Building Coverage (DAS)",
    description: "Seamless indoor cellular coverage for large venues.",
    content: (
      <>
        {/* Section 1: What is DAS? */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
            <div className="order-last md:order-first">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Eliminate Dead Zones, Forever.
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Modern buildings, with their steel frames and energy-efficient
                glass, are natural blockers of cellular signals. A Distributed
                Antenna System (DAS) is the definitive solution, acting as a
                network of antennas strategically placed throughout your facility
                to amplify and distribute strong, reliable cellular coverage to
                every corner—from the parking garage to the penthouse.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-start">
                  <Wifi className="w-6 h-6 text-[#246598] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Multi-Carrier Support</h3>
                    <p className="text-gray-600">Our systems amplify signals for all major carriers, ensuring connectivity for everyone.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Smartphone className="w-6 h-6 text-[#8fc447] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800">5G Ready Infrastructure</h3>
                    <p className="text-gray-600">Invest in a future-proof solution that is ready to support next-generation 5G technology.</p>
                  </div>
                </div>
              </div>
            </div>
            <Image
              src="/solutions-in-building.jpg" // Replace with a high-quality image
              alt="DAS Network Diagram"
              width={500}
              height={350}
              className="rounded-lg shadow-2xl object-cover"
            />
          </div>
        </section>

        {/* Section 2: Key Benefits */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Why Invest in a DAS Solution?
              </h2>
              <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
                Beyond simple connectivity, a robust DAS network unlocks critical
                advantages for your business, users, and bottom line.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <CheckCircle className="w-8 h-8" />, title: "Flawless Coverage", text: "Eradicate dropped calls and slow data in every part of your building." },
                { icon: <BarChart className="w-8 h-8" />, title: "Massive Capacity", text: "Support thousands of simultaneous users in high-density areas like stadiums." },
                { icon: <ShieldCheck className="w-8 h-8" />, title: "Enhanced Safety", text: "Ensure reliable communication for first responders and emergency services." },
                { icon: <Wrench className="w-8 h-8" />, title: "Future-Proof", text: "Our systems are 5G-ready, protecting your investment for years to come." },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`group relative bg-white p-8 rounded-lg shadow-lg transition-all duration-300 ease-in-out overflow-hidden hover:shadow-2xl hover:-translate-y-2 border-t-4 ${
                    index % 2 === 0 ? "border-[#246598]" : "border-[#8fc447]"
                  }`}
                >
                  <div
                    className={`absolute top-0 left-0 h-full w-full opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${
                      index % 2 === 0 ? "bg-[#246598]" : "bg-[#8fc447]"
                    }`}
                  ></div>
                  <div className="relative">
                    <div className={`mb-6 text-4xl ${index % 2 === 0 ? "text-[#246598]" : "text-[#8fc447]"}`}>{item.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Our Process */}
        <section className="py-16 md:py-24 bg-white">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Our Turnkey DAS Implementation Process
            </h2>
            <p className="text-lg text-gray-600 mt-2 max-w-3xl mx-auto">
              We provide a seamless, end-to-end service from initial concept to
              long-term support.
            </p>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            {/* The connecting line */}
            <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gray-200"></div>
            <div className="relative grid md:grid-cols-4 gap-12">
              {[
                { icon: <ClipboardList />, title: "1. Survey & Design", text: "We conduct a detailed RF survey and create a custom system design using advanced modeling software." },
                { icon: <DraftingCompass />, title: "2. Engineering", text: "Our engineers produce detailed plans and documentation for carrier approval and installation." },
                { icon: <HardHat />, title: "3. Installation", text: "Certified technicians deploy all hardware and cabling with minimal disruption to your operations." },
                { icon: <Network />, title: "4. Optimization", text: "We commission, test, and optimize the network to ensure peak performance and provide ongoing support." },
              ].map((step, index) => (
                <div key={index} className="relative text-center md:text-left bg-gray-50 p-4 rounded-lg z-10">
                  <div className="flex justify-center md:justify-start mb-4 bg-white rounded-full">
                    <div className={`text-white rounded-full p-3 w-16 h-16 flex items-center justify-center ring-8 ring-gray-50 ${index % 2 === 0 ? 'bg-[#246598]' : 'bg-[#8fc447]'}`}>
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Industries We Serve */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Tailored Solutions for Every Industry
            </h2>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: <Hospital className="mx-auto w-12 h-12 text-[#246598]" />, name: "Healthcare" },
              { icon: <Building className="mx-auto w-12 h-12 text-[#8fc447]" />, name: "Corporate" },
              { icon: <Plane className="mx-auto w-12 h-12 text-[#246598]" />, name: "Airports" },
              { icon: <ShoppingBag className="mx-auto w-12 h-12 text-[#8fc447]" />, name: "Retail" },
            ].map((industry) => (
              <div key={industry.name} className="p-4">
                {industry.icon}
                <p className="mt-4 font-semibold text-lg text-gray-700">{industry.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Call to Action */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-[#246598] to-[#1a4a70] text-white rounded-xl shadow-2xl p-12 text-center">
              <PhoneCall className="mx-auto w-16 h-16 mb-6" />
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                Ready to Transform Your In-Building Connectivity?
              </h2>
              <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-8">
                Don't let poor cellular signal impact your business, safety, and
                user experience. Contact our experts today for a complimentary
                consultation and site assessment.
              </p>
              <Button
                variant="default"
                size="lg"
                className="bg-white text-[#246598] hover:bg-gray-100 text-lg font-bold py-3 px-8"
              >
                Get a Free Consultation
              </Button>
            </div>
          </div>
        </section>
      </>
    ),
  },
  "private-5g": {
    title: "Private 4G/5G Networks",
    description: "Secure, dedicated networks for critical operations.",
    content:
      <>
        {/* Section 1: What is a Private Network? */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
            <div className="order-last md:order-first">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Your Network, Your Rules.
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Public networks are shared, congested, and outside your control. A Private 4G/5G Network is a dedicated, secure cellular network built exclusively for your enterprise. It provides unparalleled reliability, security, and performance for your most critical operations, from automated factories to secure corporate campuses.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-start">
                  <Zap className="w-6 h-6 text-[#246598] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Ultra-Low Latency</h3>
                    <p className="text-gray-600">Enable real-time applications like robotics and automation with near-instant communication.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <ShieldCheck className="w-6 h-6 text-[#8fc447] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Airtight Security</h3>
                    <p className="text-gray-600">Isolate your critical data from public networks, ensuring complete privacy and control.</p>
                  </div>
                </div>
              </div>
            </div>
            <Image
              src="/solutions-private-5g.jpg"
              alt="Private 5G Network Tower"
              width={500}
              height={350}
              className="rounded-lg shadow-2xl object-cover"
            />
          </div>
        </section>

        {/* Section 2: Key Advantages */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                The Private Network Advantage
              </h2>
              <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
                Gain a competitive edge with a network built for the demands of modern industry.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <BarChart className="w-8 h-8" />, title: "Dedicated Bandwidth", text: "Eliminate congestion and guarantee performance for your most important devices and applications." },
                { icon: <CheckCircle className="w-8 h-8" />, title: "Unmatched Reliability", text: "Achieve carrier-grade uptime and resilience for mission-critical operations that cannot fail." },
                { icon: <Network className="w-8 h-8" />, title: "Extended Coverage", text: "Provide seamless connectivity across large campuses, warehouses, and outdoor industrial sites." },
                { icon: <Wrench className="w-8 h-8" />, title: "Total Control", text: "Define your own network policies, prioritize traffic, and manage access with precision." },
              ].map((item, index) => (
                <div key={index} className={`group relative bg-white p-8 rounded-lg shadow-lg transition-all duration-300 ease-in-out overflow-hidden hover:shadow-2xl hover:-translate-y-2 border-t-4 ${index % 2 === 0 ? "border-[#246598]" : "border-[#8fc447]"}`}>
                  <div className={`absolute top-0 left-0 h-full w-full opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${index % 2 === 0 ? "bg-[#246598]" : "bg-[#8fc447]"}`}></div>
                  <div className="relative">
                    <div className={`mb-6 text-4xl ${index % 2 === 0 ? "text-[#246598]" : "text-[#8fc447]"}`}>{item.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Our Process */}
        <section className="py-16 md:py-24 bg-white">
          <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Private Network Deployment Process</h2><p className="text-lg text-gray-600 mt-2 max-w-3xl mx-auto">We follow a structured methodology to deliver a robust and secure private network.</p></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"><div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gray-200"></div><div className="relative grid md:grid-cols-4 gap-12">{[{ icon: <ClipboardList />, title: "1. Discovery", text: "We analyze your use cases, coverage needs, and performance requirements." }, { icon: <DraftingCompass />, title: "2. Design", text: "Our engineers design the network architecture, including core, RAN, and spectrum strategy." }, { icon: <HardHat />, title: "3. Deployment", text: "We install all hardware and integrate the private network with your existing systems." }, { icon: <Network />, title: "4. Management", text: "We commission the network, optimize performance, and provide ongoing management and support." }].map((step, index) => (<div key={index} className="relative text-center md:text-left bg-gray-50 p-4 rounded-lg z-10"><div className="flex justify-center md:justify-start mb-4 bg-white rounded-full"><div className={`text-white rounded-full p-3 w-16 h-16 flex items-center justify-center ring-8 ring-gray-50 ${index % 2 === 0 ? 'bg-[#246598]' : 'bg-[#8fc447]'}`}>{step.icon}</div></div><h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3><p className="text-gray-600">{step.text}</p></div>))}</div></div>
        </section>

        {/* Section 4: Use Cases */}
        <section className="py-16 md:py-24 bg-white">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Powering Industry 4.0
            </h2>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: <Factory className="mx-auto w-12 h-12 text-[#246598]" />, name: "Smart Factories" },
              { icon: <Warehouse className="mx-auto w-12 h-12 text-[#8fc447]" />, name: "Logistics & Ports" },
              { icon: <Hospital className="mx-auto w-12 h-12 text-[#246598]" />, name: "Healthcare" },
              { icon: <Building className="mx-auto w-12 h-12 text-[#8fc447]" />, name: "Large Venues" },
            ].map((industry) => (
              <div key={industry.name} className="p-4">
                {industry.icon}
                <p className="mt-4 font-semibold text-lg text-gray-700">{industry.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Call to Action */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-[#246598] to-[#1a4a70] text-white rounded-xl shadow-2xl p-12 text-center">
              <PhoneCall className="mx-auto w-16 h-16 mb-6" />
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                Ready to Build Your Private Network?
              </h2>
              <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-8">
                Take control of your enterprise connectivity. Contact our experts today to discuss how a private 4G/5G network can revolutionize your operations with unmatched security and performance.
              </p>
              <Button
                variant="default"
                size="lg"
                className="bg-white text-[#246598] hover:bg-gray-100 text-lg font-bold py-3 px-8"
              >
                Get a Free Consultation
              </Button>
            </div>
          </div>
        </section>
      </>
  },
  "enterprise-wifi": {
    title: "Enterprise Wi-Fi Design",
    description: "High-performance Wi-Fi 6/6E for modern workplaces.",
    content:
      <>
        {/* Section 1: What is Enterprise Wi-Fi? */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
            <div className="order-last md:order-first">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Wi-Fi That Just Works. Everywhere.
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Consumer-grade Wi-Fi can't handle the demands of a modern enterprise. We design and deploy next-generation Wi-Fi 6/6E networks that deliver blazing-fast speeds, robust security, and seamless connectivity for thousands of users and devices in high-density environments.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-start">
                  <Wifi className="w-6 h-6 text-[#246598] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Extreme Performance</h3>
                    <p className="text-gray-600">Leverage Wi-Fi 6/6E for multi-gigabit speeds and massive capacity for all your devices.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <BarChart className="w-6 h-6 text-[#8fc447] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800">High-Density Ready</h3>
                    <p className="text-gray-600">Support countless concurrent users in busy offices, lecture halls, and large venues.</p>
                  </div>
                </div>
              </div>
            </div>
            <Image
              src="/solutions-wifi.jpg"
              alt="Enterprise Wi-Fi Access Point"
              width={500}
              height={350}
              className="rounded-lg shadow-2xl object-cover"
            />
          </div>
        </section>

        {/* Section 2: Key Advantages */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Engineered for Business
              </h2>
              <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
                Our Wi-Fi solutions provide the performance, security, and manageability that modern enterprises require.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <Zap className="w-8 h-8" />, title: "Blazing Speeds", text: "Deliver a superior user experience with the fastest wireless standards available today." },
                { icon: <ShieldCheck className="w-8 h-8" />, title: "Advanced Security", text: "Protect your network with WPA3 encryption, network segmentation, and threat detection." },
                { icon: <Network className="w-8 h-8" />, title: "Centralized Management", text: "Easily monitor, manage, and troubleshoot your entire wireless network from a single dashboard." },
                { icon: <Wrench className="w-8 h-8" />, title: "Seamless Roaming", text: "Ensure uninterrupted connectivity as users move throughout your facility without dropped connections." },
              ].map((item, index) => (
                <div key={index} className={`group relative bg-white p-8 rounded-lg shadow-lg transition-all duration-300 ease-in-out overflow-hidden hover:shadow-2xl hover:-translate-y-2 border-t-4 ${index % 2 === 0 ? "border-[#246598]" : "border-[#8fc447]"}`}>
                  <div className={`absolute top-0 left-0 h-full w-full opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${index % 2 === 0 ? "bg-[#246598]" : "bg-[#8fc447]"}`}></div>
                  <div className="relative">
                    <div className={`mb-6 text-4xl ${index % 2 === 0 ? "text-[#246598]" : "text-[#8fc447]"}`}>{item.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Our Process */}
        <section className="py-16 md:py-24 bg-white">
          <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Wi-Fi Design & Deployment Process</h2><p className="text-lg text-gray-600 mt-2 max-w-3xl mx-auto">A data-driven approach to guarantee high-performance wireless connectivity.</p></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"><div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gray-200"></div><div className="relative grid md:grid-cols-4 gap-12">{[{ icon: <ClipboardList />, title: "1. Site Survey", text: "We conduct predictive and on-site surveys to analyze your RF environment and capacity needs." }, { icon: <DraftingCompass />, title: "2. Network Design", text: "We create a detailed Wi-Fi design, including AP placement, channel planning, and security policies." }, { icon: <HardHat />, title: "3. Installation", text: "Our technicians install and configure all access points, switches, and management platforms." }, { icon: <Network />, title: "4. Validation", text: "We validate network performance against design goals and provide comprehensive handover documentation." }].map((step, index) => (<div key={index} className="relative text-center md:text-left bg-gray-50 p-4 rounded-lg z-10"><div className="flex justify-center md:justify-start mb-4 bg-white rounded-full"><div className={`text-white rounded-full p-3 w-16 h-16 flex items-center justify-center ring-8 ring-gray-50 ${index % 2 === 0 ? 'bg-[#246598]' : 'bg-[#8fc447]'}`}>{step.icon}</div></div><h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3><p className="text-gray-600">{step.text}</p></div>))}</div></div>
        </section>

        {/* Section 4: Use Cases */}
        <section className="py-16 md:py-24 bg-white">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Designed for Demanding Environments
            </h2>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: <Briefcase className="mx-auto w-12 h-12 text-[#246598]" />, name: "Corporate Offices" },
              { icon: <School className="mx-auto w-12 h-12 text-[#8fc447]" />, name: "Education Campuses" },
              { icon: <Hotel className="mx-auto w-12 h-12 text-[#246598]" />, name: "Hospitality" },
              { icon: <Building className="mx-auto w-12 h-12 text-[#8fc447]" />, name: "Large Public Venues" },
            ].map((industry) => (
              <div key={industry.name} className="p-4">
                {industry.icon}
                <p className="mt-4 font-semibold text-lg text-gray-700">{industry.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Call to Action */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-[#246598] to-[#1a4a70] text-white rounded-xl shadow-2xl p-12 text-center">
              <PhoneCall className="mx-auto w-16 h-16 mb-6" />
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                Ready to Upgrade Your Wireless Experience?
              </h2>
              <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-8">
                Stop dealing with slow, unreliable Wi-Fi. Contact our specialists for a free assessment of your current network and discover the power of enterprise-grade wireless.
              </p>
              <Button variant="default" size="lg" className="bg-white text-[#246598] hover:bg-gray-100 text-lg font-bold py-3 px-8">
                Request a Wi-Fi Assessment
              </Button>
            </div>
          </div>
        </section>
      </>
  },
  "cctv-iot": {
    title: "CCTV, IoT & Security",
    description: "Integrated solutions for smart and secure facilities.",
    content:
      <>
        {/* Section 1: Intro */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
            <div className="order-last md:order-first">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">The Backbone of Your Smart Facility</h2>
              <p className="text-lg text-gray-600 mb-6">Your security cameras, IoT sensors, and access control systems are only as reliable as the network they run on. We build unified, high-performance wireless networks that provide the robust backbone for your entire smart facility, ensuring seamless data transmission and real-time monitoring.</p>
              <div className="mt-8 space-y-4">
                <div className="flex items-start"><CheckCircle className="w-6 h-6 text-[#246598] mr-3 mt-1 flex-shrink-0" /><div><h3 className="font-semibold text-gray-800">Lag-Free Video</h3><p className="text-gray-600">Ensure smooth, high-definition video streaming from all your CCTV cameras.</p></div></div>
                <div className="flex items-start"><Network className="w-6 h-6 text-[#8fc447] mr-3 mt-1 flex-shrink-0" /><div><h3 className="font-semibold text-gray-800">Real-Time IoT Data</h3><p className="text-gray-600">Reliably connect thousands of IoT sensors for real-time operational data.</p></div></div>
              </div>
            </div>
            <Image src="/solutions-cctv.jpg" alt="CCTV and IoT" width={500} height={350} className="rounded-lg shadow-2xl object-cover" />
          </div>
        </section>

        {/* Section 2: Key Benefits */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold text-gray-800">Unified. Reliable. Secure.</h2><p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">A purpose-built network for your security infrastructure unlocks powerful advantages.</p></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[{ icon: <ShieldCheck className="w-8 h-8" />, title: "Enhanced Security", text: "Isolate your security traffic on a dedicated network, reducing vulnerabilities and attack surfaces." }, { icon: <CheckCircle className="w-8 h-8" />, title: "Guaranteed Performance", text: "Prioritize critical security data to ensure it's always transmitted without delay or interruption." }, { icon: <Wrench className="w-8 h-8" />, title: "Simplified Management", text: "Manage all your connected security and IoT devices over a single, unified network infrastructure." }, { icon: <BarChart className="w-8 h-8" />, title: "Future Scalability", text: "Build a network foundation that can easily scale to accommodate more cameras, sensors, and devices." }].map((item, index) => (<div key={index} className={`group relative bg-white p-8 rounded-lg shadow-lg transition-all duration-300 ease-in-out overflow-hidden hover:shadow-2xl hover:-translate-y-2 border-t-4 ${index % 2 === 0 ? "border-[#246598]" : "border-[#8fc447]"}`}><div className={`absolute top-0 left-0 h-full w-full opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${index % 2 === 0 ? "bg-[#246598]" : "bg-[#8fc447]"}`}></div><div className="relative"><div className={`mb-6 text-4xl ${index % 2 === 0 ? "text-[#246598]" : "text-[#8fc447]"}`}>{item.icon}</div><h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3><p className="text-gray-600 leading-relaxed">{item.text}</p></div></div>))}
            </div>
          </div>
        </section>

        {/* Section 3: Our Process */}
        <section className="py-16 md:py-24 bg-white">
          <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Security Integration Process</h2><p className="text-lg text-gray-600 mt-2 max-w-3xl mx-auto">We follow a structured approach to ensure a seamless and secure integration.</p></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"><div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gray-200"></div><div className="relative grid md:grid-cols-4 gap-12">{[{ icon: <ClipboardList />, title: "1. Assessment", text: "We analyze your existing infrastructure, security requirements, and facility layout." }, { icon: <DraftingCompass />, title: "2. Network Design", text: "We design a unified network architecture optimized for your specific CCTV and IoT devices." }, { icon: <HardHat />, title: "3. Integration", text: "Our technicians deploy and configure the network and integrate all your security systems." }, { icon: <ShieldCheck />, title: "4. Validation", text: "We rigorously test the entire system for performance, reliability, and security vulnerabilities." }].map((step, index) => (<div key={index} className="relative text-center md:text-left bg-gray-50 p-4 rounded-lg z-10"><div className="flex justify-center md:justify-start mb-4 bg-white rounded-full"><div className={`text-white rounded-full p-3 w-16 h-16 flex items-center justify-center ring-8 ring-gray-50 ${index % 2 === 0 ? 'bg-[#246598]' : 'bg-[#8fc447]'}`}>{step.icon}</div></div><h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3><p className="text-gray-600">{step.text}</p></div>))}</div></div>
        </section>

        {/* Section 4: Use Cases */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Securing Diverse Environments
            </h2>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: <Building className="mx-auto w-12 h-12 text-[#246598]" />, name: "Corporate Campuses" },
              { icon: <Factory className="mx-auto w-12 h-12 text-[#8fc447]" />, name: "Industrial Sites" },
              { icon: <ShoppingBag className="mx-auto w-12 h-12 text-[#246598]" />, name: "Retail Spaces" },
              { icon: <School className="mx-auto w-12 h-12 text-[#8fc447]" />, name: "Educational Facilities" },
            ].map((industry) => (
              <div key={industry.name} className="p-4">
                {industry.icon}
                <p className="mt-4 font-semibold text-lg text-gray-700">{industry.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Call to Action */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-[#246598] to-[#1a4a70] text-white rounded-xl shadow-2xl p-12 text-center">
              <PhoneCall className="mx-auto w-16 h-16 mb-6" />
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Ready to Secure Your Smart Facility?</h2>
              <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-8">Ensure your security systems have the reliable network they need to perform. Contact us for a comprehensive security network assessment.</p>
              <Button variant="default" size="lg" className="bg-white text-[#246598] hover:bg-gray-100 text-lg font-bold py-3 px-8">Get a Security Consultation</Button>
            </div>
          </div>
        </section>
      </>
  },
  "rf-design": {
    title: "RF Design & Optimization",
    description: "Expert analysis to maximize network performance.",
    content: (
      <>
        {/* Section 1: Intro */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
            <div className="order-last md:order-first">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Engineering Wireless Excellence</h2>
              <p className="text-lg text-gray-600 mb-6">A high-performance wireless network doesn't happen by accident. It's the result of meticulous RF (Radio Frequency) design and optimization. Our experts use advanced modeling tools and on-site analysis to engineer a network that guarantees maximum performance, coverage, and capacity.</p>
              <div className="mt-8 space-y-4">
                <div className="flex items-start"><DraftingCompass className="w-6 h-6 text-[#246598] mr-3 mt-1 flex-shrink-0" /><div><h3 className="font-semibold text-gray-800">Predictive Modeling</h3><p className="text-gray-600">Simulating RF coverage in a digital twin of your facility before any hardware is installed.</p></div></div>
                <div className="flex items-start"><Radio className="w-6 h-6 text-[#8fc447] mr-3 mt-1 flex-shrink-0" /><div><h3 className="font-semibold text-gray-800">Spectrum Analysis</h3><p className="text-gray-600">Identifying and mitigating sources of RF interference that degrade network performance.</p></div></div>
              </div>
            </div>
            <Image src="/solutions-rf-design.jpg" alt="RF Design" width={500} height={350} className="rounded-lg shadow-2xl object-cover" />
          </div>
        </section>

        {/* Section 2: Key Benefits */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold text-gray-800">The Impact of Expert RF Design</h2><p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">Professional RF engineering translates directly into tangible business benefits.</p></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[{ icon: <BarChart className="w-8 h-8" />, title: "Maximized Performance", text: "Ensure your network operates at its full potential with optimal data speeds and capacity." }, { icon: <CheckCircle className="w-8 h-8" />, title: "Complete Coverage", text: "Eliminate dead zones and ensure reliable connectivity exactly where you need it." }, { icon: <ShieldCheck className="w-8 h-8" />, title: "Reduced Interference", text: "Identify and mitigate RF interference from other networks and devices for a stable connection." }, { icon: <Wrench className="w-8 h-8" />, title: "Cost Efficiency", text: "Avoid over-provisioning and costly rework by designing the right network from the start." }].map((item, index) => (<div key={index} className={`group relative bg-white p-8 rounded-lg shadow-lg transition-all duration-300 ease-in-out overflow-hidden hover:shadow-2xl hover:-translate-y-2 border-t-4 ${index % 2 === 0 ? "border-[#246598]" : "border-[#8fc447]"}`}><div className={`absolute top-0 left-0 h-full w-full opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${index % 2 === 0 ? "bg-[#246598]" : "bg-[#8fc447]"}`}></div><div className="relative"><div className={`mb-6 text-4xl ${index % 2 === 0 ? "text-[#246598]" : "text-[#8fc447]"}`}>{item.icon}</div><h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3><p className="text-gray-600 leading-relaxed">{item.text}</p></div></div>))}
            </div>
          </div>
        </section>

        {/* Section 3: Our Process */}
        <section className="py-16 md:py-24 bg-white">
          <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our RF Design & Optimization Methodology</h2><p className="text-lg text-gray-600 mt-2 max-w-3xl mx-auto">A data-driven process for engineering high-performance wireless networks.</p></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"><div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gray-200"></div><div className="relative grid md:grid-cols-4 gap-12">{[{ icon: <ClipboardList />, title: "1. Predictive Design", text: "We use advanced software to model RF propagation and create an initial design based on your floor plans." }, { icon: <HardHat />, title: "2. On-Site Survey", text: "Our technicians conduct an on-site survey to validate the predictive model and gather real-world data." }, { icon: <Radio />, title: "3. Spectrum Analysis", text: "We analyze the RF spectrum to identify and plan for potential sources of interference." }, { icon: <Network />, title: "4. Optimization", text: "Post-installation, we fine-tune the network to ensure it meets and exceeds performance targets." }].map((step, index) => (<div key={index} className="relative text-center md:text-left bg-gray-50 p-4 rounded-lg z-10"><div className="flex justify-center md:justify-start mb-4 bg-white rounded-full"><div className={`text-white rounded-full p-3 w-16 h-16 flex items-center justify-center ring-8 ring-gray-50 ${index % 2 === 0 ? 'bg-[#246598]' : 'bg-[#8fc447]'}`}>{step.icon}</div></div><h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3><p className="text-gray-600">{step.text}</p></div>))}</div></div>
        </section>

        {/* Section 4: Applications */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Optimizing All Wireless Networks
            </h2>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: <Building className="mx-auto w-12 h-12 text-[#246598]" />, name: "DAS Networks" },
              { icon: <Radio className="mx-auto w-12 h-12 text-[#8fc447]" />, name: "Private 4G/5G" },
              { icon: <Wifi className="mx-auto w-12 h-12 text-[#246598]" />, name: "Enterprise Wi-Fi" },
              { icon: <Network className="mx-auto w-12 h-12 text-[#8fc447]" />, name: "IoT Networks" },
            ].map((industry) => (
              <div key={industry.name} className="p-4">
                {industry.icon}
                <p className="mt-4 font-semibold text-lg text-gray-700">{industry.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Call to Action */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-[#246598] to-[#1a4a70] text-white rounded-xl shadow-2xl p-12 text-center">
              <PhoneCall className="mx-auto w-16 h-16 mb-6" />
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Ready to Maximize Your Network's Potential?</h2>
              <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-8">Don't settle for subpar wireless performance. Contact our RF experts for a detailed network audit and optimization plan.</p>
              <Button variant="default" size="lg" className="bg-white text-[#246598] hover:bg-gray-100 text-lg font-bold py-3 px-8">Request an RF Audit</Button>
            </div>
          </div>
        </section>
      </>
    ),
  },
  consulting: {
    title: "Consulting & AMCs",
    description: "Strategic advice and ongoing network maintenance.",
    content: (
      <>
        {/* Section 1: Intro */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
            <div className="order-last md:order-first">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Your Partner in Wireless Strategy</h2>
              <p className="text-lg text-gray-600 mb-6">Beyond design and deployment, we offer strategic consulting and comprehensive Annual Maintenance Contracts (AMCs) to ensure your wireless infrastructure remains a powerful asset. We act as your trusted partner, providing expert advice and proactive support to keep your network in peak condition.</p>
              <div className="mt-8 space-y-4">
                <div className="flex items-start"><Users className="w-6 h-6 text-[#246598] mr-3 mt-1 flex-shrink-0" /><div><h3 className="font-semibold text-gray-800">Strategic Advice</h3><p className="text-gray-600">Get expert advice on technology roadmaps, vendor selection, and wireless strategy.</p></div></div>
                <div className="flex items-start"><ShieldCheck className="w-6 h-6 text-[#8fc447] mr-3 mt-1 flex-shrink-0" /><div><h3 className="font-semibold text-gray-800">Proactive Maintenance</h3><p className="text-gray-600">Our AMCs include regular health checks and preventive maintenance to avoid downtime.</p></div></div>
              </div>
            </div>
            <Image src="/solutions-consulting.jpg" alt="Consulting" width={500} height={350} className="rounded-lg shadow-2xl object-cover" />
          </div>
        </section>

        {/* Section 2: Key Benefits */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold text-gray-800">The Value of Partnership</h2><p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">An ongoing partnership with us delivers long-term value and peace of mind.</p></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[{ icon: <CheckCircle className="w-8 h-8" />, title: "Maximized Uptime", text: "Proactive monitoring and maintenance ensure your network is always available for business." }, { icon: <BarChart className="w-8 h-8" />, title: "Strategic Growth", text: "We help you plan for the future, ensuring your network evolves with your business needs." }, { icon: <ShieldCheck className="w-8 h-8" />, title: "Peace of Mind", text: "With our experts managing your network, you can focus on your core business operations." }, { icon: <Wrench className="w-8 h-8" />, title: "Cost Predictability", text: "An AMC provides a predictable operational expense, avoiding unexpected repair costs." }].map((item, index) => (<div key={index} className={`group relative bg-white p-8 rounded-lg shadow-lg transition-all duration-300 ease-in-out overflow-hidden hover:shadow-2xl hover:-translate-y-2 border-t-4 ${index % 2 === 0 ? "border-[#246598]" : "border-[#8fc447]"}`}><div className={`absolute top-0 left-0 h-full w-full opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${index % 2 === 0 ? "bg-[#246598]" : "bg-[#8fc447]"}`}></div><div className="relative"><div className={`mb-6 text-4xl ${index % 2 === 0 ? "text-[#246598]" : "text-[#8fc447]"}`}>{item.icon}</div><h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3><p className="text-gray-600 leading-relaxed">{item.text}</p></div></div>))}
            </div>
          </div>
        </section>

        {/* Section 3: Our Process */}
        <section className="py-16 md:py-24 bg-white">
          <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Engagement & Support Process</h2><p className="text-lg text-gray-600 mt-2 max-w-3xl mx-auto">A transparent and collaborative approach to long-term partnership.</p></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"><div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gray-200"></div><div className="relative grid md:grid-cols-4 gap-12">{[{ icon: <ClipboardList />, title: "1. Onboarding", text: "We begin with a comprehensive audit of your current infrastructure and business goals." }, { icon: <DraftingCompass />, title: "2. Strategy", text: "We develop a customized consulting or maintenance plan tailored to your specific needs." }, { icon: <HardHat />, title: "3. Execution", text: "Our team executes the plan, providing regular reports and proactive support." }, { icon: <Network />, title: "4. Review", text: "We conduct quarterly business reviews to assess performance and align on future strategy." }].map((step, index) => (<div key={index} className="relative text-center md:text-left bg-gray-50 p-4 rounded-lg z-10"><div className="flex justify-center md:justify-start mb-4 bg-white rounded-full"><div className={`text-white rounded-full p-3 w-16 h-16 flex items-center justify-center ring-8 ring-gray-50 ${index % 2 === 0 ? 'bg-[#246598]' : 'bg-[#8fc447]'}`}>{step.icon}</div></div><h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3><p className="text-gray-600">{step.text}</p></div>))}</div></div>
        </section>

        {/* Section 4: Service Pillars */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Our Service Pillars
            </h2>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: <Users className="mx-auto w-12 h-12 text-[#246598]" />, name: "Strategic Consulting" },
              { icon: <ShieldCheck className="mx-auto w-12 h-12 text-[#8fc447]" />, name: "Proactive Maintenance" },
              { icon: <PhoneCall className="mx-auto w-12 h-12 text-[#246598]" />, name: "24/7 Support" },
              { icon: <BarChart className="mx-auto w-12 h-12 text-[#8fc447]" />, name: "Performance Reporting" },
            ].map((pillar) => (
              <div key={pillar.name} className="p-4">
                {pillar.icon}
                <p className="mt-4 font-semibold text-lg text-gray-700">{pillar.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Call to Action */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-[#246598] to-[#1a4a70] text-white rounded-xl shadow-2xl p-12 text-center">
              <PhoneCall className="mx-auto w-16 h-16 mb-6" />
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Looking for a Long-Term Wireless Partner?</h2>
              <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-8">Let us handle the complexities of your wireless infrastructure so you can focus on what you do best. Contact us to learn more about our consulting services and AMCs.</p>
              <Button variant="default" size="lg" className="bg-white text-[#246598] hover:bg-gray-100 text-lg font-bold py-3 px-8">Discuss a Partnership</Button>
            </div>
          </div>
        </section>
      </>
    ),
  },
};

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = solutionData[slug];
  if (!solution) {
    notFound();
  }

  return (
    <div className="bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              {solution.title}
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              {solution.description}
            </p>
          </div>
        </section>

        {/* Content Section */}
        {typeof solution.content === "string" ? (
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="prose lg:prose-xl max-w-none">
                <p>{solution.content}</p>
              </div>
            </div>
          </section>
        ) : (
          // For the rich content, the sections handle their own background and padding
          solution.content
        )}
      </main>
      <Footer />
    </div>
  );
}
