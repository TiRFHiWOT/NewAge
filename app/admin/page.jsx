"use client";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from "react-router-dom";
import AdminPage from "@/components/admin/adminPage";
import ProjectsAdmin from "@/components/projects/Admin";
import About from "@/components/admin/AboutPage";
import Expertise from "@/components/admin/ExpertisePage";
import Testimonials from "@/components/admin/TestimonialsPage";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen p-6">
        <nav className="flex justify-around mb-10">
          <Link to="/admin" className="text-blue-400">
            Admin
          </Link>
          <Link to="/about" className="text-blue-400">
            About
          </Link>
          <Link to="/projects" className="text-blue-400">
            Projects
          </Link>
          <Link to="/expertise" className="text-blue-400">
            Expertise
          </Link>
          <Link to="/testimonials" className="text-blue-400">
            Testimonials
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Navigate to="/admin" />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/projects" element={<ProjectsAdmin />} />
          <Route path="/about" element={<About />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
