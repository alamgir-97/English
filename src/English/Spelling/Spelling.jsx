import EnglishNavbar from "../English Header/EnglishNavbar";
import PhonologyNavbar from "../English Header/PhonologyNavbar";
import {Helmet} from "react-helmet";

const Spelling = () => {
    return (
        <div>
            <Helmet>
    <title>Spelling</title>
</Helmet>
            <EnglishNavbar></EnglishNavbar>
            <PhonologyNavbar></PhonologyNavbar>     
            <div>
                <p>Spelling-এর নিয়মকানুন</p>              
            </div>       
        </div>
    );
};

export default Spelling;