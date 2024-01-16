import { useState } from 'react'
import React from 'react'
import { Warehouse } from 'lucide-react'
import Sidebar, { SidebarItem } from './Sides'
import { Link } from 'react-router-dom'
import { File, Users,Folder,FolderOpenDot, IndianRupee, LayoutDashboard, LayoutDashboardIcon, MessageCircleCode, Timer, Watch,LayoutList} from 'lucide-react'


const Side = () => {
    const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  function checkURLKeyword(keywords) {
    // Get the current URL
    var currentURL = window.location.href;
  
    // Check if the URL contains any of the specified keywords
    for (var i = 0; i < keywords.length; i++) {
      if (currentURL.includes(keywords[i])) {
        return true;
      }
      else {
        return false
      }
    }
  
    return null; // or return false, depending on your preference
  }
  function checkURLKeyword1(keywords) {
    // Get the current URL
    var currentURL = window.location.href;
  
    // Check if the URL contains any of the specified keywords
    for (var i = 0; i < keywords.length; i++) {
      if (currentURL.includes(keywords[i])) {
        return true;
      }
      else {
        return false
      }
    }
  
    return null; // or return false, depending on your preference
  }
  
  // Example usage for "project" and "inventory"
  var result = checkURLKeyword(["project"]);
  
  if (result) {
    console.log(result); // This will log "project" or "inventory" if the URL contains the corresponding keyword, otherwise null or false
  } else {
    console.log("Keyword not found");
  }
  
  function checkDashboardURL() {
    var currentURL = window.location.href;
    // Check if the URL contains the word "dashboard"
    var isActive = currentURL.includes("/");
    return isActive;
  }
 
  return (
    <Sidebar >
    
    <Link to='/'>
    <SidebarItem 
    icon={<LayoutDashboardIcon/>}  
    text="Dashboard"  
    active={checkURLKeyword} 
    ></SidebarItem>
    </Link>


    <Link to='/project' >
    <SidebarItem 
    icon={<LayoutList/>}  
    text="All Projects"  
    active={checkURLKeyword1} 
      ></SidebarItem>
    </Link>


    <Link to='/inventory'>
    <SidebarItem 
    icon={<Warehouse/>}  
    text="Inventory"  
    active={checkURLKeyword1}  
      ></SidebarItem>
    </Link>





 


    <Link to='/mom'>
    <SidebarItem 
    icon={<Timer/>}  
    text="MOM"  
    active={checkURLKeyword}  
      ></SidebarItem>
    </Link>


    <Link to='/lead'>
    <SidebarItem 
    icon={<Users/>}  
    text="Lead Management"  
    active={checkURLKeyword}  
      ></SidebarItem>
    </Link>
    {/* <Link to='https://master.d1iuo6abnc6erf.amplifyapp.com/'>
    <SidebarItem 
    icon={<MessageCircleCode/>}  
    text="Chat"  
    active={checkURLKeyword}  
      ></SidebarItem>
    </Link> */}
    
   






    </Sidebar>
  )
}

export default Side