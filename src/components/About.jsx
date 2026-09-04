import { motion } from "framer-motion";
import { Code2, Gamepad2, Clapperboard, Box } from "lucide-react";

const skills=[
 ["Web Development","HTML, CSS, JavaScript, React, Tailwind",92],
 ["Game Development","Unity, C#, Python, Pygame",88],
 ["Video Editing","CapCut, Adobe Premiere Pro, After Effects",90],
 ["3D Development","Blender, Three.js, Unity",78]
];
const services=[
 [<Code2/>,"Web Developer","Modern responsive websites, dashboards and full-stack web experiences."],
 [<Gamepad2/>,"Game Developer","2D and 3D games built with Unity, gameplay systems and interactive mechanics."],
 [<Clapperboard/>,"Video Editor","Gaming edits, cinematic videos, transitions, effects and storytelling."],
 [<Box/>,"3D Creator","3D scenes, assets and interactive visual experiences." ]
];

export default function About(){return <section id="about" className="relative z-10 py-28 px-4 max-w-7xl mx-auto">
 <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-center mb-16"><p className="text-purple-400 uppercase tracking-[.3em] text-sm">Developer • Creator • Editor</p><h2 className="text-5xl md:text-7xl font-black mt-3">More Than Code</h2></motion.div>
 <div className="grid lg:grid-cols-2 gap-12 items-start">
  <div><h3 className="text-3xl font-bold">I build, design and edit.</h3><p className="text-gray-400 leading-8 mt-5">I am a web developer and game developer who also creates polished video content. I build websites and applications, make 2D and 3D games in Unity, and edit videos using CapCut, Adobe Premiere Pro and Adobe After Effects.</p><div className="grid grid-cols-2 gap-3 mt-8"><div className="rounded-2xl border border-white/10 bg-white/5 p-5"><b className="text-3xl">Web</b><p className="text-gray-500 mt-1">React & modern UI</p></div><div className="rounded-2xl border border-white/10 bg-white/5 p-5"><b className="text-3xl">Games</b><p className="text-gray-500 mt-1">Unity 2D & 3D</p></div></div></div>
  <div className="space-y-5">{skills.map(([name,tools,p],i)=><motion.div key={name} initial={{opacity:0,x:40}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:i*.1}} className="rounded-2xl border border-white/10 bg-white/5 p-5"><div className="flex justify-between"><b>{name}</b><span className="text-cyan-400">{p}%</span></div><div className="h-2 bg-white/10 rounded-full mt-4 overflow-hidden"><motion.div initial={{width:0}} whileInView={{width:`${p}%`}} viewport={{once:true}} transition={{duration:1}} className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"/></div><p className="text-sm text-gray-500 mt-3">{tools}</p></motion.div>)}</div>
 </div>
 <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-20">{services.map(([icon,title,text])=><motion.div key={title} whileHover={{y:-8,scale:1.02}} className="rounded-3xl border border-white/10 bg-white/5 p-7"><div className="text-cyan-400 mb-5">{icon}</div><h3 className="text-xl font-bold">{title}</h3><p className="text-gray-500 mt-3 leading-6">{text}</p></motion.div>)}</div>
</section>}