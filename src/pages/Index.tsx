import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Work from "@/components/Work";
import Certificates from "@/components/Certificates";
import Stats from "@/components/Stats";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background antialiased">
      <Header />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Work />
        <Certificates />
        <Stats />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
