import { useState } from "react";
import { NavLink } from "react-router-dom";
import PresentIndefiniteTense from "../Syntax/Tense/PresentIndefiniteTense";


const SyntaxNavbar = () => {
    const [tense, setTense] = useState();
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
          <div>    
            <PresentIndefiniteTense></PresentIndefiniteTense>
        <div className="flex justify-content p-5 gap-5">
        <button onClick={handleImg1} className="btn btn-sm">Theory</button>
        <button onClick={handleImg2} className="btn btn-sm">Building Code</button>
        <button onClick={handleImg3} className="btn btn-sm">Load Calculation</button>
        </div>
       
        <p>I eat rice</p>
        <p>I drink water</p>
        <p>I swim in the swimming pool</p>
        <p>This is an example of Present Perfect Tense</p>
        </div>
        </>)
    }
    const  handleImg2 = () => {
        setVideo(<>
        <div className="w-[70vw] h-[80vh] bg-blue-500">
        <div className="flex justify-content p-5 gap-5">
        <button onClick={handleImg1} className="btn btn-sm">Theory</button>
        <button onClick={handleImg2} className="btn btn-sm">Building Code</button>
        <button onClick={handleImg3} className="btn btn-sm">Load Calculation</button>
        <button className="btn btn-sm"></button>
        </div>
        <img src="./public/vegetables/eggplant.png" ></img>
        <p>This is handleIm2</p>
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
        <div className="flex justify-content p-5 gap-5">
        <button onClick={handleImg1} className="btn btn-sm">Theory</button>
        <button onClick={handleImg2} className="btn btn-sm">Building Code</button>
        <button onClick={handleImg3} className="btn btn-sm">Load Calculation</button>      
        <button className="btn btn-sm"></button>
        </div>
        <img src="./public/vegetables/carrot.png"></img>
        <p>This is handleImg3</p>
        <p>This is an example of Present Perfect Tense</p>
        <p>This is an example of Present Perfect Tense</p>
        <p>This is an example of Present Perfect Tense</p>
        <p>This is an example of Present Perfect Tense</p>
        <p>This is an example of Present Perfect Tense</p>
        <p>This is an example of Present Perfect Tense</p>
        </div>
        </>)}
 

    
      const handleTense =()=> {
        setTense(
        <div>
          <div className='w-[90vw] h-[45vw] border flex justify-center mx-auto'>
                  <div className='w-[20vw] h-[45vw] overflow-y-scroll border'>
                      <button className='w-[17vw] h-[6vh] border m-1 bg-gray-400 text-xs font-bold text-wrap text-left p-1'>Click button to see the description <br></br>Double click to watch the video</button>
                      <button onClick={handleImg1} onDoubleClickCapture={handleVideo1} className='w-[17vw] h-[8vh] border m-3 bg-amber-400 font-bold'>Present Indefinite Tense</button>
                      <button onClick={handleImg2} onDoubleClickCapture={handleVideo2} className='w-[17vw] h-[8vh] border m-3 bg-amber-400 font-bold'>Present Continuous Tense</button>
                      <button onClick={handleImg3} onDoubleClickCapture={handleVideo3} className='w-[17vw] h-[8vh] border m-3 bg-amber-400 font-bold'>Present Perfect Tense</button>
                      <button onClick={handleImg3} onDoubleClickCapture={handleVideo3} className='w-[17vw] h-[8vh] border m-3 bg-amber-400 font-bold'>Present Perfect Continuous Tense</button>
                      <button onClick={handleImg3} onDoubleClickCapture={handleVideo3} className='w-[17vw] h-[8vh] border m-3 bg-amber-400 font-bold'>Footing Design</button>
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
                  </div>  
        
        )
      }          
    return (
        <div>
            
            <div className="flex flex-wrap border justify-center bg-gray-400 gap-2 p-2">
    <button className="mx-center px-2 font-semibold text-gray-200 border border-gray-200 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Kinds of Sentence</button>
    <button className="mx-center px-2 font-semibold text-gray-200 border border-gray-200 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">
          <NavLink
            to="/tense"
            className={({ isActive, isPending }) =>
              isPending
                ? "text-gray-200"
                : isActive
                ? ""
                : " "
            }
          >
            Tense
          </NavLink>
        </button>
    <button className="mx-center px-2 font-semibold text-gray-200 border border-gray-200 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Voice</button>
    <button className="mx-center px-2 font-semibold text-gray-200 border border-gray-200 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Trasformation of Sentences</button>
    <button className="mx-center px-2 font-semibold text-gray-200 border border-gray-200 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Narration</button>
    <button className="mx-center px-2 font-semibold text-gray-200 border border-gray-200 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Conditional Sentences</button>
    <button className="mx-center px-2 font-semibold text-gray-200 border border-gray-200 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Mode</button>
    <button className="mx-center px-2 font-semibold text-gray-200 border border-gray-200 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Causative Sentence</button>           

    <button className="btn btn-sm btn-primary  mx-center p-2">
          <NavLink
            to="/sentences"
            className={({ isActive, isPending }) =>
              isPending
                ? "text-gray-200"
                : isActive
                ? " "
                : " "
            }
          >
            Sentences
          </NavLink>
        </button>
    
        </div>
      
        </div>
       
    );
};

export default SyntaxNavbar;