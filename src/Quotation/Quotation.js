import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Sidebar from '../Home/Sides';
import { SidebarItem } from '../Home/Sides';
import { File, Folder,FolderOpenDot, IndianRupee, LayoutDashboard, LayoutDashboardIcon, MessageCircleCode, Timer, Users, Warehouse, Watch,LayoutList} from 'lucide-react'
import Data from './Data'
import { Card,CardContent } from '@mui/material';

const Quotation = () => {
  const categories = ['All Items', 'Onsite & Civil works', 'Furniture, Decor & Wardrobe', 'Kitchen & Accessories'];
  const [selectedCategory, setSelectedCategory] = useState('Onsite & Civil works');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const expanded = useSelector((state) => state.expanded);
  

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;

      // You can adjust the offset value based on your design
      setIsSticky(offset > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };


  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleUpload = (fileDetails) => {
    
    closeModal();
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
    <div className='flex bg-slate-100'>
    <div className='fixed'>
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


    <Link to='/quotation'>
    <SidebarItem 
    icon={<Warehouse/>}  
    text="Inventory"  
    active={true}  
      ></SidebarItem>
    </Link>





 


    <Link to='/mom'>
    <SidebarItem 
    icon={<Timer/>}  
    text="MOM"  
    active={false}  
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
    </Link> */}
    
   






    </Sidebar>
    </div>
   
    <Card sx={{ minWidth: 275 }} style={{ ...componentStyles, ...(window.innerWidth <= 1280?wideScreenStyles:componentStyles) }}>
      <CardContent>
      <h1 className="text-2xl font-bold mb-4 ml-6">Inventory</h1>
      <Data/>
      </CardContent>
      
    </Card>
    </div>
  );
};

export default Quotation;
