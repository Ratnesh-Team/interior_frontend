import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import ProjectForm from "./ProjectForm";
import Side from "../Home/Side";
import Sidebar from '../Home/Sides';
import { useSelector } from 'react-redux';
import { SidebarItem } from '../Home/Sides';
import Data from './Data'
import { Link, useNavigate } from 'react-router-dom'
import { File, Folder,FolderOpenDot,Warehouse, IndianRupee, LayoutDashboard, LayoutDashboardIcon, MessageCircleCode, Timer, Users, Watch,LayoutList} from 'lucide-react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const ProjectDetailsPopup = ({ isOpen, onClose, project, onRemove }) => {
  return (
    isOpen && (
      <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
        <div className="bg-white p-4 rounded-md">
          <h2 className="text-2xl font-bold mb-2">Project: {project.name}</h2>
          <p>Lead Manager: {project.leadManager}</p>
          <p>Designer: {project.designer}</p>
          <p>Phase: {project.phase}</p>
          <p>Description: {project.description}</p>
          <button
            className="py-2 px-4 bg-red-500 text-white rounded-md mt-4 hover:bg-red-600"
            onClick={() => {
              onRemove(project.id);
              onClose();
            }}
          >
            Remove
          </button>
          <button
            className="py-2 px-4 bg-gray-500 text-white rounded-md ml-2"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    )
  );
};

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDetailsPopupOpen, setIsDetailsPopupOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate=useNavigate();
  const expanded = useSelector((state) => state.expanded);
 
  const addProject = (project) => {
    
    setProjects([...projects, { id: projects.length + 1, ...project }]);
    closeForm();
  };

  const removeProject = (projectId) => {
    const updatedProjects = projects.filter(
      (project) => project.id !== projectId
    );
    setProjects(updatedProjects);
  };

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  const showDetailsPopup = (project) => {
    navigate("/user")
 
  };

  const closeDetailsPopup = () => {
    setSelectedProject(null);
    setIsDetailsPopupOpen(false);
  };

  const filterProjectsByCategory = (category) => {
    setSelectedCategory(category);
  };

  const clearCategoryFilter = () => {
    setSelectedCategory(null);
  };

  const filteredProjects =
    selectedCategory === null
      ? projects
      : projects.filter((project) => project.category === selectedCategory);
      const bull = (
        <Box
          component="span"
          sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
          •
        </Box>
      );
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
    <div className=" fixed">
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
    active={true} 
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







    <Link to='https://master.d1iuo6abnc6erf.amplifyapp.com/chat'>
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
      <h1 className="text-2xl font-bold mb-4 ml-6">Project</h1>
      <Data/>
      </CardContent>
      
    </Card>
        </div>
          
       

      
      
    
  );
};

export default Project;