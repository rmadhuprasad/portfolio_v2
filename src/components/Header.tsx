import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Menu, X } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const headerRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        start: "top -80",
        onUpdate: (self) => {
          if (self.direction === 1) {
            gsap.to(headerRef.current, {
              yPercent: -100,
              duration: 0.3,
              ease: "power2.out",
            });
          } else {
            gsap.to(headerRef.current, {
              yPercent: 0,
              duration: 0.3,
              ease: "power2.out",
            });
          }
        },
      });
    }, headerRef);

    return () => ctx.revert();
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#expertise", label: "Expertise" },
    { href: "#work", label: "Work" },
    { href: "#certificates", label: "Certificates" },
    { href: "#stats", label: "Impact" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 w-full p-6 lg:p-8 z-[100] transition-all duration-500 ${
        isScrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a
          href="#home"
          className="text-xl font-bold hover:text-primary transition-colors"
        >
          {/* <span className="hidden md:inline">Madhuprasad Ramalingam</span> */}
          <span className="md:hidden">MR</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-sm">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 hover:text-primary transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden mt-6 pb-4 flex flex-col gap-4 text-lg border-t border-border pt-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
