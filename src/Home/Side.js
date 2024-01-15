import { useState } from 'react'
import React from 'react'
import { Warehouse } from 'lucide-react'
import Sidebar, { SidebarItem } from './Sides'
import { Link } from 'react-router-dom'
import { File, Folder,FolderOpenDot, IndianRupee, LayoutDashboard, LayoutDashboardIcon, MessageCircleCode, Timer, Watch,LayoutList} from 'lucide-react'


const Side = () => {
    const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };
  return (
    <Sidebar >
    
    <Link to='/'>
    <SidebarItem 
    icon={<LayoutDashboardIcon/>}  
    text="Dashboard"  
    active={activeButton === 'Dashboard'}  
    onClick={() => handleButtonClick('Dashboard')}></SidebarItem>
    </Link>


    <Link to='/project' >
    <SidebarItem 
    icon={<FolderOpenDot/>}  
    text="All Projects"  
    active={activeButton === 'project'}  
    onClick={() => handleButtonClick('project')}  ></SidebarItem>
    </Link>


    <Link to='/quotation'>
    <SidebarItem 
    icon={<IndianRupee/>}  
    text="Quotation"  
    active={activeButton === 'quote'}  
    onClick={() => handleButtonClick('quote')}  ></SidebarItem>
    </Link>


    <Link to='/file'>
    <SidebarItem 
    icon={<Folder/>}  
    text="File Manager"  
    active={activeButton === 'files'}  
    onClick={() => handleButtonClick('files')}  ></SidebarItem>
    </Link>


 


    <Link to='/mom'>
    <SidebarItem 
    icon={<Timer/>}  
    text="MOM"  
    active={activeButton === 'mom'}  
    onClick={() => handleButtonClick('mom')}  ></SidebarItem>
    </Link>


    <Link to='/lead'>
    <SidebarItem 
    icon={<Timer/>}  
    text="Lead Management"  
    active={activeButton === 'mom'}  
    onClick={() => handleButtonClick('mom')}  ></SidebarItem>
    </Link>







    <Link to='http://localhost:5173/'>
    <SidebarItem 
    icon={<MessageCircleCode/>}  
    text="Chat"  
    active={activeButton === 'chat'}  
    onClick={() => handleButtonClick('chat')}  ></SidebarItem>
    </Link>
    
   






    </Sidebar>
  )
}

export default Side