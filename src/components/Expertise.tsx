import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Briefcase,
  Rocket,
  Users,
  DollarSign,
  Target,
  Database,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const expertiseAreas = [
  {
    icon: Briefcase,
    title: "Project & Change Management",
    description: "Leading complex IT implementations and organizational transformations",
  },
  {
    icon: Rocket,
    title: "Digital Transformation",
    description: "Architecting end-to-end digital solutions for financial services",
  },
  {
    icon: Users,
    title: "Stakeholder Management",
    description: "Building strategic partnerships and managing cross-functional teams",
  },
  {
    icon: DollarSign,
    title: "Budgeting & Cost Control",
    description: "Optimizing IT spend while maximizing business value",
  },
  {
    icon: Target,
    title: "Cybersecurity & Compliance",
    description:
      "Ensuring enterprise security, regulatory compliance, and risk management. Regulatory Technology (RegTech) knowledge.",
  },
  {
    icon: Database,
    title: "Team Leadership & Talent Development",
    description:
      "Servant leadership, high-performance team culture, and retaining technical talent.",
  },
];

const Expertise = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".expertise-fade-up",
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
      id="expertise"
      className="relative w-full px-8 py-24 md:px-16 lg:px-24"
    >
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 gap-12 md:gap-16">
        <h2 className="expertise-fade-up text-6xl md:text-8xl font-bold">
          Expertise
        </h2>

        <p className="expertise-fade-up text-3xl md:text-4xl max-w-3xl">
          Core competencies driving digital excellence in fintech
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {expertiseAreas.map((area, index) => (
            <div
              key={index}
              className="expertise-fade-up group p-8 bg-card border border-border rounded-lg hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <area.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
