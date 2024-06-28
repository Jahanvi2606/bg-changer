
import { useState } from 'react';
import './App.css';

function App() {
 const [color, colorstate] = useState("olive")

  return (
    <>
    <div className='w-full h-screen duration-200' style={{backgroundColor:color}}></div>
    <div className="flex bg-white flex-wrap justify-around">
        <button onClick={() =>{colorstate("red")}} className="bg-red-600 h-10 w-20 p-15 mr-10">red</button>
        <button onClick={() =>{colorstate("black")}}className="bg-black h-10 w-20 p-15 mr-10 text-white">Black</button>
        <button onClick={() =>{colorstate("blue")}}className="bg-blue-500 h-10 w-20 p-15 mr-10">Blue</button>
        <button onClick={() =>{colorstate("white")}}className="bg-white h-10 w-20 p-15 mr-10">White</button>
        <button onClick={() =>{colorstate("green")}}className="bg-emerald-600 h-10 w-20 p-15 mr-10">Green</button>
        <button onClick={() =>{colorstate("pink")}}className="bg-pink-600 h-10 w-20 p-15 mr-10">Pink</button>
    </div>

    </>
      )

    }

export default App
