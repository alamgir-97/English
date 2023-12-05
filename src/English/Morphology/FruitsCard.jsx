import { useState } from "react";

const FruitsCard = ({photoURL, audioURL, name, meaning, gender, number, article}) => {

    const [v1, setV1] = useState("")
    const handleItem = () => {           
        setV1(                
            <div>
            <p className="pb-2">{meaning}</p>
            <div className="flex justify-center">                 
            <audio autoPlay src={audioURL} className="w-84 h-36"></audio  >
            </div>                
            </div>
            ); 
        }
    const handleResetItem = () => {           
        setV1(""); 
        }

        const handleNumber = () => {   
            setV1(number); 
        }   
        
        const handleArticle = () => {   
            setV1(article); 
        } 
        
        const handleGender = () => {   
            setV1(gender); 
        } 
    return (
        <div className=" h-[50vh]">    
            <div className="flex flex-col mx-5 mt-9 mb-2 p-5 rounded-lg w-[19vw] h-[46vh] bg-white">                
                <div   onClick={handleItem} onDoubleClickCapture={handleResetItem} className="w-[16vw] h-[24vh]">
                    <img src={photoURL}  className="object-scale-down"></img>                    
                </div> 
                <p className="border mt-6 p-2 text-center text-2xl font-semibold text-gray-800 hover:bg-purple-300 hover:text-green-300">{name}{v1}</p>
            </div>
            
            <p className="mb-3 p-5 uppercase font-bold text-center text-sm text-green-700">
                <span onClick={handleArticle} className="p-2 m-2 border rounded-lg bg-slate-200">article</span>
                <span onClick={handleNumber} className="p-2 m-2 border rounded-lg bg-white" >number</span>
                <span onClick={handleGender} className="p-2 m-2 border rounded-lg bg-slate-200" >gender</span>
            </p>
            
        </div>
    
    );
};

export default FruitsCard;


