import React from "react";
import { Trash2 } from "lucide-react";

const  Header = () => {
  
   function deleteData() {
    localStorage.removeItem("chat_History");
    window.location.reload();
  }
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap justify-between  p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-xl">ChatGpt</span>
        </a>
        <button onClick={deleteData} className="inline-flex items-center border rounded-3xl justify-items-end bg-gray-100 py-1 px-3 focus:outline-none hover:bg-gray-200  text-base mt-4 md:mt-0 w-24">
        <Trash2 />
        <span className="ml-2 size-6 text-lg">Clear</span>
        </button>
      </div>
      
    </header>
  );
}

export default Header;
