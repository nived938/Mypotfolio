import {useEffect,useState} from "react";


export default function Cursor(){


const [pos,setPos]=useState({
x:0,
y:0
});


useEffect(()=>{


window.addEventListener(
"mousemove",
(e)=>{

setPos({

x:e.clientX,
y:e.clientY

})

}

);


},[]);



return(

<div

style={{

left:pos.x,
top:pos.y

}}

className="
fixed
w-5
h-5
rounded-full
bg-cyan-400
pointer-events-none
z-[200]
mix-blend-difference
"

>


</div>


)

}