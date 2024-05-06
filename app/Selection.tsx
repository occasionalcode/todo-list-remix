import React from "react";

// import CreateTask from "./create/page";
// import { useRouter } from "next/navigation";
import { Link } from "@remix-run/react";
import finished from "./routes/finished";

const Selection = () => {
  return (
    <div className="flex justify-center  mt-10 font-Montserrat text-md font-semibold">
      <nav className="flex  w-96 h-14 justify-between items-end ">
        <Link to="/">
          <div className="flex items-center justify-center h-14 w-32 pt-1 text-center bg-TodoRed rounded-tl-lg rounded-tr-lg hover:h-20 transition-all duration-100 ">
            <p>To do</p>
          </div>
        </Link>
        <Link to="/finished">
          <div className="flex items-center justify-center w-32 h-14 pt-1 text-center bg-TodoGreen rounded-tl-lg rounded-tr-lg hover:h-20 transition-all duration-100">
            <p>Finished</p>
          </div>
        </Link>
        <Link to="/create">
          <div className="flex items-center justify-center w-32 h-14  pt-1 text-white  text-center bg-TodoBlue rounded-tl-lg rounded-tr-lg hover:h-20 transition-all duration-100">
            <p>Create Task</p>
          </div>
        </Link>
      </nav>
    </div>
  );
};

export default Selection;
