import { motion } from "framer-motion";
import { Play, Film } from "lucide-react";
import BeforeAfter from "./BeforeAfter";


const videos = [

{
title:"Cinematic Edit",
description:
"Color grading, smooth transitions and cinematic effects.",

video:"/videos/edit1.mp4"

},

{
title:"Gaming Montage",
description:
"Fast cuts, effects and beat synchronization.",

video:"/videos/edit2.mp4"

},

{
title:"Short Film Edit",
description:
"Storytelling with professional editing techniques.",

video:"/videos/edit3.mp4"

}

];



const software=[

"DaVinci Resolve",
"Adobe Premiere Pro",
"After Effects",
"Blender",
"CapCut"

];



export default function EditorShowcase(){


return(

<section className="
pt-40
px-4
sm:px-6
lg:px-8
max-w-7xl
mx-auto
">



<motion.h1

initial={{
opacity:0,
y:-50
}}

animate={{
opacity:1,
y:0
}}

className="
text-6xl
font-black
text-center
mb-20

bg-gradient-to-r
from-orange-400
to-pink-500

bg-clip-text
text-transparent

"

>

Video Editor

</motion.h1>





<div className="
grid
md:grid-cols-3
gap-8
">


{

videos.map((video,index)=>(


<motion.div

key={video.title}

initial={{
opacity:0,
y:50
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
delay:index*0.2
}}

whileHover={{
scale:1.05
}}

className="
bg-white/10
backdrop-blur-xl
border
border-white/20
rounded-3xl
overflow-hidden
p-3
sm:p-4
"

>


<div className="
relative
p-2
sm:p-3
">


<video

controls

className="
w-full
h-64
object-cover
"

>

<source src={video.video}/>

</video>



<div className="
absolute
top-5
left-5
bg-black/50
rounded-full
p-3
">

<Play/>

</div>


</div>





<div className="
p-6
md:p-7
">


<h2 className="
text-2xl
font-bold
mx-1
">

{video.title}

</h2>


<p className="
text-gray-300
mt-3
mx-1
">

{video.description}

</p>


</div>



</motion.div>


))


}


</div>








<h2 className="
text-5xl
font-bold
text-center
mt-32
mb-12
">

Editing Tools

</h2>





<div className="
flex
justify-center
flex-wrap
gap-5
">


{

software.map(tool=>(


<motion.div

whileHover={{
scale:1.1
}}

key={tool}

className="
px-8
py-4
rounded-full

bg-white/10

border
border-white/20

backdrop-blur-xl

flex
items-center
gap-3
"

>


<Film size={20}/>


{tool}


</motion.div>


))


}


</div>



<BeforeAfter/>

</section>


)

}