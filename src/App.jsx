import "./components/styles/App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Austria from "./pages/Austria";
import England from "./pages/England";
import France from "./pages/France";
import Germany from "./pages/Germany";
import Italy from "./pages/Italy";
import Russia from "./pages/Russia";
import Turkey from "./pages/Turkey";
import PureBalkanGambit from "./pages/openings/austriaOpenings/PureBalkanGambit";
import TriesteVariation from "./pages/openings/austriaOpenings/TriesteVariation";
import TyrolianVariation from "./pages/openings/austriaOpenings/TyrolianVariation";
import BohemianAberration from "./pages/openings/austriaOpenings/BohemianAberration";
import BudapestVariation from "./pages/openings/austriaOpenings/BudapestVariation";
import GaliciaVariation from "./pages/openings/austriaOpenings/GaliciaVariation";
import PureHedgehog from "./pages/openings/austriaOpenings/PureHedgehog";
import AlpineHedgehog from "./pages/openings/austriaOpenings/AlpineHedgehog";
import Porcupine from "./pages/openings/austriaOpenings/Porcupine";
import SouthernHedgehog from "./pages/openings/austriaOpenings/SouthernHedgehog";
import BlueWaterOpening from "./pages/openings/austriaOpenings/BlueWaterOpening";
import WalesVariation from "./pages/openings/englandOpenings/WalesVariation";
import YorkshireVariation from "./pages/openings/englandOpenings/YorkshireVariation";
import NorthernYorkshire from "./pages/openings/englandOpenings/NorthernYorkshire";
import ChurchillOpening from "./pages/openings/englandOpenings/ChurchillOpening";
import WelshSplit from "./pages/openings/englandOpenings/WelshSplit";
import EdinburghSplit from "./pages/openings/englandOpenings/EdinburghSplit";
import NorthernDash from "./pages/openings/franceOpenings/NorthernDash";
import EnglishDefense from "./pages/openings/franceOpenings/EnglishDefense";
import MaginotOpening from "./pages/openings/franceOpenings/MaginotOpening";
import BurgundyVariation from "./pages/openings/franceOpenings/BurgundyVariation";
import BelgianVariation from "./pages/openings/franceOpenings/BelgianVariation";
import VineyardVariation from "./pages/openings/franceOpenings/VineyardVariation";
import PicardyOpening from "./pages/openings/franceOpenings/PicardyOpening";
import DanishVariation from "./pages/openings/germanyOpenings/DanishVariation";
import DutchVariation from "./pages/openings/germanyOpenings/DutchVariation";
import BurgundianGambit from "./pages/openings/germanyOpenings/BurgundianGambit";
import SilesianOpening from "./pages/openings/germanyOpenings/SilesianOpening";
import TyrolianOpening from "./pages/openings/germanyOpenings/TyrolianOpening";
import EaglesNest from "./pages/openings/germanyOpenings/EaglesNest";
import ObrianiAttack from "./pages/openings/italyOpenings/ObrianiAttack";
import TyrolianLepanto from "./pages/openings/italyOpenings/TyrolianLepanto";
import AlpineLepanto from "./pages/openings/italyOpenings/AlpineLepanto";
import AlpineChicken from "./pages/openings/italyOpenings/AlpineChicken";
import AlpineAttack from "./pages/openings/italyOpenings/AlpineAttack";
import StandardLepanto from "./pages/openings/italyOpenings/StandardLepanto";
import BlueWaterLepanto from "./pages/openings/italyOpenings/BlueWaterLepanto";
import KeyLepanto from "./pages/openings/italyOpenings/KeyLepanto";
import Squid from "./pages/openings/russiaOpenings/Squid";
import UkrainianSystem from "./pages/openings/russiaOpenings/UkrainianSystem";
import SouthernDefense from "./pages/openings/russiaOpenings/SouthernDefense";
import Octopus from "./pages/openings/russiaOpenings/Octopus";
import GermanAttack from "./pages/openings/russiaOpenings/GermanAttack";
import RussianAttack from "./pages/openings/turkeyOpenings/RussianAttack";
import BulgarianPush from "./pages/openings/turkeyOpenings/BulgarianPush";
import AntiLepanto from "./pages/openings/turkeyOpenings/AntiLepanto";
import PasticheOpening from "./pages/openings/turkeyOpenings/PasticheOpening";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/austria" element={<Austria />} />
        <Route path="/england" element={<England />} />
        <Route path="/france" element={<France />} />
        <Route path="/germany" element={<Germany />} />
        <Route path="/italy" element={<Italy />} />
        <Route path="/russia" element={<Russia />} />
        <Route path="/turkey" element={<Turkey />} />
        {/* AUSTRIA OPENINGS */}
        <Route path="/purebalkangambit" element={<PureBalkanGambit />} />
        <Route path="/triestevariation" element={<TriesteVariation />} />
        <Route path="/tyrolianvariation" element={<TyrolianVariation />} />
        <Route path="/bohemianabberation" element={<BohemianAberration />} />
        <Route path="/budapestvariation" element={<BudapestVariation />} />
        <Route path="/galiciavariation" element={<GaliciaVariation />} />
        <Route path="/purehedgehog" element={<PureHedgehog />} />
        <Route path="/alpinehedgehog" element={<AlpineHedgehog />} />
        <Route path="/porcupine" element={<Porcupine />} />
        <Route path="/southernhedgehog" element={<SouthernHedgehog />} />
        <Route path="/bluewateropening" element={<BlueWaterOpening />} />
        {/* ENGLAND OPENINGS */}
        <Route path="/walesvariation" element={<WalesVariation />} />
        <Route path="/yorkshirevariation" element={<YorkshireVariation />} />
        <Route path="/northernyorkshire" element={<NorthernYorkshire />} />
        <Route path="/churchillopening" element={<ChurchillOpening />} />
        <Route path="/welshsplit" element={<WelshSplit />} />
        <Route path="/edinburghsplit" element={<EdinburghSplit />} />
        {/* FRANCE OPENINGS */}
        <Route path="/northernDash" element={<NorthernDash />} />
        <Route path="/englishdefense" element={<EnglishDefense />} />
        <Route path="/maginotopening" element={<MaginotOpening />} />
        <Route path="/burgundyvariation" element={<BurgundyVariation />} />
        <Route path="/vineyardvariation" element={<VineyardVariation />} />
        <Route path="/belgianvariation" element={<BelgianVariation />} />
        <Route path="/picardyopening" element={<PicardyOpening />} />
        {/* GERMANY OPENINGS */}
        <Route path="/danishvariation" element={<DanishVariation />} />
        <Route path="/dutchvariation" element={<DutchVariation />} />
        <Route path="/burgundiangambit" element={<BurgundianGambit />} />
        <Route path="/silesianopening" element={<SilesianOpening />} />
        <Route path="/tyrolianopening" element={<TyrolianOpening />} />
        <Route path="/eaglesnest" element={<EaglesNest />} />
        {/* ITALY OPENINGS */}
        <Route path="/obrianiattack" element={<ObrianiAttack />} />
        <Route path="/tyrolianlepanto" element={<TyrolianLepanto />} />
        <Route path="/alpinelepanto" element={<AlpineLepanto />} />
        <Route path="/alpinechicken" element={<AlpineChicken />} />
        <Route path="/alpineattack" element={<AlpineAttack />} />
        <Route path="/standardlepanto" element={<StandardLepanto />} />
        <Route path="/bluewaterlepanto" element={<BlueWaterLepanto />} />
        <Route path="/keylepanto" element={<KeyLepanto />} />
        {/* RUSSIA OPENINGS */}
        <Route path="/squid" element={<Squid />} />
        <Route path="/ukrainiansystem" element={<UkrainianSystem />} />
        <Route path="/southerndefense" element={<SouthernDefense />} />
        <Route path="/octopus" element={<Octopus />} />
        <Route path="/germanattack" element={<GermanAttack />} />
        {/* TURKEY OPENINGS */}
        <Route path="/russianattack" element={<RussianAttack />} />
        <Route path="/bulgarianpush" element={<BulgarianPush />} />
        <Route path="/antilepanto" element={<AntiLepanto />} />
        <Route path="/pasticheopening" element={<PasticheOpening />} />
      </Routes>
    </Router>
  );
};

export default App;
