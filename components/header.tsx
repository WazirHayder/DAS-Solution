"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {} from "@/components/icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  //navigationMenuTriggerStyle,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Building,
  Hospital,
  Plane,
  ShoppingBag,
  Factory,
  Warehouse,
  School,
  Hotel,
  Menu,
  X,
  WifiIcon,
  ChevronDown,
  RadioIcon,
  ZapIcon,
  ShieldIcon,
  SmartphoneIcon,
  WrenchIcon,
} from "lucide-react";
import { PhoneIcon, MailIcon, MenuIcon, XIcon } from "@/components/icons";

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [hoveredSolution, setHoveredSolution] = React.useState<any | null>(
    null
  );
  const [isIndustriesOpen, setIsIndustriesOpen] = React.useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const solutions = [
    {
      href: "/solutions/in-building-coverage",
      label: "In-Building Coverage (DAS)",
      description: "Seamless indoor cellular coverage for large venues.",
      icon: WifiIcon,
      image: "/solutions-in-building.jpg",
    },
    {
      href: "/solutions/private-5g",
      label: "Private 4G/5G Networks",
      description: "Secure, dedicated networks for critical operations.",
      icon: RadioIcon,
      image: "/solutions-private-5g.jpg",
    },
    {
      href: "/solutions/enterprise-wifi",
      label: "Enterprise Wi-Fi Design",
      description: "High-performance Wi-Fi 6/6E for modern workplaces.",
      icon: ZapIcon,
      image: "/solutions-enterprise-wifi.jpg",
    },
    {
      href: "/solutions/cctv-iot",
      label: "CCTV, IoT & Security",
      description: "Integrated solutions for smart and secure facilities.",
      icon: ShieldIcon,
      image: "/solutions-security.jpg",
    },
    {
      href: "/solutions/rf-design",
      label: "RF Design & Optimization",
      description: "Expert analysis to maximize network performance.",
      icon: SmartphoneIcon,
      image: "/solutions-optimization.jpg",
    },
    {
      href: "/solutions/consulting",
      label: "Consulting & AMCs",
      description: "Strategic advice and ongoing network maintenance.",
      icon: WrenchIcon,
      image: "/solutions-maintenance.jpg",
    },
  ];

  React.useEffect(() => {
    if (solutions.length > 0) {
      setHoveredSolution(solutions[0]);
    }
  }, []);

  const industries: {
    title: string;
    href: string;
    description: string;
    icon: React.ReactNode;
  }[] = [
    {
      title: "Healthcare",
      href: "/industries/healthcare",
      description: "Reliable connectivity for critical medical communications.",
      icon: <Hospital className="h-5 w-5 text-[#246598]" />,
    },
    {
      title: "Corporate & Enterprise",
      href: "/industries/corporate",
      description: "Seamless coverage for modern offices and campuses.",
      icon: <Building className="h-5 w-5 text-[#8fc447]" />,
    },
    {
      title: "Airports & Transportation",
      href: "/industries/transportation",
      description: "Massive capacity networks for travelers and staff.",
      icon: <Plane className="h-5 w-5 text-[#246598]" />,
    },
    {
      title: "Retail & Malls",
      href: "/industries/retail",
      description: "Enhancing shopper experience and store operations.",
      icon: <ShoppingBag className="h-5 w-5 text-[#8fc447]" />,
    },
    {
      title: "Logistics & Warehousing",
      href: "/industries/logistics",
      description: "Connecting automated systems and workforce devices.",
      icon: <Warehouse className="h-5 w-5 text-[#8fc447]" />,
    },
    {
      href: "/industries/education",
      title: "Education",
      description: "High-density Wi-Fi for modern learning environments.",
      icon: <School className="h-5 w-5 text-[#246598]" />,
    },
    {
      href: "/industries/hospitality",
      title: "Hospitality",
      description: "Exceptional guest connectivity and hotel operations.",
      icon: <Hotel className="h-5 w-5 text-[#8fc447]" />,
    },
  ];

  const otherLinks = [
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 bg-white/80 backdrop-blur-lg ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      {/* Top Bar */}
      <div
        className={`bg-[#8fc447] border-b border-green-600/50 transition-all duration-300 ${
          isScrolled ? "h-0 overflow-hidden" : "h-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex justify-between items-center text-xs text-white">
          <div className="flex items-center gap-4">
            <a
              href="tel:+923331234567"
              className="flex items-center gap-1.5 hover:text-white/80 transition-colors"
            >
              <PhoneIcon />
              <span>+92 333 1234567</span>
            </a>
            <a
              href="mailto:info@dassolution.com"
              className="flex items-center gap-1.5 hover:text-white/80 transition-colors"
            >
              <MailIcon />
              <span>info@dassolution.com</span>
            </a>
          </div>
          <div className="hidden sm:block">
            <p>Enterprise Wireless Solutions for Modern Businesses</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group transition-all duration-300"
          >
            <Image
              src="/DAS LOGO.png"
              alt="DASsolution Logo"
              width={84}
              height={84}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Solutions Dropdown */}
            <div className="relative group h-20 flex items-center">
              <button className="px-3 py-2 text-gray-700 hover:text-[#246598] transition-colors text-sm font-medium flex items-center gap-1">
                Solutions
                <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[900px] lg:w-[1000px] bg-white rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100">
                <div className="grid grid-cols-2 gap-0">
                  {/* Left side: Links */}
                  <div className="p-6">
                    <div className="space-y-3">
                      {solutions.map((solution) => {
                        const Icon = solution.icon;
                        return (
                          <Link
                            onMouseEnter={() => setHoveredSolution(solution)}
                            key={solution.label}
                            href={solution.href}
                            className="group relative flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-[#246598]/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                          >
                            {/* Gradient Accent */}
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#246598]/5 to-[#8fc447]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            {/* Icon Container */}
                            <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-lg bg-white border border-gray-200 group-hover:border-[#246598] group-hover:bg-[#246598]/5 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                              <Icon className="w-6 h-6 text-[#246598] transition-colors duration-300" />
                            </div>

                            {/* Content */}
                            <div className="relative z-10 flex-grow min-w-0">
                              <h4 className="font-bold text-gray-900 text-base mb-1.5 group-hover:text-[#246598] transition-colors duration-300">
                                {solution.label}
                              </h4>
                              <p className="text-sm text-gray-600 line-clamp-2 leading-snug group-hover:text-gray-700 transition-colors duration-300">
                                {solution.description}
                              </p>
                            </div>

                            {/* Arrow Indicator */}
                            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <svg
                                className="w-5 h-5 text-[#246598]"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                  {/* Right side: Image/Featured */}
                  {hoveredSolution && (
                    <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-r-2xl p-8 flex flex-col justify-center transition-opacity duration-300 border-l border-gray-200">
                      <div className="relative group/image mb-6">
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#246598]/10 to-[#8fc447]/10 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300"></div>
                        <Image
                          src={hoveredSolution.image}
                          alt={hoveredSolution.label}
                          width={380}
                          height={240}
                          className="relative rounded-xl object-cover shadow-lg group-hover/image:shadow-xl transition-all duration-300 group-hover/image:scale-105"
                        />
                      </div>
                      <h4 className="font-bold text-gray-900 text-xl mb-3">
                        {hoveredSolution.label}
                      </h4>
                      <p className="text-base text-gray-600 mb-6 leading-relaxed">
                        {hoveredSolution.description}
                      </p>
                      <Link
                        href={hoveredSolution.href}
                        className="inline-flex items-center gap-2 text-base font-semibold text-[#246598] hover:text-[#1a4a70] transition-colors duration-300 group/link"
                      >
                        Learn More
                        <svg
                          className="w-5 h-5 group-hover/link:translate-x-1 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Industries Mega Menu */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem className="h-20 flex items-center group">
                  <NavigationMenuTrigger className="text-sm font-medium bg-transparent hover:!bg-transparent focus:!bg-transparent data-[state=open]:!bg-transparent data-[active]:!bg-transparent data-[state=open]:hover:!bg-transparent text-gray-700 hover:text-[#246598] transition-colors">
                    Industries
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[900px] lg:w-[1000px] p-6 bg-white rounded-2xl shadow-2xl border border-gray-100">
                      <div className="grid grid-cols-12 gap-6">
                        {/* Left Side - Featured Content */}
                        <div className="col-span-4 relative group">
                          <div className="relative h-full min-h-[400px] rounded-xl overflow-hidden bg-gradient-to-br from-[#246598] via-[#1a4a70] to-[#246598]">
                            <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                            <div className="relative h-full flex flex-col justify-between p-8 text-white">
                              <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold mb-6">
                                  <span className="w-2 h-2 bg-[#8fc447] rounded-full animate-pulse"></span>
                                  Industry Solutions
                                </div>
                                <h3 className="text-3xl font-extrabold mb-3 leading-tight">
                                  Industries We Empower
                                </h3>
                                <p className="text-base text-blue-100 leading-relaxed">
                                  Tailored wireless solutions for the unique
                                  demands of your sector.
                                </p>
                              </div>
                              <div className="mt-8 pt-6 border-t border-white/20">
                                <div className="flex items-center gap-4 text-sm">
                                  <div>
                                    <div className="text-2xl font-bold text-[#8fc447]">
                                      7+
                                    </div>
                                    <div className="text-blue-200 text-xs">
                                      Industries
                                    </div>
                                  </div>
                                  <div className="w-px h-8 bg-white/20"></div>
                                  <div>
                                    <div className="text-2xl font-bold text-[#8fc447]">
                                      500+
                                    </div>
                                    <div className="text-blue-200 text-xs">
                                      Projects
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Right Side - Industry Grid */}
                        <div className="col-span-8">
                          <ul className="grid grid-cols-2 gap-3">
                            {industries.map((component, index) => (
                              <li key={component.title}>
                                <Link
                                  href={component.href}
                                  className="group relative flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-[#246598]/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                                >
                                  {/* Gradient Accent */}
                                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#246598]/5 to-[#8fc447]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                  {/* Icon Container */}
                                  <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-lg bg-white border border-gray-200 group-hover:border-[#246598] group-hover:bg-[#246598]/5 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                                    <div className="text-[#246598] group-hover:text-[#246598] transition-colors duration-300">
                                      {component.icon}
                                    </div>
                                  </div>

                                  {/* Content */}
                                  <div className="relative z-10 flex-grow min-w-0">
                                    <h4 className="font-bold text-gray-900 text-base mb-1.5 group-hover:text-[#246598] transition-colors duration-300">
                                      {component.title}
                                    </h4>
                                    <p className="text-sm text-gray-600 line-clamp-2 leading-snug group-hover:text-gray-700 transition-colors duration-300">
                                      {component.description}
                                    </p>
                                  </div>

                                  {/* Arrow Indicator */}
                                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <svg
                                      className="w-5 h-5 text-[#246598]"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5l7 7-7 7"
                                      />
                                    </svg>
                                  </div>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Other Links */}
            {otherLinks.map((link) => (
              <div key={link.href} className="h-20 flex items-center">
                <Link
                  href={link.href}
                  className="px-3 py-2 text-gray-700 hover:text-[#246598] transition-colors text-sm font-medium"
                >
                  {link.label}
                </Link>
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex gap-3">
            <Button
              asChild
              variant="outline"
              className="border-[#246598] text-[#246598] hover:bg-blue-50 bg-transparent"
            >
              <Link href="/contact">Get Quote</Link>
            </Button>
            <Button
              asChild
              className="bg-[#8fc447] hover:bg-[#79a93b] text-white"
            >
              <Link href="/contact">Book Consultation</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="lg:hidden pb-4 border-t border-gray-200">
            <div className="flex flex-col gap-2 pt-4">
              {/* Mobile Solutions Dropdown */}
              <button
                onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                className="px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors flex items-center justify-between w-full font-medium"
              >
                <span>Solutions</span>
                <span
                  className={`transition-transform ${
                    isSolutionsOpen ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
              {isSolutionsOpen && !isIndustriesOpen && (
                <div className="pl-4 flex flex-col gap-1 bg-gray-50 rounded-lg py-2">
                  {solutions.map((solution) => (
                    <Link
                      key={solution.href}
                      href={solution.href}
                      className="px-4 py-2 text-gray-600 hover:bg-blue-100 hover:text-[#246598] rounded-lg transition-colors text-sm"
                      onClick={() => {
                        setIsOpen(false);
                        setIsSolutionsOpen(false);
                      }}
                    >
                      {solution.label}
                    </Link>
                  ))}
                </div>
              )}

              <button
                onClick={() => setIsIndustriesOpen(!isIndustriesOpen)}
                className="px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors flex items-center justify-between w-full font-medium"
              >
                <span>Industries</span>
                <span
                  className={`transition-transform ${
                    isIndustriesOpen ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
              {isIndustriesOpen && !isSolutionsOpen && (
                <div className="pl-4 flex flex-col gap-1 bg-gray-50 rounded-lg py-2">
                  {industries.map((industry) => (
                    <Link
                      key={industry.href}
                      href={industry.href}
                      className="px-4 py-2 text-gray-600 hover:bg-blue-100 hover:text-[#246598] rounded-lg transition-colors text-sm"
                      onClick={() => {
                        setIsOpen(false);
                        setIsIndustriesOpen(false);
                      }}
                    >
                      {industry.title}
                    </Link>
                  ))}
                </div>
              )}

              {/* Other Mobile Links */}
              {otherLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              <div className="flex flex-col gap-2 pt-4 px-4">
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-[#246598] text-[#246598] bg-transparent"
                >
                  <Link href="/contact">Get Quote</Link>
                </Button>
                <Button
                  asChild
                  className="w-full bg-[#8fc447] hover:bg-[#79a93b] text-white"
                >
                  <Link href="/contact">Book Consultation</Link>
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon: React.ReactNode }
>(({ className, title, children, icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "group flex select-none items-start gap-3 space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 focus:bg-transparent",
            className
          )}
          {...props}
        >
          <div className="flex-shrink-0 mt-0.5">{icon}</div>
          <div>
            <div className="text-sm font-semibold leading-none text-gray-800 group-hover:text-[#246598]">
              {title}
            </div>
            <p className="mt-1 line-clamp-2 text-sm leading-snug text-gray-500">
              {children}
            </p>
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
