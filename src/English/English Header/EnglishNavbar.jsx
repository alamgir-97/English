import { NavLink } from "react-router-dom";

const EnglishNavbar = () => {
  return (
    <div className="flex jutify-between bg-yellow-600 ">
      <div className="flex justify-between">
      
{/* Logo */}
      <div className="text-4xl text-pink-800 font-bold text-center w-[20vw] my-auto">
          <NavLink
            to="/english"
            className={({ isActive, isPending }) =>
              isPending
                ? "text-black"
                : isActive
                ? "text-rose-800 underline"
                : " "
            }
          >
            English
          </NavLink>
          </div>


      </div>

{/* buttons */}
      <div className="flex flex-wrap justify-end items-center w-[80vw]">


        <div className="border mx-center px-2 py-4 text-lg font-semibold bg-rose-600">
          <NavLink
            to="/phonology"
            className={({ isActive, isPending }) =>
              isPending
                ? "text-black"
                : isActive
                ? "text-green-500 underline"
                : " "
            }
          >
            Phonology
          </NavLink>
        </div>  

        <div className="border mx-center px-2 py-4 text-lg font-semibold bg-rose-600">
          <NavLink
            to="/morphology"
            className={({ isActive, isPending }) =>
              isPending
                ? "text-black"
                : isActive
                ? "text-green-500 underline"
                : " "
            }
          >
            Morphology
          </NavLink>
          </div>  

          <div className="border mx-center  py-4 text-lg font-semibold  bg-rose-600">
          <NavLink
            to="/syntax"
            className={({ isActive, isPending }) =>
              isPending
                ? "text-black"
                : isActive
                ? "text-green-500 underline"
                : " "
            }
          >
            Syntax
          </NavLink>
        </div> 

          <div className="border mx-center px-2 py-4 text-lg font-semibold">
          <NavLink
            to="/syntax"
            className={({ isActive, isPending }) =>
              isPending
                ? "text-black"
                : isActive
                ? "text-rose-800 underline"
                : " "
            }
          >
            Listening Activity
          </NavLink>
        </div> 

          <div className="border mx-center px-2 py-4 text-lg font-semibold">
          <NavLink
            to="/syntax"
            className={({ isActive, isPending }) =>
              isPending
                ? "text-black"
                : isActive
                ? "text-rose-800 underline"
                : " "
            }
          >
            Spoken English
          </NavLink>
        </div> 

        <div className="border mx-center px-2 py-4 text-lg font-semibold">
          <NavLink
            to="/writings"
            className={({ isActive, isPending }) =>
              isPending
                ? "text-black"
                : isActive
                ? "text-rose-800 underline"
                : " "
            }
          >
            Composition
          </NavLink>
        </div>

        <div className="border mx-center px-2 py-4 text-lg font-semibold">
          <NavLink
            to="/meaning"
            className={({ isActive, isPending }) =>
              isPending
                ? "text-black"
                : isActive
                ? "text-rose-800 underline"
                : " "
            }
          >
            Meaning
          </NavLink>
        </div>  

        <div className="border mx-center px-2 py-4 text-lg font-semibold">
          <NavLink
            to="/translation"
            className={({ isActive, isPending }) =>
              isPending
                ? "text-black"
                : isActive
                ? "text-rose-800 underline"
                : " "
            }
          >
            Translation
          </NavLink>
        </div>


        <div className="border mx-center px-2 py-4 text-lg font-semibold bg-amber-400 text-fuchsia-400">
          <NavLink
            to="/ownInput"
            className={({ isActive, isPending }) =>
              isPending
                ? "text-black"
                : isActive
                ? "text-rose-800 underline"
                : " "
            }
          >
            Input
          </NavLink>
        </div>
  
            <div>
              <button className="font-bold border hover:bg-rose-800">IELTS</button>
              <button className="font-bold border hover:bg-rose-800">TOEFL</button>
              <button className="font-bold border hover:bg-rose-800">SAT</button>
              <button className="font-bold border hover:bg-rose-800">GRE</button>
              <input type="text" ></input><button className="font-bold border px-3">s</button>
            </div>
      </div>


    </div>
  );
};

export default EnglishNavbar;
