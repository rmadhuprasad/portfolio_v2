import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import profilePhoto from "@/assets/profile-photo.jpg";

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
        <h2 className="about-fade-up text-6xl md:text-8xl text-muted-foreground font-bold">
          About
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="about-fade-up text-3xl md:text-4xl leading-relaxed">
              An ambitious, performance-driven senior professional transforming the
              fintech landscape through innovation and strategic leadership.
            </p>

            <p className="about-fade-up text-lg text-muted-foreground leading-relaxed">
              With 18+ years of experience in designing and architecting solutions, I
              specialize in IT project management, business process reengineering, and
              digital transformation across diverse domains including Banking, NBFC, Mutual
              Funds, and Healthcare.
            </p>

            <p className="about-fade-up text-lg text-muted-foreground leading-relaxed">
              I've established comprehensive fintech IT ecosystems at 50% of prevailing
              market costs, launched India's first postpaid FASTag, and led teams of 45+
              professionals in delivering 40+ strategic projects managing ₹5000+ Crores in
              funds.
            </p>
          </div>

          <div className="about-fade-up flex flex-col gap-8">
            <div className="relative w-full max-w-md aspect-square rounded-lg overflow-hidden border border-border">
              <img
                src={profilePhoto}
                alt="Madhuprasad Ramalingam - Professional Profile"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary">Quick Facts</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▪</span>
                  <span>M.C.A., M.B.A (Finance) from top institutions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▪</span>
                  <span>PMP & PMI-ACP Certified Professional</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▪</span>
                  <span>Six Sigma Green Belt Certified</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▪</span>
                  <span>Based in Chennai, Tamil Nadu, India</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
