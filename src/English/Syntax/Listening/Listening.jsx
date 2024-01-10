import EnglishNavbar from "../../English Header/EnglishNavbar";
import ListeningNavbar from "../../English Header/ListeningNavbar";

const Listening = () => {
    return (
        <div>
            <EnglishNavbar></EnglishNavbar>
            <ListeningNavbar></ListeningNavbar>
            <h1 className="text-4xl text-center py-8">Listening</h1>
            <p className="text-2xl text-left py-4">Do not expect uniform pronunciation of same word.</p>    
        </div>
    );
};

export default Listening;