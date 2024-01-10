import { useEffect, useState } from "react";
import Letter from "./Letter";
import EnglishNavbar from "../English Header/EnglishNavbar";
import PhonologyNavbar from "../English Header/PhonologyNavbar";
const AlphabetComponent = () => {
  const [letters, setLetters] = useState();

  // letters
  useEffect(() => {
    fetch("/phonology/letters.json")
      .then((res) => res.json())
      .then((data) => {
        const letters = data.filter((item) => item.category === "small letters");
        
  console.log(letters);
        setLetters(letters);
      });
  }, []);

  return (
    <div> 
        <EnglishNavbar></EnglishNavbar>
        <PhonologyNavbar></PhonologyNavbar>
        <h1 className="text-6xl text-center font-bold py-3">English Alphabet</h1>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 bg-stone-200 w-[100vw]  h-[65vh] overflow-y-scroll">
        
        {letters?.map((letter) => (
     
          <Letter key={letter.id} letter={letter}>
            <p className="border text-center text-4xl font-bold bg-blue-500">
              {letter.category}
            </p>
          </Letter>
        ))}
    
      </div>
    </div>
  );
};

export default AlphabetComponent;
