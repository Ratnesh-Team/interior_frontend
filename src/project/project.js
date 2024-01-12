// Project.js

import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import ProjectForm from "./ProjectForm";
import Side from "../Home/Side";
import Sidebar from '../Home/Sides';
import { useSelector } from 'react-redux';
import { SidebarItem } from '../Home/Sides';

import Data from './Data'
import { Link, useNavigate } from 'react-router-dom'
import { File, Folder, IndianRupee, LayoutDashboard, LayoutDashboardIcon, MessageCircleCode, Timer, Users, Watch} from 'lucide-react'


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
    icon={<File/>}  
    text="All Projects"  
    active={true} 
      ></SidebarItem>
    </Link>


    <Link to='/quotation'>
    <SidebarItem 
    icon={<IndianRupee/>}  
    text="Quotation"  
    active={false}  
      ></SidebarItem>
    </Link>


    <Link to='/file'>
    <SidebarItem 
    icon={<Folder/>}  
    text="File Manager"  
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







    <Link to='http://localhost:5173/'>
    <SidebarItem 
    icon={<MessageCircleCode/>}  
    text="Chat"  
    active={false}  
      ></SidebarItem>
    </Link>
    
   






    </Sidebar>
    </div>
      <div className={`flex-1 container mx-auto p-4 bg-slate-100 relative ${expanded ? 'ml-[300px]' : 'ml-[100px]'} `} >
        <div className="bg-white p-6 shadow-lg mt-2 rounded-lg flex justify-between items-center ">
          <h1 className="text-2xl font-bold mb-4">Projects</h1>
        </div>
          <Data/>
       

        {/* Project List */}
      
      </div>
    </div>
  );
};

export default Project;