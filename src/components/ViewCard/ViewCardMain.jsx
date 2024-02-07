/* eslint-disable react/prop-types */
import { FaGreaterThan } from "react-icons/fa";
import { FaLessThan } from "react-icons/fa";
const ViewCardMain = ({
  activeIndex,
  setActiveIndex,
  viewCardTerms,
  forwardedRef,
}) => {
  return (
    <div
      className="relative mb-10 flex h-fit min-h-[10rem] w-full flex-col gap-14 rounded-md bg-white px-5 py-3 shadow-md lg:min-h-[30rem] lg:w-9/12 lg:flex-row lg:items-center lg:justify-between"
      ref={forwardedRef}
    >
      <img
        src={
          viewCardTerms[activeIndex].image && viewCardTerms[activeIndex].image
        }
        alt=""
        className={
          (viewCardTerms[activeIndex].image &&
            "mb-4  w-full rounded-md object-fill lg:mb-0  lg:h-[12rem] lg:w-[12rem] xl:h-[20rem] xl:w-[25rem]") ||
          "hidden"
        }
      />
      <div className="flex flex-col gap-10">
        <h2 className="text-xl font-bold first-letter:uppercase">
          {viewCardTerms[activeIndex].term}
        </h2>
        <p className="text-gray-600">{viewCardTerms[activeIndex].definition}</p>
      </div>
      {/* this div is for implenting pagination*/}
      <div className="absolute bottom-[-3rem] left-1/2 flex translate-x-[-50%] items-center gap-2">
        <FaLessThan
          className={
            activeIndex === 0
              ? "cursor-pointer text-gray-500"
              : "cursor-pointer text-gray-800"
          }
          onClick={() => {
            if (activeIndex !== 0) {
              setActiveIndex(activeIndex - 1);
            }
          }}
        />
        <span className="text-black1  text-xl font-bold">
          {`${activeIndex + 1} / ${viewCardTerms.length}`}
        </span>
        <FaGreaterThan
          className={
            activeIndex === viewCardTerms.length - 1
              ? "cursor-pointer text-gray-500"
              : "cursor-pointer text-gray-800"
          }
          onClick={() => {
            if (activeIndex !== viewCardTerms.length - 1) {
              setActiveIndex(activeIndex + 1);
            }
          }}
        />
      </div>
    </div>
  );
};

export default ViewCardMain;
