import { useState } from "react";
import EnglishNavbar from "../English Header/EnglishNavbar";
import Fruits from "./Fruits";
import FruitsBN from "./FruitsBN";
import TestFruits from "./TestFruits";
import VegetablesContainer from "./VegetablesContainer";
import FruitsContainer from "./FruitsContainer";
import { NavLink } from "react-router-dom";
import MorphologyNavbar from "../English Header/MorphologyNavbar";
import PresentIndefiniteTense from "../Syntax/Tense/PresentIndefiniteTense";
import PresentContinuousTense from "../Syntax/Tense/PresentContinuousTense";
import PresentPerfectTense from "../Syntax/Tense/PresentPerfectTense";
import TransitiveVerbList from "./VerbList/TransitiveVerbList";
import {Helmet} from "react-helmet";


const Vocabulary = () => {
const [m1, setM1] = useState("fish");
const [m2, setM2] = useState("rice");
const [m3, setM3] = useState("lentil");
const [m4, setM4] = useState("knowledge");
const [m5, setM5] = useState("volunteer");
const [video, setVideo] = useState();
    

const handleWord1 = () => {
    setM1("fish = মাছ"); 
    }

const handleWord2 = () => {           
    setM2("rice = ভাত"); 
    }

const handleWord3 = () => {           
    setM3("lentil = len.til= ডাল"); 
    }

const handleWord4 = () => {           
    setM4("knowledge = know.ledge= জ্ঞান"); 
    }
const handleWord5 = () => {           
    setM5("volunteer = vo.lun.teer= স্বেচ্ছাসেবক"); 
    }
const handleReset = () => {           
    setM1("fish") ; 
    setM2("rice") ; 
    setM3("lentil") ; 
    setM4("knowledge") ; 
    setM5("volunteer") ; 
    }

const [s1, setS1] = useState("");
const handleSentence1 = () => {           
    setS1(                
        <div>
        <p className="pb-6">পান করা।</p>
        <div className="flex justify-center">                 
        <audio autoPlay src="../../../../public/IDrinkWater.mp4" className="w-84 h-36"></audio  >
        </div>                
        </div>
        ) ; 
    }
const handleResetSentence1 = () => {           
    setS1("") ; 
    }

const handleWordInclusion = (e) =>{
    e.preventDefault();
    const form =e.target;

    const category = form.category.value;
    const word = form.word.value;
    const wordMeaning = form.wordMeaning.value;
    const imageURL = form.imageURL.value;
    const audioURL = form.imageURL.value;
    const article = form.article.value;
    const number = form.number.value;
    const gender = form.gender.value;
    console.log({"category": category, "word": word, "word meaning": wordMeaning, "image URL": imageURL, "audio URL": audioURL, "article": article, "number": number, "gender": gender})
}



  
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
      <div className="w-[65vw] h-[80vh] bg-blue-500">       
<TransitiveVerbList></TransitiveVerbList>
   
    </div>
    </>)
}
const  handleImg2 = () => {
    setVideo(<>
    <div className="w-[65vw] bg-blue-500">
    <div className="flex justify-content p-5 gap-5">
    <button onClick={handleImg1} className="btn btn-sm">Essential Word List</button>
    <button onClick={handleImg2} className="btn btn-sm">Intermediate Word List</button>
    <button onClick={handleImg3} className="btn btn-sm">Andvance Word List</button>
    <button className="btn btn-sm"></button>
    </div>
    <img src="./public/vegetables/eggplant.png" ></img>
    <PresentContinuousTense></PresentContinuousTense>  
    </div>
    </>)
}
const  handleImg3 = () => {
    setVideo(<div>        
    <div className="w-[65vw] h-[80vh] bg-red-500">
    <div className="flex justify-content p-5 gap-5">
    <button onClick={handleImg1} className="btn btn-sm">Essential Word List</button>
    <button onClick={handleImg2} className="btn btn-sm">Intermediate Word List</button>
    <button onClick={handleImg3} className="btn btn-sm">Andvance Word List</button>
    </div>
    <PresentPerfectTense></PresentPerfectTense>
    <img src="./public/vegetables/carrot.png"></img>
    
    </div>       
    </div>
    )
  }   
const  handlePresentIndefiniteTense = () => {
    setVideo(
    <div> 
        <button onClick={handleImg1} className="btn btn-sm">Essential Word List</button>
    <button onClick={handleImg2} className="btn btn-sm">Intermediate Word List</button>
    <button onClick={handleImg3} className="btn btn-sm">Andvance Word List</button>
        
        <form onSubmit={handleWordInclusion} className="border-2 p-3 m-5 flex flex-col">
            <h2 className="text-5xl font-bold text-center p-3">Word Inclusion Form</h2>
            <div className="flex gap-2 m-2"> <label className="w-[20vw] border p-2 bg-amber-200 font-bold">Category:</label><input className="w-[70vw] border p-2" type="text" name="category" placeholder="type word category"/></div>
            <div className="flex gap-2 m-2"> <label className="w-[20vw] border p-2 bg-amber-200 font-bold">Word:</label><input className="w-[70vw] border p-2" type="text" name="word"  placeholder="type word"/></div>
            <div className="flex gap-2 m-2"> <label className="w-[20vw] border p-2 bg-amber-200 font-bold">Word meaning:</label><input className="w-[70vw] border p-2"  type="text" name="wordMeaning" placeholder="type word meaning"/></div>
            <div className="flex gap-2 m-2"> <label className="w-[20vw] border p-2 bg-amber-200 font-bold">imageURL:</label><input className="w-[70vw] border p-2"  type="text" name="imageURL" placeholder="type imageURL"/></div>
            <div className="flex gap-2 m-2"> <label className="w-[20vw] border p-2 bg-amber-200 font-bold">image:</label><input className="w-[70vw] h-[20vh] border p-2"  type="text" name="image" placeholder="Drag and Drop"/></div>
            <div className="flex gap-2 m-2"> <label className="w-[20vw] border p-2 bg-amber-200 font-bold">audioURL:</label><input className="w-[70vw] border p-2"  type="text" name="audioURL" placeholder="type audioURL"/></div>
            <div className="flex gap-2 m-2"> <label className="w-[20vw] border p-2 bg-amber-200 font-bold">article:</label><input className="w-[70vw] border p-2"  type="text" name="article" placeholder="type applicable article"/></div>
            <div className="flex gap-2 m-2"> <label className="w-[20vw] border p-2 bg-amber-200 font-bold">number:</label><input className="w-[70vw] border p-2"  type="text" name="number" placeholder="type plural form of the word"/></div>
            <div className="flex gap-2 m-2"> <label className="w-[20vw] border p-2 bg-amber-200 font-bold">gender:</label><input className="w-[70vw] border p-2"  type="text" name="gender" placeholder="type gender of the word"/></div>
            <input className="btn btn-secondary" type="submit" value="Add Word"/>
        </form>   
    </div>
    )  
}
    const  handlePresentContinuousTense = () => {
        setVideo(<div>        
        <div className="w-[65vw] h-[80vh] bg-red-500">
        <div className="flex justify-content p-5 gap-5">
        <div className="flex justify-content p-5 gap-5">
    <button onClick={handleImg1} className="btn btn-sm">Essential Word List</button>
    <button onClick={handleImg2} className="btn btn-sm">Intermediate Word List</button>
    <button onClick={handleImg3} className="btn btn-sm">Andvance Word List</button>
    </div>     
        </div>
        <div className="-my-48">
        <VegetablesContainer></VegetablesContainer>
        </div>
        
        </div>       
        </div>
        )
      }   
    const  handlePresentPerfectTense = () => {
        setVideo(<div>        
        <div className="w-[65vw] h-[80vh] bg-red-500">
        <div className="flex justify-content p-5 gap-5">
        <div className="flex justify-content p-5 gap-5">
    <button onClick={handleImg1} className="btn btn-sm">Essential Word List</button>
    <button onClick={handleImg2} className="btn btn-sm">Intermediate Word List</button>
    <button onClick={handleImg3} className="btn btn-sm">Andvance Word List</button>
    </div>    
        </div>
    <div className="-my-48">    <FruitsContainer></FruitsContainer> </div>
        
        </div>       
        </div>
        )
      } 

    return (
        <div>    
                      <Helmet>
<title>Morphology</title>
</Helmet>       
            <EnglishNavbar></EnglishNavbar>
            <MorphologyNavbar></MorphologyNavbar>
            <div className='w-[100vw] h-[45vw] border flex justify-center mx-auto'>
                  <div className='w-[15vw] h-[45vw] overflow-y-scroll border'>
                      <button className='w-[10vw] h-[6vh] border bg-amber-700 text-xs font-bold text-wrap text-left m-1 p-1'>Click button to see the description <br></br>Double click to watch the video</button>
                      <button onClick={handlePresentIndefiniteTense} onDoubleClickCapture={handleVideo1} className='w-[17vw] h-[8vh] border my-2 bg-green-400 font-bold text-2xl text-left'>Word Inclusion</button>
                      <button onClick={handlePresentContinuousTense} onDoubleClickCapture={handleVideo2} className='w-[17vw] h-[8vh] border my-2 bg-sky-400 font-bold text-2xl text-left' title="Vegetables">শাক-সবজি</button>
                      <button onClick={handlePresentPerfectTense} onDoubleClickCapture={handleVideo3} className='w-[17vw] h-[8vh] border my-2 bg-green-400 font-bold text-2xl text-left' title="Fruits">ফলমূল</button>
                      <button onClick={handlePresentPerfectTense} onDoubleClickCapture={handleVideo3} className='w-[17vw] h-[8vh] border my-2 bg-green-400 font-bold text-2xl text-left' title="Food">খাদ্য</button>
                      <button onClick={handlePresentPerfectTense} onDoubleClickCapture={handleVideo3} className='w-[17vw] h-[8vh] border my-2 bg-green-400 font-bold text-2xl text-left' title="মাছ">Fish</button>
                      <button onClick={handlePresentPerfectTense} onDoubleClickCapture={handleVideo3} className='w-[17vw] h-[8vh] border my-2 bg-green-400 font-bold text-2xl text-left' title="প্রাণী">Animals</button>
                      <button onClick={handlePresentPerfectTense} onDoubleClickCapture={handleVideo3} className='w-[17vw] h-[8vh] border my-2 bg-green-400 font-bold text-2xl text-left' title="পাখি">Birds</button>
                      <button onClick={handlePresentPerfectTense} onDoubleClickCapture={handleVideo3} className='w-[17vw] h-[8vh] border my-2 bg-green-400 font-bold text-2xl text-left' title="গাছ-পালা">Plants</button>
                      <button onClick={handlePresentPerfectTense} onDoubleClickCapture={handleVideo3} className='w-[17vw] h-[8vh] border my-2 bg-green-400 font-bold text-2xl text-left' title="ফুল">Flowers</button>
                      <button onClick={handlePresentPerfectTense} onDoubleClickCapture={handleVideo3} className='w-[17vw] h-[8vh] border my-2 bg-green-400 font-bold text-2xl text-left' title="আসবাবপত্র">Furniture</button>
                      <button onClick={handlePresentPerfectTense} onDoubleClickCapture={handleVideo3} className='w-[17vw] h-[8vh] border my-2 bg-green-400 font-bold text-2xl text-left' title="ইলেকট্রনিক্স">Electronics</button>
                      <button onClick={handlePresentPerfectTense} onDoubleClickCapture={handleVideo3} className='w-[17vw] h-[8vh] border my-2 bg-green-400 font-bold text-2xl text-left' title="গাড়ী">Cars</button>
                      <button onClick={handlePresentPerfectTense} onDoubleClickCapture={handleVideo3} className='w-[17vw] h-[8vh] border my-2 bg-green-400 font-bold text-2xl text-left' title="শিক্ষামূলক">Educational</button>
                      <button onClick={handlePresentPerfectTense} onDoubleClickCapture={handleVideo3} className='w-[17vw] h-[8vh] border my-2 bg-green-400 font-bold text-2xl text-left' title="ম্যাকানিক্যাল">Mechanical</button>
                      <button onClick={handlePresentPerfectTense} onDoubleClickCapture={handleVideo3} className='w-[17vw] h-[8vh] border my-2 bg-green-400 font-bold text-2xl text-left' title="ধর্ম">Religion</button>
                      <button onClick={handlePresentPerfectTense} onDoubleClickCapture={handleVideo3} className='w-[17vw] h-[8vh] border my-2 bg-green-400 font-bold text-2xl text-left' title="শরীরের অঙ্গ">Body Parts</button>
                      <button onClick={handlePresentPerfectTense} onDoubleClickCapture={handleVideo3} className='w-[17vw] h-[8vh] border my-2 bg-green-400 font-bold text-2xl text-left' title="শরীরের অঙ্গ">Snake</button>
                     
                      
                  </div> 
                  <div  className='w-[80vw] h-[100vw] border'>
                      {video}
                  </div>
                  </div>
      
<div className="m-44">===========00000000000====================</div>
            
            <VegetablesContainer></VegetablesContainer>
            <FruitsContainer></FruitsContainer> 
            <TestFruits></TestFruits>
            <Fruits></Fruits>
            <FruitsBN></FruitsBN>
           
                
            {/* Pronoun */}
            <div className="w-[100vw] bg-green-200 border my-5 rounded-xl">
            <h2 className="text-3xl font-bold text-center">Pronoun</h2>
            <div className="flex gap-6 w-[100vw] bg-green-200 border overflow-scroll my-5 rounded-xl">
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">I{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">we{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">my{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">our{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">me{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">us{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">mine{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">ours{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">you{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">your{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">yours{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">he{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">she{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">it{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">they{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">his{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">her{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">its{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">their{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">him{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">them{s1}</p></div>
            </div>
            </div>

            {/* Vocabulary Test */}
            <div className="w-[100vw] h-[75vh] bg-green-200 border my-5 rounded-xl">
            <h2 className="text-3xl font-bold text-center">Vocabulary Test</h2>
            <div className="flex gap-6 w-[100vw] h-[65vh] bg-green-200 border overflow-scroll my-5 rounded-xl">
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[25vw] max-w-[25vw] h-[20vh]"><img src="/public/Sentence1.jpg" className="w-[20vw] h-[15w] mx-auto"></img><input type="text" name="spelling" placeholder="spelling" className="text-2xl py-2 mt-3 min-w-[10vw] border rounded-lg"></input> <input type="text" name="meaning" placeholder="meaning" className="text-2xl py-2 mt-3 min-w-[10vw] border rounded-lg"></input><input type="submit" name="submit" className="text-2xl py-1 mt-3 min-w-[10vw] border btn"></input></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[25vw] max-w-[25vw] h-[20vh]"><video src="/IDrinkWater.mp4" controls className="w-[20vw] h-[15w] mx-auto"></video> <input type="text" name="spelling" placeholder="spelling" className="text-2xl py-2 mt-3 min-w-[10vw] border rounded-lg"></input> <input type="meaning" name="text" placeholder="meaning" className="text-2xl py-2 mt-3 min-w-[10vw] border rounded-lg"></input><input type="submit" name="submit" className="text-2xl py-1 mt-3 min-w-[10vw] border btn"></input></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[25vw] max-w-[25vw] h-[20vh]"><audio src="/IDrinkWater.mp4" controls className="w-[20vw] h-[15w] mx-auto btn"></audio> <input type="text" name="spelling" placeholder="spelling" className="text-2xl py-2 mt-3 min-w-[10vw] border rounded-lg"></input> <input type="meaning" name="text" placeholder="meaning" className="text-2xl py-2 mt-3 min-w-[10vw] border rounded-lg"></input><input type="submit" name="submit" className="text-2xl py-1 mt-3 min-w-[10vw] border btn"></input></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[25vw] max-w-[25vw] h-[20vh]"><p className="text-2xl text-center py-2 w-[20vw] h-[15w] mx-auto">we{s1}</p>  <input type="text" name="impSpelling" placeholder="IPA spelling" className="text-2xl py-2 mt-3 min-w-[10vw] border rounded-lg"></input> <input type="text" name="meaning" placeholder="meaning" className="text-2xl py-2 mt-3 min-w-[10vw] border rounded-lg"></input><input type="submit" name="submit" className="text-2xl py-1 mt-3 min-w-[10vw] border btn"></input></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[25vw] max-w-[25vw] h-[20vh]"><img src="/public/Sentence1.jpg" className="mw-[20vw] h-[15w] mx-auto"></img><input type="text" name="spelling" placeholder="spelling" className="text-2xl py-2 mt-3 min-w-[10vw] border rounded-lg"></input> <input type="text" name="meaning" placeholder="meaning" className="text-2xl py-2 mt-3 min-w-[10vw] border rounded-lg"></input><input type="submit" name="submit" className="text-2xl py-1 mt-3 min-w-[10vw] border btn"></input></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[25vw] max-w-[25vw] h-[20vh]"><video src="/IDrinkWater.mp4" controls className="w-[20vw] h-[15w] mx-auto"></video> <input type="text" name="spelling" placeholder="spelling" className="text-2xl py-2 mt-3 min-w-[10vw] border rounded-lg"></input> <input type="meaning" name="text" placeholder="meaning" className="text-2xl py-2 mt-3 min-w-[10vw] border rounded-lg"></input><input type="submit" name="submit" className="text-2xl py-1 mt-3 min-w-[10vw] border btn"></input></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[25vw] max-w-[25vw] h-[20vh]"><audio src="/IDrinkWater.mp4" controls className="w-[20vw] h-[15w] mx-auto btn"></audio> <input type="text" name="spelling" placeholder="spelling" className="text-2xl py-2 mt-3 min-w-[10vw] border rounded-lg"></input> <input type="meaning" name="text" placeholder="meaning" className="text-2xl py-2 mt-3 min-w-[10vw] border rounded-lg"></input><input type="submit" name="submit" className="text-2xl py-1 mt-3 min-w-[10vw] border btn"></input></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[25vw] max-w-[25vw] h-[20vh]"><p className="text-2xl text-center py-2 w-[20vw] h-[15w] mx-auto">we{s1}</p>  <input type="text" name="impSpelling" placeholder="IPA spelling" className="text-2xl py-2 mt-3 min-w-[10vw] border rounded-lg"></input> <input type="text" name="meaning" placeholder="meaning" className="text-2xl py-2 mt-3 min-w-[10vw] border rounded-lg"></input><input type="submit" name="submit" className="text-2xl py-1 mt-3 min-w-[10vw] border btn"></input></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[25vw] max-w-[25vw] h-[20vh]"><img src="/public/Sentence1.jpg" className="w-[20vw] h-[15w] mx-auto"></img><input type="text" name="spelling" placeholder="spelling" className="text-2xl py-2 mt-3 min-w-[10vw] border rounded-lg"></input> <input type="text" name="meaning" placeholder="meaning" className="text-2xl py-2 mt-3 min-w-[10vw] border rounded-lg"></input><input type="submit" name="submit" className="text-2xl py-1 mt-3 min-w-[10vw] border btn"></input></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[25vw] max-w-[25vw] h-[20vh]"><video src="/IDrinkWater.mp4" controls className="w-[20vw] h-[15w] mx-auto"></video> <input type="text" name="spelling" placeholder="spelling" className="text-2xl py-2 mt-3 min-w-[10vw] border rounded-lg"></input> <input type="meaning" name="text" placeholder="meaning" className="text-2xl py-2 mt-3 min-w-[10vw] border rounded-lg"></input><input type="submit" name="submit" className="text-2xl py-1 mt-3 min-w-[10vw] border btn"></input></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[25vw] max-w-[25vw] h-[20vh]"><audio src="/IDrinkWater.mp4" controls className="w-[20vw] h-[15w] mx-auto btn"></audio> <input type="text" name="spelling" placeholder="spelling" className="text-2xl py-2 mt-3 min-w-[10vw] border rounded-lg"></input> <input type="meaning" name="text" placeholder="meaning" className="text-2xl py-2 mt-3 min-w-[10vw] border rounded-lg"></input><input type="submit" name="submit" className="text-2xl py-1 mt-3 min-w-[10vw] border btn"></input></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[25vw] max-w-[25vw] h-[20vh]"><p className="text-2xl text-center py-2 w-[20vw] h-[15w] mx-auto" >we{s1}</p>  <input type="text" name="impSpelling" placeholder="IPA spelling" className="text-2xl py-2 mt-3 min-w-[10vw] border rounded-lg"></input> <input type="text" name="meaning" placeholder="meaning" className="text-2xl py-2 mt-3 min-w-[10vw] border rounded-lg"></input><input type="submit" name="submit" className="text-2xl py-1 mt-3 min-w-[10vw] border btn"></input></div>
            </div>
            </div>

            
           
            
            
            {/* Modal Verbs */}
            <div className="w-[100vw] bg-green-200 border my-12 rounded-xl">
            <h2 className="text-3xl font-bold text-center">Modal Auxiliary Verbs</h2>
            <div className="flex gap-6 w-[100vw] bg-green-200 border overflow-scroll my-5 rounded-xl">
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="" className="mx-auto"></img> <p className="text-2xl text-center py-2">can{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">could{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">may{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">might{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">will{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">would{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">shall{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">should{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">ought to{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">must{s1}</p></div>
            </div>
            </div>

             {/* Auxiliary Verbs */}
             <div className="w-[100vw] bg-green-200 border my-5 rounded-xl">
            <h2 className="text-3xl font-bold text-center"> Auxiliary Verbs </h2>
            <div className="flex gap-6 w-[100vw] bg-sky-200 border overflow-scroll my-5 rounded-xl">
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="./fruits/banana.png" className="mx-auto"></img> <p className="text-2xl text-center py-2">am{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">is{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">are{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">was{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">were{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">shall{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">will{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">have{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">has{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">had{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">be{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">being{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">been{s1}</p></div>
            </div>
            </div>

            {/*Causative Verbs */}
            <div className="w-[100vw] bg-sky-200 border my-5 rounded-xl">
            <h2 className="text-3xl font-bold text-center">Causative Verbs</h2>
            <div className="flex gap-6 w-[100vw] bg-sky-200 border overflow-scroll my-5 rounded-xl">
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="./fruits/banana.png" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            </div>
            </div>     

            {/*Causative Verbs */}
            <div className="w-[100vw] bg-green-200 border my-5 rounded-xl">
            <h2 className="text-3xl font-bold text-center">Causative Verbs</h2>
            <div className="flex gap-6 w-[100vw] bg-green-200 border overflow-scroll my-5 rounded-xl">
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="./fruits/banana.png" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            </div>
            </div>     

            {/*Transitive Verbs */}
            <div className="w-[100vw] bg-sky-200 border my-5 rounded-xl">
            <h2 className="text-3xl font-bold text-center">Transitive Verbs</h2>
            <div className="flex gap-6 w-[100vw] bg-sky-200 border overflow-scroll my-5 rounded-xl">
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="./fruits/banana.png" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            </div>
            </div>    

            {/*Intransitive Verbs */}
            <div className="w-[100vw] bg-green-200 border my-5 rounded-xl">
            <h2 className="text-3xl font-bold text-center">Intransitive Verbs</h2>
            <div className="flex gap-6 w-[100vw] bg-green-200 border overflow-scroll my-5 rounded-xl">
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="./fruits/banana.png" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            </div>
            </div>  

            {/* Prepositions */}
            <div className="w-[100vw] bg-sky-200 border my-5 rounded-xl">
            <h2 className="text-3xl font-bold text-center">Prepositions</h2>
            <div className="flex gap-6 w-[100vw] bg-sky-200 border overflow-scroll my-5 rounded-xl">
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="./fruits/banana.png" className="mx-auto"></img> <p className="text-2xl text-center py-2">in{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">on{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">at{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">out{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">beside{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">to{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">from{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">for{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">in to{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">up{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">down{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">under{s1}</p></div>
            </div>
            </div>

            {/* conjunctions */}
            <div className="w-[100vw] bg-green-200 border my-5 rounded-xl">
            <h2 className="text-3xl font-bold text-center">Conjunctions</h2>
            <div className="flex gap-6 w-[100vw] bg-green-200 border overflow-scroll my-5 rounded-xl">
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="./fruits/banana.png" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            </div>
            </div>
           
            {/* Interjections */}
            <div className="w-[100vw] bg-sky-200 border my-5 rounded-xl">
            <h2 className="text-3xl font-bold text-center">Interjections</h2>
            <div className="flex gap-6 w-[100vw] bg-sky-200 border overflow-scroll my-5 rounded-xl">
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="./fruits/banana.png" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            </div>
            </div>

            {/* Articles and Determiners */}
            <div className="w-[100vw] bg-green-200 border my-5 rounded-xl">
            <h2 className="text-3xl font-bold text-center">Articles and Determiners</h2>
            <div className="flex gap-6 w-[100vw] bg-green-200 border overflow-scroll my-5 rounded-xl">
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="./fruits/banana.png" className="mx-auto"></img> <p className="text-2xl text-center py-2">a{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">an{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">the{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">one{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">two{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">three{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">four{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">five{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">six{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">seven{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">eight{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">nine{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">ten{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">eleven{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">twelve{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">thirteen{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">fourteen{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">fifteen{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">sixteen{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">seventeen{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">eigtheen{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">nineteen{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">twenty{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">thirty{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">fourty{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">fifty{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">sixty{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">seventy{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">eighty{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">ninety{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">hundred{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">thousand{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">lac/lakh {s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">million{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">billion{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">trillion{s1}</p></div>
            </div>
            </div>
                
            {/* WH Words */}
            <div className="w-[100vw] bg-sky-200 border my-5 rounded-xl">
            <h2 className="text-3xl font-bold text-center">WH Words</h2>
            <div className="flex gap-6 w-[100vw] bg-sky-200 border overflow-scroll my-5 rounded-xl">
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="./fruits/banana.png" className="mx-auto"></img> <p className="text-2xl text-center py-2">who{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">whose{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">whom{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">which{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">what{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">why{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">how{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">when{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">where{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">how much {s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">how many {s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">which book{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">whose name{s1}</p></div>
            </div>
            </div>

            {/* time */}
            <div className="w-[100vw] bg-green-200 border my-5 rounded-xl">
            <h2 className="text-3xl font-bold text-center">time</h2>
            <div className="flex gap-6 w-[100vw] bg-green-200 border overflow-scroll my-5 rounded-xl">
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="./fruits/banana.png" className="mx-auto"></img> <p className="text-2xl text-center py-2">dawn{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">morning{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">noon{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">afternoon{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">dusk{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">evening{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">night{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">mid night{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">deep night{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">yesterday{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">the day before yesterday{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">the previous day{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">today{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">next day{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">tomorrow{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">day{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">week{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">bi-week{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">month{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">decade{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">century{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">millenium{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">quarter{s1}</p></div>           
            </div>
            </div>

             
            {/* Days of the week */}
            <div className="w-[100vw] bg-green-200 border my-5 rounded-xl">
            <h2 className="text-3xl font-bold text-center">Days of the week</h2>
            <div className="flex gap-6 w-[100vw] bg-green-200 border overflow-scroll my-5 rounded-xl">
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="./fruits/banana.png" className="mx-auto"></img> <p className="text-2xl text-center py-2">Saturday{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">Sunday{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">Monday{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">Tuesday{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">Wednesday{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">Thursday{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">Friday{s1}</p></div>
            </div>
            </div>

            {/* Months of the Year */}
            <div className="w-[100vw] bg-green-200 border my-5 rounded-xl">
            <h2 className="text-3xl font-bold text-center">Months of the Year </h2>
            <div className="flex gap-6 w-[100vw] bg-green-200 border overflow-scroll my-5 rounded-xl">
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="./fruits/banana.png" className="mx-auto"></img> <p className="text-2xl text-center py-2">January{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">February{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">March{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">April{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">May{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">June{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">July{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">August{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">September{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">October{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">November{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">December{s1}</p></div>
            </div>
            </div>
           
            {/* Flowers */}
            <div className="w-[100vw] bg-green-200 border my-5 rounded-xl">
            <h2 className="text-3xl font-bold text-center">Animals</h2>
            <div className="flex gap-6 w-[100vw] bg-green-200 border overflow-scroll my-5 rounded-xl">
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="./fruits/banana.png" className="mx-auto"></img> <p className="text-2xl text-center py-2">rose{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">china rose{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            </div>
            </div>

            {/* Animals */}
            <div className="w-[100vw] bg-green-200 border my-5 rounded-xl">
            <h2 className="text-3xl font-bold text-center">Animals</h2>
            <div className="flex gap-6 w-[100vw] bg-green-200 border overflow-scroll my-5 rounded-xl">
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="./fruits/banana.png" className="mx-auto"></img> <p className="text-2xl text-center py-2">Tiger{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">Lion{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">Dog{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">Cat{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">Monkey{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">Cow{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">Buffello{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">Goat{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">Sheep{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">Antelope{s1}</p></div>
            </div>
            </div>

            {/* Reptiles */}
            <div className="w-[100vw] bg-green-200 border my-5 rounded-xl">
            <h2 className="text-3xl font-bold text-center">Reptiles</h2>
            <div className="flex gap-6 w-[100vw] bg-green-200 border overflow-scroll my-5 rounded-xl">
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="./fruits/banana.png" className="mx-auto"></img> <p className="text-2xl text-center py-2">Snake{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">Python{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">Dragon{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">Lijard{s1}</p></div>
            </div>
            </div>

            {/* Dresses */}
            <div className="w-[100vw] bg-green-200 border my-5 rounded-xl">
            <h2 className="text-3xl font-bold text-center">Dresses</h2>
            <div className="flex gap-6 w-[100vw] bg-green-200 border overflow-scroll my-5 rounded-xl">
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="./fruits/banana.png" className="mx-auto"></img> <p className="text-2xl text-center py-2">Shirt{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">Pant{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">Trousers{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">Coat{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">Suite{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">Panjabi{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">Froke{s1}</p></div>
            </div>
            </div>

            {/* Furniture */}
            <div className="w-[100vw] bg-green-200 border my-5 rounded-xl">
            <h2 className="text-3xl font-bold text-center">Furniture</h2>
            <div className="flex gap-6 w-[100vw] bg-green-200 border overflow-scroll my-5 rounded-xl">
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="./fruits/banana.png" className="mx-auto"></img> <p className="text-2xl text-center py-2">Chair{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">Table{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">Sofa{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">Stoll{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">Bench{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">Almirah{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">Dressing Table{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">Cot{s1}</p></div>
            </div>
            </div>
            {/* Body Parts/ Organs  */}
            <div className="w-[100vw] bg-green-200 border my-5 rounded-xl">
            <h2 className="text-3xl font-bold text-center">Body Parts/Organs</h2>
            <div className="flex gap-6 w-[100vw] bg-green-200 border overflow-scroll my-5 rounded-xl">
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="./fruits/banana.png" className="mx-auto"></img> <p className="text-2xl text-center py-2">head{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">hair{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">eye{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">eye brow{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">nose{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">mouth{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">chick{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">gum{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">hand{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">wrist{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">finger{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">nail{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">elbow{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">chest{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">thai{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">leg{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">knee{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">ankel{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">foot{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">toe{s1}</p></div>
            </div>
            </div>
            {/* Diseases */}
            <div className="w-[100vw] bg-green-200 border my-5 rounded-xl">
            <h2 className="text-3xl font-bold text-center">Diseases</h2>
            <div className="flex gap-6 w-[100vw] bg-green-200 border overflow-scroll my-5 rounded-xl">
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="./fruits/banana.png" className="mx-auto"></img> <p className="text-2xl text-center py-2">fever{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">cold{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            </div>
            </div>                
            {/* Birds */}
            <div className="w-[100vw] bg-green-200 border my-5 rounded-xl">
            <h2 className="text-3xl font-bold text-center">Birds</h2>
            <div className="flex gap-6 w-[100vw] bg-green-200 border overflow-scroll my-5 rounded-xl">
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="./fruits/banana.png" className="mx-auto"></img> <p className="text-2xl text-center py-2">chicken{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">hen{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">cock{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">rooster{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">duck{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">ducklings{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">pegion{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">parrot{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">turkey{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            </div>
            </div>
            {/* Insects */}
            <div className="w-[100vw] bg-green-200 border my-5 rounded-xl">
            <h2 className="text-3xl font-bold text-center">Insects</h2>
            <div className="flex gap-6 w-[100vw] bg-green-200 border overflow-scroll my-5 rounded-xl">
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="./fruits/banana.png" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            </div>
            </div>            
                {/* Cars */}
            <div className="w-[100vw] bg-green-200 border my-5 rounded-xl">
            <h2 className="text-3xl font-bold text-center">Cars</h2>
            <div className="flex gap-6 w-[100vw] bg-green-200 border overflow-scroll my-5 rounded-xl">
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="./fruits/banana.png" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            </div>
            </div>
       

                {/* Country */}
            <div className="w-[100vw] bg-green-200 border my-5 rounded-xl">
            <h2 className="text-3xl font-bold text-center">Country</h2>
            <div className="flex gap-6 w-[100vw] bg-green-200 border overflow-scroll my-5 rounded-xl">
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="./fruits/banana.png" className="mx-auto"></img> <p className="text-2xl text-center py-2">Bangladesh{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">India{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">Myanmar{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">Nepal{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">KSA{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">USA{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">UK{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">UAE{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">Australia{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">Bhutan{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">Malaysia{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">Sapin{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">Germany{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">Russia{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">China{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">Maldives{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">Libya{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">Lebalon{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">Egypt{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">Turkeyee{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">Iran{s1}</p></div>
            </div>
            </div>
                {/* Capital */}
            <div className="w-[100vw] bg-green-200 border my-5 rounded-xl">
            <h2 className="text-3xl font-bold text-center">Capital</h2>
            <div className="flex gap-6 w-[100vw] bg-green-200 border overflow-scroll my-5 rounded-xl">
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="./fruits/banana.png" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            </div>
            </div>
                {/* Currency */}
            <div className="w-[100vw] bg-green-200 border my-5 rounded-xl">
            <h2 className="text-3xl font-bold text-center">Currency</h2>
            <div className="flex gap-6 w-[100vw] bg-green-200 border overflow-scroll my-5 rounded-xl">
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="./fruits/banana.png" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            </div>
            </div>
                {/* Fundamental Materials */}
            <div className="w-[100vw] bg-green-200 border my-5 rounded-xl">
            <h2 className="text-3xl font-bold text-center"> Fundamental Materials </h2>
            <div className="flex gap-6 w-[100vw] bg-green-200 border overflow-scroll my-5 rounded-xl">
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="./fruits/banana.png" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            </div>
            </div>

                {/* Kitchen Utensils */}
            <div className="w-[100vw] bg-green-200 border my-5 rounded-xl">
            <h2 className="text-3xl font-bold text-center"> Kitchen Utensils </h2>
            <div className="flex gap-6 w-[100vw] bg-green-200 border overflow-scroll my-5 rounded-xl">
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="./fruits/banana.png" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            </div>
            </div>
                {/* Animals */}
            <div className="w-[100vw] bg-green-200 border my-5 rounded-xl">
            <h2 className="text-3xl font-bold text-center">Animals</h2>
            <div className="flex gap-6 w-[100vw] bg-green-200 border overflow-scroll my-5 rounded-xl">
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="./fruits/banana.png" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            </div>
            </div>

            {/* Vegetables */}
            <div className="w-[100vw] bg-green-200 border my-5 rounded-xl">
            <h2 className="text-3xl font-bold text-center">Vegetables</h2>
            <div className="flex gap-6 w-[100vw] bg-green-200 border overflow-scroll my-5 rounded-xl">
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="./fruits/banana.png" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">drink{s1}</p></div>
            </div>
            </div>

            

                {/* Colors */}
            <div className="w-[100vw] bg-green-200 border my-5 rounded-xl">
            <h2 className="text-3xl font-bold text-center">Colors</h2>
            <div className="flex gap-6 w-[100vw] bg-green-200 border overflow-scroll my-5 rounded-xl">
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="./fruits/banana.png" className="mx-auto"></img> <p className="text-2xl text-center py-2">white{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">red{s1}</p></div>
      <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">pink{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">purple{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">black{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">blue{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">indigo{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">sky{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">magenta{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">violet{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">Orange{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">yellow{s1}</p></div>
            <div onClick={handleSentence1}  onDoubleClickCapture={handleResetSentence1} className="flex flex-col border p-5 m-5 bg-white min-w-[15vw]"><img src="../../../../public/Sentence1.jpg" className="mx-auto"></img> <p className="text-2xl text-center py-2">brown{s1}</p></div>
            </div>
            </div> 
           
           
          
            {/* Design-1 */}
            <div className="w-[80vw] h-[50vh] bg-gray-100 mx-auto mx-auto p-8 my-12">
               <div  className="flex content-end gap-4 justify-center mb-4 "> 
                    <button onClick={handleWord1} className="btn border bg-blue-300">word-1</button> 
                    <button onClick={handleWord2}  className="btn border bg-blue-400">word-2</button> 
                    <button onClick={handleWord3}  className="btn border bg-blue-500">word-3</button>
                    <button onClick={handleWord4}  className="btn border bg-blue-400">word-4</button> 
                    <button onClick={handleWord5}  className="btn border bg-blue-500">word-5</button>
                    <button onClick={handleReset}  className="btn border bg-blue-200">Reset</button>
               </div>
               {/* <p onClick={handleWord1} className="w-[70vw]  text-yellow-500 mx-auto text-4xl font-bold">{m1} {m2} {m3}</p> */}
              <div onDoubleClickCapture={ handleReset } className="mx-12 p-3 border rounded-xl text-3xl font-bold"> 
                    <p onClick={handleWord1} className="text-yellow-500 my-2  border rounded-xl"><span className="bg-gray-600 rounded-l-lg px-2">Word-1:</span> {m1}</p>
                    <p onClick={handleWord2} className="text-purple-500 my-2  border rounded-xl"><span className="bg-gray-600 rounded-l-lg px-2">Word-2:</span> {m2}</p>
                    <p onClick={handleWord3} className="text-green-500 my-2  border rounded-xl"><span className="bg-gray-600 rounded-l-lg px-2">Word-3:</span> {m3}</p>
                    <p onClick={handleWord4} className="text-red-400 my-2  border rounded-xl"><span className="bg-gray-600 rounded-l-lg px-2">Word-4:</span> {m4}</p>
                    <p onClick={handleWord5} className="text-blue-500 my-2  border rounded-xl"><span className="bg-gray-600 rounded-l-lg px-2">Word-5:</span> {m5}</p>
               </div>
            </div>


 {/* Design-2 */}
            <div className="w-[80vw] h-[50vh] bg-gray-100 mx-auto mx-auto p-8  my-12">
            <div onDoubleClickCapture={ handleReset } className="mx-12 p-3 border rounded-xl text-3xl font-bold"> 
                    <p onClick={handleWord1} className="text-yellow-500 my-2  border rounded-xl"><span className="bg-gray-600 rounded-l-lg px-2">Word-1:</span> {m1}</p>
                    <p onClick={handleWord2} className="text-purple-500 my-2  border rounded-xl"><span className="bg-gray-600 rounded-l-lg px-2">Word-2:</span> {m2}</p>
                    <p onClick={handleWord3} className="text-green-500 my-2  border rounded-xl"><span className="bg-gray-600 rounded-l-lg px-2">Word-3:</span> {m3}</p>
                    <p onClick={handleWord4} className="text-red-400 my-2  border rounded-xl"><span className="bg-gray-600 rounded-l-lg px-2">Word-4:</span> {m4}</p>
                    <p onClick={handleWord5} className="text-blue-500 my-2  border rounded-xl"><span className="bg-gray-600 rounded-l-lg px-2">Word-5:</span> {m5}</p>
               </div>
               <div className="flex content-end gap-4 justify-center mb-4 "> 
               <button onClick={handleWord1} className="btn border bg-blue-300">word-1</button> 
                    <button onClick={handleWord2}  className="btn border bg-blue-400">word-2</button> 
                    <button onClick={handleWord3}  className="btn border bg-blue-500">word-3</button>
                    <button onClick={handleWord4}  className="btn border bg-blue-400">word-4</button> 
                    <button onClick={handleWord5}  className="btn border bg-blue-500">word-5</button>
                    <button onClick={handleReset}  className="btn border bg-blue-200">Reset</button>
               </div>
               
               </div>

{/* Design-3 */}
               <div className="w-[80vw] h-[40vh] bg-gray-100 mx-auto m-8 flex  my-20" >  
                           
               <div className="flex flex-col gap-4 items-center my-auto"> 
               <button onClick={handleWord1} className="btn border bg-blue-300">word-1</button> 
               <button onClick={handleWord2}  className="btn border bg-blue-400">word-2</button> 
                    <button onClick={handleWord3}  className="btn border bg-blue-500">word-3</button>
                    <button onClick={handleWord4}  className="btn border bg-blue-400">word-4</button> 
                    <button onClick={handleWord5}  className="btn border bg-blue-500">word-5</button>
                    <button onClick={handleReset}  className="btn border bg-blue-200">Reset</button>
               </div>
               {/* <div className="w-[60vw] h-[40vh] bg-sky-200 mx-auto">{m2}</div> */}
               <div onDoubleClickCapture={ handleReset } className="w-[60vw] h-[40vh] bg-sky-200 mx-auto mx-12 p-3 border rounded-xl text-3xl font-bold"> 
                    <p onClick={handleWord1} className="text-yellow-500 my-2  border rounded-xl"><span className="bg-gray-600 rounded-l-lg px-2">Word-1:</span> {m1}</p>
                    <p onClick={handleWord2} className="text-purple-500 my-2  border rounded-xl"><span className="bg-gray-600 rounded-l-lg px-2">Word-2:</span> {m2}</p>
                    <p onClick={handleWord3} className="text-green-500 my-2  border rounded-xl"><span className="bg-gray-600 rounded-l-lg px-2">Word-3:</span> {m3}</p>
                    <p onClick={handleWord4} className="text-red-400 my-2  border rounded-xl"><span className="bg-gray-600 rounded-l-lg px-2">Word-4:</span> {m4}</p>
                    <p onClick={handleWord5} className="text-blue-500 my-2  border rounded-xl"><span className="bg-gray-600 rounded-l-lg px-2">Word-5:</span> {m5}</p>
               </div>
            </div>

{/* Design-3-2 */}
               <div className="w-[80vw] h-[70vh] bg-gray-100 mx-auto m-8 flex  my-20" >  
               <div onDoubleClickCapture={ handleReset } className="w-[70vw] h-[70vh] bg-sky-200 mx-auto mx-12 p-3 border rounded-xl text-3xl font-bold"> 
                    <div  className="flex gap-4 items-center my-auto"> <button onClick={handleWord1} className="btn border bg-blue-300">Meaning</button>  <button onClick={handleWord1} className="btn border bg-blue-300">Pronunciation</button> </div>
                    <div  className="flex gap-4 items-center my-auto"> <button onClick={handleWord1} className="btn border bg-blue-300">word-1</button> <button onClick={handleWord1} className="btn border bg-blue-300">word-1</button><p onClick={handleWord1} className="text-yellow-500 my-2  border rounded-xl"><span className="bg-gray-600 rounded-l-lg px-2">Word-1:</span> {m1}</p></div>
                    <div  className="flex gap-4 items-center my-auto"> <button onClick={handleWord2} className="btn border bg-blue-300">word-2</button> <button onClick={handleWord2} className="btn border bg-blue-300">word-2</button><p onClick={handleWord2} className="text-purple-500 my-2  border rounded-xl"><span className="bg-gray-600 rounded-l-lg px-2">Word-2:</span> {m2}</p></div>
                    <div  className="flex gap-4 items-center my-auto"> <button onClick={handleWord3} className="btn border bg-blue-300">word-3</button> <button onClick={handleWord3} className="btn border bg-blue-300">word-3</button><p onClick={handleWord3} className="text-green-500 my-2  border rounded-xl"><span className="bg-gray-600 rounded-l-lg px-2">Word-3:</span> {m3}</p></div>
                    <div  className="flex gap-4 items-center my-auto"> <button onClick={handleWord4} className="btn border bg-blue-300">word-4</button> <button onClick={handleWord4} className="btn border bg-blue-300">word-4</button><p onClick={handleWord4} className="text-red-400 my-2  border rounded-xl"><span className="bg-gray-600 rounded-l-lg px-2">Word-4:</span> {m4}</p></div>
                    <div  className="flex gap-4 items-center my-auto"> <button onClick={handleWord5} className="btn border bg-blue-300">word-5</button> <button onClick={handleWord5} className="btn border bg-blue-300">word-5</button><p onClick={handleWord5} className="text-blue-500 my-2  border rounded-xl"><span className="bg-gray-600 rounded-l-lg px-2">Word-5:</span> {m5}</p></div>
                    <div  className="flex gap-4 items-center my-auto"> <button onClick={handleReset} className="btn border bg-blue-200">Reset</button> </div>

               </div>
            </div>


{/* Design-4 */}
            <div className="w-[80vw] h-[60vh] bg-gray-100 mx-auto m-8 flex  my-20" >  
            <div onDoubleClickCapture={ handleReset } className="w-[60vw] h-[40vh] bg-sky-200 mx-auto mx-12 p-3 border rounded-xl text-3xl font-bold">  
            {/* <div  className="mx-12 p-3 border rounded-xl text-3xl font-bold">  */}
                    <p onClick={handleWord1} className="text-yellow-500 my-2  border rounded-xl"><span className="bg-gray-600 rounded-l-lg px-2">Word-1:</span> {m1}</p>
                    <p onClick={handleWord2} className="text-purple-500 my-2  border rounded-xl"><span className="bg-gray-600 rounded-l-lg px-2">Word-2:</span> {m2}</p>
                    <p onClick={handleWord3} className="text-green-500 my-2  border rounded-xl"><span className="bg-gray-600 rounded-l-lg px-2">Word-3:</span> {m3}</p>
                    <p onClick={handleWord4} className="text-red-400 my-2  border rounded-xl"><span className="bg-gray-600 rounded-l-lg px-2">Word-4:</span> {m4}</p>
                    <p onClick={handleWord5} className="text-blue-500 my-2  border rounded-xl"><span className="bg-gray-600 rounded-l-lg px-2">Word-5:</span> {m5}</p>
               </div>          
               <div className="flex flex-col gap-4 items-center my-auto"> 
               <button onClick={handleWord1} className="btn border bg-blue-300">word-1</button> 
               <button onClick={handleWord2}  className="btn border bg-blue-400">word-2</button> 
                <button onClick={handleWord3}  className="btn border bg-blue-500">word-3</button>
                <button onClick={handleWord4}  className="btn border bg-blue-400">word-4</button> 
                <button onClick={handleWord5}  className="btn border bg-blue-500">word-5</button>
                <button onClick={handleReset}  className="btn border bg-blue-200">Reset</button>
               </div>
               
            </div>



<div>
<p className="text-3xl font-bold">A word has four aspects:</p>
                <p className="text-3xl">1. Spelling: syllables (A word may have more than one spelling)</p>
                <p className="text-3xl">2. Pronunciation: syllable, IPA, strees, intonation (A word may have many pronunciation base on the person speakin and the region or context of the speaking) </p>
                <p className="text-3xl">3. Meaning: (A word may have different meaning base on it&apos;s use in a sentence):</p>
                <p className="text-3xl">4. Parts of speech: (A word may belongs to different parts of speech based on it&apos;s use.)</p>
                <p className="text-3xl font-semibold text-pink-700">Objecte-1: Teaching unknown words: need a drag and drop feature to seperate know and unknow words</p>
                <p className="text-3xl font-semibold text-pink-700">Objecte-2: Space Repeatation and Revision Unknow words</p>
                <p className="text-3xl font-semibold text-pink-700">Objecte-3: Check word meaning</p>
                <p className="text-3xl font-semibold text-pink-700">Objecte-4: Check word spelling</p>
                <p className="text-3xl font-semibold text-pink-700">Objecte-4: Check word pronunciation</p>
                <p className="text-3xl font-semibold text-pink-700">Objecte-5: Test Word Stock</p>
                <p className="text-3xl font-semibold text-pink-700">Objecte-6: Check Anthonyms</p>
                <p className="text-3xl font-semibold text-blue-700">Task:s</p>
                <p className="text-3xl font-semibold text-pink-700">Objecte-1: Collect Vocabulary</p>
                <p className="text-3xl font-semibold text-pink-700">Objecte-2: Collect Picutres</p>
                <p className="text-3xl font-semibold text-pink-700">Objecte-3: Add Picutres</p>
                <p className="text-3xl font-semibold text-pink-700">Objecte-4: Produce Audio/Pronunciation</p>
                <p className="text-3xl font-semibold text-pink-700">Objecte-5: Add Audio/Pronunciation</p>
                <p className="text-3xl font-semibold text-pink-700">Objecte-6: Develop Drag and Drop Features</p>
                <p className="text-3xl font-semibold text-pink-700">Objecte-7: Develop Quiz</p>
                <p className="text-3xl font-semibold text-pink-700">Objecte-8: Create Database</p>
                <p className="text-3xl font-semibold text-pink-700">Objecte-9: Create Search Button</p>
                <p className="text-3xl font-semibold text-pink-700">Objecte-10: Create pption for Card creation with new vocabulary</p>
                <p className="text-3xl font-semibold text-pink-700">How to add sound automatically</p>



</div>



        </div>
    );
};

export default Vocabulary;