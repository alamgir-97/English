import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Word = () => {
  const [word, setWord] = useState({});
  const { id } = useParams();
  console.log(id);

  const words = useLoaderData();
  console.log(words);




  useEffect(() => {
    const findWord = words.find((word) => word.id == id);
    console.log(findWord);
    setWord(findWord);
  }, [id, words]);
  console.log(word);
  const { name, photoURL, meaning } = word || {};

  return (
    <div>
      <div className="border m-4 p-4 bi-yellow-500 w-96">
        <p className="border text-center text-4xl font-bold bg-green-500 w-fit mx-auto px-10">
          Id: {id}
        </p>
        <img src={photoURL} alt="img" className="border mx-auto w-96" />
        <p className="border text-center text-4xl font-bold bg-rose-200 w-fit px-16 mx-auto rounded-xl">
          {name}
        </p>
        <p className="border text-center text-4xl font-bold bg-rose-500 w-fit px-16 mx-auto rounded-xl">
          {" "}
          {meaning}
        </p>
      </div>
    </div>
  );
};

export default Word;
