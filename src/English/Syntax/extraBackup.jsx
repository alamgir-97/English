{/* 
  // const [s1, setS1] = useState("?");
  // const [s2, setS2] = useState("?");
//       const handleSentence1 = () => {           
//           setS1(                
//               <div>
//               <p className="pb-6">আমি পানি পান করি।</p>
//               <div className="flex justify-center"> 
//               <img src="../../../../public/Sentence1.jpg" className="w-84 h-36"></img> 
//               <audio autoPlay src="../../../../public/IDrinkWater.mp4" className="w-84 h-36"></audio  >
//               </div>  
// <div>
// </div>
//              </div>
//               ) ; 
//           }

//       const handleSentence2 = () => {           
//           setS2( <>
//               <p className="pb-6">আমি সুইমিং পুলে সাঁতার কাটি।</p>
//               <div className="flex justify-center"> <img src="../../../../public/Sentence2.jpg" className="w-84 h-36"></img> 
//               <video autoPlay controls src="../../../../public/ISwimInTheSwimmingPool.mp4" className="w-84 h-36"></video></div>                
//               </>) ; 
//           }

//       const handleSentence1Reset = () => {           
//           setS1("") ; 
//           }
//       const handleSentence2Reset = () => {           
//           setS2("") ; 
//           }




  <div className="carousel w-full h-[100vh]">           


<div id="slide1" className="carousel-item relative w-full ">   
  <div className="w-full text-5xl font-bold mx-auto px-28 my-auto bg-blue-600 text-center">     
  <div>
    <div className="w-[80vw] h-[80vh] m-4 p-4 border rounded-lg mx-auto">
        <div className="flex w-[50%] h-[30%] gap-4 p-4 m-4 overflow-x-scroll justify-center items-center mx-auto">
            <div className=" h-28  w-48 text-2xl border rounded-xl bg-orange-600 overflow-scroll">This is a list. This is a list. This is a list.</div>       
            <p className=" h-28  w-48 text-2xl border rounded-xl bg-orange-600">This is a list. This is a list. This is a list.</p>       
            <p className=" h-28  w-48 text-2xl border rounded-xl bg-orange-600">This is a list. This is a list. This is a list.</p>       
            <p className=" h-28  w-48 text-2xl border rounded-xl bg-orange-600">This is a list. This is a list. This is a list.</p>       
            
        </div>
        <div className="w-[50%] h-[60%] bg-sky-300 mx-auto"> <video src="../../../../public/testVideo3.mp4" controls autoPlay muted></video>   </div>
        
    </div>
</div>
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
<div>
    <div className="w-[80vw] h-[80vh] m-4 p-4 border rounded-lg mx-auto">
        <div className="flex w-[50%] h-[30%] gap-4 p-4 m-4 overflow-x-scroll justify-center items-center mx-auto">
            <div className=" h-28  w-48 text-2xl border rounded-xl bg-orange-600 overflow-scroll">This is a list. This is a list. This is a list.</div>       
            <p className=" h-28  w-48 text-2xl border rounded-xl bg-orange-600">1. This is a list. This is a list. This is a list.</p>       
            <p className=" h-28  w-48 text-2xl border rounded-xl bg-orange-600">2. This is a list. This is a list. This is a list.</p>       
            <p className=" h-28  w-48 text-2xl border rounded-xl bg-orange-600">3. This is a list. This is a list. This is a list.</p>       
            <p className=" h-28  w-48 text-2xl border rounded-xl bg-orange-600">4. This is a list. This is a list. This is a list.</p>       
            <p className=" h-28  w-48 text-2xl border rounded-xl bg-orange-600">5. This is a list. This is a list. This is a list.</p>       
            <p className=" h-28  w-48 text-2xl border rounded-xl bg-orange-600">6. This is a list. This is a list. This is a list.</p>       
            <p className=" h-28  w-48 text-2xl border rounded-xl bg-orange-600">7. This is a list. This is a list. This is a list.</p>       
            <p className=" h-28  w-48 text-2xl border rounded-xl bg-orange-600">8. This is a list. This is a list. This is a list.</p>       
            <p className=" h-28  w-48 text-2xl border rounded-xl bg-orange-600">9. This is a list. This is a list. This is a list.</p>       
            
        </div>
        <p className="w-full text-4xl text-center"    >Topics-1</p>
        <div className="w-[50%] h-[60%] bg-sky-300 mx-auto"> <video src="../../../../public/testVideo3.mp4" controls autoPlay muted></video>   </div>
        
    </div>
</div>
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
  <div>
    <div className="w-[80vw] h-[80vh] m-4 p-4 border rounded-lg mx-auto">
        <div className="flex w-[50%] h-[30%] gap-4 p-4 m-4 overflow-x-scroll justify-center items-center mx-auto">
            <div className=" h-28  w-48 text-2xl border rounded-xl bg-orange-600 overflow-scroll">This is a list. This is a list. This is a list.</div>       
            <p className=" h-28  w-48 text-2xl border rounded-xl bg-orange-600">This is a list. This is a list. This is a list.</p>       
            <p className=" h-28  w-48 text-2xl border rounded-xl bg-orange-600">This is a list. This is a list. This is a list.</p>       
            <p className=" h-28  w-48 text-2xl border rounded-xl bg-orange-600">This is a list. This is a list. This is a list.</p>       
            
        </div>
        <div className="w-[50%] h-[60%] bg-sky-300 mx-auto"> <video src="../../../../public/testVideo3.mp4" controls autoPlay muted></video>   </div>
        
    </div>
</div>
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



        </div>
    );
};

 function SentenceType(){
  const [sentenceList, setSentenceList] = useState()
  const [sentenceMeaning, setSentenceMeaning] = useState("")
  const [sentenceMeaning2, setSentenceMeaning2] = useState("")
  const handleSentenceMeaning1 = ()=>{
    // e.preventDefault();
    setSentenceMeaning("আমি একজন প্রকৌশলী।")
  }
  const handleSentenceMeaning2 = ()=>{
    setSentenceMeaning2("আমরা প্রকৌশলী।")
  }
  const handleSentenceMeaningReset = ()=>{
    setSentenceMeaning("")
    setSentenceMeaning2("")
  }

 
 const engineer = "Engineer = প্রকৌশলী"            
  const handleSentenceTyp1 =()=> {
    setSentenceList(
    <div>     
      <p className="text-amber-700 bg-amber-400 p-2 font-bold text-center">Structure: Subject+am/is/are+Complement</p>
      <p><p onClick={handleSentenceMeaning1} onDoubleClickCapture={ handleSentenceMeaningReset} className="text-amber-700 hover:font-bold">I am an Engineer.{engineer}</p></p>
      <p>{sentenceMeaning}</p>
      <p onClick={handleSentenceMeaning2} onDoubleClickCapture={ handleSentenceMeaningReset} className="text-amber-700  hover:font-bold">We are Engineers.</p>{sentenceMeaning2}
      <p>{sentenceMeaning2}</p>
      <div className="overflow-y-scroll bg-fuchsia-200 w-[90vw] h-[50vh]">
      <p className="hover:font-bold">I am a doctor.</p>
      <p className="hover:font-bold">I am a doctor.</p>
      <p className="hover:font-bold">I am a doctor.</p>
      <p className="hover:font-bold">I am a doctor.</p>
      <p className="hover:font-bold">I am a doctor.</p>
      <p className="hover:font-bold">I am a doctor.</p>
      <p className="hover:font-bold">I am a doctor.</p>
      <p className="hover:font-bold">I am a doctor.</p>            
      </div>
    </div>  
    )
  }          
  const handleSentenceTyp2 =()=> {
    setSentenceList(
      <>     
      <p className="text-amber-700 bg-amber-400 p-2 font-bold text-center">Structure: Subject+V1+Object+Extension</p>
      <ol>
        <li className="text-amber-700 hover:font-bold">I design a webpage.</li>
        <li className="flex gap-1 text-amber-700 hover:font-bold">I <Do></Do> the work.</li>
      </ol>
      </>
    )
  }          
  const handleSentenceTyp3 =()=> {
    setSentenceList(<div>
      <p className="text-amber-700 bg-amber-400 p-2 font-bold text-center">Structure: Subject+have/has+Noun Phrase</p>
      <p className="text-amber-700 hover:font-bold">I have a drone.</p>
    </div>)
  }  
  return ( 
    <>

    <div className="flex flex-wrap gap-3 border justify-center bg-amber-800 py-2">
    <button onClick={handleSentenceTyp1} className="btn border p-2 btn-sm">Sentence Type-1</button>
    <button onClick={handleSentenceTyp2} className="btn border p-2 btn-sm">Sentence Type-2</button>
    <button onClick={handleSentenceTyp3} className="btn border p-2 btn-sm">Sentence Type-3</button>
    <button onClick={handleSentenceTyp3} className="btn border p-2 btn-sm">Affirmative to Negative</button>
    <button onClick={handleSentenceTyp3} className="btn border p-2 btn-sm">Affirmative to Interrogative</button>
    <button onClick={handleSentenceTyp3} className="btn border p-2 btn-sm">Affirmative to Negative Interrogative</button>
    <button onClick={handleSentenceTyp3} className="btn border p-2 btn-sm">Affirmative to Open Interrogative</button>
    <button onClick={handleSentenceTyp3} className="btn border p-2 btn-sm">Affirmative to Tag Question</button>
    
    </div>
    <div className="w-[80vw] h-[60vh] text-2xl text-yellow-700 mx-auto px-4">{sentenceList}</div>
    </>
  );
}

export function Do(){
  const [inflexion, setInflexion] = useState("do");

const handleDo =()=>{
  setInflexion(<p className="flex gap-2 text-red-400"> 
  <span>do= করা</span>
  <span>v1: do</span>
  <span>v2: did</span>
  <span>v3: done</span>
  <span>v4: does</span>
  <span>v5: doing</span>
</p>) 
}
const handleDoReset =()=>{
  setInflexion("do") 
}
  return(
    <> 
    <p onClick={handleDo} onDoubleClickCapture={handleDoReset}>{inflexion}</p>
    </>
    
  )
} */}