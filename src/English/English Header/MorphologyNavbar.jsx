import { NavLink } from 'react-router-dom';

const MorphologyNavbar = () => {
    return (
        <div>
           <div className="flex flex-wrap border justify-center bg-gray-400 gap-2 p-2">
    <button className="mx-center px-2 font-semibold text-black border border-gray-600 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">
          <NavLink
            to="/morphology/words"
            className={({ isActive, isPending }) =>
              isPending
                ? "text-black"
                : isActive
                ? ""
                : " "
            }
          >
            Words
          </NavLink>
        </button>

    <button className="mx-center px-2 font-semibold text-black border border-gray-600 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">
          <NavLink
            to="/morphology/favorites"
            className={({ isActive, isPending }) =>
              isPending
                ? "text-black"
                : isActive
                ? ""
                : " "
            }
          >
            Favorites
          </NavLink>
        </button>

    <button className="mx-center px-2 font-semibold text-black border border-gray-600 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">
          <NavLink
            to="/morphology/pronouns"
            className={({ isActive, isPending }) =>
              isPending
                ? "text-black"
                : isActive
                ? ""
                : " "
            }
          >
            Pronouns
          </NavLink>
        </button>

        <button className="mx-center px-2 font-semibold text-black border border-gray-600 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">
          <NavLink
            to="/morphology/articlesAndDeterminers"
            className={({ isActive, isPending }) =>
              isPending
                ? "text-black"
                : isActive
                ? ""
                : " "
            }
          >
            Articles and Determiners
          </NavLink>
        </button>
        
        <button className="mx-center px-2 font-semibold text-black border border-gray-600 rounded-lg hover:bg-rose-800 focus:border-b-rose-600 focus:border-b-2">
          <NavLink
            to="/morphology/whQuestion"
            className={({ isActive, isPending }) =>
              isPending
                ? "text-black"
                : isActive
                ? ""
                : " "
            }
          >
            WHQuestion
          </NavLink>
        </button> 





        {/* //Sample Buttons
        <div className="btn btn-sm text-blue-600 bg-gray-800 mx-center p-2">
          <NavLink
            to="/morphology/words"
            className={({ isActive, isPending }) =>
              isPending
                ? "text-black"
                : isActive
                ? "text-rose-800 underline"
                : " "
            }
          >
            Words
          </NavLink>
        </div>

    <div className="btn btn-sm btn-primary mx-center p-2">
          <NavLink
            to="/morphology/favorites"
            className={({ isActive, isPending }) =>
              isPending
                ? "text-black"
                : isActive
                ? "text-rose-800 underline"
                : " "
            }
          >
            Favorites
          </NavLink>
        </div>

    <div className="btn btn-sm text-gray-950 bg-blue-600 border border-red-800 mx-center p-2">
          <NavLink
            to="/morphology/pronouns"
            className={({ isActive, isPending }) =>
              isPending
                ? "text-black"
                : isActive
                ? "text-rose-800 underline"
                : " "
            }
          >
            Pronouns
          </NavLink>
        </div>

        <div className="btn btn-sm bg-red-800 text-black mx-center">
          <NavLink
            to="/morphology/articlesAndDeterminers"
            className={({ isActive, isPending }) =>
              isPending
                ? "text-black"
                : isActive
                ? "text-rose-800 underline"
                : " "
            }
          >
            Articles and Determiners
          </NavLink>
        </div>
        
        <div className="btn btn-sm bg-red-800 text-white mx-center">
          <NavLink
            to="/morphology/whQuestion"
            className={({ isActive, isPending }) =>
              isPending
                ? "text-black"
                : isActive
                ? "text-rose-800 underline"
                : " "
            }
          >
            WHQuestion
          </NavLink>
        </div>  */}
    {/* <button className="px-1 border">Auxiliary Verb</button>
    
    <button className="px-1 border">Modal Verb</button>
    <button className="px-1 border">Articles</button>
    <button className="px-1 border">Determiners</button>
    <button className="px-1 border">Cardinal Numbers</button>
    <button className="px-1 border">Ordinal Numbers</button>
    <button className="px-1 border">Preposition</button>
    <button className="px-1 border">Days of the Week</button>
    <button className="px-1 border">Months of the Year</button>
    <button className="px-1 border">Time Words</button>
    <button className="px-1 border" title="here, there, over there">Place words</button>
    <button className="px-1 border">Country</button>
    <button className="px-1 border">Nationality</button>
    <button className="px-1 border">Currency</button>    
    <button className="px-1 border bg-green-200">Clause</button>
    <button className="px-1 border-3 border-gray-300 bg-green-200">Phrase</button> */}
    </div>

        </div>
    );
};

export default MorphologyNavbar;