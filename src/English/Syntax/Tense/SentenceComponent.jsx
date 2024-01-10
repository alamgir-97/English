import { useEffect, useState } from "react";
import swal from "sweetalert";

const SentenceComponent = ({ sentence }) => {
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
    negative,
    interrogative,
    negativeInterrogative,
    WHQuestions,
  } = sentence || {};
  const [sentenceMeaning, setSentenceMeaning] = useState();
  const [sentenceNegative, setSentenceNegative] = useState();
  const [sentenceInterrogative, setSentenceInterrogative] = useState();
  const [sentenceNegativeInterrogative, setSentenceNegativeInterrogative] = useState();
  const [sentenceWHQuestions, setSentenceWHQuestions] = useState();
  const [tense, setTense] = useState();
  const [sentenceExplanation, setSentenceExplanation] = useState();
  const [sentencePronunciation, setSentencePronunciation] = useState();
  const [sentencePronunciation2, setSentencePronunciation2] = useState();
  const [sentencePronunciation3, setSentencePronunciation3] = useState();
  const [sentencePronunciation4, setSentencePronunciation4] = useState();

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
  const handleSoundVideo = () => {
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
  const handleNegativeSentence = () => {
    setSentenceNegative(negative);
  };
  const handleInterrogativeSentence = () => {
    setSentenceInterrogative(interrogative);
  };
  const handleNegativeInterrogativeSentence = () => {
    setSentenceNegativeInterrogative(negativeInterrogative);
  };
  const handleWHQuestions = () => {
    setSentenceWHQuestions(WHQuestions);
  };

  const handleReset = () => {
    setSentenceMeaning("");
    setSentenceExplanation("");
    setSentencePronunciation("");
    setSentenceNegative("");
    setSentenceInterrogative("");
    setSentenceNegativeInterrogative("");
    setSentenceWHQuestions("");
    setTense("");
  };
  return (
    <div className="bg-white border border-blue-50 hover:border-2 w-[100vw]">
      <div
        className="flex flex-col justify-between text-left text-2xl font-bold pl-4 mx-auto hover:text-green-800 hover:bg-blue-200"
        onDoubleClickCapture={handleReset}
        title="Reset করার জন্য sentence-এর উপরে Double Click করুন।"
      >
        {/* sentence */}
        <div className="flex  py-1 bg-blue-50" onClick={handleMeaning}>
          <p className=" flex justify-center items-center text-xl font-bold bg-red-500 text-white rounded-lg w-[3vw] h-[3vw]">
            {id}
          </p>
          <p className="pl-4  ">{name}</p>
          <p className="text-left text-2xl text-blue-700 font-bold pl-[4vw] hover:text-blue-700 hover:bg-blue-300">
            {sentenceMeaning}
          </p>
        </div>
        <div> 
          <p className="text-left text-2xl bg-blue-50 text-green-500 font-bold pl-[4vw] hover:text-blue-700 hover:bg-blue-300">
            {sentenceNegative}
          </p>
          <p className="text-left text-2xl text-blue-700 font-bold pl-[4vw] hover:text-blue-700 hover:bg-blue-300">
            {sentenceInterrogative}
          </p>
          <p className="text-left text-2xl bg-blue-50 text-green-500 font-bold pl-[4vw] hover:text-blue-700 hover:bg-blue-300">
            {sentenceNegativeInterrogative}
          </p>
          <p className="text-left text-2xl text-blue-700 font-bold pl-[4vw] hover:text-blue-700 hover:bg-blue-300">
            {sentenceWHQuestions}
          </p>

          <p className="text-left text-lg bg-green-200 text-green-700 font-bold pl-[4vw] hover:text-blue-700 hover:bg-blue-300">
            {sentenceExplanation}
          </p>
          <audio autoPlay src={sentencePronunciation}></audio>
            <audio autoPlay src={sentencePronunciation2}></audio>
            <audio autoPlay src={sentencePronunciation3}></audio>
            <audio autoPlay src={sentencePronunciation4}></audio>
        </div>

        {/* buttons */}
        <div className="flex justify-center gap-1">
      
            <p
              onClick={handleMeaning}
              className="text-[10px] text-lime-400 text-center bg-gray-700 hover:bg-rose-600 border border-blue-500 px-2"
            >
              Meaning
            </p>
            <p
              onClick={handleExplanation}
              className="text-[10px] text-white text-center bg-gray-700 hover:bg-rose-600 border border-blue-500 px-2"
            >
              Explanation
            </p>
            {/* <p
            onClick={handleTense}
            className="text-center text-[10px] border border-blue-500 bg-gray-600 text-white px-2 hover:bg-rose-600"
          >
            Tense
          </p> */}           
    
          {/* <video autoPlay controls src={sentencePronunciation} width="400px"></video> */}

     
            <p
              onClick={handleNegativeSentence}
              className="text-[10px] text-white text-center bg-gray-700 hover:bg-rose-600 border border-blue-500 px-2"
            >
              Negative
            </p>
            <p
              onClick={handleInterrogativeSentence}
              className="text-[10px] text-white text-center bg-gray-700 hover:bg-rose-600 border border-blue-500 px-2"
            >
              Interrogative
            </p>
            <p
              onClick={handleNegativeInterrogativeSentence}
              className="text-[10px] text-white text-center bg-gray-700 hover:bg-rose-600 border border-blue-500 px-2"
            >
              Negative Interrogative
            </p>
            <p
              onClick={handleWHQuestions}
              className="text-[10px] text-white text-center bg-gray-700 hover:bg-rose-600 border border-blue-500 px-2"
            >
              WH Questions
            </p>
            <p
              onClick={handleSound}
              onDoubleClickCapture={handleSoundVideo}
              className="text-[10px] text-white text-center bg-gray-700 hover:bg-rose-600 border border-blue-500 px-2"
            >
              Vo1
            </p>
            <p
              onClick={handleSound2}
              className="text-[10px] text-white text-center bg-gray-700 hover:bg-rose-600 border border-blue-500 px-2"
            >
              Vo2
            </p>
            <p
              onClick={handleSound3}
              className="text-[10px] text-white text-center bg-gray-700 hover:bg-rose-600 border border-blue-500 px-2"
            >
              Vo3
            </p>
            <p
              onClick={handleSound4}
              className="text-[10px] text-white text-center bg-gray-700 hover:bg-rose-600 border border-blue-500 px-2"
            >
              Vo4
            </p>
       
        </div>
      </div>
    </div>
  );
};

export default SentenceComponent;
