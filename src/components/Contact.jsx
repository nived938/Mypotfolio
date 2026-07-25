import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FaGithub, FaYoutube, FaLinkedin } from "react-icons/fa";


export default function Contact(){


return(

<section

id="contact"

className="
relative
z-10
py-32
px-6
max-w-5xl
mx-auto
text-center
"

>


<motion.h2

initial={{
opacity:0,
y:50
}}

whileInView={{
opacity:1,
y:0
}}

className="
text-5xl
font-bold
mb-10
"

>

Let's Work Together

</motion.h2>




<p className="
text-gray-300
text-lg
mb-10
">

Have a project idea?
Let's create something amazing.

</p>





<div className="
flex
justify-center
gap-6
flex-wrap
">



<a

href="mailto:yourmail@gmail.com"

className="
flex
items-center
gap-3
px-7
py-4

rounded-full

bg-white/10

border
border-white/20

"

>

<Mail/>

Email

</a>





<a

href="https://github.com/YOUR_USERNAME"

target="_blank"

className="
flex
items-center
gap-3
px-7
py-4

rounded-full

bg-white/10

"

>

<FaGithub/>

Github

</a>





<a

href="#"

className="
flex
items-center
gap-3
px-7
py-4

rounded-full

bg-white/10

"

>

<FaYoutube/>

Youtube

</a>




<a

href="#"

className="
flex
items-center
gap-3
px-7
py-4

rounded-full

bg-white/10

"

>

<FaLinkedin/>

LinkedIn

</a>




</div>


</section>


)

}