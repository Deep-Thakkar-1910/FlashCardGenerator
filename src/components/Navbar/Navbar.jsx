import { NavLink, useLocation } from "react-router-dom";
const Navbar = () => {
  const location = useLocation();
  const classes = (where) => {};
  return (
    <>
      <div className=" flex bg-white p-2 justify-start items-center shadow-md header1">
        <div className=" bg-[#ab1f1f] p-1 text-white font-bold text-2xl">
          AL
        </div>
        <div className="text-2xl">maBetter</div>
      </div>
      <div className="nav px-5 md:px-20 lg:px-32">
        <h1 className="mx-auto mt-10 mb-7 text-2xl font-bold">
          Create Flashcard
        </h1>
        <ul className=" list-none flex gap-4 md:gap-10">
          <li>
            <NavLink
              className="text-gray-600  font-semibold"
              to={"/createcard"}
              activeClassName="active-link"
            >
              Create New
            </NavLink>
          </li>
          <li>
            <NavLink
              className="text-gray-600 font-semibold"
              activeClassName="active-link"
              to={"/myflashcard"}
            >
              My Flashcard
            </NavLink>
          </li>
        </ul>
        <div className=" mt-2 w-full h-[2px] bg-gray-400 opacity-50" />
      </div>
    </>
  );
};

export default Navbar;
