/* eslint-disable react/prop-types */
const ViewCard = ({
  cardID,
  viewCardHeading,
  viewCardDescription,
  viewCardTerms,
}) => {
  return (
    <div>
      <h1 className="text-2xl font-bold">{viewCardHeading}</h1>
      <h4>{viewCardDescription}</h4>
    </div>
  );
};

export default ViewCard;
