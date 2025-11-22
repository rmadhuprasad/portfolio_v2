import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Phone, Linkedin, Globe, MapPin, Download } from "lucide-react";
import resumePdf from "@/assets/files/resume.pdf";
import projectsPdf from "@/assets/files/Projects.pdf";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-fade-up",
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

      // Animated text effect
      if (textRef.current) {
        const text = textRef.current.textContent || "";
        const chars = text.split("");
        textRef.current.innerHTML = "";

        chars.forEach((char) => {
          if (char === " ") {
            textRef.current?.appendChild(document.createTextNode(" "));
          } else {
            const span = document.createElement("span");
            span.textContent = char;
            span.className = "inline-block";
            textRef.current?.appendChild(span);
          }
        });

        gsap.fromTo(
          textRef.current.querySelectorAll("span"),
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.03,
            ease: "power3.out",
            scrollTrigger: {
              trigger: textRef.current,
              start: "top 80%",
              toggleActions: "restart none restart none",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative min-h-screen w-full px-8 py-24 md:px-16 lg:px-24 flex flex-col justify-between"
    >
      <div className="w-full max-w-7xl mx-auto flex-grow flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="contact-fade-up text-6xl md:text-8xl font-bold">
              Let's Connect
            </h2>

            <p className="contact-fade-up text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
              Ready to transform your fintech vision into reality? Let's discuss how we
              can drive digital innovation together.
            </p>

            <div className="contact-fade-up space-y-4 pt-8">
              <a
                href="mailto:r.madhuprasad@gmail.com"
                className="flex items-center gap-4 text-lg hover:text-primary transition-colors group"
              >
                <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span>r.madhuprasad@gmail.com</span>
              </a>

              <a
                href="tel:+919965048100"
                className="flex items-center gap-4 text-lg hover:text-primary transition-colors group"
              >
                <Phone className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span>+91 99650 48100</span>
              </a>

              <a
                href="https://madhuprasad.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-lg hover:text-primary transition-colors group"
              >
                <Globe className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span>madhuprasad.in</span>
              </a>

              <div className="flex items-center gap-4 text-lg text-muted-foreground">
                <MapPin className="w-6 h-6" />
                <span>Chennai, Tamil Nadu, India</span>
              </div>
            </div>

            <div className="contact-fade-up flex gap-4 pt-8">
              <a
                href="mailto:r.madhuprasad@gmail.com"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium text-lg"
              >
                Send a Message
              </a>
              <a
                href="https://www.linkedin.com/in/madhuprasad-ramalingam"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-border rounded-md hover:bg-secondary transition-colors font-medium text-lg flex items-center gap-2"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </div>

            <div className="contact-fade-up flex flex-wrap gap-4 pt-4">
              <a
                href={resumePdf}
                download
                className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-card/80 px-6 py-3 text-sm md:text-base font-medium hover:border-primary hover:bg-primary/5 transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
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

          <div className="hidden lg:flex items-center justify-center">
            <h3
              ref={textRef}
              className="text-7xl xl:text-8xl font-bold tracking-tight leading-none text-primary/20"
            >
              Get in Touch
            </h3>
          </div>
        </div>
      </div>

      <footer className="w-full max-w-7xl mx-auto pt-24 border-t border-border">
        <div className="contact-fade-up flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
          <p>© 2025 Madhuprasad Ramalingam. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#home" className="hover:text-primary transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-primary transition-colors">
              About
            </a>
            <a href="#expertise" className="hover:text-primary transition-colors">
              Expertise
            </a>
            <a href="#work" className="hover:text-primary transition-colors">
              Work
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
