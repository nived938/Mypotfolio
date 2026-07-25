import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowDown } from "lucide-react";
import { FaGithub } from "react-icons/fa";


export default function Hero(){


return (

<section className="
relative
z-10
min-h-screen
flex
items-center
justify-center
relative
overflow-hidden
px-4
py-24
sm:px-6
sm:py-28
lg:px-8
">


{/* Background Glow */}

<div className="
absolute
w-[500px]
h-[500px]
bg-cyan-500/20
rounded-full
blur-[150px]
top-20
left-20
">
</div>


<div className="
absolute
w-[400px]
h-[400px]
bg-purple-500/20
rounded-full
blur-[150px]
bottom-20
right-20
">
</div>




<motion.div

initial={{
opacity:0,
y:50
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:1
}}

className="
relative
z-10
text-center
max-w-5xl
"

>



<p className="
px-4
mx-4
text-cyan-400
text-lg
mb-5
">

Hello, I am

</p>




<h1 className="
mx-4
text-6xl
md:text-8xl
font-black
bg-gradient-to-r
from-cyan-400
via-purple-500
to-pink-500
bg-clip-text
text-transparent
">

YOUR NAME

</h1>




<div className="
mt-8
text-3xl
md:text-5xl
font-bold
">


<TypeAnimation

sequence={[

"Video Editor 🎬",
2000,

"Web Developer 💻",
2000,

"Game Developer 🎮",
2000

]}

speed={50}

repeat={Infinity}

/>


</div>




<p className="
mt-8
mx-4
text-gray-300
text-lg
max-w-2xl
mx-auto
">

I create modern websites,
develop interactive games,
and transform ideas into cinematic videos.

</p>





<div className="
mt-10
flex
justify-center
gap-5
flex-wrap
">


<motion.a

whileHover={{
scale:1.1
}}

href="#projects"

className="
px-8
py-4
md:px-10
md:py-4

rounded-full

bg-gradient-to-r
from-cyan-500
to-purple-600

font-bold
shadow-lg
shadow-cyan-500/20

"

>

View Projects

</motion.a>




<motion.a

whileHover={{
scale:1.1
}}

href="https://github.com/YOUR_USERNAME"

target="_blank"

className="
px-8
py-4
md:px-10
md:py-4

rounded-full

border
border-white/30

bg-white/10

backdrop-blur-xl

flex
items-center
gap-2
shadow-lg
shadow-black/20

"

>

<FaGithub/>

Github

</motion.a>


</div>





<motion.div

animate={{
y:[0,15,0]
}}

transition={{
duration:2,
repeat:Infinity
}}

className="
absolute
bottom-10
left-1/2
"

>

<ArrowDown/>

</motion.div>



</motion.div>


</section>

)


}