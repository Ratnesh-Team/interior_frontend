// Project.js

import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import ProjectForm from "./ProjectForm";
import Side from "../Home/Side";
import Sidebar from '../Home/Sides';
import { SidebarItem } from '../Home/Sides';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { File, Folder, IndianRupee, LayoutDashboard, LayoutDashboardIcon, MessageCircleCode, Timer, Watch} from 'lucide-react'


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

  useEffect(() => {
    // Initialize with demo data when the component is mounted
    setProjects([
      {
        id: 1,
        name: "Project 1",
        leadManager: "Ratnesh",
        designer: "Rattu",
        phase: "Design",
        category: "floor",
      },
      {
        id: 2,
        name: "project 2",
        leadManager: "Rattu",
        designer: "Ratnesh",
        phase: "Review",
        category: "room",
      },
      {
        id: 3,
        name: "project 3",
        leadManager: "Rattu 12",
        designer: "Rattu ",
        phase: "painting",
        category: "kitchen",
      },
      {
        id: 4,
        name: "project 4",
        leadManager: "Rattu 12",
        designer: "Rattu ",
        phase: "completed",
        category: "complete",
      },
      // Add more projects with different categories
    ]);
  }, []);

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
    setSelectedProject(project);
    setIsDetailsPopupOpen(true);
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
    icon={<Timer/>}  
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
      <div className="flex-1 container mx-auto p-4 bg-slate-100 relative">
        <div className="bg-white p-6 shadow-lg mt-2 rounded-lg flex justify-between items-center ">
          <h1 className="text-3xl font-bold mb-4">Project Management</h1>
        </div>
        <div className="flex justify-start mt-4">
          <button
            className={`py-2 px-4  rounded-md  shadow-lg  ml-4 mt-4  ${
              selectedCategory === null
                ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800 rounded-md"
                : "bg-white"
            }`}
            onClick={clearCategoryFilter}
          >
            All Projects
          </button>
          <button
            className={`py-2 px-4  rounded-md shadow-lg  ml-8 mt-4 ${
              selectedCategory === "floor"
                ? " bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
                : " bg-white"
            }`}
            onClick={() => filterProjectsByCategory("floor")}
          >
            Floors
          </button>
          <button
            className={`py-2 px-4 shadow-lg   ml-8 mt-4 ${
              selectedCategory === "room"
                ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800 rounded-md"
                : "bg-white"
            }`}
            onClick={() => filterProjectsByCategory("room")}
          >
            Rooms
          </button>
          <button
            className={`py-2 px-4  rounded-md shadow-lg  ml-8 mt-4 ${
              selectedCategory === "kitchen"
                ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800 rounded-md"
                : "bg-white"
            }`}
            onClick={() => filterProjectsByCategory("kitchen")}
          >
            Kitchen
          </button>
          <button
            className={`py-2 px-4  rounded-md shadow-lg  ml-8 mt-4 ${
              selectedCategory === "complete"
                ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800 rounded-md"
                : "bg-white"
            }`}
            onClick={() => filterProjectsByCategory("complete")}
          >
            completed
          </button>
          <button
            className="py-2 px-4 bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800 rounded-md  ml-auto mt-4"
            onClick={openForm}
          >
            Add Project
          </button>
        </div>

        {/* Project List */}
        <ul>
          {filteredProjects.map((project) => (
            <li key={project.id} className="mb-10">
              <div className="flex justify-between items-center bg-white p-4 shadow-lg mt-4 rounded-lg relative">
                <span className="text-black-500 font-bold">
                  {project.name}
                  {/* <p className="font-normal">
                    Lead Manager: {project.leadManager}
                  </p>
                  <p className="font-normal">Designer: {project.designer}</p> */}
                </span>
                <p className="font-normal absolute  bottom-0 right-12 mr-20 mb-2 ml-auto mt- 4 ">
                  Phase: {project.phase}
                </p>
                <button
                  className="py-1 px-2 bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800 rounded-md"
                  onClick={() => showDetailsPopup(project)}
                >
                  Manage
                </button>
              </div>
            </li>
          ))}
        </ul>

        {/* Project Form */}
        <ProjectForm
          isOpen={isFormOpen}
          onClose={closeForm}
          onSave={addProject}
        />

        {/* Project Details Popup */}
        <ProjectDetailsPopup
          isOpen={isDetailsPopupOpen}
          onClose={closeDetailsPopup}
          project={selectedProject}
          onRemove={removeProject}
        />
      </div>
    </div>
  );
};

export default Project;