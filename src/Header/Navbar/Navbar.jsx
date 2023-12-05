import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";



const Navbar = () => {
    const {user} = useContext(AuthContext)
    return (
    <div className="sticky top-0 w-full z-50">
<div className="flex justify-between p-2 bg-zinc-400 ">
        <Logo></Logo>
            
        <ul className="flex flex-wrap gap-2">
            <li>
                <NavLink to="/" className={({ isActive, isPending, isTransitioning }) =>
                [   isPending ? "text-black" : "",
                    isActive ? "text-rose-800 underline" : "",
                    isTransitioning ? "text-blue-800 text-2xl" : "",
                ].join(" ")}>Home
                </NavLink>
            </li>
                <li><NavLink to="/services" className={({ isActive, isPending }) =>
                    isPending ? "text-black" : isActive ? "text-rose-800 underline" : ""}>Services</NavLink>
                </li>
                <li><NavLink to="/projects"  className={({ isActive, isPending }) =>
                    isPending ? "text-black" : isActive ? "text-rose-800 underline" : ""}>Projects</NavLink></li>
                <li><NavLink to="team"  className={({ isActive, isPending }) =>
                    isPending ? "text-black" : isActive ? "text-rose-800 underline" : ""}>Team</NavLink></li>                                          
                <li><NavLink to={`/contacts/1`}  className={({ isActive, isPending }) =>
                    isPending ? "text-black" : isActive ? "text-rose-800 underline" : ""}>Contact1</NavLink></li>                                          
                <li><NavLink to={`/contacts/2`}  className={({ isActive, isPending }) =>
                    isPending ? "text-black" : isActive ? "text-rose-800 underline" : ""} >Contact2</NavLink></li>                                         
                {user && <>
                    <li><NavLink to="newsChannels"  className={({ isActive, isPending }) =>
                    isPending ? "text-black" : isActive ? "text-rose-800 underline" : ""}>NewsChannels</NavLink></li>                                         
                <li><NavLink to="/blog"  className={({ isActive, isPending }) =>
                    isPending ? "text-black" : isActive ? "text-rose-800 underline" : ""}>Blog</NavLink></li>             
               
                </>}
                <div className="flex gap-2 mx-6">
                    {/* <img src="../../../public/Alamgir.jpg" alt="image" className="w-10 h-10 rounded-full border -mt-1"/> */}
                   
                <li><NavLink to="/register" className="btn btn-sm">Register</NavLink></li>
                
                 
                {user ?<><span>{user.displayName}</span><span>{user.email}</span> <img className="w-12 h-12 rounded-full border-2" src={user.photoURL}></img>
                <li><NavLink to="/signOut"  className="btn btn-sm">Sign out</NavLink></li> </>:
                <><li><NavLink to="/signIn"  className="btn btn-sm">Sign In</NavLink></li> </>}    
                </div>
                  
                
                <li><NavLink to="/education"  className={({ isActive, isPending }) =>
    isPending ? "text-black" : isActive ? "text-rose-800 underline" : "border p-2"}>Education</NavLink></li>                                          
                <li><NavLink to="/education"  className={({ isActive, isPending }) =>
    isPending ? "text-black" : isActive ? "text-rose-800 underline" : ""}>Engineering</NavLink></li>                                          
                <li><NavLink to="/dashboard"  className={({ isActive, isPending }) =>
    isPending ? "text-black" : isActive ? "text-rose-800 underline" : "border p-2"}>Business Dashboard</NavLink></li>                                          
                <li><NavLink to="/help"  className={({ isActive, isPending }) =>
    isPending ? "text-black" : isActive ? "text-rose-800 underline" : ""}>Help</NavLink></li>                                         
                                                      
        </ul>
            


        </div>
<div className="h-3 bg-white text-center shadow-lg"></div>
    </div>
     
    );
};

export default Navbar;