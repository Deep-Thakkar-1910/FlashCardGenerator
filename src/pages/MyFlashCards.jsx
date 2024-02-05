import { useSelector } from "react-redux";
import FlashcardComponent from "../components/FlashcardComponent/FlashcardComponent";
import { Link } from "react-router-dom";
const MyFlashCards = () => {
  const flashcards = useSelector((state) => state.allFlashCards);
  console.log(flashcards);
  return (
    <div className="mb-10 grid grid-cols-1 place-items-center gap-2 px-5 md:gap-10 md:px-10 lg:grid-cols-2 lg:gap-14 lg:px-32 xl:grid-cols-3 xl:gap-20">
      <>
        {flashcards.length > 0 ? (
          flashcards.map((flashCard) => {
            return (
              <FlashcardComponent
                key={flashCard.id}
                groupTopic={flashCard.GroupData.group}
                groupDesc={flashCard.GroupData.groupdesc}
                groupImage={flashCard.GroupData.grpimage}
                termsData={flashCard.TermsData}
              />
            );
          })
        ) : (
          <div className="place-self-center">
            <h1 className="text-2xl font-bold">
              You do not have any flash cards yet
            </h1>
            <button className="mt-10 place-self-center rounded-md bg-red-600 p-2 text-xl font-semibold text-white">
              <Link to={"/"}>Create a new one?</Link>
            </button>
          </div>
        )}
      </>
    </div>
  );
};

export default MyFlashCards;
