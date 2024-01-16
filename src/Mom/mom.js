import React from "react";
import sofa from "./sofa.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { useState,useEffect } from "react";

import Side from "../Home/Side";
import Sidebar from '../Home/Sides';
import { SidebarItem } from '../Home/Sides';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { File, Folder,FolderOpenDot,Warehouse, IndianRupee, LayoutDashboard, LayoutDashboardIcon, MessageCircleCode, Timer, Users, Watch,LayoutList} from 'lucide-react'
import { truckContainer } from "fontawesome";
import { Card,CardContent } from "@mui/material";
import Data from './Data'


const MinutesOfMeeting = () => {
  const getImageUrl = (itemName) => {
    // Replace this logic with the actual logic to get the image URL based on the item name
    // For example, you might have an object or database that maps item names to image URLs
    // For simplicity, I'm using placeholder URLs here
    const imageUrls = {
      Wardrobe: sofa,
      Matress: sofa,
      "Sleep Well": sofa,
    };

    return imageUrls[itemName] || sofa;
  };
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener on component mount
    window.addEventListener('resize', handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const componentStyles = {
    // Your default styles here
    width:"80%", marginTop:"7%", marginLeft:"20%", padding:"0", marginRight:"15px", marginBottom:"1%", paddingBottom:"1%", backgroundColor: "rgba(255, 255, 255, 0.95)", backdropFilter:'blur(10px)'
  };
  const wideScreenStyles = {
    // Your styles for 1280px screen and above
    // For example:
    width:"96%",
    marginLeft:"4%",
    marginRight:"1%",
    marginTop:"8%"
  };

  return (
    <div className="flex">
    <div className="fixed">
    <Sidebar >
    
    <Link to='/'>
    <SidebarItem 
    icon={<LayoutDashboardIcon/>}  
    text="Dashboard"  
    active={false} 
    ></SidebarItem>
    </Link>


  <Link to='/project' >
    <SidebarItem 
    icon={<LayoutList/>}  
    text="All Projects"  
    active={false} 
      ></SidebarItem>
    </Link>


    <Link to='/inventory'>
    <SidebarItem 
    icon={<Warehouse/>}  
    text="Inventory"  
    active={false}  
      ></SidebarItem>
    </Link>





 


    <Link to='/mom'>
    <SidebarItem 
    icon={<Timer/>}  
    text="MOM"  
    active={truckContainer}  
      ></SidebarItem>
    </Link>


    <Link to='/lead'>
    <SidebarItem 
    icon={<Users/>}  
    text="Lead Management"  
    active={false}  
      ></SidebarItem>
    </Link>







    <Link to='http://localhost:5173/chat'>
    <SidebarItem 
    icon={<MessageCircleCode/>}  
    text="Chat"  
    active={false}  
      ></SidebarItem>
    </Link>
    
   






    </Sidebar>
    </div>
    <Card sx={{ minWidth: 275 }} style={{ ...componentStyles, ...(window.innerWidth <= 1280?wideScreenStyles:componentStyles) }}>
      <CardContent>
      <h1 className="text-2xl font-bold mb-4 ml-6">Minutes Of Meeting</h1>
      
      <Data/>
      </CardContent>
      
    </Card>
    </div>
  );
};

export default MinutesOfMeeting;
