import { useEffect, useState } from "react";
import Letter from "./Letter";
import EnglishNavbar from "../English Header/EnglishNavbar";
import PhonologyNavbar from "../English Header/PhonologyNavbar";
import PhoneticLetter from "./PhoneticLetter";
const PhoneticAlphabet = () => {
  const [letters, setLetters] = useState();

  // letters
  useEffect(() => {
    fetch("/phonology/letters.json")
      .then((res) => res.json())
      .then((data) => {
        const letters = data.filter((item) => item.category === "phonetic letters");
        
  console.log(letters);
        setLetters(letters);
      });
  }, []);

  return (
    <div> 
        <EnglishNavbar></EnglishNavbar>
        <PhonologyNavbar></PhonologyNavbar>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-gray-200 w-[100vw]  h-[65vh] overflow-y-scroll">
        
        {letters?.map((letter) => (
     
          <PhoneticLetter key={letter.id} letter={letter}>
            <p className="border text-center text-4xl font-bold bg-blue-500">
              {letter.category}
            </p>
          </PhoneticLetter>
        ))}
    
      </div>
    </div>
  );
};

export default PhoneticAlphabet;
