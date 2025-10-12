import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    number: "01",
    title: "Belstar Microfinance - Digital Transformation",
    company: "Belstar Microfinance Ltd",
    period: "Dec 2023 - Present",
    description:
      "Leading digital initiatives for a top 10 microfinance institution. Deployed advanced accounting ERP, established digital repayment channels, and automated reconciliation processes managing ₹700 crore monthly.",
    highlights: [
      "End-to-end loan automation implementation",
      "Transition from outsourced to in-house development",
      "Mobile app enhancement for superior UX",
    ],
  },
  {
    number: "02",
    title: "PetroMoney Fintech - Complete IT Ecosystem",
    company: "Green Malabar Finance Ventures (NBFC)",
    period: "Feb 2019 - Aug 2023",
    description:
      "Co-founded fintech NBFC and established comprehensive IT ecosystem at 50% of market cost. Built credit, tech, and operations teams from scratch.",
    highlights: [
      "India's first postpaid FASTag (₹3 Cr turnover)",
      "Developed lending product from scratch",
      "Managed ₹5000+ Cr in revolving loans",
      "Built complete digital infrastructure (LOS, LMS, Mobile Apps)",
    ],
  },
  {
    number: "03",
    title: "IDFC Group - Technology Transformation",
    company: "IDFC Bank / AMC / Securities",
    period: "2010 - 2017",
    description:
      "Core member of Captive Development Center managing IT solutions across all IDFC group companies. Led wholesale lending migration to IDFC Bank.",
    highlights: [
      "Migrated wholesale lending suite to IDFC Bank",
      "Delivered 12+ modules for IDFC AMC",
      "Implemented CRM across group companies",
      "10+ customized applications for mutual funds",
    ],
  },
  {
    number: "04",
    title: "Gold Loan Vertical - Rapid IT Setup",
    company: "Belstar Microfinance (Muthoot Finance Partnership)",
    period: "2024",
    description:
      "Spearheaded end-to-end IT ecosystem implementation for new Gold Loan vertical within aggressive timeline, coordinating with parent company Muthoot Finance.",
    highlights: [
      "Integrated 10+ third-party APIs",
      "Day 1 business readiness across 50+ branches",
      "UCIC integration with existing divisions",
    ],
  },
];

const Work = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".work-fade-up",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "restart none restart none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative min-h-screen w-full px-8 py-24 md:px-16 lg:px-24"
    >
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 gap-12 md:gap-16">
        <h2 className="work-fade-up text-6xl md:text-8xl font-bold">
          Work
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative">
          <p className="work-fade-up text-3xl md:text-4xl h-fit lg:sticky top-[10rem]">
            Strategic projects that transformed fintech operations
          </p>

          <div className="flex flex-col">
            {projects.map((project, index) => (
              <div
                key={index}
                className="work-fade-up group py-12 border-b border-border last:border-b-0"
              >
                <span className="text-sm text-muted-foreground mb-4 block">
                  {project.number}
                </span>
                <h3 className="text-3xl md:text-4xl xl:text-5xl font-medium mb-4 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex flex-col gap-2 mb-4 text-muted-foreground">
                  <p className="font-medium">{project.company}</p>
                  <p className="text-sm">{project.period}</p>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="text-primary mt-1">▪</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="work-fade-up mt-12">
          <h3 className="text-2xl font-semibold mb-6 text-primary">
            Key API Integrations Expertise
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              "PAN",
              "Aadhaar",
              "eSign",
              "eStamp",
              "GST",
              "Credit Bureau",
              "UPI AutoPay",
              "Account Aggregator",
              "VideoKYC",
              "eNach",
              "Digilocker",
              "Face Match",
              "Bank Statement Analysis",
              "CKYC",
              "WhatsApp Business API",
            ].map((api, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-secondary border border-border rounded-md text-sm hover:border-primary transition-colors"
              >
                {api}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
