import { motion } from "framer-motion";
import { ExternalLink, Github, Code2, Gamepad2, Server, Bot } from "lucide-react";
import { useState } from "react";

const projects = [
  { title:"ConvertFlow", category:"Web", image:"https://opengraph.githubassets.com/1/nived938/convertflow", description:"My advanced file conversion platform with a web frontend, backend API and app experience.", github:"https://github.com/nived938/convertflow", demo:"https://convertflow-seven-delta.vercel.app/", icon:<Code2/> },
  { title:"PlayOrg Web Host", category:"Web", image:"https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80", description:"A Render-style deployment server concept for hosting projects from GitHub with environment variables and project ports.", github:"https://github.com/nived938/Web-Host-Server", demo:"#", icon:<Server/> },
  { title:"My ChatGPT", category:"AI", image:"https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80", description:"A personal AI assistant project exploring chat interfaces, local models and AI-powered tools.", github:"https://github.com/nived938/my-chatgpt", demo:"#", icon:<Bot/> },
  { title:"Kid Runner 3D", category:"3D Game", image:"/games/gameplay1.mp4", description:"A 3D runner game made with Unity. Gameplay, movement and the game experience were built by me.", github:"https://github.com/nived938/Kid-Runner-3d-unity", demo:"#", icon:<Gamepad2/> },
  { title:"Snow Runner", category:"3D Game", image:"/games/gameplay2.mp4", description:"A Unity game development project focused on driving and 3D gameplay systems.", github:"https://github.com/nived938/Snow-Runner-Game-unity", demo:"#", icon:<Gamepad2/> },
  { title:"Chess Game", category:"2D Game", image:"/games/chess.png", description:"A chess game project created with Python, Pygame and chess logic.", github:"https://github.com/nived938/chess.com", demo:"#", icon:<Gamepad2/> }
];

const categories=["All","Web","AI","2D Game","3D Game"];

export default function Projects(){
  const [filter,setFilter]=useState("All");
  const filtered=filter==="All"?projects:projects.filter(p=>p.category===filter);
  return <section id="projects" className="relative z-10 py-28 px-4 max-w-7xl mx-auto">
    <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-center mb-14">
      <p className="text-cyan-400 uppercase tracking-[.3em] text-sm mb-4">Selected work</p>
      <h2 className="text-5xl md:text-7xl font-black">Projects I Built</h2>
      <p className="text-gray-400 max-w-2xl mx-auto mt-5">Web apps, AI experiments and games. Every project below is part of my development journey.</p>
    </motion.div>
    <div className="flex justify-center gap-3 mb-12 flex-wrap">{categories.map(c=><button key={c} onClick={()=>setFilter(c)} className={`px-5 py-2.5 rounded-full border border-white/15 transition ${filter===c?"bg-gradient-to-r from-cyan-500 to-purple-600":"bg-white/5 hover:bg-white/10"}`}>{c}</button>)}</div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
      {filtered.map((p,i)=><motion.article key={p.title} initial={{opacity:0,y:45}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-80px"}} transition={{delay:i*.06}} whileHover={{y:-8}} className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[.06] backdrop-blur-xl shadow-2xl">
        <div className="h-56 overflow-hidden relative bg-black">{p.image.endsWith('.mp4')?<video src={p.image} autoPlay muted loop playsInline className="w-full h-full object-cover"/>:<img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-700"/>}<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"/><div className="absolute bottom-4 left-4 flex items-center gap-2"><span className="p-2 rounded-xl bg-black/50 backdrop-blur">{p.icon}</span><span className="text-sm text-cyan-300">{p.category}</span></div></div>
        <div className="p-6"><h3 className="text-2xl font-bold">{p.title}</h3><p className="text-gray-400 mt-3 leading-7">{p.description}</p><div className="flex gap-3 mt-6"><a href={p.github} target="_blank" rel="noreferrer" className="px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/15 flex items-center gap-2"><Github size={17}/> Code</a>{p.demo!=="#"&&<a href={p.demo} target="_blank" rel="noreferrer" className="px-4 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center gap-2"><ExternalLink size={17}/> Live</a>}</div></div>
      </motion.article>)}
    </div>
  </section>;
}