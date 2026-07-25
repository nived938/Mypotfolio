import { motion } from "framer-motion";


const skills = [

{
name:"Frontend Development",
tools:"HTML • CSS • JavaScript • React • Tailwind",
percent:"90%"
},

{
name:"Game Development",
tools:"Unity • C# • Python • Pygame",
percent:"85%"
},

{
name:"Video Editing",
tools:"DaVinci Resolve • Premiere Pro • After Effects",
percent:"90%"
},

{
name:"3D Design",
tools:"Blender • Three.js",
percent:"75%"
}

];



const services=[

{
icon:"💻",
title:"Web Development",
text:"Creating modern responsive websites with smooth animations."
},

{
icon:"🎮",
title:"Game Development",
text:"Building interactive games with creative mechanics."
},

{
icon:"🎬",
title:"Video Editing",
text:"Editing cinematic videos with effects and storytelling."
}

];




export default function About(){


return (

<section
id="about"
className="
relative
z-10
py-32
px-4
sm:px-6
lg:px-8
max-w-6xl
mx-auto
"
>



<motion.h2

initial={{opacity:0,y:50}}

whileInView={{
opacity:1,
y:0
}}

className="
text-5xl
font-bold
text-center
mb-20
"

>

About Me

</motion.h2>





<div className="
grid
md:grid-cols-2
gap-10
items-center
">





<div>


<h3 className="
text-3xl
font-bold
mb-5
">

Creative Developer

</h3>



<p className="
text-gray-300
leading-8
">

I am a developer and creator who enjoys building
beautiful websites, developing games, and editing
high quality videos.

I combine programming and creativity to create
unique digital experiences.

</p>


</div>






<div className="
space-y-6
">


{

skills.map((skill,index)=>(


<motion.div

key={skill.name}

initial={{
opacity:0,
x:50
}}

whileInView={{
opacity:1,
x:0
}}

transition={{
delay:index*0.2
}}

className="
bg-white/10
backdrop-blur-xl
border
border-white/20
rounded-2xl
p-6
md:p-8
"


>


<div className="
flex
justify-between
mb-3
">


<h4>
{skill.name}
</h4>


<span>
{skill.percent}
</span>


</div>




<div className="
h-3
bg-black/40
rounded-full
overflow-hidden
">


<motion.div

initial={{
width:0
}}

whileInView={{
width:skill.percent
}}

transition={{
duration:1
}}

className="
h-full
bg-gradient-to-r
from-cyan-400
to-purple-500
rounded-full
"

>


</motion.div>


</div>



<p className="
text-sm
text-gray-400
mt-2
">

{skill.tools}

</p>


</motion.div>



))

}


</div>


</div>









<h2 className="
text-5xl
font-bold
text-center
mt-32
mb-16
">

What I Do

</h2>





<div className="
grid
md:grid-cols-3
gap-8
">


{

services.map((service)=>(


<motion.div

whileHover={{
y:-15
}}

className="
bg-white/10
border
border-white/20
backdrop-blur-xl
rounded-3xl
p-8
md:p-10
"

>


<div className="
text-5xl
mb-5
">

{service.icon}

</div>


<h3 className="
text-2xl
font-bold
mb-4
">

{service.title}

</h3>


<p className="
text-gray-300
">

{service.text}

</p>


</motion.div>


))


}


</div>









<h2 className="
text-5xl
font-bold
text-center
mt-32
mb-16
">

My Journey

</h2>





<div className="
border-l
border-cyan-400
space-y-10
pl-6
md:pl-8
">



<div>

<h3 className="
text-2xl
font-bold
">

2024

</h3>

<p className="text-gray-400">

Started learning programming and game development.

</p>

</div>




<div>

<h3 className="
text-2xl
font-bold
">

2025

</h3>

<p className="text-gray-400">

Created websites, games and creative projects.

</p>

</div>




<div>

<h3 className="
text-2xl
font-bold
">

2026

</h3>

<p className="text-gray-400">

Building advanced applications and professional projects.

</p>

</div>



</div>




</section>

)

}