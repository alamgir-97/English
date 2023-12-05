import { useState } from "react";

const VegetablesCard = ({photoURL, audioURL, name, meaning, gender, number, article}) => {

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
            <div >
            <div onClick={handleItem} onDoubleClickCapture={handleResetItem} className="flex flex-col mx-5 mt-5 mb-2 p-5 rounded-lg w-[19vw] h-[46vh] bg-white">                
                <div className="w-[16vw] h-[24vh]">
                    <img src={photoURL}  className="object-scale-down"></img>                    
                </div> 
                <p className="border mt-3 p-2 text-center text-2xl font-semibold text-gray-800 bg-white hover:bg-sky-200 hover:text-red-500">{name}{v1}</p>
            </div>
            </div>    
            <p className="my-1 p-5 uppercase font-bold text-center text-sm text-blue-700">
                <span onClick={handleArticle} className="p-2 m-2 border rounded-lg bg-slate-200">article</span>
                <span onClick={handleNumber} className="p-2 m-2 border rounded-lg bg-slate-200" >number</span>
                <span onClick={handleGender} className="p-2 m-2 border rounded-lg bg-slate-200" >gender</span>
            </p>
            
        </div>
    
    );
};

export default VegetablesCard;


