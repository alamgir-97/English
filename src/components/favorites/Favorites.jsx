import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
//  import Word from './../words/Word';
import EnglishNavbar from "../../English/English Header/EnglishNavbar";
import MorphologyNavbar from "../../English/English Header/MorphologyNavbar";

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);
    const [noFound, setNoFound] = useState([]);

    useEffect(()=>{
        const favoriteWords = JSON.parse(localStorage.getItem('favorite'))
        if(favoriteWords){
            setFavorites(favoriteWords)
        }
        else{
            setNoFound(<p className="h-[70vh] flex items-center justify-center">No word Found</p>)
        }
        
    },[])


    console.log(favorites);
    return (
        <div>
            <EnglishNavbar></EnglishNavbar>
            <MorphologyNavbar></MorphologyNavbar>
         {favorites.map(favorite=><div className="gap-4 grid grid-cols-2" key={favorite.id}>
        <div className="border m-4 p-4 bi-yellow-500 w-96">
        <p className="border text-center text-4xl font-bold bg-green-500 w-fit mx-auto px-10">Id: {favorite.id}</p>
            <img src={favorite.photoURL} alt="img" className="border mx-auto w-96"/>           
            <p className="border text-center text-4xl font-bold bg-rose-200 w-fit px-16 mx-auto rounded-xl">{favorite.name}</p>         
            <p className="border text-center text-4xl font-bold bg-rose-500 w-fit px-16 mx-auto rounded-xl"> {favorite.meaning}</p>
        
        </div>
         </div>)}
           {noFound? <p>{noFound}</p> : <div></div> } 
        
        </div>
    );
};

// const WordCard = ({word}) => {
//     const {id, name, photoURL, meaning} = word || {};
//     return(
//         <div className="border m-4 p-4 bi-yellow-500 w-96">  
//             {/* <p className="border text-center text-4xl font-bold bg-red-500">{category}</p>          */}
//             <p className="border text-center text-4xl font-bold bg-green-500 w-fit mx-auto px-10">Id: {id}</p>
//             <img src={photoURL} alt="img" className="border mx-auto w-96"/>
//             {/* <Link to={`/word/${id}`}> */}
//             <p className="border text-center text-4xl font-bold bg-rose-200 w-fit px-16 mx-auto rounded-xl">{name}</p>
//             {/* </Link> */}
//             <p className="border text-center text-4xl font-bold bg-rose-300 w-fit px-16 mx-auto rounded-xl"> {meaning}</p>
//             <div className="mx-auto"><button className="border text-center text-2xl font-bold bg-rose-700 w-fit px-4 rounded-xl mx-auto" >Add for practice</button></div>
//         </div>
//     )
// }

export default Favorites;