import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import EnglishNavbar from "../English Header/EnglishNavbar";
import PhonologyNavbar from "../English Header/PhonologyNavbar";

const Sentences = () => {
  const [sentences, setSentences] = useState();
  const [presentIndefiniteTense, setPresentIndefiniteTense] = useState();
  const [presentContinuousTense, setPresentContinuousTense] = useState();
  const [presentPerfectTense, setPresentPerfectTense] = useState();
  const [presentPerfectContinuousTense, setPresentPerfectContinuousTense] = useState();
  // const [pastIndefiniteTense, setPastIndefiniteTense] = useState();
  // const [pastContinuousTense, setPastContinuousTense] = useState();
  // const [pastPerfectTense, setPastPerfectTense] = useState();
  // const [pastPerfectContinuousTense, setPastPerfectContinuousTense] = useState();
  // const [futreIndefiniteTense, setFutreIndefiniteTense] = useState();
  // const [futureContinuousTense, setFutureContinuousTense] = useState();
  // const [futurePerfectTense, setFuturePerfectTense] = useState();
  // const [futurePerfectContinuousTense, setFuturePerfectContinuousTense] = useState();


  useEffect(() => {
    fetch("/sentences/sentences.json")
      .then((res) => res.json())
      .then((data) => setSentences(data));
  }, []);

  //present Indefinite Tense
  useEffect(() => {
    fetch("/sentences/sentences.json")
      .then((res) => res.json())
      .then((data) => {const presentIndefinite = data.filter(sentence=> sentence.category ==="Present Indefinite Tense");
       setPresentIndefiniteTense(presentIndefinite)});
  }, []);

  //present Continuous Tense
  useEffect(() => {
    fetch("/sentences/sentences.json")
      .then((res) => res.json())
      .then((data) => {const presentContinuous = data.filter(sentence=> sentence.category ==="Present Continuous Tense");
       setPresentContinuousTense(presentContinuous)});
  }, []);

  //present Perfect Tense
  useEffect(() => {
    fetch("/sentences/sentences.json")
      .then((res) => res.json())
      .then((data) => {const presentPerfect = data.filter(sentence=> sentence.category ==="Present Perfect Tense");
       setPresentPerfectTense(presentPerfect)});
  }, []);

  //present Perfect Continuous Tense
  useEffect(() => {
    fetch("/sentences/sentences.json")
      .then((res) => res.json())
      .then((data) => {const persentPerfectContinuous = data.filter(sentence=> sentence.category ==="Present Perfect Continuous Tense");
       setPresentPerfectContinuousTense(persentPerfectContinuous)});
  }, []);

  // useEffect(() => {
  //   fetch("/sentences/sentences.json")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);
  // console.log(sentences);

  return (
    <div>
      <EnglishNavbar></EnglishNavbar>
      <PhonologyNavbar></PhonologyNavbar>
     
      <div className="flex flex-wrap">
        {sentences?.map((sentence) => (
          <Sentence key={sentence.id} sentence={sentence}>
            <p className="border text-center text-4xl font-bold bg-red-500">
              {sentence.category}
            </p>
          </Sentence>
        ))}
      </div>

{/* Present Indefinite Tense */}
<div className="flex flex-wrap  bg-red-400">
        {presentIndefiniteTense?.map((sentence) => (
          <Sentence key={sentence.id} sentence={sentence}>
            <p className="border text-center text-4xl font-bold bg-red-500">
              {sentence.category}
            </p>
          </Sentence>
        ))}
      </div>

{/* Present Continuous Tense */}
<div className="flex flex-wrap ">
        {presentContinuousTense?.map((sentence) => (
          <Sentence key={sentence.id} sentence={sentence}>
            <p className="border text-center text-4xl font-bold bg-red-500">
              {sentence.category}
            </p>
          </Sentence>
        ))}
      </div>

{/* Present Perfect Tense */}
<div className="flex flex-wrap bg-yellow-200">
        {presentPerfectTense?.map((sentence) => (
          <Sentence key={sentence.id} sentence={sentence}>
            <p className="border text-center text-4xl font-bold bg-red-500">
              {sentence.category}
            </p>
          </Sentence>
        ))}
      </div>

{/* Present Perfect Continuous Tense */}
<div className="flex flex-wrap">
        {presentPerfectContinuousTense?.map((sentence) => (
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

  // const handleArticle = () => {
  //   setSentenceMeaning(article);
  // };
  // const handleNumber = () => {
  //   setSentenceMeaning(number);
  // };
  // const handleGender = () => {
  //   setSentenceMeaning(gender);
  // };

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

    //     </div>
    //     <div className="border m-4 p-4 bi-yellow-500 w-[35vw] h-[14vw] rounded-xl hover:border-3 bg-green-600 ">
    //       {/* <p className="border text-center text-4xl font-bold bg-red-500">{category}</p>          */}
    //       <p className="border text-center text-2xl font-bold bg-green-500 rounded-full mx-auto px-4 w-[4vw] h-[4vw] flex items-center justify-center -mb-3 z-20 border-3">
    //         {id}
    //       </p>
    //       {/* <img src={photoURL} alt="img" className="border mx-auto w-[25vw] h-[12vw]"  />
    //       <Link to={`/sentence/${id}`} > */}
    //       <div className="bg-white border hover:border-2 h-[9vw]" onClick={handleMeaning} onDoubleClickCapture={handleReset}>
    //         <p className="text-center text-2xl text-red-600 font-bold bg-green-900 px-4 mx-auto hover:text-red-700 hover:bg-green-500">
    //           {category} </p>
    //         <p className="text-left text-2xl text-red-600 font-bold bg-blue-100 px-4 mt-1 mx-auto hover:text-green-700 hover:bg-green-300">
    //           {name}
    //         </p>
    //         <p className="text-left text-2xl text-blue-700 font-bold bg-blue-200 px-4 mx-auto hover:text-blue-700 hover:bg-blue-300">
    //           {sentenceMeaning}
    //         </p>
    //         <audio autoPlay src={sentencePronunciation}></audio>
    //         <audio autoPlay src={sentencePronunciation2}></audio>
    //         <audio autoPlay src={sentencePronunciation3}></audio>
    //         <audio autoPlay src={sentencePronunciation4}></audio>
    //       </div>

    //       {/* </Link> */}

    //       {/* <p className="text-center text-2xl font-bold bg-rose-300 px-4 mx-auto border rounded-xl">
    //         {" "}
    //         {meaning}
    //       </p> */}

    //       {/* <div className="flex mx-auto pt-2">

    //   <button
    //           onClick={handleArticle}
    //           className="text-center text-base font-semibold bg-blue-300 px-2 border mx-auto hover:bg-rose-600"
    //         >
    //           Article
    //         </button>
    //   <button
    //           onClick={handleNumber}
    //           className="text-center text-base font-semibold bg-blue-300 px-2 border mx-auto hover:bg-rose-600"
    //         >
    //           Number
    //         </button>
    //   <button
    //           onClick={handleGender}
    //           className="text-center text-base font-semibold bg-blue-300 px-2 border mx-auto hover:bg-rose-600"
    //         >
    //           Gender
    //         </button>
    // </div> */}

    //       <div className="flex mx-auto py-1">
    //         <button
    //           onClick={handleSound}
    //           className="text-center text-base font-semibold bg-rose-300 px-2 border mx-auto hover:bg-rose-600"
    //         >
    //           Voice 1
    //         </button>
    //         <button
    //           onClick={handleSound2}
    //           className="text-center text-base font-semibold bg-rose-300 px-2 border mx-auto hover:bg-rose-600"
    //         >
    //           Voice 2
    //         </button>
    //         <button
    //           onClick={handleSound3}
    //           className="text-center text-base font-semibold bg-rose-300 px-2 border mx-auto hover:bg-rose-600"
    //         >
    //           Voice 3
    //         </button>
    //         <button
    //           onClick={handleSound4}
    //           className="text-center text-base font-semibold bg-rose-300 px-2 border mx-auto hover:bg-rose-600"
    //         >
    //           Voice 4
    //         </button>
    //       </div>

    //       {/* <div className="flex justify-center">
    //         <button
    //           onClick={handleAddForPractice}
    //           className="text-center text-xl font-semibold bg-red-400  text-rose-700 px-4 mx-auto my-4 border rounded-lg "
    //         >
    //           Add for practice
    //         </button>
    //       </div> */}
    //     </div>
  );
};

export default Sentences;
