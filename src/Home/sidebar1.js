// Sidebar.js
import React, { useState } from 'react';
import { MoreVertical, ChevronLast, ChevronFirst, LayoutDashboard, File, IndianRupee, FoldVertical, Folder, Watch, Users, MessageCircleCode } from "lucide-react";
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { toggleSidebar } from '../redux/actions';

const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showNames, setShowNames] = useState(true);
  const handleItemClick = (title) => {
    setSelectedItem(title);
  };
  const dispatch = useDispatch();
  const expanded = useSelector(state => state.expanded);

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };
  function checkDashboardURL() {
    // Get the current URL
    var currentURL = window.location.href;
  
    // Check if the URL contains the word "dashboard"
    var isActive = currentURL.includes("dashboard");
  
    return isActive;
  }

  return (
    <aside className="h-screen ml-2 rounded-md mt-1 w-60 mb-1 py-3 overflow-hidden overflow-y-hidden">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm rounded-md">
        <div className="p-4 pb-2 flex justify-between items-center">
        <button
            
            className={`overflow-hidden transition-all bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800  rounded-xl ${
              expanded ? "w-40 py-2 px-2" : "w-0 none py-0"
            }`}
            alt=""
          >Create New Project</button>
          <button
           onClick={handleToggleSidebar}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
          </div>     
      <ul>
        <SidebarItem
          title="Dashboard"
          icon=<LayoutDashboard/>
          to="/"
          
          selected={selectedItem === 'Dashboard'}
          onItemClick={handleItemClick}
        />
        <SidebarItem
          title="All Projects"
          icon=<File/>
          to="/project"
          selected={selectedItem === 'All Projects'}
          onItemClick={handleItemClick}
        />
        <SidebarItem
          title="Quotation"
          icon=<IndianRupee/>
          to="/quotation"
          selected={selectedItem === 'Quotation'}
          onItemClick={handleItemClick}
        />
        {/* <SidebarItem
          title="File Manager"
          icon=<Folder/>
          to="/file"
          selected={selectedItem === 'File Manager'}
          onItemClick={handleItemClick}
        /> */}
       
        <SidebarItem
          title="MOM"
          icon=<Watch/>
          to="/mom"
          selected={selectedItem === 'MOM'}
          onItemClick={handleItemClick}
        />
        <SidebarItem
          title="Lead Management"
          icon=<Users/>
          to="/lead"
          selected={selectedItem === 'Lead Management'}
          onItemClick={handleItemClick}
        />
        {/* <SidebarItem
          title="Chat"
          icon=<MessageCircleCode/>
          to="/chat"
          selected={selectedItem === 'Chat'}
          onItemClick={handleItemClick}
        /> */}
        {/* Add more SidebarItem components for other routes */}
      </ul>
    
    <div className="border-t flex p-3">
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
          `}
          >
            <div className="leading-4">
              <h4 className="font-semibold">
                {showNames ? "Devashish Gupta" : ""}
              </h4>
              <span className="text-xs text-gray-600">
                {showNames ? "devashish@gmail.com" : ""}
              </span>
            </div>
            <MoreVertical size={20} />
          </div>
        </div>

      </nav>
    </aside>
  );
};

const SidebarItem = ({ title, icon, to, selected, onItemClick }) => {
  const handleClick = () => {
    onItemClick(title);
  };
  const expanded = useSelector(state => state.expanded);
  const [showNames, setShowNames] = useState(true);
  return (
    <li className={`mb-2 ${selected ? 'bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800' : ''}`}>
      <Link to={to} className="" onClick={handleClick}>
      <button
       
       className={`
         relative flex items-center py-2 px-3 my-1
         font-medium rounded-md cursor-pointer
         transition-colors group hover:bg-slate-100`}
     >
       {icon}
       <span
         className={`overflow-hidden  text-left transition-all ${
           expanded ? "w-52 ml-3" : "w-0"
         }`}
       >
         {title}
       </span>
 
       {!expanded && showNames && (
         <div
           className={`
           absolute left-full rounded-md px-2 py-1 ml-6
           bg-indigo-100 text-indigo-800 text-sm
           invisible opacity-20 -translate-x-3 transition-all
           group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
       `}
         >
           {title}
         </div>
       )}
     </button>
       
      </Link>
    </li>
  );
};

export default Sidebar;
