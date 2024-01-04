// Project.js

import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import ProjectForm from './ProjectForm';
// Popup component for displaying project details and remove button
const ProjectDetailsPopup = ({ isOpen, onClose, project, onRemove }) => {
  return (
    isOpen && (
      <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
        <div className="bg-white p-4 rounded-md">
          <h2 className="text-2xl font-bold mb-2">{project.name}</h2>
          <p>{project.description}</p>
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

  useEffect(() => {
    // Initialize with demo data when the component is mounted
    setProjects([
      { id: 1, name: 'Project 1', description: 'Description 1' },
      { id: 2, name: 'Project 2', description: 'Description 2' },
      { id: 3, name: 'Project 3', description: 'Description 3' },
    ]);
  }, []);

  const addProject = (project) => {
    setProjects([...projects, { id: projects.length + 1, ...project }]);
    closeForm();
  };

  const removeProject = (projectId) => {
    const updatedProjects = projects.filter((project) => project.id !== projectId);
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

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Project Manager</h1>
      <button
        className="py-2 px-4 bg-blue-500 text-white rounded-md mb-4"
        onClick={openForm}
      >
        Add Project
      </button>

      {/* Project List */}
      <ul>
        {projects.map((project) => (
          <li
            key={project.id}
            className="mb-2 flex justify-between items-center bg-gray-100 p-2 rounded cursor-pointer"
            onClick={() => showDetailsPopup(project)}
          >
            <span className="text-blue-500">{project.name}</span>
            <button
              className="py-1 px-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              onClick={() => removeProject(project.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      {/* Project Form */}
      <ProjectForm isOpen={isFormOpen} onClose={closeForm} onSave={addProject} />

      {/* Project Details Popup */}
      <ProjectDetailsPopup
        isOpen={isDetailsPopupOpen}
        onClose={closeDetailsPopup}
        project={selectedProject}
        onRemove={removeProject}
      />
    </div>
  );
};

// ProjectForm and ProjectDetailsPopup components remain the same as in the previous response.

export default Project;
