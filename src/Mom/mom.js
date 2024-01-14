import React from "react";
import sofa from "./sofa.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

import Side from "../Home/Side";
import Sidebar from '../Home/Sides';
import { SidebarItem } from '../Home/Sides';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { File, Folder,FolderOpenDot, IndianRupee, LayoutDashboard, LayoutDashboardIcon, MessageCircleCode, Timer, Users, Watch} from 'lucide-react'
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
    icon={<FolderOpenDot/>}  
    text="All Projects"  
    active={false} 
      ></SidebarItem>
    </Link>


    <Link to='/quotation'>
    <SidebarItem 
    icon={<IndianRupee/>}  
    text="Quotation"  
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







    {/* <Link to='http://localhost:5173/'>
    <SidebarItem 
    icon={<MessageCircleCode/>}  
    text="Chat"  
    active={false}  
      ></SidebarItem>
    </Link>
     */}
   






    </Sidebar>
    </div>
    <Card sx={{ minWidth: 275 }} style={{ width:"80%", marginTop:"7%", marginLeft:"19%", padding:"0", marginRight:"30px", marginBottom:"1%", paddingBottom:"1%", backgroundColor: "rgba(255, 255, 255, 0.95)", backdropFilter:'blur(10px)',}}>
      <CardContent>
      <h1 className="text-2xl font-bold mb-4 ml-6">Minutes Of Meeting</h1>
      <h2 className="text-2xl font-semibold mb-2  mt-6 ml-6 ">
        Discussed layouts for the living and the dining area
      </h2>
      <p className="text-gray-500 ml-6 ">28 May 2022. Google Meet</p>
      <Data/>
      </CardContent>
      
    </Card>
    </div>
  );
};

export default MinutesOfMeeting;
