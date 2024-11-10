"use client"

import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import AOS from "aos"
import "aos/dist/aos.css";

import { useEffect } from "react";

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <About />

    </main>
      );
}
