import VegetablesCard from "./VegetablesCard";

const VegetablesContainer = () => {

    return (
        <div>
            {/* Vegetables */}
            <div className="w-[100vw] bg-blue-400 border my-12 pt-4 pb-0 rounded-xl">
            <h2 className="w-[80vw] text-5xl font-bold text-center bg-blue-500 mx-auto py-3 rounded-lg">Vegetables (শাক-সবজি) </h2>            

            <div className="flex gap-18 overflow-scroll my-1 h-[65vh] ">
            <VegetablesCard photoURL= './vegetables/cabbage.png'     audioURL= "./vegetables/audio/cabbage.mp4"          name="cabbage"      meaning="বাঁধাকপি"      article="= a cabbage"        number="=> cabbages"      gender="= neuter geneder" ></VegetablesCard>
            <VegetablesCard photoURL= './vegetables/red cabbage.png' audioURL= "./vegetables/audio/red cabbage.mp4"      name="red cabbage"  meaning="লাল বাঁধাকপি"  article="= a red cabbage"    number="=> red cabbages"  gender="= neuter geneder" ></VegetablesCard>
            <VegetablesCard photoURL= './vegetables/cauliflower.png' audioURL= "./vegetables/audio/cauliflower.mp4"      name="cauliflower"  meaning="ফুলকপি"      article="= a cauliflower"    number="=> cauliflowers"       gender="= neuter geneder" ></VegetablesCard>
            <VegetablesCard photoURL= './vegetables/potato.png'      audioURL= "./vegetables/audio/potato.mp4"           name="potato"       meaning="আলু"         article="= a potato"         number="=> potatoes"       gender="= neuter geneder" ></VegetablesCard>
            <VegetablesCard photoURL= './vegetables/radish.png'      audioURL= "./vegetables/audio/radish.mp4"           name="radish"       meaning="মূলা"         article="= a radish"         number="=> radishes"       gender="= neuter geneder" ></VegetablesCard>
            <VegetablesCard photoURL= './vegetables/capcicum.png'    audioURL= "./vegetables/audio/capcicum.mp4"         name="capcicum"     meaning="ক্যাপসিকাম"   article="= a capcicum"       number="=> capcicums"      gender="= neuter geneder" ></VegetablesCard>
            <VegetablesCard photoURL= './vegetables/broccoli.png'    audioURL= "./vegetables/audio/broccoli.mp4"         name="broccoli"     meaning="ব্রোকলি"      article="= a broccoli"       number="=> broccolies"       gender="= neuter geneder" ></VegetablesCard>
            <VegetablesCard photoURL= './vegetables/cucumber.png'    audioURL= "./vegetables/audio/cucumber.mp4"         name="cucumber"     meaning="শশা"         article="= a cucumber"      number="=> cucumbers"       gender="= neuter geneder" ></VegetablesCard>
            <VegetablesCard photoURL= './vegetables/eggplant.png'    audioURL= "./vegetables/audio/eggplant.mp4"         name="eggplant"     meaning="বেগুন"       article="= an eggplant"      number="=> eggplants"      gender="= neuter geneder" ></VegetablesCard>
            <VegetablesCard photoURL= './vegetables/okra.png'        audioURL= "./vegetables/audio/okra.mp4"             name="okra"         meaning="ঢ়েঁড়শ"       article="= an okra"          number="=> okras"         gender="= neuter geneder" ></VegetablesCard>
            <VegetablesCard photoURL= './vegetables/pumpkin.png'     audioURL= "./vegetables/audio/pumpkin.mp4"          name="pumpkin"      meaning="মিষ্টিকুমড়া"    article="= a pumpkin"        number="=> pumpkins"      gender="= neuter geneder" ></VegetablesCard>
            <VegetablesCard photoURL= './vegetables/squash.png'      audioURL= "./vegetables/audio/squash.mp4"           name="squash"       meaning="স্কোয়াশ"      article="= a squash"         number="=> radishes"      gender="= neuter geneder" ></VegetablesCard>
            <VegetablesCard photoURL= './vegetables/carrot.png'      audioURL= "./vegetables/audio/carrot.mp4"           name="carrot"       meaning="গাজর"       article="= a carrot"         number="=> carrots"      gender="= neuter geneder" ></VegetablesCard>
            <VegetablesCard photoURL= './vegetables/turnip.png'      audioURL= "./vegetables/audio/turnip.mp4"           name="turnip"       meaning="শালগম"      article="= a turnip"         number="=> turnips"      gender="= neuter geneder" ></VegetablesCard>
            <VegetablesCard photoURL= './vegetables/'                audioURL= "./vegetables/audio/carrot.mp4"           name="carrot"       meaning="গাজর"       article="= a carrot"         number="=> carrots"      gender="= neuter geneder" ></VegetablesCard>
            </div>


            </div>
        </div>
    );
};



export default VegetablesContainer;