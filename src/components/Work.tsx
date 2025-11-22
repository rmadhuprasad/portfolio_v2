import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Download } from "lucide-react";
import projectsPdf from "@/assets/files/Projects.pdf";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    number: "01",
    title: "Belstar Microfinance – Digital Transformation",
    company: "Belstar Microfinance Ltd",
    period: "Dec 2023 – Present",
    description:
      "Leading digital transformation initiatives for a top-10 microfinance institution in India.",
    highlights: [
      "Established two digital repayment channels contributing 20% of monthly repayments.",
      "Automated reconciliation processes covering 45% of monthly repayments.",
      "Enhanced mobile app for a superior, user-friendly ecosystem.",
      "Heading the internal development team; delivered 10+ internal systems streamlining HR, business, product, audit, and risk operations.",
      "Deployed an advanced accounting ERP system supporting 1,000+ branches, 13,000+ employees, and a ₹1,00,000 Cr AUM ecosystem.",
      "Gold Loan Vertical: Spearheaded end-to-end IT ecosystem implementation within aggressive timelines.",
      "Gold Loan Vertical: Integrated 10+ third-party APIs.",
      "Gold Loan Vertical: Achieved Day-1 business readiness across 50+ branches.",
    ],
  },
  {
    number: "02",
    title: "PetroMoney Fintech – Complete IT Ecosystem",
    company: "Green Malabar Finance Ventures (NBFC)",
    period: "Feb 2019 – Aug 2023",
    description:
      "Co-founded fintech NBFC and established a comprehensive IT ecosystem at 50% of market cost.",
    highlights: [
      "Built credit, technology, and operations teams from the ground up.",
      "Launched India’s first postpaid FASTag (₹3 Cr turnover).",
      "Developed a custom lending product from scratch.",
      "Managed ₹5,000+ Cr in revolving loans.",
      "Built complete digital infrastructure (LOS, LMS, Mobile Apps).",
    ],
  },
  {
    number: "03",
    title: "EncoreTheme Technologies",
    company: "EncoreTheme Technologies",
    period: "Apr 2017 – Sep 2018",
    description:
      "Implemented first-of-its-kind lending solutions and adaptable loan workflows for NBFCs.",
    highlights: [
      "Implemented first-of-its-kind lending solutions for two NBFCs in India.",
      "Introduced loans based on POS machine transactions.",
      "Designed loan workflows adaptable across multiple sectors.",
    ],
  },
  {
    number: "04",
    title: "IDFC Group – Technology Transformation",
    company: "IDFC Bank / AMC / Securities",
    period: "2010 – 2017",
    description:
      "Core member of the Captive Development Center, managing technology transformation across IDFC group companies.",
    highlights: [
      "Migrated the wholesale lending suite from IDFC NBFC to IDFC Bank.",
      "Delivered 12+ modules for IDFC Mutual Fund.",
      "Implemented CRM across group companies.",
      "Developed 10+ customized applications for mutual fund operations.",
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
          Work Impact
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

        <div className="work-fade-up pt-4">
          <a
            href={projectsPdf}
            download
            className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-card/80 px-6 py-3 text-sm md:text-base font-medium hover:border-primary hover:bg-primary/5 transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Download Projects</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Work;
