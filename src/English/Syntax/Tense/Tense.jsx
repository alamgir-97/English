import { useState } from "react";
import SyntaxNavbar from "../../English Header/SyntaxNavbar";
import PresentIndefiniteTense from "./PresentIndefiniteTense";
import PresentContinuousTense from "./PresentContinuousTense";
import PresentPerfectTense from "./PresentPerfectTense";
import PastIndefiniteTense from "./PastIndefiniteTense";
import PresentPerfectContinuousTense from "./PresentPerfectContinuousTense";
import FuturePerfectContinuousTense from "./FuturePerfectContinuousTense";
import FuturePerfectTense from "./FuturePerfectTense";
import FutureContinuousTense from "./FutureContinuousTense";
import FutureIndefiniteTense from "./FutureIndefiniteTense";
import PastContinuousTense from "./PastContinuousTense";
import PastPerfectTense from "./PastPerfectTense";
import PastPerfectContinuousTense from "./PastPerfectContinuousTense";
import TransitiveVerbList from "../../Morphology/VerbList/TransitiveVerbList";
import EnglishNavbar from "../../English Header/EnglishNavbar";


const Tense = () => {
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
          <div className="w-[65vw] bg-blue-500">       
   <TransitiveVerbList></TransitiveVerbList>
       
        </div>
        </>)
    }
    const  handleImg2 = () => {
        setVideo(<>
        <div className="w-[65vw] bg-blue-500">
        <div className="flex justify-content p-5 gap-5">
        <button onClick={handleImg1} className="btn btn-sm">Theory</button>
        <button onClick={handleImg2} className="btn btn-sm">Building Code</button>
        <button onClick={handleImg3} className="btn btn-sm">Load Calculation</button>
        <button className="btn btn-sm"></button>
        </div>
        <img src="./public/vegetables/eggplant.png" ></img>
        <PresentContinuousTense></PresentContinuousTense>
      
        </div>
        </>)
    }
    const  handleSentenceStructure1 = () => {
        setVideo(<>
        <div className="w-[65vw] bg-blue-500">
        <div className="flex flex-wrap justify-content px-5 gap-5">
        <button onClick={handleAffirmative1} className="btn btn-sm">Affirmative</button>
        <button onClick={handleImg1} className="btn btn-sm">Nagative</button>
        <button onClick={handleImg1} className="btn btn-sm">Close Affirmative Interrogative</button>
        <button onClick={handleImg1} className="btn btn-sm">Close Negative Interrogative</button>
        <button onClick={handleImg1} className="btn btn-sm">Open Affirmative Interrogative</button>
        <button onClick={handleImg1} className="btn btn-sm">Open Nagetive Interrogative</button>
        <button onClick={handleImg1} className="btn btn-sm">Tag Question</button>
        </div>
        <div>
            <h1 className="text-center font-bold text-lg text-rose-700">Subject+be verb (am/is/are)+Object</h1>
          <p>I am  a doctor.</p>
          <p>She is  a nurse.</p>
          <p>They are doctors.</p>
          <p>We are navigators.</p>
          </div>       
        </div>
        </>)
    }
    const  handleSentenceStructure2 = () => {
        setVideo(<>
        <div className="w-[65vw] bg-fuchisa-500">
        <div className="flex flex-wrap justify-content px-5 gap-5">
        <button onClick={handleAffirmative1} className="btn btn-sm">Affirmative</button>
        <button onClick={handleImg1} className="btn btn-sm">Nagative</button>
        <button onClick={handleImg1} className="btn btn-sm">Close Affirmative Interrogative</button>
        <button onClick={handleImg1} className="btn btn-sm">Close Negative Interrogative</button>
        <button onClick={handleImg1} className="btn btn-sm">Open Affirmative Interrogative</button>
        <button onClick={handleImg1} className="btn btn-sm">Open Nagetive Interrogative</button>
        <button onClick={handleImg1} className="btn btn-sm">Tag Question</button>
        </div>
        <div>
            <h1 className="text-center font-bold text-lg text-rose-700">Subject+have/has+Object</h1>
          <p>I have a pen.</p>
          <p>She has a car.</p>
          <p>They have pencils.</p>
          <p>We have a cow.</p>
          </div>       
        </div>
        </>)
    }
    const  handleSentenceStructure3 = () => {
        setVideo(<>
        <div className="w-[65vw] bg-green-500">
        <div className="flex flex-wrap justify-content px-5 gap-5">
        <button onClick={handleAffirmative1} className="btn btn-sm">Affirmative</button>
        <button onClick={handleImg1} className="btn btn-sm">Nagative</button>
        <button onClick={handleImg1} className="btn btn-sm">Close Affirmative Interrogative</button>
        <button onClick={handleImg1} className="btn btn-sm">Close Negative Interrogative</button>
        <button onClick={handleImg1} className="btn btn-sm">Open Affirmative Interrogative</button>
        <button onClick={handleImg1} className="btn btn-sm">Open Nagetive Interrogative</button>
        <button onClick={handleImg1} className="btn btn-sm">Tag Question</button>
        </div>
        <div>
            <h1 className="text-center font-bold text-lg text-rose-700">Subject+V1+Object</h1>
          <p>I read a book.</p>
          <p>She writes  a letter.</p>
          <p>They distribute food.</p>
          <p>We play football.</p>
          </div>       
        </div>
        </>)
    }
    const  handleImg3 = () => {
        setVideo(<div>        
        <div className="w-[65vw] ">
        <div className="flex justify-content p-5 gap-5">
        <button onClick={handleImg1} className="btn btn-sm">Theory</button>
        <button onClick={handleImg2} className="btn btn-sm">Building Code</button>
        <button onClick={handleImg3} className="btn btn-sm">Load Calculation</button>      
        <button className="btn btn-sm"></button>
        </div>
        <PresentPerfectTense></PresentPerfectTense>
        <img src="./public/vegetables/carrot.png"></img>
        
        </div>       
        </div>
        )
      }   
    const  handlePresentIndefiniteTense = () => {
        setVideo(<div>        
        <div className="w-[65vw] ">
            <div>
        <div className="flex justify-content p-1 gap-1">       
        <button onClick={handleImg2} className="btn btn-sm">Use</button>
        <button onClick={handleSentenceStructure1} className="btn btn-sm">Setence Structure-1</button>
        <button onClick={handleSentenceStructure2} className="btn btn-sm">Setence Structure-2</button>      
        <button onClick={handleSentenceStructure3} className="btn btn-sm">Setence Structure-3</button>   
        <button onClick={handleImg1} className="btn btn-sm">Setence Structure-4</button>   
        <button onClick={handleImg1} className="btn btn-sm">Setence Structure-5</button> 
        <button onClick={handleImg2} className="btn btn-sm">Video Lesson</button>
        <button onClick={handleImg2} className="btn btn-sm">Notes</button>
        <button onClick={handleImg3} className="btn btn-sm">Quiz-1</button>      
        </div>
        <div className="flex justify-content p-1 gap-1">
        <button onClick={handleImg1} className="btn btn-sm">TransitiveVerb</button>
        <button onClick={handleImg2} className="btn btn-sm">IntransitiveVerb</button>
        <button onClick={handleImg3} className="btn btn-sm">StongVerbTransitiveVerb</button>      
        <button onClick={handleImg1} className="btn btn-sm">WeakVerbTransitiveVerb</button>
        <button onClick={handleImg2} className="btn btn-sm">Factivie Verb</button>
        <button onClick={handleImg3} className="btn btn-sm">Functional Units of Sentence</button>       
        </div>
        </div>
       <PresentIndefiniteTense></PresentIndefiniteTense>
        <img src="./public/vegetables/carrot.png"></img>
        
        </div>       
        </div>
        )
      }   

      const handleAffirmative1 = () =>{
        setVideo(
          <div>
            <h1 className="text-center font-bold text-lg text-rose-700">Subject+be verb (am/is/are)+Object</h1>
          <p>I am  a doctor.</p>
          <p>She is  a nurse.</p>
          <p>They are doctors.</p>
          <p>We are navigators.</p>

          </div>
        )
      }
    const  handlePresentContinuousTense = () => {
        setVideo(<div>        
        <div className="w-[65vw] ">
        <div className="flex justify-content p-5 gap-5">
        <button onClick={handleImg1} className="btn btn-sm">Theory</button>
        <button onClick={handleImg2} className="btn btn-sm">Building Code</button>
        <button onClick={handleImg3} className="btn btn-sm">Load Calculation</button>      
        <button className="btn btn-sm"></button>
        </div>
       <PresentContinuousTense></PresentContinuousTense>
        <img src="./public/vegetables/carrot.png"></img>
        
        </div>       
        </div>
        )
      }   
    const  handlePresentPerfectTense = () => {
        setVideo(<div>        
        <div className="w-[65vw] ">
        <div className="flex justify-content p-5 gap-5">
        <button onClick={handleImg1} className="btn btn-sm">Theory</button>
        <button onClick={handleImg2} className="btn btn-sm">Building Code</button>
        <button onClick={handleImg3} className="btn btn-sm">Load Calculation</button>      
        </div>
       <PresentPerfectTense></PresentPerfectTense>
        <img src="./public/vegetables/carrot.png"></img>
        
        </div>       
        </div>
        )
      }   
    const  handlePresentPerfectContinuousTense = () => {
        setVideo(<div>        
        <div className="w-[65vw] ">
        <div className="flex justify-content p-5 gap-5">
        <button onClick={handleImg1} className="btn btn-sm">Theory</button>
        <button onClick={handleImg2} className="btn btn-sm">Building Code</button>
        <button onClick={handleImg3} className="btn btn-sm">Load Calculation</button>      
        <button className="btn btn-sm"></button>
        </div>
       <PresentPerfectContinuousTense></PresentPerfectContinuousTense>
        <img src="./public/vegetables/carrot.png"></img>
        
        </div>       
        </div>
        )
      }   
    const  handlePastIndefiniteTense = () => {
        setVideo(<div>        
        <div className="w-[65vw] ">
        <div className="flex justify-content p-5 gap-5">
        <button onClick={handleImg1} className="btn btn-sm">Theory</button>
        <button onClick={handleImg2} className="btn btn-sm">Building Code</button>
        <button onClick={handleImg3} className="btn btn-sm">Load Calculation</button> 
        </div>
       <PastIndefiniteTense></PastIndefiniteTense>
        <img src="./public/vegetables/carrot.png"></img>
        
        </div>       
        </div>
        )
      }   
    const  handlePastContinuousTense = () => {
        setVideo(<div>        
        <div className="w-[65vw] ">
        <div className="flex justify-content p-5 gap-5">
        <button onClick={handleImg1} className="btn btn-sm">Theory</button>
        <button onClick={handleImg2} className="btn btn-sm">Building Code</button>
        <button onClick={handleImg3} className="btn btn-sm">Load Calculation</button>  
        </div>
       <PastContinuousTense></PastContinuousTense>
        <img src="./public/vegetables/carrot.png"></img>
        
        </div>       
        </div>
        )
      }   
    const  handlePastPerfectTense = () => {
        setVideo(<div>        
        <div className="w-[65vw] ">
        <div className="flex justify-content p-5 gap-5">
        <button onClick={handleImg1} className="btn btn-sm">Theory</button>
        <button onClick={handleImg2} className="btn btn-sm">Building Code</button>
        <button onClick={handleImg3} className="btn btn-sm">Load Calculation</button>      
        <button className="btn btn-sm"></button>
        </div>
       <PastPerfectTense></PastPerfectTense>
        <img src="./public/vegetables/carrot.png"></img>
        
        </div>       
        </div>
        )
      }   
    const  handlePastPerfectContinuousTense = () => {
        setVideo(<div>        
        <div className="w-[65vw] ">
        <div className="flex justify-content p-5 gap-5">
        <button onClick={handleImg1} className="btn btn-sm">Theory</button>
        <button onClick={handleImg2} className="btn btn-sm">Building Code</button>
        <button onClick={handleImg3} className="btn btn-sm">Load Calculation</button>      
        <button className="btn btn-sm"></button>
        </div>
       <PastPerfectContinuousTense></PastPerfectContinuousTense>
        <img src="./public/vegetables/carrot.png"></img>
        
        </div>       
        </div>
        )
      }   
    const  handleFutureIndefiniteTense = () => {
        setVideo(<div>        
        <div className="w-[65vw] ">
        <div className="flex justify-content p-5 gap-5">
        <button onClick={handleImg1} className="btn btn-sm">Theory</button>
        <button onClick={handleImg2} className="btn btn-sm">Building Code</button>
        <button onClick={handleImg3} className="btn btn-sm">Load Calculation</button>      
        <button className="btn btn-sm"></button>
        </div>
       <FutureIndefiniteTense></FutureIndefiniteTense>
        <img src="./public/vegetables/carrot.png"></img>
        
        </div>       
        </div>
        )
      }   
    const  handleFutureContinuousTense = () => {
        setVideo(<div>        
        <div className="w-[65vw] ">
        <div className="flex justify-content p-5 gap-5">
        <button onClick={handleImg1} className="btn btn-sm">Theory</button>
        <button onClick={handleImg2} className="btn btn-sm">Building Code</button>
        <button onClick={handleImg3} className="btn btn-sm">Load Calculation</button>      
        <button className="btn btn-sm"></button>
        </div>
       <FutureContinuousTense></FutureContinuousTense>
        <img src="./public/vegetables/carrot.png"></img>
        
        </div>       
        </div>
        )
      }   
    const  handleFuturePerfectTense = () => {
        setVideo(<div>        
        <div className="w-[65vw] ">
        <div className="flex justify-content p-5 gap-5">
        <button onClick={handleImg1} className="btn btn-sm">Theory</button>
        <button onClick={handleImg2} className="btn btn-sm">Building Code</button>
        <button onClick={handleImg3} className="btn btn-sm">Load Calculation</button>      
        <button className="btn btn-sm"></button>
        </div>
       <FuturePerfectTense></FuturePerfectTense>
        <img src="./public/vegetables/carrot.png"></img>
        
        </div>       
        </div>
        )
      }   
    const  handleFuturePerfectContinuousTense = () => {
        setVideo(<div>        
        <div className="w-[65vw] ">
        <div className="flex justify-content p-5 gap-5">
        <button onClick={handleImg1} className="btn btn-sm">Theory</button>
        <button onClick={handleImg2} className="btn btn-sm">Building Code</button>
        <button onClick={handleImg3} className="btn btn-sm">Load Calculation</button>      
        <button className="btn btn-sm"></button>
        </div>
       <FuturePerfectContinuousTense></FuturePerfectContinuousTense>
        <img src="./public/vegetables/carrot.png"></img>
        
        </div>       
        </div>
        )
      }   

    return (
        <div>
            <EnglishNavbar></EnglishNavbar>
            <SyntaxNavbar></SyntaxNavbar>
        <div className='w-[90vw] h-[100vw] border flex justify-center mx-auto'>
                  <div className='w-[25vw] h-[100vw] overflow-y-scroll border'>
                      <button className='w-[22vw] h-[6vh] border m-1 bg-amber-700 text-xs font-bold text-wrap text-left p-1'>Click button to see the description <br></br>Double click to watch the video</button>
                      <button onClick={handlePresentIndefiniteTense} onDoubleClickCapture={handleVideo1} className='w-[22vw] h-[8vh] border m-3 bg-amber-400 font-bold'>Present Indefinite Tense</button>
                      <button onClick={handlePresentContinuousTense} onDoubleClickCapture={handleVideo2} className='w-[22vw] h-[8vh] border m-3 bg-amber-400 font-bold'>Present Continuous Tense</button>
                      <button onClick={handlePresentPerfectTense} onDoubleClickCapture={handleVideo3} className='w-[22vw] h-[8vh] border m-3 bg-amber-400 font-bold'>Present Perfect Tense</button>
                      <button onClick={handlePresentPerfectContinuousTense} onDoubleClickCapture={handleVideo3} className='w-[22vw] h-[8vh] border m-3 bg-amber-400 font-bold'>Present Perfect Continuous Tense</button>
                      <button onClick={handlePastIndefiniteTense} onDoubleClickCapture={handleVideo3} className='w-[22vw] h-[8vh] border m-3 bg-amber-400 font-bold'>PastIndefiniteTense</button>
                      <button onClick={handlePastContinuousTense} onDoubleClickCapture={handleVideo3} className='w-[22vw] h-[8vh] border m-3 bg-amber-400 font-bold'>PastContinuousTense</button>
                      <button onClick={handlePastPerfectTense} onDoubleClickCapture={handleVideo3} className='w-[22vw] h-[8vh] border m-3 bg-amber-400 font-bold'>PastPerfectTense</button>
                      <button onClick={handlePastPerfectContinuousTense} onDoubleClickCapture={handleVideo3} className='w-[22vw] h-[8vh] border m-3 bg-amber-400 font-bold'>PastPerfectContinuousTense</button>
                      <button onClick={handleFutureIndefiniteTense} onDoubleClickCapture={handleVideo3} className='w-[22vw] h-[8vh] border m-3 bg-amber-400 font-bold'>FutureIndefiniteTense</button>
                      <button onClick={handleFutureContinuousTense} onDoubleClickCapture={handleVideo3} className='w-[22vw] h-[8vh] border m-3 bg-amber-400 font-bold'>FutureContinuousTense</button>
                      <button onClick={handleFuturePerfectTense} onDoubleClickCapture={handleVideo3} className='w-[22vw] h-[8vh] border m-3 bg-amber-400 font-bold'>FuturePerfectTense</button>
                      <button onClick={handleFuturePerfectContinuousTense} onDoubleClickCapture={handleVideo3} className='w-[22vw] h-[8vh] border m-3 bg-amber-400 font-bold'>FuturePerfectContinuousTense</button>
                  </div>
                  <div  className='w-[65vw] h-[45vw] border'>
                      {video}
                  </div>
      
                  {/* <div>
                      <p>What is Tense?</p>
                      <p>When to use what tense? and why?</p>
                      <p>Subject</p>
                      <p>Object</p>
                      <p>Complement</p>
                      <p>Verb</p>
                      <p>Preposition</p>
                      <p>article</p>
                      <p>conjunction</p>
                      <p>timing words</p>
                      <p>Noun Phrase</p>
                      <p>Verb Phrase</p>
                      <p>Preposition Phrase</p>
                      <p>Phrase</p>
                      <p>Clause</p>
                  </div>   */}
   </div>
   </div>
    );
};



export default Tense;