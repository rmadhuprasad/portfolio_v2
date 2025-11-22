import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Download } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";
import resumePdf from "@/assets/files/resume.pdf";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-fade-up",
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
      id="about"
      className="relative min-h-screen w-full px-8 py-24 md:px-16 lg:px-24 flex items-center"
    >
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 gap-12 md:gap-16">
        <h2 className="about-fade-up text-6xl md:text-8xl font-bold">
          About
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="about-fade-up text-3xl md:text-4xl leading-relaxed">
              An ambitious, performance-driven senior professional transforming the
              fintech landscape through innovation and strategic leadership.
            </p>

            <p className="about-fade-up text-lg text-muted-foreground leading-relaxed">
              A results-oriented digital transformation leader with nearly two decades of
              experience in IT strategy, project management, stakeholder engagement, and
              digital transformation. Demonstrated expertise in aligning technology
              initiatives with business objectives to drive scalability, compliance, and
              cost efficiency across complex financial ecosystems. Passionate about
              leveraging emerging technologies and agile methodologies to create
              sustainable, future-ready digital platforms.
            </p>

            <p className="about-fade-up text-lg text-muted-foreground leading-relaxed">
              I've established comprehensive fintech IT ecosystems at 50% of prevailing
              market costs, launched India's first postpaid FASTag, and led teams of 45+
              professionals in delivering 40+ strategic projects managing ₹5000+ Crores in
              funds.
            </p>

            <div className="about-fade-up flex flex-wrap gap-4 pt-2">
              <a
                href={resumePdf}
                download
                className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-card/80 px-6 py-3 text-sm md:text-base font-medium hover:border-primary hover:bg-primary/5 transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          <div className="about-fade-up flex flex-col gap-8">
            <div className="relative w-full max-w-md aspect-square rounded-lg overflow-hidden border border-border">
              <img
                src={profilePhoto}
                alt="Madhuprasad Ramalingam - Professional Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
