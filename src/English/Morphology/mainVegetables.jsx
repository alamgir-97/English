import { useState } from "react";

const Vegetables = () => {
    //vegetables
const [v1, setV1] = useState("");
const [v2, setV2] = useState("");
const [v3, setV3] = useState("");
const [v4, setV4] = useState("");
const [v5, setV5] = useState("");    
const [v6, setV6] = useState("");    
const [v7, setV7] = useState("");    
const [v8, setV8] = useState("");    
const [v9, setV9] = useState("");    
const [v10, setV10] = useState("");    
const [v11, setV11] = useState("");    
const [v12, setV12] = useState("");


const item1 = {name: "carrot", photoURL: "./vegetables/carrot.png", meaning: "গাজর"  }
const handleItem1 = () => {           
    setV1(                
        <div>
        <p className="pb-6">গাজর</p>
        <div className="flex justify-center">                 
        <audio autoPlay src="./orange.mp4" className="w-84 h-36"></audio  >
        </div>                
        </div>
        ); 
    }
const handleResetItem1 = () => {           
    setV1(""); 
    }

const item2 = {name: "okra", photoURL: "./vegetables/okra.png", meaning: "ঢ়েঁড়শ"  }

const handleItem2 = () => {           
    setV2(                
        <div>
        <p className="pb-6">ঢ়েঁড়শ</p>
        <div className="flex justify-center">                 
        <audio autoPlay src="./grape.mp4" className="w-84 h-36"></audio  >
        </div>                
        </div>
        ); 
    }
const handleResetItem2 = () => {           
    setV2(""); 
    }

const item3 = {name: "radish", photoURL: "./vegetables/radish.png", meaning: "মূলা"  }
const handleItem3 = () => {           
    setV3(                
        <div>
        <p className="pb-6">{item3.meaning}</p>
        <div className="flex justify-center">                 
        <audio autoPlay src="./mango.mp4" className="w-84 h-36"></audio  >
        </div>                
        </div>
        ); 
    }
const handleResetItem3 = () => {           
    setV3(""); 
    }
const handleVegetables4 = () => {           
    setV4(                
        <div>
        <p className="pb-6">ফুলকপি</p>
        <div className="flex justify-center">                 
        <audio autoPlay src="./IDrinkWater.mp4" className="w-84 h-36"></audio  >
        </div>                
        </div>
        ); 
    }
const handleResetVegetables4 = () => {           
    setV4(""); 
    }
const handleVegetables5 = () => {           
    setV5(                
        <div>
        <p className="pb-6">বাঁধাকপি</p>
        <div className="flex justify-center">                 
        <audio autoPlay src="./IDrinkWater.mp4" className="w-84 h-36"></audio  >
        </div>                
        </div>
        ); 
    }
const handleResetVegetables5 = () => {           
    setV5(""); 
    }
const handleVegetables6 = () => {           
    setV6(                
        <div>
        <p className="pb-6">লাল বাঁধাকপি</p>
        <div className="flex justify-center">                 
        <audio autoPlay src="./IDrinkWater.mp4" className="w-84 h-36"></audio  >
        </div>                
        </div>
        ); 
    }
const handleResetVegetables6 = () => {           
    setV6(""); 
    }
const handleVegetables7 = () => {           
    setV7(                
        <div>
        <p className="pb-6">মিষ্টিকুমড়া</p>
        <div className="flex justify-center">                 
        <audio autoPlay src="./IDrinkWater.mp4" className="w-84 h-36"></audio  >
        </div>                
        </div>
        ); 
    }
const handleResetVegetables7 = () => {           
    setV7(""); 
    }
const handleVegetables8 = () => {           
    setV8(                
        <div>
        <p className="pb-6">স্কোয়াশ</p>
        <div className="flex justify-center">                 
        <audio autoPlay src="./IDrinkWater.mp4" className="w-84 h-36"></audio  >
        </div>                
        </div>
        ); 
    }
const handleResetVegetables8 = () => {           
    setV8(""); 
    }
const handleVegetables9 = () => {           
    setV9(                
        <div>
        <p className="pb-6">বেগুন</p>
        <div className="flex justify-center">                 
        <audio autoPlay src="./IDrinkWater.mp4" className="w-84 h-36"></audio  >
        </div>                
        </div>
        ); 
    }
const handleResetVegetables9 = () => {           
    setV9(""); 
    }
const handleVegetables10 = () => {           
    setV10(                
        <div>
        <p className="pb-6">ক্যাপসিক্যাম</p>
        <div className="flex justify-center">                 
        <audio autoPlay src="./IDrinkWater.mp4" className="w-84 h-36"></audio  >
        </div>                
        </div>
        ); 
    }
const handleResetVegetables10 = () => {           
    setV10(""); 
    }
const handleVegetables11 = () => {           
    setV11(                
        <div>
        <p className="pb-6">ব্রোকলি</p>
        <div className="flex justify-center">                 
        <audio autoPlay src="./IDrinkWater.mp4" className="w-84 h-36"></audio  >
        </div>                
        </div>
        ); 
    }
const handleResetVegetables11 = () => {           
    setV11(""); 
    }
const handleVegetables12 = () => {           
    setV12(                
        <div>
        <p className="pb-6">শশা</p>
        <div className="flex justify-center">                 
        <audio autoPlay src="./IDrinkWater.mp4" className="w-84 h-36"></audio  >
        </div>                
        </div>
        ); 
    }
const handleResetVegetables12 = () => {           
    setV12(""); 
    }


const handleNumberVegetables1 = () => {   
    setV1(" => carrots"); 
}   

const handleArticleVegetables1 = () => {   
    setV1("=> a carrot + many carrots" ); 
} 

const handleGenderVegetables1 = () => {   
    setV1(" = Neuter Gender"); 
}    
    return (
        <div>
{/* Vegetables */}
<div className="w-[100vw] bg-green-200 border my-5 rounded-xl">
            <h2 className="text-3xl font-bold text-center">Vegetables (শাক-সবজি) </h2>
            <div className="flex gap-4 bg-green-200 border overflow-scroll my-5 rounded-xl">
                                
            <div   className="flex flex-col m-5 mb-1 p-5 bg-white rounded-lg">           
                <div onClick={handleItem1}  onDoubleClickCapture={handleResetItem1} className="w-[20vw] h-[30vh]"><img src={item1.photoURL}  className="object-scale-down"></img></div> 
                <p className="border mt-8 text-center text-3xl font-bold text-yellow-800 bg-sky-700 opacity-75">{item1.name}{v1}</p>
            <p className="my-3 p-2 uppercase font-bold text-center text-sm">
            <span className="p-2 m-1 border rounded-lg " onClick={handleArticleVegetables1}>article</span>
            <span className="p-2 m-1 border rounded-lg" onClick={handleNumberVegetables1}>number</span>
            <span className="p-2 m-1 border rounded-lg" onClick={handleGenderVegetables1}>gender</span>
            </p>
            </div>

            <div className="flex flex-col m-5 p-5 bg-white rounded-lg">
                <div  onClick={handleItem2}  onDoubleClickCapture={handleResetItem2}  className="w-[20vw] h-[30vh]"><img src={item2.photoURL}  className="object-scale-down"></img></div> 
            <p className="border mt-8 text-center text-3xl font-bold text-yellow-800 bg-sky-700 opacity-75">{item2.name}{v2}</p>
            <p className="my-3 p-2 uppercase font-bold text-center text-sm">
            <span className="p-2 m-1 border rounded-lg " onClick={handleArticleVegetables1}>article</span>
            <span className="p-2 m-1 border rounded-lg" onClick={handleNumberVegetables1}>number</span>
            <span className="p-2 m-1 border rounded-lg" onClick={handleGenderVegetables1}>gender</span>
            </p>
            </div>

            <div className="flex flex-col m-5 p-5 bg-white rounded-lg">
                <div  onClick={handleItem3}  onDoubleClickCapture={handleResetItem3}  className="w-[20vw] h-[30vh]"><img src={item3.photoURL} className="object-scale-down"></img></div> 
                <p className="border mt-8 text-center text-3xl font-bold text-yellow-800 bg-sky-700 opacity-75">{item3.name}{v3}</p>
            <p className="my-3 p-2 uppercase font-bold text-center text-sm">
            <span className="p-2 m-1 border rounded-lg " onClick={handleArticleVegetables1}>article</span>
            <span className="p-2 m-1 border rounded-lg" onClick={handleNumberVegetables1}>number</span>
            <span className="p-2 m-1 border rounded-lg" onClick={handleGenderVegetables1}>gender</span>
            </p>
            </div>

            <div onClick={handleVegetables4}  onDoubleClickCapture={handleResetVegetables4} className="flex flex-col m-5 p-5 bg-white rounded-lg">
                <div className="w-[20vw] h-[30vh]"><img src="./vegetables/cauliflower.png" className="object-scale-down"></img></div> 
                <p className="border mt-8 text-center text-3xl font-bold text-yellow-800 bg-sky-700 opacity-75">cauliflower{v4}</p>
            </div>

            <div onClick={handleVegetables5}  onDoubleClickCapture={handleResetVegetables5} className="flex flex-col m-5 p-5 bg-white rounded-lg">
                <div className="w-[20vw] h-[30vh]"><img src="./vegetables/cabbage.png" className="object-scale-down"></img></div> 
                <p className="border mt-8 text-center text-3xl font-bold text-yellow-800 bg-sky-700 opacity-75">cabbage{v5}</p>
            </div>

            <div onClick={handleVegetables6}  onDoubleClickCapture={handleResetVegetables6} className="flex flex-col m-5 p-5 bg-white rounded-lg">
                <div className="w-[20vw] h-[30vh]"><img src="./vegetables/red cabbage.png" className="object-scale-down"></img>
                </div> <p className="border mt-8 text-center text-3xl font-bold text-yellow-800 bg-sky-700 opacity-75">red cabbage{v6}</p>
            </div>

            <div onClick={handleVegetables7}  onDoubleClickCapture={handleResetVegetables7} className="flex flex-col m-5 p-5 bg-white rounded-lg">
                <div className="w-[20vw] h-[30vh]"><img src="./vegetables/pumpkin.png" className="object-scale-down"></img></div> 
                <p className="border mt-8 text-center text-3xl font-bold text-yellow-800 bg-sky-700 opacity-75">pumpkin{v7}</p>
            </div>

            <div onClick={handleVegetables8}  onDoubleClickCapture={handleResetVegetables8} className="flex flex-col m-5 p-5 bg-white rounded-lg">
                <div className="w-[20vw] h-[30vh]"><img src="./vegetables/squash.png" className="object-scale-down"></img>
                </div> <p className="border mt-8 text-center text-3xl font-bold text-yellow-800 bg-sky-700 opacity-75">squash{v8}</p>
            </div>

            <div onClick={handleVegetables9}  onDoubleClickCapture={handleResetVegetables9} className="flex flex-col m-5 p-5 bg-white rounded-lg">
                <div className="w-[20vw] h-[30vh]"><img src="./vegetables/eggplant.png" className="object-scale-down"></img></div> 
                <p className="border mt-8 text-center text-3xl font-bold text-yellow-800 bg-sky-700 opacity-75">eggplant{v9}</p>
            </div>

            <div onClick={handleVegetables10}  onDoubleClickCapture={handleResetVegetables10} className="flex flex-col m-5 p-5 bg-white rounded-lg">
                <div className="w-[20vw] h-[30vh]"><img src="./vegetables/capcicum.png" className="object-scale-down"></img></div> 
                <p className="border mt-8 text-center text-3xl font-bold text-yellow-800 bg-sky-700 opacity-75">capcicum{v10}</p>
            </div>

            <div onClick={handleVegetables11}  onDoubleClickCapture={handleResetVegetables11} className="flex flex-col m-5 p-5 bg-white rounded-lg">
                <div className="w-[20vw] h-[30vh]"><img src="./vegetables/broccoli.png" className="object-scale-down"></img></div> 
                <p className="border mt-8 text-center text-3xl font-bold text-yellow-800 bg-sky-700 opacity-75">broccoli{v11}</p>
            </div>

            <div onClick={handleVegetables12}  onDoubleClickCapture={handleResetVegetables12} className="flex flex-col m-5 p-5 bg-white rounded-lg">
                <div className="w-[20vw] h-[30vh]"><img src="./vegetables/cucumber.png" className="object-scale-down"></img></div> 
                <p className="border mt-8 text-center text-3xl font-bold text-yellow-800 bg-sky-700 opacity-75">cucumber{v12}</p>
            </div>


            </div>
            </div>
            <Cards></Cards>
        </div>
    );
};

const Cards = () => {
    return (
        <div>
             <div className="flex flex-col m-5 p-5 bg-white rounded-lg">
                <div  className="w-[20vw] h-[30vh]"><img src="./vegetables/cabbage.png"  className="object-scale-down"></img></div> 
            <p className="border mt-8 text-center text-3xl font-bold text-yellow-800 bg-sky-700 opacity-75">cabbage</p>
            <p className="my-3 p-0 uppercase font-bold text-center text-sm">
            <span className="p-2 m-1 border rounded-lg " >article</span>
            <span className="p-2 m-1 border rounded-lg" >number</span>
            <span className="p-2 m-1 border rounded-lg" >gender</span>
            </p>
            </div>
        </div>
        
    )
}

export default Vegetables;