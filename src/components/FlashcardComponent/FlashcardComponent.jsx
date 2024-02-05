/* eslint-disable react/prop-types */
const FlashcardComponent = ({
  groupTopic,
  groupDesc,
  groupImage,
  termsData,
}) => {
  return (
    <div className="relative z-0 mx-auto my-10 flex h-5/6 w-full min-w-40 flex-col justify-between rounded-md border border-gray-300 bg-white p-5 pt-8 shadow-sm sm:mx-0 sm:w-5/6 sm:min-w-96 lg:w-11/12">
      <img
        src={groupImage ?? "https://placehold.co/400"}
        alt=""
        className="absolute left-1/2 top-0 aspect-square h-14 w-14  translate-x-[-50%] translate-y-[-50%] rounded-full object-cover "
      />

      <h1 className="m-4 text-center font-black">{groupTopic}</h1>

      <p className="place-self-center">{`${groupDesc.slice(0, 78)} ...`}</p>
      {/* <p>{`Take a tour of full stack data science
      course to learn about curriculum...`}</p> */}

      <p className="m-4 text-center font-semibold">{`${termsData.length} Cards`}</p>

      <button className="rounded-md bg-red-100 p-1 text-xl text-red-500 transition-all hover:bg-red-200 active:bg-red-300">
        View Cards
      </button>
    </div>
  );
};
export default FlashcardComponent;
