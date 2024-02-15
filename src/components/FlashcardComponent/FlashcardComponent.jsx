/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const FlashcardComponent = ({
  groupTopic,
  groupDesc,
  groupImage,
  termsData,
  id,
}) => {
  return (
    <div className="relative  z-0 mx-auto my-10 flex h-5/6 w-full min-w-64 flex-col justify-between rounded-md border border-gray-300 bg-white p-5 pt-8 shadow-md sm:mx-0 sm:w-5/6 sm:min-w-96 lg:w-11/12">
      <img
        src={groupImage ?? "https://placehold.co/400"}
        alt=""
        className="absolute left-1/2 top-0 aspect-square h-14 w-14  translate-x-[-50%] translate-y-[-50%] rounded-full object-cover "
      />

      <h1 className="m-4 text-center font-black first-letter:uppercase">
        {groupTopic}
      </h1>

      <p className="place-self-center">
        {groupDesc.length > 78 ? `${groupDesc.slice(0, 78)} ...` : groupDesc}
      </p>

      <p className="m-4 text-center font-semibold">{`${termsData.length} Cards`}</p>

      <Link to={`/${id}`}>
        <button className=" w-full place-self-center rounded-md border-2 border-red-600 bg-transparent p-1 text-xl  font-bold text-red-500 transition-all  duration-300 ease-in-out  hover:bg-red-600 hover:text-white">
          View Cards
        </button>
      </Link>
    </div>
  );
};
export default FlashcardComponent;
