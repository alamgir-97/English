import EnglishNavbar from "../English Header/EnglishNavbar";
import PhonologyNavbar from "../English Header/PhonologyNavbar";
import {Helmet} from "react-helmet";

const Alphabet = () => {
    return (
        <div>
            <Helmet>
    <title>Phonology</title>
</Helmet>
            <EnglishNavbar></EnglishNavbar>
            <PhonologyNavbar></PhonologyNavbar>            
        </div>
    );
};

export default Alphabet;