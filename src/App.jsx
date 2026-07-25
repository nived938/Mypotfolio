import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./pages/Home";
import Editor from "./pages/Editor";
import WebDeveloper from "./pages/WebDeveloper";
import GameDeveloper from "./pages/GameDeveloper";

import Background3D from "./components/Background3D";
import Loader from "./components/Loader";
import Cursor from "./components/Cursor";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";


function App(){

return(

<BrowserRouter>

<Loader/>

<Cursor/>

<Background3D/>

<Navbar/>

<Routes>

<Route path="/" element={<Home/>}/>
<Route path="/editor" element={<Editor />} />
<Route path="/web" element={<WebDeveloper />} />
<Route path="/games" element={<GameDeveloper />} />

</Routes>

<Footer/>

</BrowserRouter>

)

}

export default App;