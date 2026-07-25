import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";


export default function Background3D(){

return(

<div className="
fixed
inset-0
z-0
pointer-events-none
">


<Canvas>


<ambientLight intensity={0.5}/>


<Stars

radius={100}

depth={50}

count={2000}

factor={4}

/>


</Canvas>


</div>

)

}