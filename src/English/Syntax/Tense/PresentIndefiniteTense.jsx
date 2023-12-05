import { useState } from "react";


const PresentIndefiniteTense = () => {
    return (
        <div>
        <h2 className="text-3xl text-center border">Present Indefinite Tense</h2>
        <SentencePresentIndefinite sentence={"I drink water."} meaning={"আমি পানি পান করি।"} audioURL={"./presentIndefinite/I drink water.mp4"} ></SentencePresentIndefinite>        
        <SentencePresentIndefinite sentence={"I play football."} meaning={"আমি ফুটবল খেলি।"}></SentencePresentIndefinite>
        <SentencePresentIndefinite sentence={"I sing a song."} meaning={"আমি গান গাই।"}></SentencePresentIndefinite>
        <SentencePresentIndefinite sentence={"I hear a sound."} meaning={"আমি একটি শব্দ শুনি।"}></SentencePresentIndefinite>        
        <SentencePresentIndefinite sentence={"I write a letter."} meaning={"আমি চিঠি লিখি।"}></SentencePresentIndefinite>
        <SentencePresentIndefinite sentence={"I eat dinner at 8:00 PM."} meaning={"আমি রাত ৮টায় খাবার খাই।"}></SentencePresentIndefinite>
        <SentencePresentIndefinite sentence={"She takes a shower before breakfast."} meaning={"সে সকালে নাস্তা করার পূর্বে গোসল করে।"}></SentencePresentIndefinite>        
        <SentencePresentIndefinite sentence={"We have lunch at noon."} meaning={"আমরা দুপুরে লাঞ্চ করি।"}></SentencePresentIndefinite>        
        <SentencePresentIndefinite sentence={"They finish work at 5:00 PM."} meaning={"তারা বিকাল ৫টা কাজ শেষ করে।"}></SentencePresentIndefinite>        
        <SentencePresentIndefinite sentence={"She watches TV after dinner."} meaning={"সে ডিনারের পর টিভি দেখে।"}></SentencePresentIndefinite>        
        <SentencePresentIndefinite sentence={"He reads a book before bed."} meaning={"সে ঘুমাতে যাওয়ার পূর্বে বই পড়ে।"}></SentencePresentIndefinite>        
        <SentencePresentIndefinite sentence={"I wake up early every morning."} meaning={"আমি প্রতিদিন সকালে তাড়াতাড়ি/ভোরে উঠি।"}></SentencePresentIndefinite>        
        <SentencePresentIndefinite sentence={"He goes to work at 8:00 AM."} meaning={"সে সকাল ৮টায় কাজে যায়।"}></SentencePresentIndefinite>        
        <SentencePresentIndefinite sentence={"We go to sleep at 10:00 PM."} meaning={"আমরা রাত ১০টায় ঘুমাতে যাই।"}></SentencePresentIndefinite>        
        <SentencePresentIndefinite sentence={"It rains often in the rainy season."} meaning={"বর্ষাকালে প্রায়ই সকালে বৃষ্টি হয়।"}></SentencePresentIndefinite>        
        <SentencePresentIndefinite sentence={"She snows in the winter."} meaning={"???? ।"}></SentencePresentIndefinite>        
        <SentencePresentIndefinite sentence={"The wind blows all year round."} meaning={"সারা বছর ধরে বাতাস বয়।"}></SentencePresentIndefinite>        
        <SentencePresentIndefinite sentence={"The sun shines brightly in the desert."} meaning={"মরুভূমিতে সূর‌্’য উজ্জ্বলভাবে কিরণ দেয়।"}></SentencePresentIndefinite>        
        <SentencePresentIndefinite sentence={"The stars twinkle at night."} meaning={"তারারা রাতে মিটমিট করে।"}></SentencePresentIndefinite>        
        <SentencePresentIndefinite sentence={"The moon glows in the darkness."} meaning={"অন্ধকারে চাঁদ আলো ছড়ায়।"}></SentencePresentIndefinite>        
        <SentencePresentIndefinite sentence={"The birds sing in the trees."} meaning={"গাছে পাখিরা গান গায়।"}></SentencePresentIndefinite>        
        <SentencePresentIndefinite sentence={"The flowers bloom in the spring."} meaning={"বসন্তে ফুলরা ফুটে।"}></SentencePresentIndefinite>        
        <SentencePresentIndefinite sentence={"The leaves fall in the autumn."} meaning={"শরতে পাতা পড়ে যায়/ পাতা ঝরে।"}></SentencePresentIndefinite>        
        <SentencePresentIndefinite sentence={"The grass grows green in the summer."} meaning={"গ্রীষ্মে ঘাসেরা সবুজ হয়ে জন্মায়/বাড়ে।"}></SentencePresentIndefinite>        
        <SentencePresentIndefinite sentence={"The trees stand tall in the forest."} meaning={"বনে গাছেরা খাড়া হয়ে দাঁড়িয়ে থাকে।"}></SentencePresentIndefinite>                   
        </div>
    );
};

const SentencePresentIndefinite = ({sentence, meaning, audioURL}) => {
    const [mean, setMean] = useState();
    const handleMeaning = () =>{
        setMean(<>
        <p>{meaning}</p>
        <audio src={audioURL}></audio>
        </>)
          console.log(meaning);
          console.log(audioURL);
        
    }
 <p>= {meaning}</p>
    const handleReset = () =>{
        const m2 = setMean("")
        console.log(m2);
    }


    return (
        <div>    
        <p onClick = {handleMeaning} onDoubleClickCapture = {handleReset} className="text-2xl text-left border pl-3 hover:bg-yellow-500">{sentence} {mean}</p>
        </div>
    );
};

export default PresentIndefiniteTense;