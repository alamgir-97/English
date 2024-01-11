import { NavLink } from "react-router-dom";

const EnglishNavbar = () => {
  return (
    <div className="flex jutify-between bg-gray-500 ">
      <div className="flex justify-between">
      
{/* Logo */}
      <div className="text-4xl text-lime-500 font-bold text-center w-[20vw] my-auto">
          <NavLink
            to="/english"
            className={({ isActive, isPending }) =>
              isPending
                ? "text-black"
                : isActive
                ? "text-amber-500 underline"
                : "  hover:text-5xl"
            }
          >
            <p>English</p>
           <p className="text-[14px] text-white -mt-3 hover:-mt-1"> for bengali speakers</p>
          </NavLink>
          </div>


      </div>

{/* buttons */}
      <div className="flex flex-wrap justify-end items-center w-[80vw] gap-1">


        <div className="mx-center px-2 py-2 rounded-lg text-lg text-white font-semibold hover:bg-rose-800 hover:font-bold">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending
                ? "text-black"
                : isActive
                ? "text-gray-300  py-1 px-4 underline"
                : ""
            }
          >
            Home
          </NavLink>
        </div>  
        <div className="mx-center px-2 py-2 rounded-lg text-lg text-white font-semibold hover:bg-rose-800 hover:font-bold">
          <NavLink
            to="/phonology"
            className={({ isActive, isPending }) =>
              isPending
                ? "text-black"
                : isActive
                ? "text-gray-300  py-1 px-4 underline"
                : ""
            }
          >
            Phonology
          </NavLink>
        </div>  

        <div className=" mx-center px-2 py-2 rounded-lg text-lg text-white font-semibold hover:bg-rose-800 hover:font-bold">
          <NavLink
            to="/morphology"
            className={({ isActive, isPending }) =>
              isPending
                ? "text-black"
                : isActive
                ? "text-gray-300  py-1 px-4 underline"
                : ""
            }
          >
            Morphology
          </NavLink>
          </div>  

          <div className="mx-center px-2 py-2 rounded-lg text-lg text-white font-semibold hover:bg-rose-800 hover:font-bold">
          <NavLink
            to="/syntax"
            className={({ isActive, isPending }) =>
              isPending
                ? "text-black"
                : isActive
                ? "text-gray-300  py-1 px-4 underline"
                : ""
            }
          >
            Syntax
          </NavLink>
        </div> 

          <div className="mx-center px-2 py-2 rounded-lg text-lg text-white font-semibold hover:bg-rose-800 hover:font-bold">
          <NavLink
            to="/listening"
            className={({ isActive, isPending }) =>
              isPending
                ? "text-black"
                : isActive
                ? "text-gray-300  py-1 px-4 underline"
                : ""
            }
          >
            Listening
          </NavLink>
        </div> 

          <div className="mx-center px-2 py-2 rounded-lg text-lg text-white font-semibold hover:bg-rose-800 hover:font-bold">
          <NavLink
            to="/speaking"
            className={({ isActive, isPending }) =>
              isPending
                ? "text-black"
                : isActive
                ? "text-gray-300  py-1 px-4 underline"
                : ""
            }
          >
            Speaking
          </NavLink>
        </div> 

        <div className=" mx-center px-2 py-2 rounded-lg text-lg text-white font-semibold hover:bg-rose-800 hover:font-bold">
          <NavLink
            to="/writings"
            className={({ isActive, isPending }) =>
              isPending
                ? "text-black"
                : isActive
                ? "text-gray-300  py-1 px-4 underline"
                : ""
            }
          >
            Writing
          </NavLink>
        </div>

        <div className=" mx-center px-2 py-2 rounded-lg text-lg text-white font-semibold hover:bg-rose-800 hover:font-bold">
          <NavLink
            to="/meaning"
            className={({ isActive, isPending }) =>
              isPending
                ? "text-black"
                : isActive
                ? "text-gray-300  py-1 px-4 underline"
                : ""
            }
          >
            Meaning
          </NavLink>
        </div>  
        <div className=" mx-center px-2 py-2 rounded-lg text-lg text-white font-semibold hover:bg-rose-800 hover:font-bold">
          <NavLink
            to="/spelling"
            className={({ isActive, isPending }) =>
              isPending
                ? "text-black"
                : isActive
                ? "text-gray-300  py-1 px-4 underline"
                : ""
            }
          >
            Spelling
          </NavLink>
        </div>  

        <div className=" mx-center px-2 py-2 rounded-lg text-lg text-white font-semibold hover:bg-rose-800 hover:font-bold">
          <NavLink
            to="/pronunciation"
            className={({ isActive, isPending }) =>
              isPending
                ? "text-black"
                : isActive
                ? "text-gray-300  py-1 px-4 underline"
                : ""
            }
          >
            Pronunciation
          </NavLink>
        </div>  

        <div className="mx-center px-2 py-2 rounded-lg text-lg text-white font-semibold hover:bg-rose-800 hover:font-bold">
          <NavLink
            to="/translation"
            className={({ isActive, isPending }) =>
              isPending
                ? "text-black"
                : isActive
                ? "text-gray-300  py-1 px-4 underline"
                : ""
            }
          >
            Translation
          </NavLink>
        </div>


        <div className="mx-center px-2 py-2 rounded-lg text-lg text-white font-semibold hover:bg-rose-800 hover:font-bold">
          <NavLink
            to="/ownInput"
            className={({ isActive, isPending }) =>
              isPending
                ? "text-black"
                : isActive
                ? "text-gray-300  py-1 px-4 underline"
                : ""
            }
          >
            Input
          </NavLink>
          </div>
        <div className="mx-center px-2 py-2 rounded-lg text-lg text-white font-semibold hover:bg-rose-800 hover:font-bold">
          <NavLink
            to="/requirements"
            className={({ isActive, isPending }) =>
              isPending
                ? "text-black"
                : isActive
                ? "text-gray-300  py-1 px-4 underline"
                : ""
            }
          >
            Requirements
          </NavLink>
        </div>
        <div className="mx-center px-2 py-2 rounded-lg text-lg text-white font-semibold hover:bg-rose-800 hover:font-bold">
          <NavLink
            to="/login"
            className={({ isActive, isPending }) =>
              isPending
                ? "text-black"
                : isActive
                ? "text-gray-300  py-1 px-4 underline"
                : ""
            }
          >
            Login
          </NavLink>
        </div>
  
            <div >
              <button className="text-cyan-400 bg-gray-600 font-bold border px-2 hover:bg-rose-800 focus:underline">IELTS</button>
              <button className="text-cyan-400 bg-gray-600 font-bold border px-2 hover:bg-rose-800 focus:underline">TOEFL</button>
              <button className="text-cyan-400 bg-gray-600 font-bold border px-2 hover:bg-rose-800  focus:underline">SAT</button>
              <button className="text-cyan-400 bg-gray-600 font-bold border px-2 hover:bg-rose-800 focus:underline">GRE</button>
              <input type="text" ></input><button className="font-bold border px-3">s</button>
            </div>
      </div>


    </div>
  );
};

export default EnglishNavbar;



// import { NavLink } from "react-router-dom";

// const EnglishNavbar = () => {
//   return (
//     <div className="flex jutify-between bg-yellow-600 ">
//       <div className="flex justify-between">
      
// {/* Logo */}
//       <div className="text-4xl text-pink-800 font-bold text-center w-[20vw] my-auto">
//           <NavLink
//             to="/english"
//             className={({ isActive, isPending }) =>
//               isPending
//                 ? "text-black"
//                 : isActive
//                 ? "text-rose-800 underline"
//                 : " "
//             }
//           >
//            <p> English</p>
//           </NavLink>
//           </div>


//       </div>

// {/* buttons */}
//       <div className="flex flex-wrap justify-end items-center w-[80vw]">


//         <div className="border mx-center px-2 py-4 text-lg font-semibold bg-gray-600 hover:bg-rose-800">
//           <NavLink
//             to="/phonology"
//             className={({ isActive, isPending }) =>
//               isPending
//                 ? "text-black"
//                 : isActive
//                 ? "text-green-500 underline"
//                 : " "
//             }
//           >
//             Phonology
//           </NavLink>
//         </div>  

//         <div className="border mx-center px-2 py-4 text-lg font-semibold bg-gray-600 hover:bg-rose-800">
//           <NavLink
//             to="/morphology"
//             className={({ isActive, isPending }) =>
//               isPending
//                 ? "text-black"
//                 : isActive
//                 ? "text-green-500 underline"
//                 : " "
//             }
//           >
//             Morphology
//           </NavLink>
//           </div>  

//           <div className="border mx-center  py-4 text-lg font-semibold  bg-gray-600 hover:bg-rose-800">
//           <NavLink
//             to="/syntax"
//             className={({ isActive, isPending }) =>
//               isPending
//                 ? "text-black"
//                 : isActive
//                 ? "text-green-500 underline"
//                 : " "
//             }
//           >
//             Syntax
//           </NavLink>
//         </div> 

//           <div className="border mx-center px-2 py-4 text-lg font-semibold">
//           <NavLink
//             to="/syntax"
//             className={({ isActive, isPending }) =>
//               isPending
//                 ? "text-black"
//                 : isActive
//                 ? "text-rose-800 underline"
//                 : " "
//             }
//           >
//             Listening Activity
//           </NavLink>
//         </div> 

//           <div className="border mx-center px-2 py-4 text-lg font-semibold">
//           <NavLink
//             to="/syntax"
//             className={({ isActive, isPending }) =>
//               isPending
//                 ? "text-black"
//                 : isActive
//                 ? "text-rose-800 underline"
//                 : " "
//             }
//           >
//             Spoken English
//           </NavLink>
//         </div> 

//         <div className="border mx-center px-2 py-4 text-lg font-semibold">
//           <NavLink
//             to="/writings"
//             className={({ isActive, isPending }) =>
//               isPending
//                 ? "text-black"
//                 : isActive
//                 ? "text-rose-800 underline"
//                 : " "
//             }
//           >
//             Composition
//           </NavLink>
//         </div>

//         <div className="border mx-center px-2 py-4 text-lg font-semibold">
//           <NavLink
//             to="/meaning"
//             className={({ isActive, isPending }) =>
//               isPending
//                 ? "text-black"
//                 : isActive
//                 ? "text-rose-800 underline"
//                 : " "
//             }
//           >
//             Meaning
//           </NavLink>
//         </div>  
//         <div className="border mx-center px-2 py-4 text-lg font-semibold">
//           <NavLink
//             to="/spelling"
//             className={({ isActive, isPending }) =>
//               isPending
//                 ? "text-black"
//                 : isActive
//                 ? "text-rose-800 underline"
//                 : " "
//             }
//           >
//             Spelling
//           </NavLink>
//         </div>  

//         <div className="border mx-center px-2 py-4 text-lg font-semibold">
//           <NavLink
//             to="/translation"
//             className={({ isActive, isPending }) =>
//               isPending
//                 ? "text-black"
//                 : isActive
//                 ? "text-rose-800 underline"
//                 : " "
//             }
//           >
//             Translation
//           </NavLink>
//         </div>


//         <div className="border mx-center px-2 py-4 text-lg font-semibold text-gray-800 text-fuchsia-400">
//           <NavLink
//             to="/ownInput"
//             className={({ isActive, isPending }) =>
//               isPending
//                 ? "text-black"
//                 : isActive
//                 ? "text-rose-800 underline"
//                 : " "
//             }
//           >
//             Input
//           </NavLink>
//         </div>
  
//             <div>
//               <button className="font-bold border hover:bg-rose-800">IELTS</button>
//               <button className="font-bold border hover:bg-rose-800">TOEFL</button>
//               <button className="font-bold border hover:bg-rose-800">SAT</button>
//               <button className="font-bold border hover:bg-rose-800">GRE</button>
//               <input type="text" ></input><button className="font-bold border px-3">s</button>
//             </div>
//       </div>


//     </div>
//   );
// };

// export default EnglishNavbar;

