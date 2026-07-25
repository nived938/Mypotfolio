import {useState} from "react";


export default function BeforeAfter(){


const [value,setValue]=useState(50);



return(

<div className="
mt-32
px-4
sm:px-6
lg:px-8
">


<h2 className="
text-5xl
font-bold
text-center
mb-10
">

Before / After

</h2>




<div className="
relative
max-w-4xl
mx-auto
overflow-hidden
rounded-[2rem]
p-2
sm:p-3
">


<img

src="/before.jpg"

className="
w-full
"

/>



<div

className="
absolute
top-0
left-0
h-full
overflow-hidden
"

style={{
width:`${value}%`
}}

>


<img

src="/after.jpg"

className="
h-full
max-w-none
"

/>


</div>


</div>





<input

type="range"

min="0"

max="100"

value={value}

onChange={(e)=>
setValue(e.target.value)
}

className="
w-full
mt-8
px-2
sm:px-0
"

/>



</div>

)


}