import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hompage from "./pages/Hompage";
import MyFlashCards from "./pages/MyFlashCards";

const App = () => {
  return (
    <div className="App flex min-h-screen  w-full flex-col bg-[#f5f2ed] font-openSans">
      <Navbar />
      <main style={{ marginTop: "20rem" }} className="grid place-items-center">
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
