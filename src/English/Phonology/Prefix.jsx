import PhonologyNavbar from "../English Header/PhonologyNavbar";


const Prefix = () => {
    return (
        <div>
            <PhonologyNavbar></PhonologyNavbar>
            <div className="border rounded-lg m-6">
                <h2 className="text-center text-4xl text-pink-700 font-bold">English Prefix</h2>
            <div className="flex flex-wrap m-5 p-5">
            <p className="w-64 h-16 rounded-lg text-3xl p-5 border bg-blue-600 text-yellow-400 font-bold flex justify-center items-center ">-pre</p>
            <p className="w-64 h-16 rounded-lg text-3xl p-5 border bg-blue-600 text-yellow-400 font-bold flex justify-center items-center ">-post</p>
            <p className="w-64 h-16 rounded-lg text-3xl p-5 border bg-blue-600 text-yellow-400 font-bold flex justify-center items-center ">-con</p>
            <p className="w-64 h-16 rounded-lg text-3xl p-5 border bg-blue-600 text-yellow-400 font-bold flex justify-center items-center ">-re</p>
            <p className="w-64 h-16 rounded-lg text-3xl p-5 border bg-blue-600 text-yellow-400 font-bold flex justify-center items-center ">-de</p>
            </div>
            </div>
        </div>
    );
};

export default Prefix;