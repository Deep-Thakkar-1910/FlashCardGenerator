import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hompage from "./pages/Hompage";
import MyFlashCards from "./pages/MyFlashCards";

const App = () => {
  return (
    <div className="App min-h-screen w-full  bg-[#f5f2ed] font-openSans">
      <Navbar />
      <main className="mt-20 grid place-items-center">
        <Routes>
          <Route path="/" element={<Hompage />} />
          <Route path="/myflashcard" element={<MyFlashCards />} />
          <Route path="/:details" />
        </Routes>
      </main>
    </div>
  );
};

export default App;
