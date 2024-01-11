import { createBrowserRouter } from "react-router-dom";

import Home from "../components/Home";

import AddCoffee from "../components/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee";
import EnglishNavbar from "./../English/English Header/EnglishNavbar";
import English from "./../English/English";
import Phonology from "./../English/Phonology/Phonology";
import Morphology from "./../English/Morphology/Morphology";
import Meaning from "./../English/Meaning/Meaning";
import Translation from "./../English/Translation/Translation";
import WHQuestion from "./../English/Morphology/WHQuestion";
import Sentences from "../English/Syntax/Sentences";
import Pronouns from "./../English/Morphology/Pronouns";
import ArticlesAndDeterminers from "./../English/Morphology/ArticlesAndDeterminers";
import Syntax from "./../English/Syntax/Syntax";
import Tense from "./../English/Syntax/Tense/Tense";
import Writings from "./../English/Writings";
import FruitsContainer from "./../English/Morphology/FruitsContainer";
import VegetablesContainer from "./../English/Morphology/VegetablesContainer";
import FruitsBN from "./../English/Morphology/FruitsBN";
import OwnInput from "../English/OwnInput/OwnInput";
import Words from "../components/words/Words";
import Favorites from "../components/favorites/Favorites";
import Spelling from "../English/Spelling/Spelling";
import Speaking from "../English/Syntax/Speaking/Speaking";
import Listening from "../English/Syntax/Listening/Listening";
import Word from "./../English/Morphology/Word";
import Requirements from "../Requirements/Requirements";
import AlphabetComponent from "../English/Phonology/AlphabetComponent";
import PhoneticAlphabet from "../English/Phonology/PhoneticAlphabet";
import Vegetables from './../English/Morphology/mainVegetables';
import Login from "../Login/Login";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/addCoffee",
    element: <AddCoffee></AddCoffee>,
  },
  {
    path: "/updateCoffee",
    element: <UpdateCoffee></UpdateCoffee>,
  },

  {
    path: "/word/:id",
    element: <Word></Word>,
    loader: () => fetch("../../public/flowers.json"),
  },
  {
    path: "/englishNavbar",
    element: <EnglishNavbar></EnglishNavbar>,
  },
  {
    path: "/english",
    element: <English></English>,
  },
  {
    path: "/phonology",
    element: <Phonology></Phonology>,
  },
  {
    path: "/morphology",
    element: <Morphology></Morphology>,
  },
  {
    path: "/meaning",
    element: <Meaning></Meaning>,
  },
  {
    path: "/spelling",
    element: <Spelling></Spelling>,
  },
  {
    path: "/translation",
    element: <Translation></Translation>,
  },
  {
    path: "/morphology/whQuestion",
    element: <WHQuestion></WHQuestion>,
  },
  {
    path: "/sentences",
    element: <Sentences></Sentences>,
  },
  {
    path: "/morphology/words",
    element: <Words></Words>,
  },
  {
    path: "/morphology/favorites",
    element: <Favorites></Favorites>,
  },
  {
    path: "/morphology/pronouns",
    element: <Pronouns></Pronouns>,
  },
  {
    path: "/morphology/articlesAndDeterminers",
    element: <ArticlesAndDeterminers></ArticlesAndDeterminers>,
  },
  {
    path: "/syntax",
    element: <Syntax></Syntax>,
  },
  {
    path: "/speaking",
    element: <Speaking></Speaking>,
  },
  {
    path: "/listening",
    element: <Listening></Listening>,
  },
  {
    path: "/tense",
    element: <Tense></Tense>,
  },
  {
    path: "/writings",
    element: <Writings></Writings>,
  },
  {
    path: "/vocabulary/FruitsContainer",
    element: <FruitsContainer></FruitsContainer>,
  },
  {
    path: "/vocabulary/FruitsBN",
    element: <FruitsBN></FruitsBN>,
  },
  {
    path: "/vocabulary/VegetablesContainer",
    element: <VegetablesContainer></VegetablesContainer>,
  },
  {
    path: "/ownInput",
    element: <OwnInput></OwnInput>,
    loader: ()=>fetch(`http://localhost:3001/words`),
  },
  {
    path: "/favorites",
    element: <Favorites></Favorites>,
  },
  {
    path: "/Word",
    element: <Word></Word>,
  },
  {
    path: "/requirements",
    element: <Requirements></Requirements>,
  },
  {
    path: "/phonology/letters",
    element: <AlphabetComponent></AlphabetComponent>,
  },
  {
    path: "/phonology/phoneticAlphabet",
    element: <PhoneticAlphabet></PhoneticAlphabet>,
  },  
  {
    path: "/login",
    element: <Login></Login>,
  },
  
]);

export default Route;
