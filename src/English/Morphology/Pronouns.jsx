import { useState } from "react";
import EnglishNavbar from "../English Header/EnglishNavbar";
import MorphologyNavbar from "../English Header/MorphologyNavbar";
import { Helmet } from "react-helmet";

const Pronouns = () => {

    const [pronoun1, setPronoun1] = useState("");
    const [pronoun2, setPronoun2] = useState("");
    const [pronoun3, setPronoun3] = useState("");
    const [pronoun4, setPronoun4] = useState("");
    const [pronoun5, setPronoun5] = useState("");
    const [pronoun6, setPronoun6] = useState("");
    const [pronoun7, setPronoun7] = useState("");
    const [pronoun8, setPronoun8] = useState("");

    const handlePronoun1 = () => {
       
      setPronoun1(<>
      <span>= আমি</span>
      <audio autoPlay src="I.mp4"></audio>
        </>);
      }
    const handlePronoun2 = () => {
      setPronoun2(" = আমরা"); 
      }
    const handlePronoun3 = () => {
      setPronoun3(" = আমার"); 
      }
    const handlePronoun4 = () => {
      setPronoun4(" = আমাদের"); 
      }
    const handlePronoun5 = () => {
      setPronoun5(" = আমাকে"); 
      }   
    const handlePronoun6 = () => {
      setPronoun6(" = আমাদেরকে"); 
      }   
    const handlePronoun7 = () => {
      setPronoun7(" = আমার(ই)"); 
      }   
    const handlePronoun8 = () => {
      setPronoun8(" = আমাদের(ই)"); 
      }   

      const handleResetPronouns = () => {           
        setPronoun1("");
        setPronoun2("");
        setPronoun3("");
        setPronoun4("");
        setPronoun5("");
        setPronoun6("");
        setPronoun7("");
        setPronoun8("");
        }
    return (
        <div>
          <Helmet>
<title>Pronouns</title>
</Helmet>
               <EnglishNavbar></EnglishNavbar>
               <MorphologyNavbar></MorphologyNavbar>
            {/* Pronoun */}
            <div className="w-[100vw] bg-gray-100 mx-auto p-8 mt-1">              
               {/* <p onClick={handleWord1} className="w-[70vw]  text-yellow-500 mx-auto text-4xl font-bold">{m1} {m2} {m3}</p> */}
              <div onDoubleClickCapture={ handleResetPronouns } className="mx-12 p-3 border rounded-xl text-3xl font-bold"> 
                <h2  className="bg-yellow-600 text-pink-700 py-2 my-2 border rounded-xl flex flex-wrap gap-6 justify-center items-center ">Person</h2>
                <h2  className="text-yellow-500 my-2 border rounded-xl flex flex-wrap gap-6 justify-center items-center">English Garammar has 3 persons and 4 cases</h2>
                <p className="text-yellow-500 my-2 rounded-xl flex justify-center items-center pt-6">
                  <span className="bg-gray-600 rounded-lg px-2">1st Person:</span> 
                  </p>
                <p className="text-yellow-500 my-2 border rounded-xl flex flex-wrap gap-6 justify-left items-center py-4">                     
                  <span onClick={handlePronoun1} className="bg-gray-600 rounded-lg text-center px-8">I {pronoun1}</span>
                  <span onClick={handlePronoun2} className="bg-gray-600 rounded-lg text-center px-8">we {pronoun2}</span>
                  <span onClick={handlePronoun3} className="bg-gray-600 rounded-lg text-center px-8">my {pronoun3}</span>
                  <span onClick={handlePronoun4} className="bg-gray-600 rounded-lg text-center px-8">our {pronoun4}</span>
                  <span onClick={handlePronoun5} className="bg-gray-600 rounded-lg text-center px-8">me {pronoun5}</span>
                  <span onClick={handlePronoun6} className="bg-gray-600 rounded-lg text-center px-8">us {pronoun6}</span>
                  <span onClick={handlePronoun7} className="bg-gray-600 rounded-lg text-center px-8">mine {pronoun7}</span>
                  <span onClick={handlePronoun8} className="bg-gray-600 rounded-lg text-center px-8">ours {pronoun8}</span>
                </p>
                
                <p className="text-purple-500 my-2 rounded-xl flex justify-center items-center pt-6">
                  <span className="bg-gray-600 rounded-lg px-2">2nd Person:</span>                                        
                </p>
                
                <p className="text-purple-500 my-2  border rounded-xl flex flex-wrap gap-6 justify-left items-center py-4">                  
                  <span className="bg-gray-600 rounded-lg text-center px-8">You</span>
                  <span className="bg-gray-600 rounded-lg text-center px-8">your</span>
                  <span className="bg-gray-600 rounded-lg text-center px-8">you</span>
                  <span className="bg-gray-600 rounded-lg text-center px-8">yours</span>                     
                </p>
                
                <p className="text-green-500 my-2 rounded-xl flex justify-center items-center pt-6">
                  <span className="bg-gray-600 rounded-lg px-2">3rd person:</span>                     
                </p>
                <p className="text-green-500 my-2 border rounded-xl flex flex-wrap gap-6 justify-left items-center py-4">                      
                  <span className="bg-gray-600 rounded-lg text-center px-8">he</span>
                  <span className="bg-gray-600 rounded-lg text-center px-8">she</span>
                  <span className="bg-gray-600 rounded-lg text-center px-8">it</span>
                  <span className="bg-gray-600 rounded-lg text-center px-8">they</span>
                  <span className="bg-gray-600 rounded-lg text-center px-8">his</span>
                  <span className="bg-gray-600 rounded-lg text-center px-8">her</span>
                  <span className="bg-gray-600 rounded-lg text-center px-8">its</span>
                  <span className="bg-gray-600 rounded-lg text-center px-8">their</span>
                  <span className="bg-gray-600 rounded-lg text-center px-8">him</span>
                  <span className="bg-gray-600 rounded-lg text-center px-8">her</span>
                  <span className="bg-gray-600 rounded-lg text-center px-8">it</span>
                  <span className="bg-gray-600 rounded-lg text-center px-8">them</span>                 
                  <span className="bg-gray-600 rounded-lg text-center px-8">its</span>                 
                  <span className="bg-gray-600 rounded-lg text-center px-8">theirs</span>                 
                </p>
                    
              </div>
            </div>
        </div>
    );
};

export default Pronouns;