import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import swal from "sweetalert";
import WordBN from "./WordBN";


const VegetablesBN = () => {
  const [vegetables, setVegetables] = useState();

  // vegetables
  useEffect(() => {
    fetch("/words/words.json")
      .then((res) => res.json())
      .then((data) => {
        const vegetables = data.filter((item) => item.category === "Vegetables/শাক-সবজি");
        setVegetables(vegetables);
      });
  }, []);

  return (
    <div>
      {/* horizontal scrollable */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-[75vw] h-[32vw] overflow-y-scroll">
        {vegetables?.map((word) => (
          <WordBN key={word.id} word={word}>
            <p className="border text-center text-4xl font-bold bg-blue-500">
              {word.category}
            </p>
          </WordBN>
        ))}
      </div>
    </div>
  );
};







export default VegetablesBN;
