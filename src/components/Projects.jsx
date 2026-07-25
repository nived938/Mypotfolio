import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";


const projects = [

{
title:"School Website",
category:"Web",
image:"https://images.unsplash.com/photo-1509062522246-3755977927d7",
description:
"Modern responsive school website with animations and admin features.",

github:"https://github.com/YOUR_USERNAME",

demo:"#"

},


{
title:"Chess Game",
category:"Game",
image:"https://images.unsplash.com/photo-1586165368502-1bad197a6461",

description:
"Chess game created using Python, Pygame and chess engine.",

github:"https://github.com/YOUR_USERNAME",

demo:"#"

},



{
title:"Video Editing Showcase",
category:"Editor",
image:"https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d",

description:
"Cinematic video editing project with effects and transitions.",

github:"#",

demo:"#"

},



{
title:"Minecraft Style Game",
category:"Game",

image:"/before.jpg",

description:
"Voxel survival game experiment.",

github:"https://github.com/YOUR_USERNAME",

demo:"#"

}



];



export default function Projects(){


const [filter,setFilter]=useState("All");



const categories=[
"All",
"Web",
"Game",
"Editor"
];



const filtered = filter==="All"

?
projects

:

projects.filter(
project=>project.category===filter
);





return (

<section

id="projects"

className="
relative
z-10
py-32
px-4
sm:px-6
lg:px-8
max-w-7xl
mx-auto
"


>


<h2 className="
text-5xl
font-bold
text-center
mb-16
mx-4
">

Featured Projects

</h2>





<div className="
flex
justify-center
gap-5
mb-16
flex-wrap
">


{

categories.map(category=>(


<button

key={category}

onClick={()=>setFilter(category)}

className={

`
px-6
py-3.5
rounded-full
border
border-white/20
transition

${

filter===category

?
"bg-gradient-to-r from-cyan-500 to-purple-600"
:
"bg-white/10"

}

`

}

>

{category}

</button>


))


}


</div>








<div className="
grid
md:grid-cols-2
gap-10
">


{

filtered.map((project,index)=>(



<motion.div


key={project.title}


initial={{

opacity:0,
y:50

}}


whileInView={{

opacity:1,
y:0

}}



whileHover={{

scale:1.04,
rotateX:5,
rotateY:-5

}}



transition={{

duration:.5

}}


style={{

transformStyle:"preserve-3d"

}}


className="
group
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



<img

src={project.image}

className="
w-full
h-64
object-cover
group-hover:scale-110
transition
duration-500
"

/>





<div className="
p-6
md:p-8
">


<h3 className="
text-3xl
font-bold
mb-3
">

{project.title}

</h3>



<span className="
text-cyan-400
">

{project.category}

</span>



<p className="
text-gray-300
mt-4
mx-1
">

{project.description}

</p>




<div className="
flex
gap-4
mt-8
">


{

project.github !== "#"

&&

<a

href={project.github}

target="_blank"

className="
px-5
py-3.5
rounded-full
bg-white/10
flex
items-center
gap-2
"

>

<FaGithub size={18}/>

Github

</a>

}




<a

href={project.demo}

className="
px-5
py-3.5
rounded-full
bg-gradient-to-r
from-cyan-500
to-purple-600
flex
items-center
gap-2
"

>


<ExternalLink size={18}/>

Live


</a>


</div>



</div>




</motion.div>



))


}



</div>


</section>


)

}