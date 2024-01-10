import EnglishNavbar from "../English Header/EnglishNavbar";
import TranslationNavbar from "../English Header/TranslationNavbar";




const Translation = () => {
    return (
        <div>
            <EnglishNavbar></EnglishNavbar>
            <TranslationNavbar></TranslationNavbar>
    <h1 className="text-4xl text-center py-8">Translation</h1>
    <p className="text-2xl text-left py-4">অনুবাদ প্রধানত দুই প্রকার।শাব্দিক অনুবাদ ও ভাবানুবাদ।  </p>
    <p className="text-2xl text-left py-4">অনুবাদ করার জন্য context-এর দিকে খেয়াল রাখা জরুরী। </p>
    <p className="text-2xl text-left py-4">এছাড়া যে ভাষা হতে অনুবাদ করা হচ্ছে ও যে ভাষায় অনুবাদ করা হচ্ছে উভয় ভাষার সংস্কৃতির যথাযথ জ্ঞানও প্রয়োজন।  </p>
    <p className="text-2xl text-left py-4">যেমন ইংরেজীতে মধ্যম পুরুষের জন্য সব সময় you ব্যবহার করা হয়, কিন্তু বাংলায় you-এর পরিবর্তে হয় তুমি, আপনি অথবা তুই ব্যবহার হবে। এক্ষেত্রে ইংরেজী হতে অনুবাদ করার সময় বুঝতে চেষ্টা করতে হবে you দিয়ে কাকে বোঝানো হচ্ছে। এক্ষেত্রে ক্লু বা হিন্টস যে বাক্য অনুবাদ করা হচ্ছে তার পূর্বের বা পরের কোন বাক্যেই রয়েছে।</p>
    <p className="text-2xl text-left py-4">যেমন ইংরেজীতে সে বুঝানোর জন্য he এবং she ব্যবহার করা হয়। তাই বাংলা হতে ইংরেজী অনুবাদ করার সময় খেয়াল রাখতে হবে সে দিয়ে he নাকি she-কে বোঝানো হয়েছে।</p>
    <p className="text-2xl text-left py-4">অনুবাদ করার জন্য পরিভাষার তালিকা জেনে রাখাও উচিত। </p>
        </div>
    );
};

export default Translation;