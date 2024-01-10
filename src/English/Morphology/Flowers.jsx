import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import swal from "sweetalert";
import Word from "./Word";

const Flowers = () => {
  const [flowers, setFlowers] = useState();

  // fishes
  useEffect(() => {
    fetch("/words/words.json")
      .then((res) => res.json())
      .then((data) => {
        const flowers = data.filter((item) => item.category === "flowers/ফুল");
        setFlowers(flowers);
      });
  }, []);

  return (
    <div>
      {/*  */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 bg-green-200 w-[75vw] h-[32vw] overflow-y-scroll">
        {flowers?.map((word) => (
          <Word key={word.id} word={word}>
            <p className="border text-center text-4xl font-bold bg-blue-500 w-[75vw] flex jusify-center py-1">
              {word.category}
            </p>
          </Word>
        ))}
      </div>
    </div>
  );
};






export default Flowers;
