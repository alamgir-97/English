import EnglishNavbar from "../English Header/EnglishNavbar";

import SentenceMaking from "./SentenceMaking";
import SyntaxNavbar from "../English Header/SyntaxNavbar";
import useLoadSentences from "../../components/customHook/useLoadSentences";


const Syntax = () => {
const sentences = useLoadSentences();
console.log(sentences);
  return (
    <div>
      <EnglishNavbar></EnglishNavbar>
      <SyntaxNavbar></SyntaxNavbar>
      <SentenceMaking></SentenceMaking>
   
   
       
        
    </div>
  );
};

export default Syntax;
