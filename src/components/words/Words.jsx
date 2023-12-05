import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const Words = () => {
  const [words, setWords] = useState();

  useEffect(() => {
    fetch("/flowers.json")
      .then((res) => res.json())
      .then((data) => setWords(data));
  }, []);

  useEffect(() => {
    fetch("/flowers.json")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  console.log(words);




  return (
    <div>
      {/* <p  className="border text-center text-4xl font-bold bg-red-500">Flowers/ফুল</p> */}
      <div className="flex flex-wrap">
        {words?.map((word) => (
          <Word key={word.id} word={word}>
            <p className="border text-center text-4xl font-bold bg-red-500">
              {word.category}
            </p>
          </Word>
        ))}
      </div>
    </div>
  );
};

const Word = ({ word }) => {
  const { id, name, photoURL, meaning } = word || {};
  const handleAddForPractice = () => {
    const addedFavoriteArray = [];

    const favoriteItems = JSON.parse(localStorage.getItem("favorite"));

    if (!favoriteItems) {
      addedFavoriteArray.push(word);
      localStorage.setItem("favorite", JSON.stringify(addedFavoriteArray));
      alert("A word added");
    } else {
      const isExists = favoriteItems.find((word) => word.id == id);
      console.log(isExists);
      alert(JSON.stringify(isExists));
      if (!isExists) {
        addedFavoriteArray.push(...favoriteItems, word);
        localStorage.setItem("favorite", JSON.stringify(addedFavoriteArray));
        alert("More than one word is added");
        swal({
          title: "Good job!",
          text: "Word added successfully!",
          icon: "success",
          button: "Close",
        });
      } else {
        alert("Already Exists.");
      }
    }
  };
  return (
    <div className="border m-4 p-4 bi-yellow-500 w-96">
      {/* <p className="border text-center text-4xl font-bold bg-red-500">{category}</p>          */}
      <p className="border text-center text-4xl font-bold bg-green-500 w-fit mx-auto px-10">
        Id: {id}
      </p>
      <img src={photoURL} alt="img" className="border mx-auto w-96" />
      <Link to={`/word/${id}`}>
        <p className="border text-center text-4xl font-bold bg-rose-200 w-fit px-16 mx-auto rounded-xl">
          {name}
        </p>
      </Link>
      <p className="border text-center text-4xl font-bold bg-rose-300 w-fit px-16 mx-auto rounded-xl">
        {" "}
        {meaning}
      </p>
      <div className="mx-auto">
        <button
          onClick={handleAddForPractice}
          className="border text-center text-2xl font-bold bg-rose-700 w-fit px-4 rounded-xl mx-auto"
        >
          Add for practice
        </button>
      </div>
    </div>
  );
};

export default Words;
