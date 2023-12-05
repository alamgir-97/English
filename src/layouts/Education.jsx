
import { NavLink, Outlet } from 'react-router-dom';

const Education = () => {
    return (
        <div className='flex'>
            <div className = "h-screen pl-4 w-[20%] bg-zinc-300 text-md font-bg leading-loose text-xl font-semibold"> 
                    {/* how to mention line height? */}
            <ul>               
                <li>
                    <NavLink to="/frontPage" className={({ isActive, isPending }) =>
    isPending ? "text-black" : isActive ? "text-green-400 underline" : ""}>Front Page</NavLink>
                </li>
                <li>
                    <NavLink to="/curriculum" className={({ isActive, isPending }) =>
    isPending ? "text-black" : isActive ? "text-green-400 underline" : ""}>Curriculum</NavLink>
                </li>
                <li>
                    <NavLink to="/bengali" className={({ isActive, isPending }) =>
    isPending ? "text-black" : isActive ? "text-green-400 underline" : ""}>Bengali</NavLink>
                </li>               
                <li>
                    <NavLink to="/english" className={({ isActive, isPending }) =>
    isPending ? "text-black" : isActive ? "text-green-400 underline" : ""}>English</NavLink>
                </li>
                <li>
                    <NavLink to="/mathematics" className={({ isActive, isPending }) =>
    isPending ? "text-black" : isActive ? "text-green-400 underline" : ""}> Mathematics</NavLink>
                </li>
                <li>
                    <NavLink to="/arabic" className={({ isActive, isPending }) =>
    isPending ? "text-black" : isActive ? "text-green-400 underline" : ""}> Arabic</NavLink>
                </li>
                
            </ul>
            </div>

            <div className="w-[80%] p-4"><Outlet></Outlet></div>
        </div>
    );
};

export default Education;