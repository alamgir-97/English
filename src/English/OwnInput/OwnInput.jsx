import EnglishNavbar from "./../English Header/EnglishNavbar";
import { useLoaderData } from "react-router-dom";
import Meaning from './../Meaning/Meaning';

const OwnInput = () => {
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

    const insertedWord = {
      category,
      word,
      wordMeaning,
      imageURL,
      audioURL,
      article,
      number,
      gender,
    };
    console.log(insertedWord);

    fetch("http://localhost:3001/words", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(insertedWord),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const insertedWords = useLoaderData();
  console.log(insertedWords);

  return (
    <div>
      <EnglishNavbar></EnglishNavbar>
      <form
        onSubmit={handleWordInclusion}
        className="border-2 p-3 m-5 flex flex-col"
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
        <input className="btn btn-secondary" type="submit" value="Add Word"/>
      </form>

      <div>
        {insertedWords.map((word) => (
          <div key={word._id} className="border">
            <h1 className="font-bold text-red-400">{word.category}</h1>
            <h1>{word.word}</h1>
            <h1>{word.wordMeaning}</h1>   
            <img src={word.imageURL} alt="" className="w-[200px]"/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OwnInput;
