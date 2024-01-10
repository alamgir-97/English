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
import PresentIndefiniteSentenceOne from "../PresentIndefiniteSentenceOne";
import PresentIndefiniteSentenceTwo from "../PresentIndefiniteSentenceTwo";


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
        <div className="flex justify-center flex-wrap p-1 gap-1 bg-gray-300">       
        <button onClick={handleImg2} className="mx-center px-2 text-base font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Use</button>
        <button onClick={handleSentenceStructure1} className="mx-center px-2 text-base font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Sentence Pattern-1</button>
        <button onClick={handleSentenceStructure2} className="mx-center px-2 text-base font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Sentence Pattern-2</button>      
        <button onClick={handleSentenceStructure3} className="mx-center px-2 text-base font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Sentence Pattern-3</button>
        <button onClick={handleImg2} className="mx-center px-2 text-base font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Video Lesson</button>
        <button onClick={handleImg2} className="mx-center px-2 text-base font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Notes</button>
        <button onClick={handleImg3} className="mx-center px-2 text-base font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Quiz-1</button>      
        <button onClick={handleImg1} className="mx-center px-2 text-base font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Conjugation of Verbs</button>
        {/* <button onClick={handleImg2} className="mx-center px-2 text-sm font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Intransitive Verb</button>
        <button onClick={handleImg3} className="mx-center px-2 text-sm font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Strong Verb</button>      
        <button onClick={handleImg1} className="mx-center px-2 text-sm font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Weak Verb</button>
        <button onClick={handleImg2} className="mx-center px-2 text-sm font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Factitive Verb</button>
        <button onClick={handleImg3} className="mx-center px-2 text-sm font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Functional Units of Sentence</button>        */}
        </div>
        
        <div className="flex justify-center flex-wrap p-1 gap-1 bg-gray-200">
        <button onClick={handleAffirmative1} className="mx-center px-2 text-sm font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Affirmative</button>
        <button onClick={handleImg1} className="mx-center px-2 text-sm font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Nagative</button>
        <button onClick={handleImg1} className="mx-center px-2 text-sm font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Close Affirmative Interrogative</button>
        <button onClick={handleImg1} className="mx-center px-2 text-sm font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Close Negative Interrogative</button>
        <button onClick={handleImg1} className="mx-center px-2 text-sm font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Open Affirmative Interrogative</button>
        <button onClick={handleImg1} className="mx-center px-2 text-sm font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Open Nagetive Interrogative</button>
        <button onClick={handleImg1} className="mx-center px-2 text-sm font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Tag Question</button>
        </div>
        <div>
            <h1 className="text-center font-bold text-lg text-rose-700">Sentence Pattern: I eat rice.</h1>      
            <h1 className="text-center font-bold text-lg text-rose-700">Sentence Structure: Subject+V1+Object</h1>      
        </div>
        <PresentIndefiniteSentenceOne></PresentIndefiniteSentenceOne>
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
        <div className="flex justify-center flex-wrap p-1 gap-1 bg-gray-300">       
        <button onClick={handleImg2} className="mx-center px-2 text-base font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Use</button>
        <button onClick={handleSentenceStructure1} className="mx-center px-2 text-base font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Sentence Pattern-1</button>
        <button onClick={handleSentenceStructure2} className="mx-center px-2 text-base font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Sentence Pattern-2</button>      
        <button onClick={handleSentenceStructure3} className="mx-center px-2 text-base font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Sentence Pattern-3</button> 
        <button onClick={handleImg2} className="mx-center px-2 text-base font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Video Lesson</button>
        <button onClick={handleImg2} className="mx-center px-2 text-base font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Notes</button>
        <button onClick={handleImg3} className="mx-center px-2 text-base font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Quiz-1</button>      
        <button onClick={handleImg1} className="mx-center px-2 text-base font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Conjugation of Verbs</button>
        {/* <button onClick={handleImg2} className="mx-center px-2 text-sm font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Conjugation of Verbs</button>
        <button onClick={handleImg3} className="mx-center px-2 text-sm font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Strong Verb</button>      
        <button onClick={handleImg1} className="mx-center px-2 text-sm font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Weak Verb</button>
        <button onClick={handleImg2} className="mx-center px-2 text-sm font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Factitive Verb</button>
        <button onClick={handleImg3} className="mx-center px-2 text-sm font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Functional Units of Sentence</button>        */}
        </div>
        <div className="flex justify-center flex-wrap p-1 gap-1 bg-gray-200">
        <button onClick={handleAffirmative1} className="mx-center px-2 text-sm font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Affirmative</button>
        <button onClick={handleImg1} className="mx-center px-2 text-sm font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Nagative</button>
        <button onClick={handleImg1} className="mx-center px-2 text-sm font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Close Interrogative</button>
        <button onClick={handleImg1} className="mx-center px-2 text-sm font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Close Negative Interrogative</button>
        <button onClick={handleImg1} className="mx-center px-2 text-sm font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Open Interrogative</button>
        <button onClick={handleImg1} className="mx-center px-2 text-sm font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Open Nagetive Interrogative</button>
        <button onClick={handleImg1} className="mx-center px-2 text-sm font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Tag Question</button>
        </div>
        <div className="bg-lime-500">
            <h1 className="text-center font-bold text-lg text-rose-700">Sentence Pattern: I am free.</h1>      
            <h1 className="text-center font-bold text-lg text-rose-700">Sentence Structure: Subject+am/is/are+Complement/...</h1>      
        </div>
        <PresentIndefiniteSentenceTwo></PresentIndefiniteSentenceTwo>
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
        <div className="flex justify-center flex-wrap p-1 gap-1 bg-gray-300">       
        <button onClick={handleImg2} className="mx-center px-2 text-base font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Use</button>
        <button onClick={handleSentenceStructure1} className="mx-center px-2 text-base font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Sentence Pattern-1</button>
        <button onClick={handleSentenceStructure2} className="mx-center px-2 text-base font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Sentence Pattern-2</button>      
        <button onClick={handleSentenceStructure3} className="mx-center px-2 text-base font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Sentence Pattern-3</button> 
        <button onClick={handleImg2} className="mx-center px-2 text-base font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Video Lesson</button>
        <button onClick={handleImg2} className="mx-center px-2 text-base font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Notes</button>
        <button onClick={handleImg3} className="mx-center px-2 text-base font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Quiz-1</button>      
        <button onClick={handleImg1} className="mx-center px-2 text-base font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Conjugation of Verbs</button>
        {/* <button onClick={handleImg2} className="mx-center px-2 text-sm font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Intransitive Verb</button>
        <button onClick={handleImg3} className="mx-center px-2 text-sm font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Strong Verb</button>      
        <button onClick={handleImg1} className="mx-center px-2 text-sm font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Weak Verb</button>
        <button onClick={handleImg2} className="mx-center px-2 text-sm font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Factitive Verb</button>
        <button onClick={handleImg3} className="mx-center px-2 text-sm font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Functional Units of Sentence</button>        */}
        </div>
        <div className="flex justify-center flex-wrap p-1 gap-1 bg-gray-200">
        <button onClick={handleAffirmative1} className="mx-center px-2 text-sm font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Affirmative</button>
        <button onClick={handleImg1} className="mx-center px-2 text-sm font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Nagative</button>
        <button onClick={handleImg1} className="mx-center px-2 text-sm font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Close Affirmative Interrogative</button>
        <button onClick={handleImg1} className="mx-center px-2 text-sm font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Close Negative Interrogative</button>
        <button onClick={handleImg1} className="mx-center px-2 text-sm font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Open Affirmative Interrogative</button>
        <button onClick={handleImg1} className="mx-center px-2 text-sm font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Open Nagetive Interrogative</button>
        <button onClick={handleImg1} className="mx-center px-2 text-sm font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Tag Question</button>
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
        <div className="flex justify-center flex-wrap p-1 gap-1 bg-gray-300">       
        <button onClick={handleImg2} className="mx-center px-2 text-base font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Use</button>
        <button onClick={handleSentenceStructure1} className="mx-center px-2 text-base font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Sentence Pattern-1</button>
        <button onClick={handleSentenceStructure2} className="mx-center px-2 text-base font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Sentence Pattern-2</button>      
        <button onClick={handleSentenceStructure3} className="mx-center px-2 text-base font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Sentence Pattern-3</button>   
        <button onClick={handleImg1} className="mx-center px-2 text-base font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Sentence Pattern-4</button>   
        <button onClick={handleImg1} className="mx-center px-2 text-base font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Sentence Pattern-5</button> 
        <button onClick={handleImg2} className="mx-center px-2 text-base font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Video Lesson</button>
        <button onClick={handleImg2} className="mx-center px-2 text-base font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Notes</button>
        <button onClick={handleImg3} className="mx-center px-2 text-base font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Quiz-1</button>      
        <button onClick={handleImg1} className="mx-center px-2 text-base font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Transitive Verb</button>
        <button onClick={handleImg2} className="mx-center px-2 text-base font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Intransitive Verb</button>
        <button onClick={handleImg3} className="mx-center px-2 text-base font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Strong Verb</button>      
        <button onClick={handleImg1} className="mx-center px-2 text-base font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Weak Verb</button>
        <button onClick={handleImg2} className="mx-center px-2 text-base font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Factitive Verb</button>
        <button onClick={handleImg3} className="mx-center px-2 text-base font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Functional Units of Sentence</button>       
        </div>
        </div>
        <div className="bg-lime-500 text-left">
            <h1 className="font-bold text-lg text-rose-700">What is present indefinite tense?</h1>      
            <h1 className="font-bold text-lg text-rose-700">When to use present indefinite tense?</h1>      
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
            <div className="flex justify-center flex-wrap p-1 gap-1 bg-gray-300">     
        <button onClick={handleSentenceStructure1} className="mx-center px-2 text-base font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Sentence Pattern-1</button>
        <button onClick={handleSentenceStructure2} className="mx-center px-2 text-base font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Sentence Pattern-2</button>      
        <button onClick={handleSentenceStructure3} className="mx-center px-2 text-base font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Sentence Pattern-3</button> 
        <button onClick={handleImg2} className="mx-center px-2 text-base font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Video Lesson</button>
        <button onClick={handleImg2} className="mx-center px-2 text-base font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Notes</button>
        <button onClick={handleImg3} className="mx-center px-2 text-base font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Quiz-1</button>      
        <button onClick={handleImg1} className="mx-center px-2 text-base font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Conjugation of Verbs</button>
        {/* <button onClick={handleImg2} className="mx-center px-2 text-sm font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Intransitive Verb</button>
        <button onClick={handleImg3} className="mx-center px-2 text-sm font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Strong Verb</button>      
        <button onClick={handleImg1} className="mx-center px-2 text-sm font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Weak Verb</button>
        <button onClick={handleImg2} className="mx-center px-2 text-sm font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Factitive Verb</button>
        <button onClick={handleImg3} className="mx-center px-2 text-sm font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Functional Units of Sentence</button>        */}
        </div>
        <div className="flex justify-center flex-wrap p-1 gap-1 bg-gray-200">
        <button onClick={handleAffirmative1} className="mx-center px-2 text-sm font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Affirmative</button>
        <button onClick={handleImg1} className="mx-center px-2 text-sm font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Nagative</button>
        <button onClick={handleImg1} className="mx-center px-2 text-sm font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Close Affirmative Interrogative</button>
        <button onClick={handleImg1} className="mx-center px-2 text-sm font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Close Negative Interrogative</button>
        <button onClick={handleImg1} className="mx-center px-2 text-sm font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Open Affirmative Interrogative</button>
        <button onClick={handleImg1} className="mx-center px-2 text-sm font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Open Nagetive Interrogative</button>
        <button onClick={handleImg1} className="mx-center px-2 text-sm font-semibold text-black border border-gray-700 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Tag Question</button>
        </div>
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
        <img src="./public/vegetables/carrot.png" alt="carrot"></img>

        
        </div>       
        </div>
        )
      }   

    return (
        <div>
            <EnglishNavbar></EnglishNavbar>
            <SyntaxNavbar></SyntaxNavbar>
        <div className='w-[100vw] h-[100vw] border flex justify-center mx-auto'>
                  <div className='w-[27vw] h-[100vw] overflow-y-scroll border bg-gray-400'>                      
                      <button onClick={handlePresentIndefiniteTense} onDoubleClickCapture={handleVideo1} className='w-[23vw] h-[8vh] border border-rose-800 bg-gray-700 my-2 mx-2 font-bold text-center text-yellow-500 text-lg hover:bg-rose-800 focus:border-rose-700 focus:border-b-4'>Present Indefinite Tense</button>
                      <button onClick={handlePresentContinuousTense} onDoubleClickCapture={handleVideo2} className='w-[23vw] h-[8vh] border border-rose-800 bg-gray-700 my-2 mx-2 font-bold text-center text-yellow-500 text-lg hover:bg-rose-800 focus:border-rose-700 focus:border-b-4'>Present Continuous Tense</button>
                      <button onClick={handlePresentPerfectTense} onDoubleClickCapture={handleVideo3} className='w-[23vw] h-[8vh] border border-rose-800 bg-gray-700 my-2 mx-2 font-bold text-center text-yellow-500 text-lg hover:bg-rose-800 focus:border-rose-700 focus:border-b-4'>Present Perfect Tense</button>
                      <button onClick={handlePresentPerfectContinuousTense} onDoubleClickCapture={handleVideo3} className='w-[23vw] h-[8vh] border border-rose-800 bg-gray-700 my-2 mx-2 font-bold text-center text-yellow-500 text-lg hover:bg-rose-800 focus:border-rose-700 focus:border-b-4'>Present Perfect Continuous Tense</button>
                      <button onClick={handlePastIndefiniteTense} onDoubleClickCapture={handleVideo3} className='w-[23vw] h-[8vh] border border-rose-800 bg-gray-700 my-2 mx-2 font-bold text-center text-yellow-500 text-lg hover:bg-rose-800 focus:border-rose-700 focus:border-b-4'>Past Indefinite Tense</button>
                      <button onClick={handlePastContinuousTense} onDoubleClickCapture={handleVideo3} className='w-[23vw] h-[8vh] border border-rose-800 bg-gray-700 my-2 mx-2 font-bold text-center text-yellow-500 text-lg hover:bg-rose-800 focus:border-rose-700 focus:border-b-4'>Past Continuous Tense</button>
                      <button onClick={handlePastPerfectTense} onDoubleClickCapture={handleVideo3} className='w-[23vw] h-[8vh] border border-rose-800 bg-gray-700 my-2 mx-2 font-bold text-center text-yellow-500 text-lg hover:bg-rose-800 focus:border-rose-700 focus:border-b-4'>Past Perfect Tense</button>
                      <button onClick={handlePastPerfectContinuousTense} onDoubleClickCapture={handleVideo3} className='w-[23vw] h-[8vh] border border-rose-800 bg-gray-700 my-2 mx-2 font-bold text-center text-yellow-500 text-lg hover:bg-rose-800 focus:border-rose-700 focus:border-b-4'>Past Perfect Continuous Tense</button>
                      <button onClick={handleFutureIndefiniteTense} onDoubleClickCapture={handleVideo3} className='w-[23vw] h-[8vh] border border-rose-800 bg-gray-700 my-2 mx-2 font-bold text-center text-yellow-500 text-lg hover:bg-rose-800 focus:border-rose-700 focus:border-b-4'>Future Indefinite Tense</button>
                      <button onClick={handleFutureContinuousTense} onDoubleClickCapture={handleVideo3} className='w-[23vw] h-[8vh] border border-rose-800 bg-gray-700 my-2 mx-2 font-bold text-center text-yellow-500 text-lg hover:bg-rose-800 focus:border-rose-700 focus:border-b-4'>Future Continuous Tense</button>
                      <button onClick={handleFuturePerfectTense} onDoubleClickCapture={handleVideo3} className='w-[23vw] h-[8vh] border border-rose-800 bg-gray-700 my-2 mx-2 font-bold text-center text-yellow-500 text-lg hover:bg-rose-800 focus:border-rose-700 focus:border-b-4'>Future Perfect Tense</button>
                      <button onClick={handleFuturePerfectContinuousTense} onDoubleClickCapture={handleVideo3} className='w-[23vw] h-[8vh] border border-rose-800 bg-gray-700 my-2 mx-2 font-bold text-center text-yellow-500 text-lg hover:bg-rose-800 focus:border-rose-700 focus:border-b-4'>Future Perfect Continuous Tense</button>
                  </div>
                  <div  className='w-[75vw] h-[45vw] border'>
                      {video}
                    <h1 className="font-bold">Use of Present Indefinite Tense:</h1>
                    <p>1. Present Habit</p>
                    <p>2. Repeated Actions</p>
                    <p>3. Facts</p>
                    <p>4. Present State (situation, feeling, opinion)</p>
                    <p>6. Single Future Scheduled Event</p>
                 
                    <h1 className="font-bold">Use of Past Indefinite Tense:</h1>
                    <p>1. Past Habit</p>
                    <p>2. Past Repeated Actions</p>
                    <p>3. Past Single Action</p>
                    <p>4. Facts</p>
                    <p>5. Past State (situation, feeling, opinion)</p>
              
                    <h1 className="font-bold">Use of Future Indefinite Tense:</h1>
                    <p>1. Future Habit</p>
                    <p>2. Repeated Actions</p>
                    <p>3. Future Single Action(Promises, Predictions)</p>
                    <p>4. Facts</p>
                    <p>5. Future State (situation, feeling, opinion)</p>
                    <p>6. Scheduled Future Events</p>
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