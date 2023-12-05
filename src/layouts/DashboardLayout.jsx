import { NavLink, Outlet } from "react-router-dom";



const DashboardLayout = () => {
   

    return (


        <div className="flex">  
                 
            <div className = "h-screen pl-4 w-[20%] bg-zinc-300 text-md font-bg leading-loose text-xl font-semibold"> 
                    {/* how to mention line height? */}
            <ul>               
                <li>
                    <NavLink to="/dashboard/company" className={({ isActive, isPending }) =>
    isPending ? "text-black" : isActive ? "text-green-400 underline" : ""}>Company/Business</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/profile" className={({ isActive, isPending }) =>
    isPending ? "text-black" : isActive ? "text-green-400 underline" : ""}>Profile</NavLink>
                </li>               
                <li>
                    <NavLink to="/dashboard/editProfile" className={({ isActive, isPending }) =>
    isPending ? "text-black" : isActive ? "text-green-400 underline" : ""}>Edit Profile</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/WebDevelopment" className={({ isActive, isPending }) =>
    isPending ? "text-black" : isActive ? "text-green-400 underline" : ""}>WebDevelopment</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/accounting" className={({ isActive, isPending }) =>
    isPending ? "text-black" : isActive ? "text-green-400 underline" : ""}> Accounting</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/estimating" className={({ isActive, isPending }) =>
    isPending ? "text-black" : isActive ? "text-green-400 underline" : ""}>Estimating</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/civilEngineering" className={({ isActive, isPending }) =>
    isPending ? "text-black" : isActive ? "text-green-400 underline" : ""}>Civil Engineering</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/mechanicalEngineering" className={({ isActive, isPending }) =>
    isPending ? "text-black" : isActive ? "text-green-400 underline" : ""}>Mechanical Engineering</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/electricalEngineering" className={({ isActive, isPending }) =>
    isPending ? "text-black" : isActive ? "text-green-400 underline" : ""}>Electrical Engineering</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/computerEngineering" className={({ isActive, isPending }) =>
    isPending ? "text-black" : isActive ? "text-green-400 underline" : ""}>Computer Engineering</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/electronics" className={({ isActive, isPending }) =>
    isPending ? "text-black" : isActive ? "text-green-400 underline" : ""}>Electronics</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/programming" className={({ isActive, isPending }) =>
    isPending ? "text-black" : isActive ? "text-green-400 underline" : ""}>Programming</NavLink>
                </li>
            </ul>
            </div>
            <div className="w-[80%] p-4"><Outlet></Outlet></div>
            
        </div>



    );
};

export default DashboardLayout;