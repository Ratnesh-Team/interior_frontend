// ProjectForm.js

import React, { useState } from 'react';

const ProjectForm = ({ isOpen, onClose, onSave }) => {
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');

  const handleSave = () => {
    onSave({ name: projectName, description: projectDescription });
    onClose();
  };

  return (
    isOpen && (
      <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
        <div className="bg-white p-4 rounded-md">
          <h2 className="text-2xl font-bold mb-2">Add Project</h2>
          <label className="block mb-2">
            Project Name:
            <input
              type="text"
              className="border rounded-md p-2 w-full"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
            />
          </label>
          <label className="block mb-2">
            Project Description:
            <textarea
              className="border rounded-md p-2 w-full"
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
            />
          </label>
          <button
            className="py-2 px-4 bg-blue-500 text-white rounded-md mr-2"
            onClick={handleSave}
          >
            Save
          </button>
          <button
            className="py-2 px-4 bg-gray-500 text-white rounded-md"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    )
  );
};

export default ProjectForm;
