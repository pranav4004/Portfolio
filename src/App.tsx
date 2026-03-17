/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Lenis from "lenis";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import SelectedWorks from "./components/SelectedWorks";
import Arsenal from "./components/Arsenal";
import Expertise from "./components/Expertise";
import Insights from "./components/Insights";
import Footer from "./components/Footer";
import ProjectArchive from "./components/ProjectArchive";
import CaseStudy from "./components/CaseStudy";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function HomePage() {
  return (
    <>
      <Hero />
      <Experience />
      <SelectedWorks />
      <Arsenal />
      <Expertise />
      <Insights />
    </>
  );
}

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <ScrollToTop />
      <main className="bg-obsidian text-bone min-h-screen font-sans selection:bg-bone selection:text-obsidian">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/archive" element={<ProjectArchive />} />
          <Route path="/work/:slug" element={<CaseStudy />} />
        </Routes>
        <Footer />
      </main>
    </>
  );
}

