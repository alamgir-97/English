import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import swal from "sweetalert";
import Word from "./Word";


const Vegetables = () => {
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 w-[70vw] h-[32vw]">
        {vegetables?.map((word) => (
          <Word key={word.id} word={word}>
            <p className="border text-center text-4xl font-bold bg-blue-500">
              {word.category}
            </p>
          </Word>
        ))}
      </div>
    </div>
  );
};

export default Vegetables;
