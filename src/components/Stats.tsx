import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    number: "18+",
    label: "Years of Experience",
    description: "In Financial Services",
  },
  {
    number: "45+",
    label: "Team Members Led",
    description: "Cross-functional professionals",
  },
  {
    number: "40+",
    label: "Strategic Projects",
    description: "Successfully delivered",
  },
  {
    number: "20+",
    label: "Third-party Integrations",
    description: "APIs & systems connected",
  },
  {
    number: "15+",
    label: "Brand Collaborations",
    description: "Strategic partnerships",
  },
  {
    number: "₹5000 Cr+",
    label: "Funds Managed",
    description: "In lending portfolio",
  },
  {
    number: "3",
    label: "Financial ERP Systems",
    description: "Implemented end-to-end",
  },
  {
    number: "50%",
    label: "Cost Reduction",
    description: "Below market average",
  },
];

const Stats = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const numbersRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".stats-fade-up",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.05,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "restart none restart none",
          },
        }
      );

      // Animate numbers counting up
      numbersRef.current.forEach((numElement, index) => {
        if (numElement) {
          const endValue = stats[index].number;
          const isNumber = !isNaN(parseInt(endValue));

          if (isNumber) {
            const number = parseInt(endValue);
            gsap.fromTo(
              numElement,
              { textContent: 0 },
              {
                textContent: number,
                duration: 2,
                ease: "power2.out",
                snap: { textContent: 1 },
                scrollTrigger: {
                  trigger: numElement,
                  start: "top 85%",
                  toggleActions: "restart none restart none",
                },
                onUpdate: function () {
                  const suffix = endValue.includes("+") ? "+" : "";
                  numElement.textContent =
                    Math.ceil(parseFloat(numElement.textContent || "0")) + suffix;
                },
              }
            );
          }
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="stats"
      className="relative w-full px-8 py-24 md:px-16 lg:px-24 bg-secondary/50"
    >
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="stats-fade-up text-6xl md:text-8xl font-bold mb-12 md:mb-16">
          Impact
        </h2>

        <p className="stats-fade-up text-3xl md:text-4xl max-w-3xl mb-16">
          Measurable results that drive business transformation
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stats-fade-up p-8 bg-card border border-border rounded-lg hover:border-primary transition-all duration-300 group"
            >
              <span
                ref={(el) => (numbersRef.current[index] = el)}
                className="text-4xl md:text-5xl font-bold text-primary block mb-2 group-hover:scale-110 transition-transform"
              >
                {stat.number}
              </span>
              <p className="text-lg font-semibold mb-1">{stat.label}</p>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </div>
          ))}
        </div>

        <div className="stats-fade-up mt-16 p-8 bg-card border border-primary/30 rounded-lg">
          <h3 className="text-2xl font-semibold mb-6 text-primary">
            Career Milestones
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex items-start gap-3">
              <span className="text-primary text-2xl">•</span>
              <span className="text-muted-foreground">
                Established comprehensive NBFC fintech IT ecosystem at 50% of market cost
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary text-2xl">•</span>
              <span className="text-muted-foreground">
                Launched India's first postpaid FASTag generating ₹3 crore turnover
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary text-2xl">•</span>
              <span className="text-muted-foreground">
                Developed complete lending product from scratch with paperless delivery
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary text-2xl">•</span>
              <span className="text-muted-foreground">
                Transitioned from outsourced to in-house development reducing dependency
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Stats;
