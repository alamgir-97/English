import { useState } from "react";
import EnglishNavbar from "../English Header/EnglishNavbar";
import MorphologyNavbar from "../English Header/MorphologyNavbar";
import PresentContinuousTense from "../Syntax/Tense/PresentContinuousTense";
import PresentPerfectTense from "../Syntax/Tense/PresentPerfectTense";
import TransitiveVerbList from "./VerbList/TransitiveVerbList";
import { Helmet } from "react-helmet";
import BodyParts from "./BodyParts";
import Birds from "./Birds";
import Furniture from "./Furniture";
import Fish from "./Fish";
import Animals from "./Animals";
import Tools from "./Tools";
import Spices from "./Spices";
import Plants from "./Plants";
import Foods from "./Foods";
import Vegetables from "./Vegetables";
import Fruit from "./Fruit";
import Flowers from "./Flowers";
import VegetablesBN from "./VegetablesBN";
import Footer from "../../components/Footer/Footer";
import { NavLink } from "react-router-dom";


const Vocabulary = () => {
  const [m1, setM1] = useState("fish");
  const [m2, setM2] = useState("rice");
  const [m3, setM3] = useState("lentil");
  const [m4, setM4] = useState("knowledge");
  const [m5, setM5] = useState("volunteer");
  const [video, setVideo] = useState();

  const handleWord1 = () => {
    setM1("fish = মাছ");
  };

  const handleWord2 = () => {
    setM2("rice = ভাত");
  };

  const handleWord3 = () => {
    setM3("lentil = len.til= ডাল");
  };

  const handleWord4 = () => {
    setM4("knowledge = know.ledge= জ্ঞান");
  };
  const handleWord5 = () => {
    setM5("volunteer = vo.lun.teer= স্বেচ্ছাসেবক");
  };
  const handleReset = () => {
    setM1("fish");
    setM2("rice");
    setM3("lentil");
    setM4("knowledge");
    setM5("volunteer");
  };

  const [s1, setS1] = useState("");
  const handleSentence1 = () => {
    setS1(
      <div>
        <p className="pb-6">পান করা।</p>
        <div className="flex justify-center">
          <audio
            autoPlay
            src="../../../../public/IDrinkWater.mp4"
            className="w-84 h-36"
          ></audio>
        </div>
      </div>
    );
  };

  const handleResetSentence1 = () => {
    setS1("");
  };

  const handleWordInclusion = (e) => {
    e.preventDefault();
    const form = e.target;

    const category = form.category.value;
    const word = form.word.value;
    const wordMeaning = form.wordMeaning.value;
    const imageURL = form.imageURL.value;
    const audioURL = form.imageURL.value;
    const article = form.article.value;
    const number = form.number.value;
    const gender = form.gender.value;
    console.log({
      category: category,
      word: word,
      "word meaning": wordMeaning,
      "image URL": imageURL,
      "audio URL": audioURL,
      article: article,
      number: number,
      gender: gender,
    });
  };

  const handleVideo1 = () => {
    setVideo(
      <>
        <video src="./public/vegetables/audio/cabbage.mp4"></video>
      </>
    );
  };

  const handleVideo2 = () => {
    setVideo(
      <>
        <video src="./public/vegetables/audio/eggplant.mp4"></video>
      </>
    );
  };

  const handleVideo3 = () => {
    setVideo(
      <>
        <video src="./public/vegetables/audio/carrot.mp4"></video>
      </>
    );
  };

  const handleImg1 = () => {
    setVideo(
      <>
        <div className="w-[65vw] h-[80vh] bg-blue-600">
          <TransitiveVerbList></TransitiveVerbList>
        </div>
      </>
    );
  };

  const handleImg2 = () => {
    setVideo(
      <>
        <div className="w-[65vw] bg-blue-600">
          <div className="flex justify-content p-5 gap-5">
            <button onClick={handleImg1} className="btn btn-sm">
              Essential Word List
            </button>
            <button onClick={handleImg2} className="btn btn-sm">
              Intermediate Word List
            </button>
            <button onClick={handleImg3} className="btn btn-sm">
              Andvance Word List
            </button>
            <button className="btn btn-sm"></button>
          </div>
          <img src="./public/vegetables/eggplant.png"></img>
          <PresentContinuousTense></PresentContinuousTense>
        </div>
      </>
    );
  };

  const handleImg3 = () => {
    setVideo(
      <div>
        <div className="w-[65vw] h-[80vh] bg-red-500">
          <div className="flex justify-content p-5 gap-5">
            <button onClick={handleImg1} className="btn btn-sm">
              Essential Word List
            </button>
            <button onClick={handleImg2} className="btn btn-sm">
              Intermediate Word List
            </button>
            <button onClick={handleImg3} className="btn btn-sm">
              Andvance Word List
            </button>
          </div>
          <PresentPerfectTense></PresentPerfectTense>
          <img src="./public/vegetables/carrot.png"></img>
        </div>
      </div>
    );
  };

  const handlePresentIndefiniteTense = () => {
    setVideo(
      <div>
        <button onClick={handleImg1} className="btn btn-sm">
          Essential Word List
        </button>
        <button onClick={handleImg2} className="btn btn-sm">
          Intermediate Word List
        </button>
        <button onClick={handleImg3} className="btn btn-sm">
          Andvance Word List
        </button>

        <form
          onSubmit={handleWordInclusion}
          className="border border-black p-3 m-5 flex flex-col"
        >
          <h2 className="text-5xl font-bold text-center p-3">
            Word Inclusion Form
          </h2>
          <div className="flex gap-2 m-2">
            {" "}
            <label className="w-[20vw] border p-2 bg-amber-200 font-bold">
              Category:
            </label>
            <input
              className="w-[70vw] border p-2"
              type="text"
              name="category"
              placeholder="type word category"
            />
          </div>
          <div className="flex gap-2 m-2">
            {" "}
            <label className="w-[20vw] border p-2 bg-amber-200 font-bold">
              Word:
            </label>
            <input
              className="w-[70vw] border p-2"
              type="text"
              name="word"
              placeholder="type word"
            />
          </div>
          <div className="flex gap-2 m-2">
            {" "}
            <label className="w-[20vw] border p-2 bg-amber-200 font-bold">
              Word meaning:
            </label>
            <input
              className="w-[70vw] border p-2"
              type="text"
              name="wordMeaning"
              placeholder="type word meaning"
            />
          </div>
          <div className="flex gap-2 m-2">
            {" "}
            <label className="w-[20vw] border p-2 bg-amber-200 font-bold">
              imageURL:
            </label>
            <input
              className="w-[70vw] border p-2"
              type="text"
              name="imageURL"
              placeholder="type imageURL"
            />
          </div>
          <div className="flex gap-2 m-2">
            {" "}
            <label className="w-[20vw] border p-2 bg-amber-200 font-bold">
              image:
            </label>
            <input
              className="w-[70vw] h-[20vh] border p-2"
              type="text"
              name="image"
              placeholder="Drag and Drop"
            />
          </div>
          <div className="flex gap-2 m-2">
            {" "}
            <label className="w-[20vw] border p-2 bg-amber-200 font-bold">
              audioURL:
            </label>
            <input
              className="w-[70vw] border p-2"
              type="text"
              name="audioURL"
              placeholder="type audioURL"
            />
          </div>
          <div className="flex gap-2 m-2">
            {" "}
            <label className="w-[20vw] border p-2 bg-amber-200 font-bold">
              article:
            </label>
            <input
              className="w-[70vw] border p-2"
              type="text"
              name="article"
              placeholder="type applicable article"
            />
          </div>
          <div className="flex gap-2 m-2">
            {" "}
            <label className="w-[20vw] border p-2 bg-amber-200 font-bold">
              number:
            </label>
            <input
              className="w-[70vw] border p-2"
              type="text"
              name="number"
              placeholder="type plural form of the word"
            />
          </div>
          <div className="flex gap-2 m-2">
            {" "}
            <label className="w-[20vw] border p-2 bg-amber-200 font-bold">
              gender:
            </label>
            <input
              className="w-[70vw] border p-2"
              type="text"
              name="gender"
              placeholder="type gender of the word"
            />
          </div>
          <input className="btn btn-secondary" type="submit" value="Add Word" />
        </form>
      </div>
    );
  };

  // const handleVegetables = () => {
  //   setVideo(
  //     <div>
  //       <div className="w-[65vw] h-[80vh] bg-red-500">
  //         <div className="flex justify-content p-5 gap-5">
  //           <div className="flex justify-content p-5 gap-5">
  //             <button onClick={handleImg1} className="btn btn-sm">
  //               Essential Word List
  //             </button>
  //             <button onClick={handleImg2} className="btn btn-sm">
  //               Intermediate Word List
  //             </button>
  //             <button onClick={handleImg3} className="btn btn-sm">
  //               Andvance Word List
  //             </button>
  //           </div>
  //         </div>
  //         <div className="-my-24">
  //           <VegetablesContainer></VegetablesContainer>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };

  // const handleFruits = () => {
  //   setVideo(
  //     <div>
  //       <div className="w-[65vw] h-[80vh] bg-red-500">
  //         <div className="flex justify-content p-5 gap-5">
  //           <div className="flex justify-content p-5 gap-5">
  //             <button onClick={handleImg1} className="btn btn-sm">
  //               Essential Word List
  //             </button>
  //             <button onClick={handleImg2} className="btn btn-sm">
  //               Intermediate Word List
  //             </button>
  //             <button onClick={handleImg3} className="btn btn-sm">
  //               Andvance Word List
  //             </button>
  //           </div>
  //         </div>
  //         <div className="-my-24">
  //           {" "}
  //           <FruitsContainer></FruitsContainer>{" "}
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };


  const handleVegetables = () => {
    setVideo(
      <div>
      <div className="w-[76vw] h-[70vh] bg-emerald-500 overflow-y-scroll">
          <h1 className="text-4xl font-bold text-center sticky top-0 z-20 bg-emerald-600 py-3">Vegetables/শাক-সবজি</h1>          
            <Vegetables></Vegetables>
          </div>
       
      </div>
    );
  };
  const handleVegetablesBN = () => {
    setVideo(
      <div>
      <div className="w-[100vw] h-[80vh] bg-green-600">
          <h1 className="text-4xl font-bold text-center m-2">শাক-সবজি/Vegetables</h1>
            <VegetablesBN></VegetablesBN>
          </div>
       
      </div>
    );
  };

  const handleFruits = () => {
    setVideo(
      <div>
      <div className="w-[60vw] h-[80vh] bg-green-600">
          <h1 className="text-4xl font-bold text-center m-2">Fruits/ফলমূল</h1>
            <Fruit></Fruit>
          </div>
       
      </div>
    );
  };


  const handleFish = () => {
    setVideo(
      <div>
      <div className="w-[60vw] h-[80vh] bg-green-600">
          <h1 className="text-4xl font-bold text-center m-2">Fishes/মাছ</h1>
            <Fish></Fish>
          </div>
       
      </div>
    );
  };


  const handleBodyParts = () => {
    setVideo(
      <div>
      <div className="w-[60vw] h-[80vh] bg-green-600">
          <h1 className="text-4xl font-bold text-center m-2">Organs/অঙ্গ-প্রত্যঙ্গ</h1>
            <BodyParts></BodyParts>
        
        </div>
      </div>
    );
  };


  const handleBirds = () => {
    setVideo(
      <div>
        <div className="w-[60vw] h-[80vh] bg-green-600">
          <h1 className="text-4xl font-bold text-center m-2">Birds/পাখি</h1>
            <Birds></Birds>
        
        </div>
      </div>
    );
  };


  const handlePlants = () => {
    setVideo(
      <div>
        <div className="w-[60vw] h-[80vh] bg-green-600">
          <h1 className="text-4xl font-bold text-center m-2">Plants/উদ্ভিদ</h1>
            <Plants></Plants>
        
        </div>
      </div>
    );
  };


  const handleFurniture = () => {
    setVideo(
      <div>
        <div className="w-[75vw] h-[32vw] bg-blue-600">
        <h1 className="text-4xl font-bold m-2 flex justify-center">Furniture/আসবাবপত্র</h1>
            <Furniture></Furniture>         
        </div>
      </div>
    );
  };


  const handleTools = () => {
    setVideo(
      <div>
        <div className="w-[75vw] bg-green-300">
        <h1 className="text-4xl font-bold m-2 flex justify-center">Tools/যন্ত্রপাতি</h1>
            <Tools></Tools>         
        </div>
      </div>
    );
  };


  const handleSpices = () => {
    setVideo(
      <div>
        <div className="w-[60vw] h-[80vh] bg-blue-600">
        <h1 className="text-4xl font-bold text-center m-2">Spices/মসলা</h1>
            <Spices></Spices>         
        </div>
      </div>
    );
  };

  const handleFoods = () => {
    setVideo(
      <div>
        <div className="w-[60vw] h-[80vh] bg-blue-600">
        <h1 className="text-4xl font-bold text-center m-2">Foods/খাবার-দাবার</h1>
           <Foods></Foods>         
        </div>
      </div>
    );
  };
  const handleFlowers = () => {
    setVideo(
      <div>
        <div className="w-[60vw] h-[80vh] bg-blue-600">
        <h1 className="text-4xl font-bold text-center m-2">Flowers/ফুল</h1>
           <Flowers></Flowers>         
        </div>
      </div>
    );
  };


  const handleAnimals = () => {
    setVideo(
      <div>
        <div className="w-[60vw] h-[80vh] bg-red-500">
          <div className="flex justify-content p-5 gap-5">
            <div className="flex justify-content p-5 gap-5">
              <button onClick={handleImg1} className="btn btn-sm">
                Essential Word List
              </button>
              <button onClick={handleImg2} className="btn btn-sm">
                Intermediate Word List
              </button>
              <button onClick={handleImg3} className="btn btn-sm">
                Andvance Word List
              </button>
            </div>
          </div>
          <div className="-my-48">
          <h1 className="text-4xl font-bold text-center m-2">Animals/পশু</h1>
            <Animals></Animals>
          </div>
        </div>
      </div>
    );
  };




  




  
  return (
    <div className="w-[96vw] h-[95vh] fixed left-[2vw]">
      {/* <Helmet>
        <title>Morphology</title>
      </Helmet> */}
      <div className=""><EnglishNavbar></EnglishNavbar></div>
      
      <MorphologyNavbar></MorphologyNavbar>
      
      <div className="w-[100vw] h-[45vw] border flex justify-center mx-auto ">
        <div className="w-[20vw] h-[70vh] grid grid-cols-1 bg-gray-400 px-4 overflow-y-scroll">
          
          <button
            onClick={handlePresentIndefiniteTense}
            onDoubleClickCapture={handleVideo1}
            className="w-[17vw] h-[8vh] border border-rose-800 bg-gray-700 my-2 font-bold text-center text-yellow-500 text-lg hover:bg-rose-800 focus:border-rose-700 focus:border-b-4"
          >
            Word Inclusion
          </button>

          <button
            onClick={handleVegetables}
            onDoubleClickCapture={handleVideo2}
            className="w-[17vw] h-[8vh] border border-rose-800 bg-gray-700 my-2 font-bold text-center text-yellow-500 text-lg hover:bg-rose-800 focus:border-rose-700 focus:border-b-4"
            title="Vegetables"            
          >
            Vegetables
          </button>
          <button
            onClick={handleVegetablesBN}
            onDoubleClickCapture={handleVideo2}
            className="w-[17vw] h-[8vh] border border-rose-800 bg-gray-700 my-2 font-bold text-center text-yellow-500 text-lg hover:bg-rose-800 focus:border-rose-700 focus:border-b-4"
            title="Vegetables"
          >
            শাক-সবজি
          </button>

          <button
            onClick={handleFruits}
            onDoubleClickCapture={handleVideo3}
            className="w-[17vw] h-[8vh] border border-rose-800 bg-gray-700 my-2 font-bold text-center text-yellow-500 text-lg hover:bg-rose-800 focus:border-rose-700 focus:border-b-4"
            title="Fruits"
          >
            Fruits
          </button>

          <button
            onClick={handleFlowers}
            onDoubleClickCapture={handleVideo3}
            className="w-[17vw] h-[8vh] border border-rose-800 bg-gray-700 my-2 font-bold text-center text-yellow-500 text-lg hover:bg-rose-800 focus:border-rose-700 focus:border-b-4"
            title="ফুল"
          >
            Flowers
          </button>
          
          <button
            onClick={handleFish}
            onDoubleClickCapture={handleVideo3}
            className="w-[17vw] h-[8vh] border border-rose-800 bg-gray-700 my-2 font-bold text-center text-yellow-500 text-lg hover:bg-rose-800 focus:border-rose-700 focus:border-b-4"
            title="মাছ"
          >
            Fishes
          </button>

          <button
            onClick={handleSpices}
            onDoubleClickCapture={handleVideo3}
            className="w-[17vw] h-[8vh] border border-rose-800 bg-gray-700 my-2 font-bold text-center text-yellow-500 text-lg hover:bg-rose-800 focus:border-rose-700 focus:border-b-4"
            title="Fruits"
          >
           Spices
          </button>          

          <button
            onClick={handleFurniture}
            onDoubleClickCapture={handleVideo3}
            className="w-[17vw] h-[8vh] border border-rose-800 bg-gray-700 my-2 font-bold text-center text-yellow-500 text-lg hover:bg-rose-800 focus:border-b-rose-700 focus:border-b-4"
            title="আসবাবপত্র"
          >
            Furniture
          </button>

          <button
            onClick={handleTools}
            onDoubleClickCapture={handleVideo3}
            className="w-[17vw] h-[8vh] border border-rose-800 bg-gray-700 my-2 font-bold text-center text-yellow-500 text-lg hover:bg-rose-800 focus:border-rose-700 focus:border-b-4"
            title="যন্ত্রপাতি"
          >
            Tools
          </button>

          <button
            onClick={handleAnimals}
            onDoubleClickCapture={handleVideo3}
            className="w-[17vw] h-[8vh] border border-rose-800 bg-gray-700 my-2 font-bold text-center text-yellow-500 text-lg hover:bg-rose-800 focus:border-rose-700 focus:border-b-4"
            title="প্রাণী"
          >
            Animals
          </button>

          <button
            onClick={handleBirds}
            onDoubleClickCapture={handleVideo3}
            className="w-[17vw] h-[8vh] border border-rose-800 bg-gray-700 my-2 font-bold text-center text-yellow-500 text-lg hover:bg-rose-800 focus:border-rose-700 focus:border-b-4"
            title="পাখি"
          >
            Birds
          </button>

          <button
            onClick={handleBodyParts}
            onDoubleClickCapture={handleVideo3}
            className="w-[17vw] h-[8vh] border border-rose-800 bg-gray-700 my-2 font-bold text-center text-yellow-500 text-lg hover:bg-rose-800 focus:border-rose-700 focus:border-b-4"
            title="শরীরের অঙ্গ"
          >
            Organs
          </button>


          <button
            onClick={handlePlants}
            onDoubleClickCapture={handleVideo3}
            className="w-[17vw] h-[8vh] border border-rose-800 bg-gray-700 my-2 font-bold text-center text-yellow-500 text-lg hover:bg-rose-800 focus:border-rose-700 focus:border-b-4"
            title="গাছ-পালা"
          >
            Plants
          </button>

          <button
            onClick={handleFoods}
            onDoubleClickCapture={handleVideo3}
            className="w-[17vw] h-[8vh] border border-rose-800 bg-gray-700 my-2 font-bold text-center text-yellow-500 text-lg hover:bg-rose-800 focus:border-rose-700 focus:border-b-4"
            title="Foods"
          >
           Foods
          </button>
          
          <button
            onClick={handleFruits}
            onDoubleClickCapture={handleVideo3}
            className="w-[17vw] h-[8vh] border border-rose-800 bg-gray-700 my-2 font-bold text-center text-yellow-500 text-lg hover:bg-rose-800 focus:border-rose-700 focus:border-b-4"
            title="ইলেকট্রনিক্স"
          >
            Electronics
          </button>

          <button
            onClick={handleFruits}
            onDoubleClickCapture={handleVideo3}
            className="w-[17vw] h-[8vh] border border-rose-800 bg-gray-700 my-2 font-bold text-center text-yellow-500 text-lg hover:bg-rose-800 focus:border-rose-700 focus:border-b-4"
            title="গাড়ী"
          >
            Cars
          </button>

          <button
            onClick={handleFruits}
            onDoubleClickCapture={handleVideo3}
            className="w-[17vw] h-[8vh] border border-rose-800 bg-gray-700 my-2 font-bold text-center text-yellow-500 text-lg hover:bg-rose-800 focus:border-rose-700 focus:border-b-4"
            title="শিক্ষামূলক"
          >
            Educational
          </button>

          <button
            onClick={handleFruits}
            onDoubleClickCapture={handleVideo3}
            className="w-[17vw] h-[8vh] border border-rose-800 bg-gray-700 my-2 font-bold text-center text-yellow-500 text-lg hover:bg-rose-800 focus:border-rose-700 focus:border-b-4"
            title="ম্যাকানিক্যাল"
          >
            Mechanical
          </button>

          <button
            onClick={handleFruits}
            onDoubleClickCapture={handleVideo3}
            className="w-[17vw] h-[8vh] border border-rose-800 bg-gray-700 my-2 font-bold text-center text-yellow-500 text-lg hover:bg-rose-800 focus:border-rose-700 focus:border-b-4"
            title="ধর্ম"
          >
            Religion
          </button>

          <button
            onClick={handleFruits}
            onDoubleClickCapture={handleVideo3}
            className="w-[17vw] h-[8vh] border border-rose-800 bg-gray-700 my-2 font-bold text-center text-yellow-500 text-lg hover:bg-rose-800 focus:border-rose-700 focus:border-b-4"
            title="সাপ"
          >
            Snake
          </button>




        </div>
        <div className="w-[80vw] h-[100vw] border">{video}</div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Vocabulary;
