import { useEffect, useState } from "react";
import swal from "sweetalert";


const PastIndefiniteTense = () => {
  const [pastIndefiniteTense, setPastIndefiniteTense] = useState();

  //past Indefinite Tense
  useEffect(() => {
    fetch("/sentences/sentences.json")
      .then((res) => res.json())
      .then((data) => {const pastIndefinite = data.filter(sentence=> sentence.category ==="Past Indefinite Tense");
       setPastIndefiniteTense(pastIndefinite)});
  }, []);

  

  return (
    <div>    
{/* Past Indefinite Tense */}
<div className="flex flex-wrap  bg-red-400">
        {pastIndefiniteTense?.map((sentence) => (
          <Sentence key={sentence.id} sentence={sentence}>
            <p className="border text-center text-4xl font-bold bg-red-500">
              {sentence.category}
            </p>
          </Sentence>
        ))}
      </div>











    </div>
  );
};

const Sentence = ({ sentence }) => {
  const {
    id,
    name,
    category,
    explanation,
    photoURL,
    meaning,
    audioURL,
    audioURL2,
    audioURL3,
    audioURL4,
    article,
    number,
    gender,
  } = sentence || {};
  const [sentenceMeaning, setSentenceMeaning] = useState();
  const [tense, setTense] = useState();
  const [sentenceExplanation, setSentenceExplanation] = useState();
  const [sentencePronunciation, setSentencePronunciation] = useState();
  const [sentencePronunciation2, setSentencePronunciation2] = useState();
  const [sentencePronunciation3, setSentencePronunciation3] = useState();
  const [sentencePronunciation4, setSentencePronunciation4] = useState();

  const handleAddForPractice = () => {
    const addedFavoriteArray = [];

    const favoriteItems = JSON.parse(localStorage.getItem("favorite"));

    if (!favoriteItems) {
      addedFavoriteArray.push(sentence);
      localStorage.setItem("favorite", JSON.stringify(addedFavoriteArray));
      alert("A sentence added");
    } else {
      const isExists = favoriteItems.find((sentence) => sentence.id == id);
      console.log(isExists);
      alert(JSON.stringify(isExists));
      if (!isExists) {
        addedFavoriteArray.push(...favoriteItems, sentence);
        localStorage.setItem("favorite", JSON.stringify(addedFavoriteArray));
        alert("More than one sentence is added");
        swal({
          title: "Good job!",
          text: "Sentence added successfully!",
          icon: "success",
          button: "Close",
        });
      } else {
        alert("Already Exists.");
      }
    }
  };
  const handleMeaning = () => {
    setSentenceMeaning(meaning);
  };
  const handleExplanation = () => {
    setSentenceExplanation(explanation);
  };
  const handleTense = () => {
    setTense(category);
  };
  const handleSound = () => {
    setSentencePronunciation(audioURL);
  };
  const handleSound2 = () => {
    setSentencePronunciation2(audioURL2);
  };
  const handleSound3 = () => {
    setSentencePronunciation3(audioURL3);
  };
  const handleSound4 = () => {
    setSentencePronunciation4(audioURL4);
  };

  const handleReset = () => {
    setSentenceMeaning("");
    setSentenceExplanation("");
    setSentencePronunciation("");
    setTense("");
  };
  return (
    <div className="bg-white border border-blue-50 hover:border-2 w-[100vw]">
      <div
        className="flex justify-between text-left text-2xl font-bold pl-4 mx-auto hover:text-green-800 hover:bg-blue-200"
        onDoubleClickCapture={handleReset}
        title="Reset করার জন্য sentence-এর উপরে Double Click করুন।"
      >
        {/* sentence */}
        <div className="flex  py-1" onClick={handleMeaning} >
          <p className=" flex justify-center items-center text-xl font-bold bg-red-500 text-white rounded-lg w-[3vw] h-[3vw]">
            {id}
          </p>
          <p className="pl-4">{name}</p>
        </div>

{/* buttons */}
        <div className="flex justify-end items-center gap-1">
          <button className="text-center text-xl font-semibold bg-blue-900 text-gray-300 rounded-lg mr-10 px-4">
            {tense}
          </button>
          <button
          
            onClick={handleMeaning}
            className="text-center text-[12px] rounded-lg border border-blue-500 bg-blue-700 text-rose-800 px-4 hover:bg-rose-600"
          >
            Meaning
          </button>
          <button
            onClick={handleExplanation}
            className="text-center text-[12px] border border-blue-500 bg-blue-700 text-black px-2 hover:bg-rose-600"
          >
            Explanation
          </button>
          <button
            onClick={handleTense}
            className="text-center text-[12px] border border-blue-500 bg-blue-700 text-black px-2 hover:bg-rose-600"
          >
            Tense
          </button>
          <button
            onClick={handleSound}
            className="text-center text-[12px] border border-blue-500 bg-blue-800 text-black px-2 hover:bg-rose-600"
          >
            Vo1
          </button>
          <button
            onClick={handleSound2}
            className="text-center text-[12px] border border-blue-500 bg-blue-800 text-black px-2 hover:bg-rose-600"
          >
            Vo2
          </button>
          <button
            onClick={handleSound3}
            className="text-center text-[12px] border border-blue-500 bg-blue-800 text-black px-2 hover:bg-rose-600"
          >
            Vo3
          </button>
          <button
            onClick={handleSound4}
            className="text-center text-[12px] border border-blue-500 bg-blue-800 text-black px-2 hover:bg-rose-600"
          >
            Vo4
          </button>
        </div>
      </div>
      <div>
      <p className="text-left text-2xl bg-gray-50 text-blue-700 font-bold pl-[4vw] hover:text-blue-700 hover:bg-blue-300">
        {sentenceMeaning}
      </p>
      <p className="text-left text-lg bg-green-200 text-green-700 font-bold pl-[4vw] hover:text-blue-700 hover:bg-blue-300">
        {sentenceExplanation}
      </p>
      </div>
      <audio autoPlay src={sentencePronunciation}></audio>
      <audio autoPlay src={sentencePronunciation2}></audio>
      <audio autoPlay src={sentencePronunciation3}></audio>
      <audio autoPlay src={sentencePronunciation4}></audio>
    </div>
  );
};

export default PastIndefiniteTense;
