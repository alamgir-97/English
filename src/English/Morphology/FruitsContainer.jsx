import FruitsCard from "./FruitsCard";

const FruitsContainer = () => {

    return (
        <div>
            {/* Fruits */}
            <div className="w-[100vw] bg-green-300 border my-12 pt-8 pb-0 rounded-xl">
            <h2 className="w-[80vw] text-5xl font-bold text-center bg-green-600 mx-auto py-3 rounded-lg">Fruits (ফলমূল) </h2>            

            <div className="flex gap-8 overflow-scroll my-1 h-[65vh] ">
            <FruitsCard photoURL= './fruits/apple.png'     audioURL= "./fruits/audio/cabbage.mp4"          name="apple"         meaning="আপেল"      article="= an apple"        number="=> apples"      gender="= neuter geneder" ></FruitsCard>
            <FruitsCard photoURL= './fruits/banana.png' audioURL= "./fruits/audio/red cabbage.mp4"         name="banana"        meaning="কলা"        article="= a banana"        number="=> bananas"  gender="= neuter geneder" ></FruitsCard>
            <FruitsCard photoURL= './fruits/mango.png' audioURL= "./fruits/audio/cauliflower.mp4"          name="mango"         meaning="আম"      article="= a mango"           number="=> mangoes"       gender="= neuter geneder" ></FruitsCard>
            <FruitsCard photoURL= './fruits/grape.png'      audioURL= "./fruits/audio/potato.mp4"          name="grape"         meaning="আঙুর"         article="= a grape"         number="=> grapes"       gender="= neuter geneder" ></FruitsCard>
            <FruitsCard photoURL= './fruits/orange.png'      audioURL= "./fruits/audio/radish.mp4"         name="orange"        meaning="কমলা"         article="= an ornage"         number="=> "       gender="= neuter geneder" ></FruitsCard>
            <FruitsCard photoURL= './fruits/lichi.png'    audioURL= "./fruits/audio/capcicum.mp4"          name="lichi"         meaning="লিচু"        article="= a lichi"             number="=> lichi??"      gender="= neuter geneder" ></FruitsCard>
            <FruitsCard photoURL= './fruits/black berry.png'    audioURL= "./fruits/audio/broccoli.mp4"    name="black berry"   meaning="কালোজাম"      article="= a black berry"       number="=> black berries"       gender="= neuter geneder" ></FruitsCard>
            <FruitsCard photoURL= './fruits/dragon.png'    audioURL= "./fruits/audio/cucumber.mp4"         name="dragon fruits" meaning="ড্রাগন ফল"   article="= a dragon fruit"      number="=> dradon fruits"       gender="= neuter geneder" ></FruitsCard>
            <FruitsCard photoURL= './fruits/lemon.png'    audioURL= "./fruits/audio/eggplant.mp4"          name="lemon"         meaning="লেবু"       article="= a lemon"              number="=> lemons"       gender="= neuter geneder" ></FruitsCard>
            <FruitsCard photoURL= './fruits/papaya.png'        audioURL= "./fruits/audio/okra.mp4"         name="papaya"        meaning="পেঁপে"       article="= a papaya"          number="=> papayas?"       gender="= neuter geneder" ></FruitsCard>
            <FruitsCard photoURL= './fruits/kiwi.png'     audioURL= "./fruits/audio/pumpkin.mp4"           name="kiwi fruit"    meaning="কিউই ফল"    article="= a kiwi fruit"        number="=> kiwi fruits"      gender="= neuter geneder" ></FruitsCard>
            <FruitsCard photoURL= './fruits/olive.png'      audioURL= "./fruits/audio/squash.mp4"          name="olive"         meaning="জলপাই"      article="= an olive"         number="=> olives"      gender="= neuter geneder" ></FruitsCard>
            <FruitsCard photoURL= './fruits/jackfruit.png'      audioURL= "./fruits/audio/carrot.mp4"      name="jackfruit"     meaning="কাঁঠাল"       article="= a jackfruit"         number="=> jackfruits"      gender="= neuter geneder" ></FruitsCard>
            </div>


            </div>
        </div>
    );
};



export default FruitsContainer;