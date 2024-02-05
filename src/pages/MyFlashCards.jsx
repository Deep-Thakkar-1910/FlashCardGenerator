import FlashcardComponent from "../components/FlashcardComponent/FlashcardComponent";

const MyFlashCards = () => {
  return (
    <div className="grid grid-cols-1 px-5 md:px-10 lg:px-32 ">
      <>
        <FlashcardComponent />
        <FlashcardComponent />
        <FlashcardComponent />
        <FlashcardComponent />
        <FlashcardComponent />
        <FlashcardComponent />
      </>
    </div>
  );
};

export default MyFlashCards;
