import Navbar from '../components/layout/Navbar';
import { Hero, About, Projects, Skills, Contact } from '../components/home';
import Footer from '../components/layout/Footer';

export default function Home() {
  return (
    <div className="bg-[#F2E9E4]">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
} 