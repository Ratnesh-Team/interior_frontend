import { MoreVertical, ChevronLast, ChevronFirst } from "lucide-react";
import { useContext, createContext, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '../redux/actions';
import photo from './logo.png'

const SidebarContext = createContext();

export default function Sidebar({ children }) {
  
  const [showNames, setShowNames] = useState(true);

  const dispatch = useDispatch();
  const expanded = useSelector(state => state.expanded);

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };

  return (
    <aside className={`h-screen ml-2 rounded-md mt-1 mb-1 ${expanded?"w-60":"w-10"} max-xl:hidden`} >
      <nav className="h-full flex flex-col bg-white border-r shadow-sm rounded-md">
        <div className={`p-4 pb-2 flex j  ${expanded?"":" h-[75px]"}`}>
        <img src={photo} className='w-[20%]' alt="" />
        <span>
          <h1 className=' font-bold text-red-600 border-b-2 w-28 text-lg border-red-200'>COLONELZ</h1>
          <p className=' text-xs font-semibold'>BUILDING RELATIONSHIPS</p>
        </span>
          
        </div>

        <SidebarContext.Provider value={{ expanded, showNames }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

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
}

export function SidebarItem({ icon, text, active, alert,onClick }) {
  const { expanded, showNames } = useContext(SidebarContext);

  return (
    <button
      className={`
        relative flex items-center py-3 px-3 my-2 
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          active
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
            : "hover:bg-indigo-50 text-gray-600"
        }
    `}
   onClick={onclick}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all  font-semibold text-base text-left ${
          expanded ? "w-40 ml-3" : "w-0"
        }`}
      >
        {showNames ? text : ""}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
            expanded ? "" : "top-2"
          }`}
        />
      )}

      {!expanded && showNames && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-indigo-100 text-indigo-800 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          {text}
        </div>
      )}
    </button>
  );
}