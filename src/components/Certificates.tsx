import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, BookOpen, Code } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const certificates = [
  {
    icon: Award,
    title: "PMP - Project Management Professional",
    issuer: "Project Management Institute",
    category: "Management",
  },
  {
    icon: Award,
    title: "PMI-ACP - Agile Certified Practitioner",
    issuer: "Project Management Institute",
    category: "Agile",
  },
  {
    icon: BookOpen,
    title: "Six Sigma Green Belt",
    issuer: "Indian Statistical Institute",
    category: "Quality",
  },
  {
    icon: Code,
    title: "Full Stack Developer - MERN Stack",
    issuer: "Guvi (IIT-M Incubated)",
    category: "Development",
  },
  {
    icon: BookOpen,
    title: "Informatica Power Center 9.1",
    issuer: "Informatica",
    category: "Data Integration",
  },
  {
    icon: Award,
    title: "TQMI Certified Internal Auditor",
    issuer: "ISO 9001:2008",
    category: "Quality Assurance",
  },
];

const Certificates = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".cert-fade-up",
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
      id="certificates"
      className="relative w-full px-8 py-24 md:px-16 lg:px-24"
    >
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 gap-12 md:gap-16">
        <h2 className="cert-fade-up text-6xl md:text-8xl text-muted-foreground font-bold">
          Certifications
        </h2>

        <p className="cert-fade-up text-3xl md:text-4xl max-w-3xl">
          Professional credentials validating expertise across domains
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="cert-fade-up group p-6 bg-card border border-border rounded-lg hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="flex items-start justify-between mb-4">
                <cert.icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-xs px-3 py-1 bg-secondary rounded-full text-muted-foreground">
                  {cert.category}
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-2 leading-tight">
                {cert.title}
              </h3>
              <p className="text-sm text-muted-foreground">{cert.issuer}</p>
            </div>
          ))}
        </div>

        <div className="cert-fade-up mt-12 p-8 bg-secondary border border-border rounded-lg">
          <h3 className="text-2xl font-semibold mb-4 text-primary">
            Academic Credentials
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-sm text-muted-foreground mb-1">MBA (Finance)</p>
              <p className="font-medium">Loyola College</p>
              <p className="text-xs text-muted-foreground">
                Pondicherry University
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">
                MCA - 83% (First Class with Distinction)
              </p>
              <p className="font-medium">Nehru Memorial College</p>
              <p className="text-xs text-muted-foreground">
                Bharathidasan University
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">
                BCA - 78% (First Class)
              </p>
              <p className="font-medium">Bishop Heber College</p>
              <p className="text-xs text-muted-foreground">
                Bharathidasan University
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
