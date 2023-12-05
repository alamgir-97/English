import { useEffect, useState } from 'react';

const useLoadSentences = () => {
const [sentences, setSentences] = useState()
    useEffect(()=>{
        fetch("/sentences/sentences.json")
        .then(res => res.json())
        .then(data => setSentences(data))
    },[])
    
    console.log(sentences);

    return (
        <div>
            {sentences}
        </div>
    );
};

export default useLoadSentences;