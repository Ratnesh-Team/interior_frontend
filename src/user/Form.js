import React, { useState } from 'react';

const FormPopup = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    projectStatus: 'Painting',
    projectStartDate: '2024-01-20',
    timelineDate: '2024-01-20',
    projectBudget: '5000',
    receivedBudget: '2000',
    remainingBudget: '3000',
  });
  const [displaySavedData, setDisplaySavedData] = useState(true);

  const toggleForm = () => {
    setShowForm(!showForm);
    setDisplaySavedData(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = () => {
    // Here, you can handle the logic to save the form data
    console.log('Form data saved:', formData);
    toggleForm();
    setDisplaySavedData(true);
  };

  const handlePrint = () => {
    // Here, you can handle the logic to print the form data
    window.print();
  };

  return (
    <div className="relative">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={toggleForm}
      >
        Edit
      </button>

      

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-lg z-10"></div>
      )}

      {showForm && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 z-20">
          <h2 className="text-2xl mb-4">Project Information</h2>

          {/* Form Fields */}
          <div className="mb-4">
            <label className="block text-sm font-bold text-gray-700">Project Status:</label>
            <input
              type="text"
              name="projectStatus"
              value={formData.projectStatus}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold text-gray-700">Project Start Date:</label>
            <input
              type="date"
              name="projectStartDate"
              value={formData.projectStartDate}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold text-gray-700">Timeline Date:</label>
            <input
              type="date"
              name="timelineDate"
              value={formData.timelineDate}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold text-gray-700">Project Budget:</label>
            <input
              type="number"
              name="projectBudget"
              value={formData.projectBudget}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold text-gray-700">Received Budget:</label>
            <input
              type="number"
              name="receivedBudget"
              value={formData.receivedBudget}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold text-gray-700">Remaining Budget:</label>
            <input
              type="number"
              name="remainingBudget"
              value={formData.remainingBudget}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>

          {/* Save and Print Buttons */}
          <div className="flex justify-end">
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mr-2 rounded"
              onClick={handleSave}
            >
              Save
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handlePrint}
            >
              Print
            </button>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={toggleForm}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormPopup;
