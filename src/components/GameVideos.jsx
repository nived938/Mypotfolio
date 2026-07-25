import {motion} from "framer-motion";


const videos=[

"/games/gameplay1.mp4",

"/games/gameplay2.mp4"

];



export default function GameVideos(){


return(

<section className="
mt-32
px-4
sm:px-6
lg:px-8
">


<h2 className="
text-5xl
font-bold
text-center
mb-12
mx-4
">

Gameplay

</h2>



<div className="
grid
md:grid-cols-2
gap-8
">


{

videos.map(video=>(


<motion.video

whileHover={{
scale:1.03
}}

controls

key={video}

className="
rounded-3xl
border
border-white/20
p-2
sm:p-3
"

>


<source src={video}/>


</motion.video>


))


}



</div>


</section>


)

}