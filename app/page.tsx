import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import About from "@/components/About";
import Projects from "@/components/Projects";
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
      <Test />
      <Contact />
      <Footer />
    </section>
  );
};

export default page;
