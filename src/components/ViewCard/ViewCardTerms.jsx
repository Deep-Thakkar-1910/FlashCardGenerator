/* eslint-disable react/prop-types */

import { useRef, useState } from "react";
import ViewCardShare from "./ViewCardShare";
import ViewCardMain from "./ViewCardMain";

const ViewCardTerms = ({ viewCardTerms }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const pdfRef = useRef(null);
  return (
    // main div for setting the position of the children elements according to the screen size
    <div className=" flex w-full flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
      {/* For page navigation based upon topics */}
      <div className="flex h-fit w-full justify-center gap-20 overflow-x-scroll rounded-md bg-white px-4  pb-3 pt-6 shadow-md lg:min-h-[30rem] lg:w-1/6  lg:flex-col lg:items-center lg:justify-start lg:gap-5 xl:w-1/6">
        <h1 className="mb-3 hidden place-self-start text-xs font-medium lg:block lg:text-xl">
          Flashcards
        </h1>
        <div className="mb-5 hidden w-full border-t-2 border-t-gray-200 lg:block"></div>
        {viewCardTerms.map((term, index) => {
          // for displaying the topic of all the terms
          return (
            <h1
              onClick={() => {
                setActiveIndex(index);
              }}
              className={
                activeIndex === index
                  ? "cursor-pointer text-lg font-semibold text-red-600 first-letter:uppercase"
                  : "cursor-pointer text-lg font-semibold first-letter:uppercase"
              }
              key={index}
            >
              {term.term}
            </h1>
          );
        })}
      </div>
      {/* this div is for displaying the whole contents including image term topic and definition */}
      <ViewCardMain
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        viewCardTerms={viewCardTerms}
        forwardedRef={pdfRef}
      />

      {/* this is for implementing share download features */}
      <ViewCardShare pdfRef={pdfRef} />
    </div>
  );
};

export default ViewCardTerms;
