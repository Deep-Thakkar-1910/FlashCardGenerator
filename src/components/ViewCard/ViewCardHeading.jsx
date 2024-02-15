/* eslint-disable react/prop-types */
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
const ViewCardHeading = ({ viewCardHeading, viewCardDescription }) => {
  return (
    <div className="mb-20 flex items-baseline gap-4 sm:ml-10 lg:ml-0">
      <Link to={"/myflashcard"}>
        <IoMdArrowRoundBack className="cursor-pointer text-xl text-gray-700" />
      </Link>
      <div className="flex flex-col items-start">
        <h1 className="text-2xl font-bold first-letter:uppercase">
          {viewCardHeading}
        </h1>
        <h4 className=" text-gray-500">{viewCardDescription}</h4>
      </div>
    </div>
  );
};

export default ViewCardHeading;
