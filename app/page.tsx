import Backdrop from "@/components/background/Backdrop";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import AboutSection from "@/sections/AboutSection";
import ContactSection from "@/sections/ContactSection";
import HeroSection from "@/sections/HeroSection";
import ProjectsSection from "@/sections/ProjectsSection";
import SkillsSection from "@/sections/SkillsSection";

export default function Page() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Backdrop />
      <Navbar />
      <main className="relative">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}
