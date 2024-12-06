"use client";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from "react-router-dom";
import Dashboard from "@/components/Dashboard/Page";
import Projects from "@/components/Projects/Admin/Page";
import About from "@/components/About/Admin/Page";
import Expertise from "@/components/Expertise/Admin/Page";
import Testimonials from "@/components/Testimonials/Admin/Page";

const App = () => {
  if (typeof window === "undefined") return null;
  return (
    <Router>
      <div className="min-h-screen p-6">
        <nav className="flex justify-around mb-10">
          {["Admin", "About", "Projects", "Expertise", "Testimonials"].map(
            (page) => (
              <Link
                key={page}
                to={`/${page.toLowerCase()}`}
                className="text-blue-400"
              >
                {page}
              </Link>
            )
          )}
        </nav>
        <Routes>
          <Route path="/" element={<Navigate to="/admin" />} />
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
