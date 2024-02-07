import { useParams } from "react-router-dom";
import ViewCard from "../components/ViewCard/ViewCard";

const FlashCardPage = () => {
  const { details: flashCardID } = useParams();
  const viewCardDetails = JSON.parse(localStorage.getItem("allFlashCardData"));
  const viewCard = viewCardDetails?.find(
    (viewCard) => viewCard.id === flashCardID,
  ); // to find the card and display it's details from localStorage
  return (
    <div className="px-5 md:px-10 lg:px-32">
      <ViewCard
        cardID={flashCardID}
        viewCardHeading={viewCard.GroupData.group}
        viewCardDescription={viewCard.GroupData.groupdesc}
        viewCardTerms={viewCard.TermsData}
      />
    </div>
  );
};

export default FlashCardPage;
