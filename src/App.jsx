// import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar/Navbar";
import FlashcardDesign from "./components/FlascardDesign/FlashcardDesign";

const App = () => {
  return (
    <div className="App w-full min-h-screen bg-[#f5f2ed]">
      {/* <Navbar />
      <Routes>
        <Route path="/createcard" />
        <Route path="/myflashcards" />
        <Route path="/:details" />
      </Routes> */}
      <FlashcardDesign />
    </div>
  );
};

export default App;
