import React, { useState } from 'react';

const AddMemberModal = ({onAddMember, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('');

  const roles = ['Designer', 'Supervisor', 'Worker'];

  const handleSubmit = () => {
    // Validate the form data
    if (!name || !phone || !email || !role) {
      alert('Please fill in all fields.');
      return;
    }

    // Handle form submission (add member to the respective role)
    onAddMember({ name, phone,email, role });

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
        <h1 className="text-2xl font-bold mb-4">Add Member</h1>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">Name:</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">Email:</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">Phone:</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">Role:</label>
            <select
              className="w-full p-2 border border-gray-300 rounded"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="">Select a role</option>
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
              className="px-4 py-2 mr-2 from-indigo-200 to-indigo-100 text-indigo-800 text-white rounded hover:from-indigo-200 to-indigo-100 text-indigo-800600"
              onClick={handleSubmit}
            >
              Submit
            </button>
            <button
              type="button"
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
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
