import { useEffect, useState } from "react";


const useWordLoader = () => {
    const [words, setWords] = useState()
    useEffect(()=>{
        fetch("/words/words.json")
        .then(res => res.json())
        .then(data => setWords(data))
    },[])
    
    console.log(words);

    return (
        <div>
            {words}
        </div>
    );
};
export default useWordLoader;