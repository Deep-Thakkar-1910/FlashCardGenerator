import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hompage from "./pages/Hompage";
import MyFlashCards from "./pages/MyFlashCards";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { populateFlashCards } from "./Redux/Slices/AllFlashcards";
const App = () => {
  
  const allFlashCardData = localStorage.getItem("allFlashCardData"); // to get the flash card data from localStorage
  const dispatch = useDispatch();
  
  useEffect(()=>{
    allFlashCardData && dispatch(populateFlashCards(allFlashCardData));
    // to update the flash card data in redux store every time a change in localStorage is made for the flash card data
  },[allFlashCardData])

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
