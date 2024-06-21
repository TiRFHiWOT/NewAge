import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import Expert from "@/components/Expert";
import About from "@/components/About";
import Projects from "@/components/projects/Projects";
import Test from "@/components/Test";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <section>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Expert />
      <Test />
      <Contact />
      <Footer />
    </section>
  );
};

export default page;
