import { useState } from "react";
import EnglishNavbar from "../English Header/EnglishNavbar";
import FruitsBN from "../Morphology/FruitsBN";

const Sentence = () => {
    const [s1, setS1] = useState("?");
    const [s2, setS2] = useState("?");
    const [video, setVideo] = useState();


    const  handleVideo1 = () => {
        setVideo(<>
        <video src="./public/vegetables/audio/cabbage.mp4"></video>
        </>)}
    
    const  handleVideo2 = () => {
        setVideo(<>
        <video src="./public/vegetables/audio/eggplant.mp4"></video>
        </>)}
    
    const  handleVideo3 = () => {
        setVideo(<>
        <video src="./public/vegetables/audio/carrot.mp4"></video>
        </>)}
    
    
    const  handleImg1 = () => {
        setVideo(<>
        <div className="w-[70vw] h-[80vh] bg-green-500">
        <FruitsBN></FruitsBN>
        <img src="./public/vegetables/cabbage.png"></img>
        <p>This is an example of Present Perfect Tense</p>
        <p>This is an example of Present Perfect Tense</p>
        <p>This is an example of Present Perfect Tense</p>
        <p>This is an example of Present Perfect Tense</p>
        <p>This is an example of Present Perfect Tense</p>
        <p>This is an example of Present Perfect Tense</p>
        <p>This is an example of Present Perfect Tense</p>
        </div>
        </>)
    }
    const  handleImg2 = () => {
        setVideo(<>
        <div className="w-[70vw] h-[80vh] bg-blue-500">
        <img src="./public/vegetables/eggplant.png" ></img>
        <p>This is an example of Present Perfect Tense</p>
        <p>This is an example of Present Perfect Tense</p>
        <p>This is an example of Present Perfect Tense</p>
        <p>This is an example of Present Perfect Tense</p>
        <p>This is an example of Present Perfect Tense</p>
        <p>This is an example of Present Perfect Tense</p>
        <p>This is an example of Present Perfect Tense</p>
        </div>
        </>)
    }
    const  handleImg3 = () => {
        setVideo(<>
        
        <div className="w-[70vw] h-[80vh] bg-red-500">
        <img src="./public/vegetables/carrot.png"></img>
        <p>This is an example of Present Perfect Tense</p>
        <p>This is an example of Present Perfect Tense</p>
        <p>This is an example of Present Perfect Tense</p>
        <p>This is an example of Present Perfect Tense</p>
        <p>This is an example of Present Perfect Tense</p>
        <p>This is an example of Present Perfect Tense</p>
        <p>This is an example of Present Perfect Tense</p>
        </div>
        </>)}
        const handleSentence1 = () => {           
            setS1(                
                <div>
                <p className="pb-6">আমি পানি পান করি।</p>
                <div className="flex justify-center"> 
                <img src="../../../../public/Sentence1.jpg" className="w-84 h-36"></img> 
                <audio autoPlay src="../../../../public/IDrinkWater.mp4" className="w-84 h-36"></audio  >
                </div>  

                <div className="carousel w-full h-[100vh]">           



<div id="slide1" className="carousel-item relative w-full ">   
  <div className="w-full text-5xl font-bold mx-auto px-28 my-auto bg-blue-600 text-center">     
      <p onClick = { handleSentence1 } onDoubleClickCapture = { handleSentence1Reset } className="w-full text-5xl font-bold mx-auto my-auto bg-red-600 text-center p-8"><span className="btn btn-circle w-20 h-20 text-center text-5xl font-bold bg-red-500 text-yellow-700">1</span>I drink water.</p>
      <p className="w-full text-5xl font-bold mx-auto my-auto bg-green-600 text-center  p-4 h-60">{s1} </p>
      <p className="w-full text-5xl font-bold mx-auto my-auto bg-red-600 text-center p-4">drink = পান করা</p> 
      <div className="w-full text-5xl font-bold mx-auto my-auto bg-green-600 text-center p-4 flex justify-center gap-6">
        <span className="px-4"><p className="bg-green-700">v1</p><p>drink</p></span>
        <span className="px-4"><p className="bg-green-700">v2</p><p>drank</p></span>
        <span className="px-4"><p className="bg-green-700">v3</p><p>drunk</p></span>
        <span className="px-4"><p className="bg-green-700">v4</p><p>drinks</p></span>
        <span className="px-4"><p className="bg-green-700">v5</p><p>drinking</p></span>     
      </div>      
      
  </div>    
  <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 top-1/2">
    <a href="#slide3" className="btn btn-circle w-24 h-24 opacity-70 text-5xl">❮</a> 
    <a href="#slide2" className="btn btn-circle w-24 h-24  opacity-70 text-5xl">❯</a>
  </div>
</div> 


<div id="slide2" className="carousel-item relative w-full">    
<div className="w-full text-5xl font-bold mx-auto my-auto bg-blue-600 text-center p-20"> 
      <div onClick={handleSentence2} onDoubleClickCapture = { handleSentence2Reset } className="w-full text-5xl font-bold mx-auto my-auto bg-red-600 text-center p-4"><span className="btn btn-circle w-20 h-20 text-center text-5xl font-bold bg-red-500 text-yellow-700">2</span>I swim in the swimming pool.</div>
      <div className="w-full text-5xl font-bold mx-auto my-auto bg-green-600 text-center  p-4 h-60">{s2} </div>
      <p className="w-full text-5xl font-bold mx-auto my-auto bg-red-600 text-center p-4">drink = পান করা</p> 
      <div className="w-full text-5xl font-bold mx-auto my-auto bg-green-600 text-center p-4 flex justify-center gap-6">
        <span className="px-4"><p className="bg-green-700">v1</p><p>swim</p></span>
        <span className="px-4"><p className="bg-green-700">v2</p><p>swam</p></span>
        <span className="px-4"><p className="bg-green-700">v3</p><p>swum</p></span>
        <span className="px-4"><p className="bg-green-700">v4</p><p>swims</p></span>
        <span className="px-4"><p className="bg-green-700">v5</p><p>swimming</p></span>     
      </div>
  </div>
  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    <a href="#slide1" className="btn btn-circle w-32 h-32 opacity-70 text-5xl">❮</a> 
    <a href="#slide3" className="btn btn-circle w-32 h-32 opacity-70 text-5xl">❯</a>
  </div>
</div> 


<div id="slide3" className="carousel-item relative w-full">   
  <div className="w-full text-5xl font-bold mx-auto my-auto bg-blue-600 text-center p-20"> 
  <div className="w-full text-5xl font-bold mx-auto my-auto bg-red-600 text-center p-4"><span className="btn btn-circle w-20 h-20 text-center text-5xl font-bold bg-red-500 text-yellow-700">3</span> I take a mug.</div>
      <div className="w-full text-5xl font-bold mx-auto my-auto bg-green-600 text-center  p-4">আমি একটি মগ নিই। </div>       
      <p className="w-full text-5xl font-bold mx-auto my-auto bg-red-600 text-center p-4">take = নেওয়া</p> 
      <div className="w-full text-5xl font-bold mx-auto my-auto bg-green-600 text-center p-4 flex justify-center gap-6">
        <span className="px-4"><p className="bg-green-700">v1</p><p>take</p></span>
        <span className="px-4"><p className="bg-green-700">v2</p><p>took</p></span>
        <span className="px-4"><p className="bg-green-700">v3</p><p>taken</p></span>
        <span className="px-4"><p className="bg-green-700">v4</p><p>takes</p></span>
        <span className="px-4"><p className="bg-green-700">v5</p><p>taking</p></span>     
      </div>     
      
  </div>
  
  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    <a href="#slide2" className="btn btn-circle w-32 h-32 opacity-70 text-5xl">❮</a> 
    <a href="#slide1" className="btn btn-circle w-32 h-32 opacity-70 text-5xl">❯</a>
  </div>
</div> 




      </div>


<div>

{/* <div className="carousel w-full">
<div id="slide1" className="carousel-item relative w-full">   
  <div className="w-full text-5xl font-bold mx-auto my-auto bg-blue-600 text-center p-20"> 
  <div className="w-full text-5xl font-bold mx-auto my-auto bg-green-600 text-center h-84 p-12"> Excellent</div>
  <div className="w-full text-5xl font-bold mx-auto my-auto bg-red-600 text-center h-84  p-12">? </div>
  <div className="w-full text-5xl font-bold mx-auto my-auto bg-red-600 text-center h-84  p-12"><video src="https://youtu.be/CCvwqqiZ6jE" controls className="mx-auto"></video> </div>
  
  </div>
  
  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    <a href="#slide21" className="btn btn-circle w-32 h-32 opacity-70 text-5xl">❮</a> 
    <a href="#slide2" className="btn btn-circle w-32 h-32 opacity-70 text-5xl">❯</a>
  </div>
</div> 
<div id="slide2" className="carousel-item relative w-full">    
<div className="w-full text-5xl font-bold mx-auto my-auto bg-blue-600 text-center p-20"> 
  <div className="w-full text-5xl font-bold mx-auto my-auto bg-green-600 text-center h-84 p-12"> ?</div>
  <div className="w-full text-5xl font-bold mx-auto my-auto bg-red-600 text-center h-84  p-12"> চমৎকার</div>
  </div>
  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    <a href="#slide20" className="btn btn-circle w-32 h-32 opacity-70 text-5xl">❮</a> 
    <a href="#slide3" className="btn btn-circle w-32 h-32 opacity-70 text-5xl">❯</a>
  </div>
</div> 
<div id="slide3" className="carousel-item relative w-full">   
  <div className="w-full text-5xl font-bold mx-auto my-auto bg-blue-600 text-center p-20"> 
  <div className="w-full text-5xl font-bold mx-auto my-auto bg-green-600 text-center h-84 p-12"> Great</div>
  <div className="w-full text-5xl font-bold mx-auto my-auto bg-red-600 text-center h-84  p-12">? </div>
  </div>
  
  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    <a href="#slide19" className="btn btn-circle w-32 h-32 opacity-70 text-5xl">❮</a> 
    <a href="#slide4" className="btn btn-circle w-32 h-32 opacity-70 text-5xl">❯</a>
  </div>
</div> 
<div id="slide4" className="carousel-item relative w-full">    
<div className="w-full text-5xl font-bold mx-auto my-auto bg-blue-600 text-center p-20"> 
  <div className="w-full text-5xl font-bold mx-auto my-auto bg-green-600 text-center h-84 p-12"> ?</div>
  <div className="w-full text-5xl font-bold mx-auto my-auto bg-red-600 text-center h-84  p-12"> চমৎকার</div>
  </div>
  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    <a href="#slide18" className="btn btn-circle w-32 h-32 opacity-70 text-5xl">❮</a> 
    <a href="#slide5" className="btn btn-circle w-32 h-32 opacity-70 text-5xl">❯</a>
  </div>
</div> 
<div id="slide5" className="carousel-item relative w-full">   
  <div className="w-full text-5xl font-bold mx-auto my-auto bg-blue-600 text-center p-20"> 
  <div className="w-full text-5xl font-bold mx-auto my-auto bg-green-600 text-center h-84 p-12"> Good</div>
  <div className="w-full text-5xl font-bold mx-auto my-auto bg-red-600 text-center h-84  p-12">? </div>
  </div>
  
  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    <a href="#slide17" className="btn btn-circle w-32 h-32 opacity-70 text-5xl">❮</a> 
    <a href="#slide6" className="btn btn-circle w-32 h-32 opacity-70 text-5xl">❯</a>
  </div>
</div> 
<div id="slide6" className="carousel-item relative w-full">    
<div className="w-full text-5xl font-bold mx-auto my-auto bg-blue-600 text-center p-20"> 
  <div className="w-full text-5xl font-bold mx-auto my-auto bg-green-600 text-center h-84 p-12"> ?</div>
  <div className="w-full text-5xl font-bold mx-auto my-auto bg-red-600 text-center h-84  p-12"> চমৎকার</div>
  </div>
  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    <a href="#slide16" className="btn btn-circle w-32 h-32 opacity-70 text-5xl">❮</a> 
    <a href="#slide7" className="btn btn-circle w-32 h-32 opacity-70 text-5xl">❯</a>
  </div>
</div> 
<div id="slide7" className="carousel-item relative w-full">   
  <div className="w-full text-5xl font-bold mx-auto my-auto bg-blue-600 text-center p-20"> 
  <div className="w-full text-5xl font-bold mx-auto my-auto bg-green-600 text-center h-84 p-12"> Better</div>
  <div className="w-full text-5xl font-bold mx-auto my-auto bg-red-600 text-center h-84  p-12">? </div>
  </div>
  
  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    <a href="#slide15" className="btn btn-circle w-32 h-32 opacity-70 text-5xl">❮</a> 
    <a href="#slide8" className="btn btn-circle w-32 h-32 opacity-70 text-5xl">❯</a>
  </div>
</div> 
<div id="slide8" className="carousel-item relative w-full">    
<div className="w-full text-5xl font-bold mx-auto my-auto bg-blue-600 text-center p-20"> 
  <div className="w-full text-5xl font-bold mx-auto my-auto bg-green-600 text-center h-84 p-12"> ?</div>
  <div className="w-full text-5xl font-bold mx-auto my-auto bg-red-600 text-center h-84  p-12"> চমৎকার</div>
  </div>
  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    <a href="#slide14" className="btn btn-circle w-32 h-32 opacity-70 text-5xl">❮</a> 
    <a href="#slide9" className="btn btn-circle w-32 h-32 opacity-70 text-5xl">❯</a>
  </div>
</div> 
<div id="slide9" className="carousel-item relative w-full">   
  <div className="w-full text-5xl font-bold mx-auto my-auto bg-blue-600 text-center p-20"> 
  <div className="w-full text-5xl font-bold mx-auto my-auto bg-green-600 text-center h-84 p-12"> Best</div>
  <div className="w-full text-5xl font-bold mx-auto my-auto bg-red-600 text-center h-84  p-12">? </div>
  </div>
  
  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    <a href="#slide13" className="btn btn-circle w-32 h-32 opacity-70 text-5xl">❮</a> 
    <a href="#slide10" className="btn btn-circle w-32 h-32 opacity-70 text-5xl">❯</a>
  </div>
</div> 
<div id="slide10" className="carousel-item relative w-full">    
<div className="w-full text-5xl font-bold mx-auto my-auto bg-blue-600 text-center p-20"> 
  <div className="w-full text-5xl font-bold mx-auto my-auto bg-green-600 text-center h-84 p-12"> ?</div>
  <div className="w-full text-5xl font-bold mx-auto my-auto bg-red-600 text-center h-84  p-12"> চমৎকার</div>
  </div>
  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    <a href="#slide12" className="btn btn-circle w-32 h-32 opacity-70 text-5xl">❮</a> 
    <a href="#slide11" className="btn btn-circle w-32 h-32 opacity-70 text-5xl">❯</a>
  </div>
</div> 
<div id="slide11" className="carousel-item relative w-full">   
  <div className="w-full text-5xl font-bold mx-auto my-auto bg-blue-600 text-center p-20"> 
  <div className="w-full text-5xl font-bold mx-auto my-auto bg-green-600 text-center h-84 p-12"> Superb</div>
  <div className="w-full text-5xl font-bold mx-auto my-auto bg-red-600 text-center h-84  p-12">? </div>
  </div>
  
  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    <a href="#slide11" className="btn btn-circle w-32 h-32 opacity-70 text-5xl">❮</a> 
    <a href="#slide12" className="btn btn-circle w-32 h-32 opacity-70 text-5xl">❯</a>
  </div>
</div> 
<div id="slide12" className="carousel-item relative w-full">    
<div className="w-full text-5xl font-bold mx-auto my-auto bg-blue-600 text-center p-20"> 
  <div className="w-full text-5xl font-bold mx-auto my-auto bg-green-600 text-center h-84 p-12"> ?</div>
  <div className="w-full text-5xl font-bold mx-auto my-auto bg-red-600 text-center h-84  p-12"> চমৎকার</div>
  </div>
  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    <a href="#slide10" className="btn btn-circle w-32 h-32 opacity-70 text-5xl">❮</a> 
    <a href="#slide13" className="btn btn-circle w-32 h-32 opacity-70 text-5xl">❯</a>
  </div>
</div> 
<div id="slide13" className="carousel-item relative w-full">   
  <div className="w-full text-5xl font-bold mx-auto my-auto bg-blue-600 text-center p-20"> 
  <div className="w-full text-5xl font-bold mx-auto my-auto bg-green-600 text-center h-84 p-12"> Sweet</div>
  <div className="w-full text-5xl font-bold mx-auto my-auto bg-red-600 text-center h-84  p-12">? </div>
  </div>
  
  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    <a href="#slide9" className="btn btn-circle w-32 h-32 opacity-70 text-5xl">❮</a> 
    <a href="#slide14" className="btn btn-circle w-32 h-32 opacity-70 text-5xl">❯</a>
  </div>
</div> 
<div id="slide14" className="carousel-item relative w-full">    
<div className="w-full text-5xl font-bold mx-auto my-auto bg-blue-600 text-center p-20"> 
  <div className="w-full text-5xl font-bold mx-auto my-auto bg-green-600 text-center h-84 p-12"> ?</div>
  <div className="w-full text-5xl font-bold mx-auto my-auto bg-red-600 text-center h-84  p-12"> চমৎকার</div>
  </div>
  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    <a href="#slide8" className="btn btn-circle w-32 h-32 opacity-70 text-5xl">❮</a> 
    <a href="#slide15" className="btn btn-circle w-32 h-32 opacity-70 text-5xl">❯</a>
  </div>
</div> 
<div id="slide15" className="carousel-item relative w-full">   
  <div className="w-full text-5xl font-bold mx-auto my-auto bg-blue-600 text-center p-20"> 
  <div className="w-full text-5xl font-bold mx-auto my-auto bg-green-600 text-center h-84 p-12"> Sweat</div>
  <div className="w-full text-5xl font-bold mx-auto my-auto bg-red-600 text-center h-84  p-12">? </div>
  </div>
  
  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    <a href="#slide7" className="btn btn-circle w-32 h-32 opacity-70 text-5xl">❮</a> 
    <a href="#slide16" className="btn btn-circle w-32 h-32 opacity-70 text-5xl">❯</a>
  </div>
</div> 
<div id="slide16" className="carousel-item relative w-full">    
<div className="w-full text-5xl font-bold mx-auto my-auto bg-blue-600 text-center p-20"> 
  <div className="w-full text-5xl font-bold mx-auto my-auto bg-green-600 text-center h-84 p-12"> ?</div>
  <div className="w-full text-5xl font-bold mx-auto my-auto bg-red-600 text-center h-84  p-12"> চমৎকার</div>
  </div>
  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    <a href="#slide6" className="btn btn-circle w-32 h-32 opacity-70 text-5xl">❮</a> 
    <a href="#slide17" className="btn btn-circle w-32 h-32 opacity-70 text-5xl">❯</a>
  </div>
</div> 
<div id="slide17" className="carousel-item relative w-full">   
  <div className="w-full text-5xl font-bold mx-auto my-auto bg-blue-600 text-center p-20"> 
  <div className="w-full text-5xl font-bold mx-auto my-auto bg-green-600 text-center h-84 p-12"> Sweep</div>
  <div className="w-full text-5xl font-bold mx-auto my-auto bg-red-600 text-center h-84  p-12">? </div>
  </div>
  
  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    <a href="#slide5" className="btn btn-circle w-32 h-32 opacity-70 text-5xl">❮</a> 
    <a href="#slide18" className="btn btn-circle w-32 h-32 opacity-70 text-5xl">❯</a>
  </div>
</div> 
<div id="slide18" className="carousel-item relative w-full">    
<div className="w-full text-5xl font-bold mx-auto my-auto bg-blue-600 text-center p-20"> 
  <div className="w-full text-5xl font-bold mx-auto my-auto bg-green-600 text-center h-84 p-12"> ?</div>
  <div className="w-full text-5xl font-bold mx-auto my-auto bg-red-600 text-center h-84  p-12"> চমৎকার</div>
  </div>
  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    <a href="#slide4" className="btn btn-circle w-32 h-32 opacity-70 text-5xl">❮</a> 
    <a href="#slide19" className="btn btn-circle w-32 h-32 opacity-70 text-5xl">❯</a>
  </div>
</div> 
<div id="slide19" className="carousel-item relative w-full">   
  <div className="w-full text-5xl font-bold mx-auto my-auto bg-blue-600 text-center p-20"> 
  <div className="w-full text-5xl font-bold mx-auto my-auto bg-green-600 text-center h-84 p-12"> Show</div>
  <div className="w-full text-5xl font-bold mx-auto my-auto bg-red-600 text-center h-84  p-12">? </div>
  </div>
  
  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    <a href="#slide3" className="btn btn-circle w-32 h-32 opacity-70 text-5xl">❮</a> 
    <a href="#slide20" className="btn btn-circle w-32 h-32 opacity-70 text-5xl">❯</a>
  </div>
</div> 
<div id="slide20" className="carousel-item relative w-full">    
<div className="w-full text-5xl font-bold mx-auto my-auto bg-blue-600 text-center p-20"> 
  <div className="w-full text-5xl font-bold mx-auto my-auto bg-green-600 text-center h-84 p-12"> ?</div>
  <div className="w-full text-5xl font-bold mx-auto my-auto bg-red-600 text-center h-84  p-12"> চমৎকার</div>
  </div>
  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    <a href="#slide2" className="btn btn-circle w-32 h-32 opacity-70 text-5xl">❮</a> 
    <a href="#slide21" className="btn btn-circle w-32 h-32 opacity-70 text-5xl">❯</a>
  </div>
</div> 

<div id="slide21" className="carousel-item relative w-full">  

<img src="https://th.bing.com/th/id/R.b7c4a4f74e80b816a8ff88729d5c2a2c?rik=SBVKVSHGmOeO3A&riu=http%3a%2f%2fsurveysretpa.weebly.com%2fuploads%2f1%2f2%2f4%2f2%2f124248041%2f790785603.jpg&ehk=3GLLQgTyWMp5WZdc9b2Ext060V7fnas3JQhYyWHJQmU%3d&risl=&pid=ImgRaw&r=0" className="w-full" />
  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    <a href="#slide21" className="btn btn-circle w-32 h-32 opacity-70 text-5xl">❮</a> 
    <a href="#slide1" className="btn btn-circle w-32 h-32 opacity-70 text-5xl">❯</a>
  </div>
</div>
      </div> */}
</div>




                </div>
                ) ; 
            }

        const handleSentence2 = () => {           
            setS2( <>
                <p className="pb-6">আমি সুইমিং পুলে সাঁতার কাটি।</p>
                <div className="flex justify-center"> <img src="../../../../public/Sentence2.jpg" className="w-84 h-36"></img> 
                <video autoPlay controls src="../../../../public/ISwimInTheSwimmingPool.mp4" className="w-84 h-36"></video></div>                
                </>) ; 
            }

        const handleSentence1Reset = () => {           
            setS1("") ; 
            }
        const handleSentence2Reset = () => {           
            setS2("") ; 
            }
    return (
        <div>
          <EnglishNavbar></EnglishNavbar>
          <div className='w-[90vw] h-[45vw] border flex justify-center mx-auto'>
            <div className='w-[20vw] h-[45vw] border'>
                <button className='w-[17vw] h-[6vh] border m-3 bg-amber-700 text-xs font-bold text-wrap text-left p-1'>Click button to see the description <br></br>Double click to watch the video</button>
                <button onClick={handleImg1} onDoubleClickCapture={handleVideo1} className='w-[17vw] h-[8vh] border m-3'>Present Idefinite Tense</button>
                <button onClick={handleImg2} onDoubleClickCapture={handleVideo2} className='w-[17vw] h-[8vh] border m-3'>Present Continuous Tense</button>
                <button onClick={handleImg3} onDoubleClickCapture={handleVideo3} className='w-[17vw] h-[8vh] border m-3'>Present Perfect Tense</button>
                <button onClick={handleImg3} onDoubleClickCapture={handleVideo3} className='w-[17vw] h-[8vh] border m-3'>Present Perfect Continuous Tense</button>
                <button onClick={handleImg3} onDoubleClickCapture={handleVideo3} className='w-[17vw] h-[8vh] border m-3'>Past Indefinite Tense</button>
                <button onClick={handleImg3} onDoubleClickCapture={handleVideo3} className='w-[17vw] h-[8vh] border m-3'>Past Continuous Tense</button>
                <button onClick={handleImg3} onDoubleClickCapture={handleVideo3} className='w-[17vw] h-[8vh] border m-3'>Past Perfect Tense</button>
                <button onClick={handleImg3} onDoubleClickCapture={handleVideo3} className='w-[17vw] h-[8vh] border m-3'>Past Perfect Continuous Tense</button>
                <button onClick={handleImg3} onDoubleClickCapture={handleVideo3} className='w-[17vw] h-[8vh] border m-3'>Future Indefinite Tense</button>
                <button onClick={handleImg3} onDoubleClickCapture={handleVideo3} className='w-[17vw] h-[8vh] border m-3'>Future Continuous Tense</button>
                <button onClick={handleImg3} onDoubleClickCapture={handleVideo3} className='w-[17vw] h-[8vh] border m-3'>Future Perfect Tense</button>
                <button onClick={handleImg3} onDoubleClickCapture={handleVideo3} className='w-[17vw] h-[8vh] border m-3'>Future Perfect Continuous Tense</button>
            </div>
            <div  className='w-[70vw] h-[45vw] border'>
                {video}
            </div>

           </div>






        </div>
    );
};

export default Sentence;