import { useState } from "react";



const Letter = ({ letter }) => {
    const {
      name,
      name2,
      audioURL,
      audioURL2

    } = letter || {};
  

    const [letterPronunciation, setLetterPronunciation] = useState();
    const [letterPronunciation2, setLetterPronunciation2] = useState();
  
   

    const handleSound = () => {
      setLetterPronunciation(audioURL);
    };
    const handleSound2 = () => {
      setLetterPronunciation2(audioURL2);
    };
    
  

    return (
      <div className="border p-4 bg-white w-[14vw] h-[18vw] rounded-xl hover:border-3 relative">
    

          <div className="bg-white border hover:border-2 text-center overflow-hidden">
            <p className="text-6xl text-white font-bold p-2 bg-blue-600 hover:text-green-700 hover:bg-green-300">
              {name}
            </p>
            <p className="text-6xl text-white font-bold p-2 bg-green-600 hover:text-green-700 hover:bg-blue-300 overflow-clip">
              {name2}
            </p>
         
            <audio autoPlay src={letterPronunciation}></audio>
            <audio autoPlay src={letterPronunciation2}></audio>
         
          </div>

  
  
  
   
  
        <div className="flex mx-auto py-1">
          <button
            onClick={handleSound}
            className="text-center text-base font-semibold bg-rose-300 px-2 border mx-auto hover:bg-rose-600"
          >
            Vo 1
          </button>
          <button
            onClick={handleSound2}
            className="text-center text-base font-semibold bg-rose-300 px-2 border mx-auto hover:bg-rose-600"
          >
            Vo 2
          </button>
       
        </div>
        <div className="flex justify-center">
       
        </div>
      </div>
    )}

    export default Letter;