// FloorDesignForm.js
import React, { useState } from 'react';

const FloorDesignForm = ({ onClose, onAddDesign }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dummy data for the new design
    const newDesign = {
      id: Date.now(),
      title,
      description,
      fileUrl: URL.createObjectURL(file),
    };

    // Add logic to submit the form data and update the floor design
    onAddDesign(newDesign);

    // After submission, close the modal
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <h2 className="text-xl font-semibold mb-4">Add Floor Design</h2>
      <label className="block mb-2">
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 w-full"
        />
      </label>
      <label className="block mb-2">
        Description:
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 w-full"
        />
      </label>
      <label className="block mb-2">
        File:
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="border p-2 w-full"
        />
      </label>
      <div className="flex justify-end mt-4">
        <button type="submit" className="bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800 py-2 px-4 mr-2">
          Submit
        </button>
        <button type="button" onClick={onClose} className="bg-gray-500 text-white py-2 px-4">
          Close
        </button>
      </div>
    </form>
  );
};

export default FloorDesignForm;
