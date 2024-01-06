import React, { useState } from 'react';
import TeamSection from './TeamSection';
import AddMemberPage from './AddMember';
import Side from '../Home/Side';
import { useSelector } from 'react-redux';

const TeamPage = () => {
  const [isAddMemberModalOpen, setAddMemberModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState('Designer');
  const expanded = useSelector((state) => state.expanded);
  const [teamMembers, setTeamMembers] = useState({
    Designer: [
      { name: 'John Designer', email: 'abc@gmail.com', phone: '123-456-7890' },
      { name: 'Jane Designer', email: 'abc@gmail.com', phone: '987-654-3210' },
      // ... other members
    ],
    Supervisor: [
      { name: 'Sam Supervisor', email: 'abc@gmail.com', phone: '111-222-3333' },
      { name: 'Sara Supervisor', email: 'abc@gmail.com', phone: '444-555-6666' },
      // ... other members
    ],
    Worker: [
      { name: 'Tom Worker', email: 'abc@gmail.com', phone: '777-888-9999' },
      { name: 'Tina Worker', email: 'abc@gmail.com', phone: '123-987-6543' },
      // ... other members
    ],
  });

  const openAddMemberModal = () => {
    setAddMemberModalOpen(true);
  };

  const closeAddMemberModal = () => {
    setAddMemberModalOpen(false);
  };

  const handleAddMember = ({ name,email, phone, role }) => {
    // Create a copy of the current team members
    const updatedTeamMembers = { ...teamMembers };

    // Add the new member to the appropriate role
    updatedTeamMembers[role] = [...updatedTeamMembers[role], { name,email, phone }];

    // Update the state with the new team members
    setTeamMembers(updatedTeamMembers);
  };

  const handleRoleButtonClick = (role) => {
    setSelectedRole(role);
  };

  return (
    <div className="flex bg-[#ebebed] h-[100vh]">
      <div className="fixed">
        <Side />
      </div>
     
      <div className={`flex-1 ${expanded ? 'ml-[300px]' : 'ml-[100px]'}`}>
      <div className=" bg-white px-6 py-3 my-6 mx-4   shadow-lg  rounded-lg">
        <h1 className="text-3xl font-bold  ">Lead Management</h1>
        
      </div>
        <button
          onClick={openAddMemberModal}
          className="float-right bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800 mt-7 mr-10 py-2 px-3 rounded-lg"
        >
          Add Member
        </button>

        {/* Role buttons */}
        <div className="flex mt-4 mb-2 ml-4">
          {Object.keys(teamMembers).map((role) => (
            <button
              key={role}
              onClick={() => handleRoleButtonClick(role)}
              className={`bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800  py-2 px-4 mr-2 rounded-lg ${
                selectedRole === role ? 'bg-blue-700' : ''
              }`}
            >
              {role}
            </button>
          ))}
        </div>

        {/* Render the selected team members based on the selectedRole */}
        {selectedRole && (
          <TeamSection title={selectedRole} members={teamMembers[selectedRole]} />
        )}

        {/* Render the AddMemberPage component */}
        {isAddMemberModalOpen && (
          <AddMemberPage onAddMember={handleAddMember} onClose={closeAddMemberModal} />
        )}
      </div>
    </div>
  );
};

export default TeamPage;
