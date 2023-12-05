import { useState } from "react";
import { NavLink } from "react-router-dom";
import EnglishNavbar from "../English Header/EnglishNavbar";
import MorphologyNavbar from "../English Header/MorphologyNavbar";


const WHQuestion = () => {
    const [WHWord1, setWHWord1] = useState("");
    const [WHWord2, setWHWord2] = useState("");
    const [WHWord3, setWHWord3] = useState("");
    const [WHWord4, setWHWord4] = useState("");
    const [WHWord5, setWHWord5] = useState("");
    const [WHWord6, setWHWord6] = useState("");
    const [WHWord7, setWHWord7] = useState("");
    const [WHWord8, setWHWord8] = useState("");
    const [WHWord9, setWHWord9] = useState("");

    // const handleWHWord1 = () => {
       
    //   setWHWord1(<>
    //   <span>= আমি</span>
    //   <audio autoPlay src="I.mp4"></audio>
    //     </>);
    //   }
    const handleWHWord1 = () => {
      setWHWord1(" = কে/কে কে/কারা"); 
      }
    const handleWHWord2 = () => {
      setWHWord2(" = কার/কাদের"); 
      }
    const handleWHWord3 = () => {
      setWHWord3(" = কাকে/কাকে কাকে/কাদেরকে"); 
      }
    const handleWHWord4 = () => {
      setWHWord4(" = কেন"); 
      }   
    const handleWHWord5 = () => {
      setWHWord5(" = কিভাবে"); 
      }   
    const handleWHWord6 = () => {
      setWHWord6(" = কখন"); 
      }   
    const handleWHWord7 = () => {
      setWHWord7(" = কী/কী কী"); 
      }   
    const handleWHWord8 = () => {
      setWHWord8(" = কোনটি/কোনগুলো"); 
      }   
    const handleWHWord9 = () => {
      setWHWord9(" = কোথায়/কোথায় কোথায়"); 
      }   

    const  handleReset = () => {
        setWHWord1(" "); 
        setWHWord2(" "); 
        setWHWord3(" "); 
        setWHWord4(" "); 
        setWHWord5(" "); 
        setWHWord6(" "); 
        setWHWord7(" "); 
        setWHWord8(" "); 
        setWHWord9(" "); 
       
      }
    

    return (
        <div>
           <EnglishNavbar></EnglishNavbar>
           <MorphologyNavbar></MorphologyNavbar>
             {/* WHWord */}
            <div className="w-[100vw] bg-gray-100 mx-auto p-8 mt-1">              
               {/* <p onClick={handleWord1} className="w-[70vw]  text-yellow-500 mx-auto text-4xl font-bold">{m1} {m2} {m3}</p> */}
              <div onDoubleClickCapture={ handleReset } className="mx-24 p-3 border rounded-xl text-3xl font-bold"> 
                <h2  className="bg-yellow-600 text-pink-700 py-2 my-2 border rounded-xl flex flex-wrap gap-6 justify-center items-center ">WH Words</h2>
                <h2  className="text-gray-700 bg-gray-500 my-2 border rounded-xl flex flex-wrap gap-6 items-center pl-5">ইংরেজী এক ধরনের প্রশ্ন আছে যেগুলোকে বলে Open Qestion। এ ধরনের প্রশ্নের উত্তর ধরা বাঁধা হয় না বরং উন্মুক্ত, যে কোন কিছুই হতে পারে তাই এগুলোর এ নাম। যা হোক এ ধরনের প্রশ্নের অন্য না হলে WH Question। কারণ এ ধরনের প্রশ্ন Wh দিয়ে শুরু একগুচ্ছ শব্দের যে কোন একটি দিয়ে শুরু করতে হয়। </h2>
                <h2  className="text-gray-700 bg-gray-500 my-2 border rounded-xl flex flex-wrap gap-6 items-center pl-5">There are nine WH words in English</h2>
                <h2  className="text-gray-700 bg-gray-500 my-2 border rounded-xl flex flex-wrap gap-6 items-center pl-5">WH words are used to ask questions</h2>
                <h2  className="text-gray-700 bg-gray-500 my-2 border rounded-xl flex flex-wrap gap-6 items-center pl-5">How Whose, What, Which can take new words after it to create new meaning i.e. How many, How much, Whose name, Whose book, What question, Which book, Which pencil</h2>
                <p className="text-yellow-500 my-2 rounded-xl flex justify-center items-center pt-6">
                  <span className="bg-gray-600 rounded-lg px-2">WH Words</span> 
                  </p>
                
                <div className="text-yellow-500 my-2 border rounded-xl flex flex-col gap-6 justify-center items-center py-8 px-4"> 
                <p className="flex gap-6">
                  <span onClick={handleWHWord1} className="bg-gray-700 rounded-lg text-center px-8 hover:bg-gray-800 hover:px-9">Who {WHWord1}</span>
                  <span onClick={handleWHWord4} className="bg-gray-700 rounded-lg text-center px-8 hover:bg-gray-800 hover:px-9">Why {WHWord4}</span>
                  <span onClick={handleWHWord5} className="bg-gray-700 rounded-lg text-center px-8 hover:bg-gray-800 hover:px-9">How {WHWord5}</span>
                </p>                    
                <p className="flex gap-6">
                  <span onClick={handleWHWord3} className="bg-gray-700 rounded-lg text-center px-8 hover:bg-gray-800 hover:px-9">Whom {WHWord3}</span>                  
                  <span onClick={handleWHWord7} className="bg-gray-700 rounded-lg text-center px-8 hover:bg-gray-800 hover:px-9">What {WHWord7}</span>
                  <span onClick={handleWHWord6} className="bg-gray-700 rounded-lg text-center px-8 hover:bg-gray-800 hover:px-9">When {WHWord6}</span>
                </p>                    
                <p className="flex gap-6">
                  <span onClick={handleWHWord2} className="bg-gray-700 rounded-lg text-center px-8 hover:bg-gray-800 hover:px-9">Whose {WHWord2}</span>                  
                  <span onClick={handleWHWord8} className="bg-gray-700 rounded-lg text-center px-8 hover:bg-gray-800 hover:px-9">Which {WHWord8}</span>
                  <span onClick={handleWHWord9} className="bg-gray-700 rounded-lg text-center px-8 hover:bg-gray-800 hover:px-9">Where {WHWord9}</span>
                </p> 
               
                <div className="flex gap-4 justify-left my-4">
                  <button className="btn btn-sm btn-secondary border">pdf</button>
                  <button className="btn btn-sm btn-secondary border">expand</button>
                  <button className="btn btn-sm btn-secondary border">print</button>
                </div>
                                 
                  
                  
                  
                </div>

                <div className="bg-gray-600 rounded-lg py-2">
                  <p className="px-8 text-xl text-white font-normal">Need to make the word list convertable to PDF </p>
                  <p className="px-8 text-xl text-white font-normal">Need to make the word list printable with meaning </p>
                  <p className="px-8 text-xl text-white font-normal">Need to make the word list whole screen enlargable to make distraction free </p>
                  <p className="px-8 text-xl text-white font-normal"></p>
                </div> 
                <p className="text-yellow-500 my-2 border rounded-xl flex flex-wrap gap-6 justify-left items-center py-8 px-4">                     
                  <span onClick={handleWHWord1} className="bg-gray-700 rounded-lg text-center px-8 hover:bg-gray-800 hover:px-9">Who {WHWord1}</span>
                  <span onClick={handleWHWord2} className="bg-gray-700 rounded-lg text-center px-8 hover:bg-gray-800 hover:px-9">Whose {WHWord2}</span>
                  <span onClick={handleWHWord3} className="bg-gray-700 rounded-lg text-center px-8 hover:bg-gray-800 hover:px-9">Whom {WHWord3}</span>
                  <span onClick={handleWHWord4} className="bg-gray-700 rounded-lg text-center px-8 hover:bg-gray-800 hover:px-9">Why {WHWord4}</span>
                  <span onClick={handleWHWord5} className="bg-gray-700 rounded-lg text-center px-8 hover:bg-gray-800 hover:px-9">How {WHWord5}</span>
                  <span onClick={handleWHWord6} className="bg-gray-700 rounded-lg text-center px-8 hover:bg-gray-800 hover:px-9">When {WHWord6}</span>
                  <span onClick={handleWHWord7} className="bg-gray-700 rounded-lg text-center px-8 hover:bg-gray-800 hover:px-9">What {WHWord7}</span>
                  <span onClick={handleWHWord8} className="bg-gray-700 rounded-lg text-center px-8 hover:bg-gray-800 hover:px-9">Which {WHWord8}</span>
                  <span onClick={handleWHWord9} className="bg-gray-700 rounded-lg text-center px-8 hover:bg-gray-800 hover:px-9">Where {WHWord9}</span>
                  
                </p>               
                </div>
                </div>
                <div className="btn btn-primary mx-center p-5"><NavLink to="/english"  className={({ isActive, isPending }) =>
    isPending ? "text-black" : isActive ? "text-rose-800 underline" : " "}>English</NavLink>  </div>  
        </div>
    );
};

export default WHQuestion;