import { useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const Word = ({ word }) => {
    const {
      id,
      name,
      syllable,
      meaning,
      photoURL,
      audioURL,
      audioURL2,
      audioURL3,
      audioURL4,
      article,
      number,
      gender,
    } = word || {};
  
    const [wordMeaning, setWordMeaning] = useState();
    const [wordSyllable, setWordSyllable] = useState();
    const [wordPronunciation, setWordPronunciation] = useState();
    const [wordPronunciation2, setWordPronunciation2] = useState();
    const [wordPronunciation3, setWordPronunciation3] = useState();
    const [wordPronunciation4, setWordPronunciation4] = useState();
  
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
    const handleMeaning = () => {
      console.log({ meaning });
      console.log({ audioURL });
      console.log({ syllable });
      setWordSyllable(syllable);
      setWordMeaning(meaning);
      setWordPronunciation(audioURL);
    };
    const handleSound = () => {
      setWordPronunciation(audioURL);
    };
    const handleSound2 = () => {
      setWordPronunciation2(audioURL2);
    };
    const handleSound3 = () => {
      setWordPronunciation3(audioURL3);
    };
    const handleSound4 = () => {
      setWordPronunciation4(audioURL4);
    };
  
    const handleArticle = () => {
      setWordMeaning(article);
    };
    const handleNumber = () => {
      setWordMeaning(number);
    };
    const handleGender = () => {
      setWordMeaning(gender);
    };
  
    const handleReset = () => {
      setWordMeaning("");
      setWordSyllable("");
      setWordPronunciation("");
    };

    return (
      <div className="border mx-4 my-3 p-4 bg-white w-[22vw] h-[33vw] rounded-xl hover:border-3 relative">
        {/* <p className="border text-center text-4xl font-bold bg-red-500">{category}</p>          */}
        {/* <p className="border text-center text-2xl font-bold bg-blue-700 mx-auto rounded-full px-4 w-[4vw] h-[4vw] flex items-center justify-center -mb-3 z-20 border-3">
          {id}
        </p> */}
        <div className="border border-black bg-red-600 bg-opacity-70 w-[5vw] -ml-4 top-[8vw] z-20 absolute">
        <p className="text-center text-2xl font-bold">
          {id}
        </p>
        </div>
        <img
          src={photoURL}
          alt="img"
          className="w-[20vw] h-[10vw] border mx-auto"
          onClick={handleMeaning}
          onDoubleClickCapture={handleReset}
        />
        <Link to={`/word/${id}`}>
          <div className="bg-white border hover:border-2 w-[20vw] h-[9vw] mx-auto text-center">
            <p className="text-2xl text-red-600 font-bold bg-blue-100 hover:text-green-700 hover:bg-green-300">
              {name}
            </p>
            <p className="text-2xl text-black font-bold hover:text-green-700 hover:bg-green-300">
              {wordSyllable}
            </p>
            <p className="text-xl text-blue-700 font-bold bg-blue-200 hover:text-blue-700 hover:bg-blue-300">
              {wordMeaning}
            </p>
            <audio autoPlay src={wordPronunciation}></audio>
            <audio autoPlay src={wordPronunciation2}></audio>
            <audio autoPlay src={wordPronunciation3}></audio>
            <audio autoPlay src={wordPronunciation4}></audio>
          </div>
        </Link>
  
        {/* <p className="text-center text-2xl font-bold bg-rose-300 px-4 mx-auto border rounded-xl">
          {" "}
          {meaning}
        </p> */}
  
        <div className="flex mx-auto pt-2 text-xs md:text-sm lg:text-base">
          <button
            onClick={handleMeaning}
            className="text-center font-semibold bg-blue-300 px-1 border mx-auto hover:bg-rose-600"
          >
            Meaning
          </button>
          <button
            onClick={handleArticle}
            className="text-center font-semibold bg-blue-300 px-1 border mx-auto hover:bg-rose-600"
          >
            Article
          </button>
          <button
            onClick={handleNumber}
            className="text-center font-semibold bg-blue-300 px-1 border mx-auto hover:bg-rose-600"
          >
            Number
          </button>
          <button
            onClick={handleGender}
            className="text-center font-semibold bg-blue-300 px-1 border mx-auto hover:bg-rose-600"
          >
            Gender
          </button>
        </div>
  
        <div className="flex mx-auto py-1">
          <button
            onClick={handleSound}
            className="text-center text-base font-semibold bg-rose-300 px-2 border mx-auto hover:bg-rose-600"
          >
            Vo 1
          </button>
          <button
            onClick={handleSound2}
            className="text-center text-base font-semibold bg-rose-300 px-2 border mx-auto hover:bg-rose-600"
          >
            Vo 2
          </button>
          <button
            onClick={handleSound3}
            className="text-center text-base font-semibold bg-rose-300 px-2 border mx-auto hover:bg-rose-600"
          >
            Vo 3
          </button>
          <button
            onClick={handleSound4}
            className="text-center text-base font-semibold bg-rose-300 px-2 border mx-auto hover:bg-rose-600"
          >
            Vo 4
          </button>
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleAddForPractice}
            className="text-center text-xl font-semibold bg-red-400  text-rose-700 px-4 mx-auto my-4 border rounded-lg "
          >
            Add for practice
          </button>
        </div>
      </div>
    )}

    export default Word;