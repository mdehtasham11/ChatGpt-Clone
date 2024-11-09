import { Menu, SquarePen } from "lucide-react";
import React from "react";

const CloseSidebar = ({ openSidebar }) => {
  return (
    <div className={`ms-5 mt-6  `}>
      <div className="flex space-x-2">
        <button onClick={openSidebar}>
          <Menu />
        </button>
        <button>
          <SquarePen />
        </button>
      </div>
    </div>
  );
};

export default CloseSidebar;
