import Navbar from "@/components/Navbar/Navbar";
import Home from "@/components/Landing/Home";
import Expert from "@/components/Expertise/Home/Expert";
import About from "@/components/About/Home/About";
import Test from "@/components/Testimonials/Home/Test";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Projects from "@/components/Projects/Home/Projects";

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
