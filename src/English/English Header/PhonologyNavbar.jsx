import { NavLink } from "react-router-dom";

const PhonologyNavbar = () => {
    return (
        <div>
            <div className="flex flex-wrap border justify-center bg-gray-400 gap-2 p-2">
                <NavLink to="/phonology/letters" className="mx-center px-2 font-semibold text-black border border-gray-600 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Alphabet</NavLink>
                <NavLink to="/phonology/phoneticAlphabet" className="mx-center px-2 font-semibold text-black border border-gray-600 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Phonetic Alphabet</NavLink>
                <button className="mx-center px-2 font-semibold text-black border border-gray-600 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Vocal Machine</button>
                <button className="mx-center px-2 font-semibold text-black border border-gray-600 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Syllable</button>
                <button className="mx-center px-2 font-semibold text-black border border-gray-600 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Prefix</button>
                <button className="mx-center px-2 font-semibold text-black border border-gray-600 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Suffix</button>
                <button className="mx-center px-2 font-semibold text-black border border-gray-600 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Pronunction Rules and Pronunciation Differences</button>   
                <button className="mx-center px-2 font-semibold text-black border border-gray-600 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Reading</button>   
                <button className="mx-center px-2 font-semibold text-black border border-gray-600 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Recitation</button>   
                <button className="mx-center px-2 font-semibold text-black border border-gray-600 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Singing</button>   
                <button className="mx-center px-2 font-semibold text-black border border-gray-600 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">Tongue Twisters</button>
    </div> 
        </div>
    );
};

export default PhonologyNavbar;