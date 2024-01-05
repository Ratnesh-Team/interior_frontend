// src/components/CategoryForm.js
import React, { useState } from 'react';

const CategoryForm = ({ onClose }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [file, setFile] = useState(null);
  const [contents, setContents] = useState([]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = () => {
    // Handle form submission
    const formData = {
      title,
      description,
      category,
      file,
    };
  
    // Handle the submitted form data and update the contents state
    setContents([...contents, formData]);
  
    // Reset form fields
    setTitle('');
    setDescription('');
    setCategory('');
    setFile(null);
  
    // Close the form
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-filter backdrop-blur-md">
      <div className="bg-white p-8 rounded-md shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Add Item</h2>
        <label className="block mb-4">
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border rounded-md w-full p-2"
          />
        </label>
        <label className="block mb-4">
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border rounded-md w-full p-2"
          />
        </label>
        <label className="block mb-4">
          Category:
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border rounded-md w-full p-2"
          >
            <option value="">Select Category</option>
            <option value="Floor Design">Floor Design</option>
            <option value="Kitchen">Kitchen</option>
            <option value="Wardrobe">Wardrobe</option>
            <option value="Hall">Hall</option>
          </select>
        </label>
        <label className="block mb-4">
          File:
          <input type="file" onChange={handleFileChange} className="mt-2" />
        </label>
        <div className="flex justify-end">
          <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 mr-2 rounded-md">
            Submit
          </button>
          <button onClick={onClose} className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryForm;
