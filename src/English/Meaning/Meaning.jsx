import EnglishNavbar from "../English Header/EnglishNavbar";
import MeaningNavbar from "../English Header/MeaningNavbar";

const Meaning = () => {
    return (
        <div>
            <EnglishNavbar></EnglishNavbar>
            <MeaningNavbar></MeaningNavbar>
            <h2 className="text-5xl text-center mx-48">Meaning</h2>
            <h3 className="text-2xl">How to understand meaning of a big sentence?</h3>
            <p className="text-xl">1. Need to know word meaning.</p>
            <p className="text-xl">2. Need to identify words and clauses.</p>
            <p className="text-xl">3. Need to identify tense and voice.</p>
            <p className="text-xl">4. Need to know the sytax of translating language.</p>
        </div>
    );
};

export default Meaning;