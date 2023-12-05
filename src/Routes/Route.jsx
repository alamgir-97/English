import { createBrowserRouter } from "react-router-dom";


import Home from "../components/Home";

import AddCoffee from "../components/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee";
import EnglishNavbar from './../English/English Header/EnglishNavbar';
import English from './../English/English';
import Phonology from './../English/Phonology/Phonology';
import Morphology from './../English/Morphology/Morphology';
import Meaning from './../English/Meaning/Meaning';
import Translation from './../English/Translation/Translation';
import WHQuestion from './../English/Morphology/WHQuestion';
import Sentence from './../English/Syntax/Sentence';
import Pronouns from './../English/Morphology/Pronouns';
import ArticlesAndDeterminers from './../English/Morphology/ArticlesAndDeterminers';
import Syntax from './../English/Syntax/Syntax';
import Tense from './../English/Syntax/Tense/Tense';
import Writings from './../English/Writings';
import FruitsContainer from './../English/Morphology/FruitsContainer';
import TestFruits from './../English/Morphology/TestFruits';
import VegetablesContainer from './../English/Morphology/VegetablesContainer';
import FruitsBN from './../English/Morphology/FruitsBN';
import OwnInput from "../English/OwnInput/OwnInput";
import Word from "../components/words/Word";
import Words from "../components/words/Words";
import Favorites from "../components/favorites/Favorites";







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
    path: '/words',
    element: <Words></Words>
  },
  {
    path: "/word/:id",
    element:<Word></Word>,
    loader:()=>fetch('../../public/flowers.json')
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
    element: <Morphology></Morphology>
  },
      {
        path: "/meaning",
        element: <Meaning></Meaning>
      },
      {
        path: "/translation",
        element: <Translation></Translation>
      },
      {
        path: "/morphology/whQuestion",
        element: <WHQuestion></WHQuestion>,
      },
      {
        path: "/sentence",
        element: <Sentence></Sentence>,
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
        path: "/vocabulary/TestFruits",
        element: <TestFruits></TestFruits>,
        // loader: ()=>fetch('/fruits.json'),
      },
      {
        path: "/vocabulary/VegetablesContainer",
        element: <VegetablesContainer></VegetablesContainer>,
      },        
      {
        path: "/ownInput",
        element: <OwnInput></OwnInput>,
      },
      {
        path: "/favorites",
        element: <Favorites></Favorites>,
      }
        ]);

export default Route;