import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";


const links=[

{
name:"Home",
path:"/"
},

{
name:"Web",
path:"/web"
},

{
name:"Editor",
path:"/editor"
},

{
name:"Games",
path:"/games"
}

];



export default function Navbar(){


const [open,setOpen]=useState(false);

const location=useLocation();



return(

<nav className="
fixed
top-0
left-0
right-0

z-50

px-4
py-4
sm:px-6
md:px-8

">




<div className="
max-w-7xl
mx-auto

flex
justify-between
items-center

bg-white/10

backdrop-blur-xl

border
border-white/20

rounded-3xl

px-6
py-4
sm:px-8
sm:py-5

">





<Link

to="/"

className="
text-3xl
font-black

bg-gradient-to-r
from-cyan-400
to-purple-500

bg-clip-text
text-transparent

"

>

YOUR NAME

</Link>







{/* Desktop Menu */}

<div className="
hidden
md:flex

gap-8

">


{

links.map(link=>(


<Link

key={link.path}

to={link.path}

className="
relative
px-3
py-2
text-gray-200
transition-colors
duration-300
"

>


{link.name}



{

location.pathname===link.path &&

<motion.div

layoutId="active"

className="
absolute
left-3
right-3
bottom-1
h-0.5

bg-cyan-400

rounded-full

"

/>

}



</Link>


))


}


</div>







{/* Mobile Button */}

<button

onClick={()=>setOpen(!open)}

className="
md:hidden
rounded-full
border
border-white/20
bg-white/10
p-3
text-white
shadow-lg
"

>

{

open ?

<X/>

:

<Menu/>

}


</button>





</div>







{/* Mobile Menu */}


{

open &&


<motion.div

initial={{
opacity:0,
y:-20
}}

animate={{
opacity:1,
y:0
}}

className="
md:hidden

mt-3

bg-black/70

backdrop-blur-xl

border
border-white/20

rounded-3xl

p-6

space-y-5

"

>


{

links.map(link=>(


<Link

key={link.path}

to={link.path}

onClick={()=>setOpen(false)}

className="
block
text-xl
"

>

{link.name}

</Link>


))


}



</motion.div>


}





</nav>


)

}