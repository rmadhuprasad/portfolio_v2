import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-fade-up",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out" }
      );

      gsap.fromTo(
        ".scroll-indicator",
        { y: 0, opacity: 0.6 },
        {
          y: 10,
          opacity: 1,
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center px-8 lg:px-12 pt-24"
    >
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-y-12 md:gap-y-16">
        <div className="md:col-span-5">
          <h1
            ref={nameRef}
            className="hero-fade-up text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none"
          >
            Madhuprasad
            <br />
            Ramalingam
          </h1>
        </div>

        <div className="md:col-span-3">
          <p className="hero-fade-up text-2xl lg:text-4xl max-w-3xl text-foreground/90">
            Head of Digital Products | Fintech Innovation Leader
          </p>
        </div>

        <div className="md:col-start-4 md:col-span-2 flex flex-col gap-6 text-sm md:text-base text-muted-foreground">
          <p className="hero-fade-up">
            Architecting digital transformation with 18+ years of experience across
            Banking, NBFC, and Financial Services.
          </p>
          <p className="hero-fade-up">
            Specialized in building scalable fintech ecosystems, leading cross-functional
            teams, and delivering strategic projects that drive business growth.
          </p>
          <div className="hero-fade-up flex gap-4 mt-4">
            <a
              href="mailto:r.madhuprasad@gmail.com"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium"
            >
              Get in Touch
            </a>
            <a
              href="#work"
              className="px-6 py-3 border border-border rounded-md hover:bg-secondary transition-colors font-medium"
            >
              View Work
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="scroll-indicator absolute bottom-12 left-1/2 -translate-x-1/2 cursor-pointer"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="w-6 h-6 text-primary" />
      </button>
    </section>
  );
};

export default Hero;
