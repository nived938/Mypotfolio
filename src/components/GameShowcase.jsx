import { motion } from "framer-motion";
import { Download, Play } from "lucide-react";
import GameVideos from "./GameVideos";
import { FaGithub } from "react-icons/fa";


const games=[

{
title:"Chess Game",
image:"/games/chess.png",
description:
"Chess game created using Python, Pygame and python-chess engine.",

tech:[
"Python",
"Pygame",
"Chess Engine"
],

github:
"https://github.com/YOUR_USERNAME/chess-game",

download:"#"

},



{
title:"Voxel Survival Game",

image:"/games/voxel.png",

description:
"Minecraft inspired voxel survival game with terrain generation.",

tech:[
"Python",
"Ursina Engine",
"3D"
],

github:
"https://github.com/YOUR_USERNAME/voxel-game",

download:"#"

},




{
title:"Unity Adventure Game",

image:"/games/unity.png",

description:
"3D adventure game created using Unity engine.",

tech:[
"Unity",
"C#",
"Blender"
],

github:
"https://github.com/YOUR_USERNAME/unity-game",

download:"#"

}


];



export default function GameShowcase(){


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
from-green-400
to-cyan-500

bg-clip-text
text-transparent

"

>

Game Developer

</motion.h1>





<div className="
grid
md:grid-cols-3
gap-10
">


{

games.map((game,index)=>(


<motion.div

key={game.title}


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

scale:1.05,
rotateY:5

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




<img

src={game.image}

className="
w-full
h-64
object-cover

"

/>






<div className="
p-6
md:p-8
">


<h2 className="
text-3xl
font-bold
mb-5
mx-1
leading-tight
">

{game.title}

</h2>



<p className="
text-gray-300
mt-4
mx-1
">

{game.description}

</p>





<div className="
flex
flex-wrap
gap-3
mt-5
">


{

game.tech.map(item=>(


<span

key={item}

className="
px-4
py-2

rounded-full

bg-black/30

text-sm

"

>

{item}

</span>


))


}


</div>







<div className="
flex
gap-4
mt-8
">


<a

href={game.github}

target="_blank"

className="
flex
items-center
gap-2

px-5
py-3.5

rounded-full

bg-white/10

"

>


<FaGithub size={18}/>

Github

</a>






<a

href={game.download}

className="
flex
items-center
gap-2

px-5
py-3.5

rounded-full

bg-gradient-to-r

from-green-400

to-cyan-500

text-black

font-bold

"

>


<Download size={18}/>

Play

</a>




</div>



</div>



</motion.div>



))


}



</div>




<GameVideos/>


</section>

)


}