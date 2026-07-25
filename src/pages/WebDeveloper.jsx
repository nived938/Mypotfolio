import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import { FaGithub } from "react-icons/fa";


export default function WebDeveloper(){


const [repos,setRepos]=useState([]);

const [loading,setLoading]=useState(true);



const username="nived938";



useEffect(()=>{


fetch(
`https://api.github.com/users/${username}/repos?sort=updated`
)

.then(res=>res.json())

.then(data=>{


setRepos(data);

setLoading(false);


})

.catch(()=>{

setLoading(false);

});


},[]);





return (

<section className="
pt-40
px-6
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
font-bold
text-center
mb-20
bg-gradient-to-r
from-cyan-400
to-purple-500
bg-clip-text
text-transparent
"

>

Web Developer

</motion.h1>






{

loading &&

<div className="
text-center
text-2xl
">

Loading GitHub Projects...

</div>

}






<div className="
grid
md:grid-cols-2
gap-8
">


{


repos.map((repo,index)=>(



<motion.div


key={repo.id}


initial={{

opacity:0,
y:50

}}


whileInView={{

opacity:1,
y:0

}}


transition={{

delay:index*0.1

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
p-8
"



>


<h2 className="
text-3xl
font-bold
mb-5
leading-tight
">

{repo.name}

</h2>




<p className="
text-gray-300
min-h-16
">

{

repo.description ||

"No description available"

}

</p>






<div className="
flex
gap-5
mt-5
text-cyan-400
">


<p className="
mt-4
leading-8
text-gray-300
">

{repo.language || "Code"}

</p>



<p className="
flex
items-center
gap-1
">

<Star size={18}/>

{repo.stargazers_count}

</p>


</div>







<div className="
flex
gap-4
mt-8
">


<a

href={repo.html_url}

target="_blank"

className="
px-5
py-3
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





{

repo.homepage &&


<a

href={repo.homepage}

target="_blank"

className="
px-5
py-3
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


}



</div>





</motion.div>



))


}



</div>


{
!loading && repos.length===0 &&

<p className="
text-center
text-xl
text-gray-400
">

No projects found

</p>

}



</section>

)


}