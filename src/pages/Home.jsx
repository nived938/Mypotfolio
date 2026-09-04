import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import EditorShowcase from "../components/EditorShowcase";
import Contact from "../components/Contact";

export default function Home(){return <>
 <Hero/>
 <motion.section className="relative z-10 max-w-6xl mx-auto px-4 pb-24 text-center" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}>
  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-gray-300"><Sparkles size={16} className="text-cyan-400"/> Developer, Game Creator & Video Editor</div>
  <p className="text-gray-400 max-w-3xl mx-auto mt-6 leading-8">I turn ideas into websites, games and visual content. Explore projects I built, games I made in Unity, and edits I created with professional editing tools.</p>
  <a href="#projects" className="inline-flex items-center gap-2 mt-7 text-cyan-300 hover:text-white transition">Explore my work <ArrowDown size={18}/></a>
 </motion.section>
 <About/>
 <Projects/>
 <EditorShowcase/>
 <Contact/>
 </>}
