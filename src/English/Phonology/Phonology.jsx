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
              
            <div>
                <p>একটা শব্দের অনেক উচ্চারণ থাকে। এটা অঞ্চল ভেদে যেমন ভিন্ন হয় তেমনি অনেক সময় ব্যাক্তিভেদেও ভিন্ন হয়। তাই একটা শব্দ শেখার সময় এর ভিন্ন ভিন্ন উচ্চারণগুলোও যতদূর সম্ভব শেখা শুরু করা উচিত।</p>
                <p>একটা শব্দের যেমন অনেকগুলো উচ্চারণ থাকলেও নিজে ব্যবহার করার সময় যতদূর সম্ভব একটা উচ্চারণ ফলো করা উচিত। সে উচ্চারণটা কোনটা হবে।</p>
            </div>       
        </div>
    );
};

export default Alphabet;