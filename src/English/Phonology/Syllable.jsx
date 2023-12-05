import PhonologyNavbar from '../English Header/PhonologyNavbar';

const Syllable = () => {
    return (
        <div>
            <PhonologyNavbar></PhonologyNavbar>
            <div className="border rounded-lg m-6">
                <h2 className="text-center text-4xl text-pink-700 font-bold">English Syllable</h2>
            <div className="flex flex-wrap m-5 p-5">
            <p className="w-96 h-16 rounded-lg text-3xl p-5 border bg-blue-600 text-yellow-400 font-bold flex justify-center items-center ">beau-ti-ful</p>
            <p className="w-96 h-16 rounded-lg text-3xl p-5 border bg-blue-600 text-yellow-400 font-bold flex justify-center items-center ">re-con-di-tion</p>
            <p className="w-96 h-16 rounded-lg text-3xl p-5 border bg-blue-600 text-yellow-400 font-bold flex justify-center items-center ">pho-no-logy</p>
            <p className="w-96 h-16 rounded-lg text-3xl p-5 border bg-blue-600 text-yellow-400 font-bold flex justify-center items-center ">de-mand</p>
            <p className="w-96 h-16 rounded-lg text-3xl p-5 border bg-blue-600 text-yellow-400 font-bold flex justify-center items-center ">re-mand</p>
            <p className="w-96 h-16 rounded-lg text-3xl p-5 border bg-blue-600 text-yellow-400 font-bold flex justify-center items-center ">ex-tra-or-di-na-ry</p>
            
            </div>
            </div>
        </div>
    );
};

export default Syllable;