import React, { useState } from 'react';

const AddMemberModal = ({onAddMember, onClose }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');
  const [Category, setCategory] = useState('');

  const roles = ['Floor', 'Kitchen', 'Wardrobe','Hall'];

  const handleSubmit = () => {
    // Validate the form data
    if (!title || !email || !description || !Category) {
      alert('Please fill in all fields.');
      return;
    }

    // Handle form submission (add member to the respective Category)
    onAddMember({ title, email,description, Category });

    // Close the modal
   
    onClose();
  };

  const handleClose = () => {
    // Close the modal without adding the member
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <h1 className="text-2xl font-bold mb-4">Add/Upload</h1>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">Name:</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">Description:</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">Phone:</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">Role:</label>
            <select
              className="w-full p-2 border border-gray-300 rounded"
              value={Category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select a Category</option>
              {roles.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              className="px-4 py-2 mr-2 bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800 rounded hover:from-indigo-200 to-indigo-100 text-indigo-800600"
              onClick={handleSubmit}
            >
              Submit
            </button>
            <button
              type="button"
              className="px-4 py-2 bg-red-500 text-gray-700 rounded "
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMemberModal;
