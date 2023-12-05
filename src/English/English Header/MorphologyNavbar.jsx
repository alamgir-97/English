import { NavLink } from 'react-router-dom';

const MorphologyNavbar = () => {
    return (
        <div>
           <div className="flex flex-wrap border justify-center bg-amber-800">
    <div className="btn btn-sm btn-primary mx-center p-2">
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

        <div className="btn btn-sm btn-primary mx-center">
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
        
        <div className="btn btn-sm btn-primary mx-center">
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
        </div> 
    <button className="px-1 border">Auxiliary Verb</button>
    
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
    <button className="px-1 border-3 border-gray-300 bg-green-200">Phrase</button>
    </div>

        </div>
    );
};

export default MorphologyNavbar;