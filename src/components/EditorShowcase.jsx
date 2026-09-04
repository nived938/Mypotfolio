import { motion } from "framer-motion";
import { Play, Film } from "lucide-react";
import BeforeAfter from "./BeforeAfter";

const videos=[
 {title:"Cinematic Edit",description:"Edited by me using professional color, pacing, transitions and cinematic effects.",video:"/videos/edit1.mp4"},
 {title:"Gaming Montage",description:"Edited by me with beat-synced cuts, effects, motion and gaming-focused pacing.",video:"/videos/edit2.mp4"},
 {title:"Short Film Edit",description:"Edited by me with storytelling, transitions, sound design and visual effects.",video:"/videos/edit3.mp4"}
];
const software=["CapCut","Adobe Premiere Pro","Adobe After Effects","Blender","DaVinci Resolve"];

export default function EditorShowcase(){return <section id="editing" className="relative z-10 py-28 px-4 max-w-7xl mx-auto">
 <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-center mb-14"><p className="text-orange-400 uppercase tracking-[.3em] text-sm">My editing portfolio</p><h2 className="text-5xl md:text-7xl font-black mt-3">I Edited These</h2><p className="text-gray-400 max-w-2xl mx-auto mt-5">Real video work from my editing portfolio. Play the previews to see my cuts, effects and visual style.</p></motion.div>
 <div className="grid md:grid-cols-3 gap-7">{videos.map((v,i)=><motion.article key={v.title} initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.1}} whileHover={{y:-8}} className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"><div className="relative p-3"><video controls playsInline preload="metadata" className="w-full h-64 object-cover rounded-2xl"><source src={v.video} type="video/mp4"/></video><div className="absolute top-6 left-6 p-2.5 rounded-full bg-black/60 backdrop-blur"><Play size={18}/></div></div><div className="p-6"><h3 className="text-2xl font-bold">{v.title}</h3><p className="text-gray-400 mt-3 leading-7">{v.description}</p></div></motion.article>)}</div>
 <h3 className="text-3xl font-bold text-center mt-20 mb-8">Tools I Use</h3><div className="flex justify-center flex-wrap gap-3">{software.map(t=><motion.div key={t} whileHover={{scale:1.06}} className="px-6 py-3 rounded-full border border-white/10 bg-white/5 flex items-center gap-2"><Film size={17} className="text-orange-400"/>{t}</motion.div>)}</div>
 <BeforeAfter/>
 </section>}
