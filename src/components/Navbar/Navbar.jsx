import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className=" flex bg-white p-2 justify-start items-center shadow-md header1">
        <div className=" bg-[#ab1f1f] p-1 text-white font-bold text-2xl">
          AL
        </div>
        <div className="text-2xl">maBetter</div>
      </div>
      <div className="nav px-32">
        <h1 className="mx-auto p-10 text-2xl font-bold">Create Flashcard</h1>
        <ul className="list-none flex">
          <li>
            <NavLink
              className="text-gray-600  hover:text-red-800  mx-2"
              to={"/createcard"}
            >
              Create New
            </NavLink>
          </li>
          <li>
            <NavLink
              className="text-gray-600 "
              activeClassName="text-red-800"
              to={"/myflashcard"}
            >
              My Flashcard
            </NavLink>
          </li>
        </ul>
        <hr className="border-b-2 border-gray-700" />
      </div>
    </>
  );
};

export default Navbar;
