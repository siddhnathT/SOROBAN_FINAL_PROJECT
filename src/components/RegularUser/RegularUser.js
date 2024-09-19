import React, { useContext } from "react";
import ExpirePass from "./ExpirePass";
import CheckMyPassStatus from "./CheckMyPassStatus";
import CreatePass from "./CreatePass";

const RegularUser = () => {
  return (
    <div className="bg-red-400 my-10 rounded-md p-4 flex flex-col items-center lg:w-[90vw] m-auto">
      <div className="font-semibold text-4xl w-full text-center py-4 mb-5 rounded-lg bg-red-300">
        Regular User
      </div>
      <div className="bg-red-400 flex md:flex md:flex-row flex-col w-full grow justify-between">
        <div className="bg-red-400 flex grow">
          <CreatePass />
        </div>

        <div className="bg-red-400 flex flex-col my-4 sm:my-0 grow items-center">
        <div className="bg-blue-300 text-white p-4 rounded-md">
          <ExpirePass />
          </div>
          <CheckMyPassStatus />
        </div>
      </div>
    </div>
  );
};

export default RegularUser;
