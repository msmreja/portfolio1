import LandingPage from "@/components/Home/LandingPage";
import About from "@/components/About/about";
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";
import Skills from "@/components/Skills/Skill";
import Experience from "@/components/Experience/Experience";
import Qualification from "@/components/Qualification/Qualification";
import Projects from "@/components/projects/Projects";
import Contact from "@/components/contact/Contact";


export default function Home() {
  return (
    <div>
      <Header />
      <main className="flex min-h-screen flex-col ">
        <LandingPage />
        <About />
        <Skills />
        <Experience />
        <Qualification />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
