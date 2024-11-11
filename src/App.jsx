import React, { useState } from "react";
import "./App.css";
import { Header } from "./component/index";
import SideBar from "./component/SideBar/SideBar";
import CloseSidebar from "./component/CloseSidebar/CloseSidebar";
import Searchbar from "./component/Chatoutput/SearchBar";
import ChatOutput from "./component/Chatoutput/ChatOutput";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="h-screen absolute ">
      <div className="flex w-screen fixed left-0">
        {isSidebarOpen && (
          <SideBar
            closeSidebar={() => setIsSidebarOpen(false)}
            isSidebarOpen={isSidebarOpen}
          />
        )}
        {!isSidebarOpen && (
          <CloseSidebar
            openSidebar={() => setIsSidebarOpen(true)}
            isSidebarOpen={isSidebarOpen}
          />
        )}

        <div className={isSidebarOpen ? "w-5/6" : "w-full"}>
          <Header />
          <div className="h-screen flex flex-col flex-grow overflow-y-auto">
            <div className="flex-1">
              <ChatOutput />
            </div>
            <div className="mb-2 fixed bottom-0">
              <Searchbar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
