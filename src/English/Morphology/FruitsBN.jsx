import { useState } from "react";

const FruitsBN = () => {
    //fruits
const [f1, setF1] = useState("");
const [f2, setF2] = useState("");
const [f3, setF3] = useState("");
const [f4, setF4] = useState("");
const [f5, setF5] = useState("");    
const [f6, setF6] = useState("");    
const [f7, setF7] = useState("");    
const [f8, setF8] = useState("");    
const [f9, setF9] = useState("");    
const [f10, setF10] = useState("");    
const [f11, setF11] = useState("");    
const [f12, setF12] = useState("");
const handleFruits1 = () => {           
    setF1(                
        <div>
        <p className="pb-6"> ornage</p>
        <div className="flex justify-center">                 
        <audio autoPlay src="./orange.mp4" className="w-84 h-36"></audio  >
        </div>                
        </div>
        ); 
    }
const handleResetFruits1 = () => {           
    setF1(""); 
    }
const handleFruits2 = () => {           
    setF2(                
        <div>
        <p className="pb-6">grape</p>
        <div className="flex justify-center">                 
        <audio autoPlay src="./grape.mp4" className="w-84 h-36"></audio  >
        </div>                
        </div>
        ); 
    }
const handleResetFruits2 = () => {           
    setF2(""); 
    }

const handleFruits3 = () => {           
    setF3(                
        <div>
        <p className="pb-6">mango</p>
        <div className="flex justify-center">                 
        <audio autoPlay src="./mango.mp4" className="w-84 h-36"></audio  >
        </div>                
        </div>
        ); 
    }
const handleResetFruits3 = () => {           
    setF3(""); 
    }
const handleFruits4 = () => {           
    setF4(                
        <div>
        <p className="pb-6">lichi</p>
        <div className="flex justify-center">                 
        <audio autoPlay src="./IDrinkWater.mp4" className="w-84 h-36"></audio  >
        </div>                
        </div>
        ); 
    }
const handleResetFruits4 = () => {           
    setF4(""); 
    }
const handleFruits5 = () => {           
    setF5(                
        <div>
        <p className="pb-6">banana</p>
        <div className="flex justify-center">                 
        <audio autoPlay src="./IDrinkWater.mp4" className="w-84 h-36"></audio  >
        </div>                
        </div>
        ); 
    }
const handleResetFruits5 = () => {           
    setF5(""); 
    }
const handleFruits6 = () => {           
    setF6(                
        <div>
        <p className="pb-6">apple</p>
        <div className="flex justify-center">                 
        <audio autoPlay src="./IDrinkWater.mp4" className="w-84 h-36"></audio  >
        </div>                
        </div>
        ); 
    }
const handleResetFruits6 = () => {           
    setF6(""); 
    }
const handleFruits7 = () => {           
    setF7(                
        <div>
        <p className="pb-6">black berry</p>
        <div className="flex justify-center">                 
        <audio autoPlay src="./IDrinkWater.mp4" className="w-84 h-36"></audio  >
        </div>                
        </div>
        ); 
    }
const handleResetFruits7 = () => {           
    setF7(""); 
    }
const handleFruits8 = () => {           
    setF8(                
        <div>
        <p className="pb-6">lemon</p>
        <div className="flex justify-center">                 
        <audio autoPlay src="./IDrinkWater.mp4" className="w-84 h-36"></audio  >
        </div>                
        </div>
        ); 
    }
const handleResetFruits8 = () => {           
    setF8(""); 
    }
const handleFruits9 = () => {           
    setF9(                
        <div>
        <p className="pb-6">papaya</p>
        <div className="flex justify-center">                 
        <audio autoPlay src="./IDrinkWater.mp4" className="w-84 h-36"></audio  >
        </div>                
        </div>
        ); 
    }
const handleResetFruits9 = () => {           
    setF9(""); 
    }
const handleFruits10 = () => {           
    setF10(                
        <div>
        <p className="pb-6"> kiwi fruit</p>
        <div className="flex justify-center">                 
        <audio autoPlay src="./IDrinkWater.mp4" className="w-84 h-36"></audio  >
        </div>                
        </div>
        ); 
    }
const handleResetFruits10 = () => {           
    setF10(""); 
    }
const handleFruits11 = () => {           
    setF11(                
        <div>
        <p className="pb-6">olive</p>
        <div className="flex justify-center">                 
        <audio autoPlay src="./IDrinkWater.mp4" className="w-84 h-36"></audio  >
        </div>                
        </div>
        ); 
    }
const handleResetFruits11 = () => {           
    setF11(""); 
    }
const handleFruits12 = () => {           
    setF12(                
        <div>
        <p className="pb-6">dragon fruit</p>
        <div className="flex justify-center">                 
        <audio autoPlay src="./IDrinkWater.mp4" className="w-84 h-36"></audio  >
        </div>                
        </div>
        ); 
    }
const handleResetFruits12 = () => {           
    setF12(""); 
    }


const handleNumberFruits1 = () => {   
    setF1(" => oranges"); 
}   

const handleArticleFruits1 = () => {   
    setF1("=> an orange"); 
} 

const handleGenderFruits1 = () => {   
    setF1(" =Neuter Gender"); 
}    
    return (
        <div>
{/* Fruits */}
<div className="w-[100vw] bg-green-200 border my-5 rounded-xl">
            <h2 className="text-3xl font-bold text-center">ফল (Fruits) </h2>
            <div className="flex gap-4 bg-green-200 border overflow-scroll my-5 rounded-xl">
                                
            <div   className="flex flex-col m-5 mb-1 p-5 bg-white rounded-lg">
            <p className="border mt-2 text-center text-sm"><span className="btn font-bold border rounded-lg m-1" onClick={handleArticleFruits1}>article</span>
            <span className="btn font-bold border rounded-lg  m-1" onClick={handleNumberFruits1}>number</span>
            <span className="btn font-bold border rounded-lg  m-1" onClick={handleGenderFruits1}>gender</span>
            </p>
                <div onClick={handleFruits1}  onDoubleClickCapture={handleResetFruits1} className="w-[20vw] h-[30vh]"><img src="./fruits/orange.png"  className="object-scale-down"></img></div> 
                <p className="border mt-8 text-center text-3xl">কমলা{f1}</p>
            </div>

            <div onClick={handleFruits2}  onDoubleClickCapture={handleResetFruits2} className="flex flex-col m-5 p-5 bg-white rounded-lg">
                <div className="w-[20vw] h-[30vh]"><img src="./fruits/grape.png"  className="object-scale-down"></img></div> 
            <p className="border mt-8 text-center text-3xl">আঙুর{f2}</p></div>

            <div onClick={handleFruits3}  onDoubleClickCapture={handleResetFruits3} className="flex flex-col m-5 p-5 bg-white rounded-lg">
                <div className="w-[20vw] h-[30vh]"><img src="./fruits/mango.png" className="object-scale-down"></img></div> 
                <p className="border mt-8 text-center text-3xl">আম{f3}</p>
            </div>

            <div onClick={handleFruits4}  onDoubleClickCapture={handleResetFruits4} className="flex flex-col m-5 p-5 bg-white rounded-lg">
                <div className="w-[20vw] h-[30vh]"><img src="./fruits/lichi.png" className="object-scale-down"></img></div> 
                <p className="border mt-8 text-center text-3xl">লিচু{f4}</p>
            </div>

            <div onClick={handleFruits5}  onDoubleClickCapture={handleResetFruits5} className="flex flex-col m-5 p-5 bg-white rounded-lg">
                <div className="w-[20vw] h-[30vh]"><img src="./fruits/banana.png" className="object-scale-down"></img></div> 
                <p className="border mt-8 text-center text-3xl">কলা{f5}</p>
            </div>

            <div onClick={handleFruits6}  onDoubleClickCapture={handleResetFruits6} className="flex flex-col m-5 p-5 bg-white rounded-lg">
                <div className="w-[20vw] h-[30vh]"><img src="./fruits/apple.png" className="object-scale-down"></img>
                </div> <p className="border mt-8 text-center text-3xl">আপেল{f6}</p>
            </div>

            <div onClick={handleFruits7}  onDoubleClickCapture={handleResetFruits7} className="flex flex-col m-5 p-5 bg-white rounded-lg">
                <div className="w-[20vw] h-[30vh]"><img src="./fruits/black berry.png" className="object-scale-down"></img></div> 
                <p className="border mt-8 text-center text-3xl">কালোজাম{f7}</p>
            </div>

            <div onClick={handleFruits8}  onDoubleClickCapture={handleResetFruits8} className="flex flex-col m-5 p-5 bg-white rounded-lg">
                <div className="w-[20vw] h-[30vh]"><img src="./fruits/lemon.png" className="object-scale-down"></img>
                </div> <p className="border mt-8 text-center text-3xl">লেবু{f8}</p>
            </div>

            <div onClick={handleFruits9}  onDoubleClickCapture={handleResetFruits9} className="flex flex-col m-5 p-5 bg-white rounded-lg">
                <div className="w-[20vw] h-[30vh]"><img src="./fruits/papaya.png" className="object-scale-down"></img></div> 
                <p className="border mt-8 text-center text-3xl">পেঁপে{f9}</p>
            </div>

            <div onClick={handleFruits10}  onDoubleClickCapture={handleResetFruits10} className="flex flex-col m-5 p-5 bg-white rounded-lg">
                <div className="w-[20vw] h-[30vh]"><img src="./fruits/kiwi.png" className="object-scale-down"></img></div> 
                <p className="border mt-8 text-center text-3xl">কিউই ফল{f10}</p>
            </div>

            <div onClick={handleFruits11}  onDoubleClickCapture={handleResetFruits11} className="flex flex-col m-5 p-5 bg-white rounded-lg">
                <div className="w-[20vw] h-[30vh]"><img src="./fruits/olive.png" className="object-scale-down"></img></div> 
                <p className="border mt-8 text-center text-3xl">জলপাই{f11}</p>
            </div>

            <div onClick={handleFruits12}  onDoubleClickCapture={handleResetFruits12} className="flex flex-col m-5 p-5 bg-white rounded-lg">
                <div className="w-[20vw] h-[30vh]"><img src="./fruits/dragon.png" className="object-scale-down"></img></div> 
                <p className="border mt-8 text-center text-3xl">ড্রাগন ফল{f12}</p>
            </div>


            </div>
            </div>
        </div>
    );
};

export default FruitsBN;