import React, { useState } from 'react';
import TeamSection from './Floor';
import AddMemberPage from './FileUploadForm';
import Side from '../Home/Side';
import { useSelector } from 'react-redux';
import img from '../Mom/sofa.png'

const TeamPage = () => {
  const [isAddMemberModalOpen, setAddMemberModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Floor');
  const expanded = useSelector((state) => state.expanded);
  const [teamMembers, setTeamMembers] = useState({
    Floor: [
      { name: 'John Designer', email: 'abc@gmail.com',description:"fdgvw"  },
      { name: 'Jane Designer', email: 'abc@gmail.com',description:"fdgvw"  },
      // ... other members
    ],
    Kitchen: [
      { name: 'John Designer', email: 'abc@gmail.com',description:"fdgvw"  },
      { name: 'Jane Designer', email: 'abc@gmail.com',description:"fdgvw"  },
      // ... other members
    ],
    Wardrobe: [
      { name: 'Sam Supervisor', email: 'abc@gmail.com',description:"fdgvw"  },
      { name: 'Sara Supervisor', email: 'abc@gmail.com',description:"fdgvw"  },
      // ... other members
    ],
    Hall: [
      { name: 'Tom Worker', email: 'abc@gmail.com',description:"fdgvw"  },
      { name: 'Tina Worker', email: 'abc@gmail.com',description:"fdgvw"   },
      // ... other members
    ],
  });

  const openAddMemberModal = () => {
    setAddMemberModalOpen(true);
  };

  const closeAddMemberModal = () => {
    setAddMemberModalOpen(false);
  };

  const handleAddMember = ({ name,email, image, role }) => {
    // Create a copy of the current team members
    const updatedTeamMembers = { ...teamMembers };

    // Add the new member to the appropriate role
    updatedTeamMembers[role] = [...updatedTeamMembers[role], { name,email, image }];

    // Update the state with the new team members
    setTeamMembers(updatedTeamMembers);
  };

  const handleRoleButtonClick = (role) => {
    setSelectedCategory(role);
  };

  return (
    <div className="flex bg-[#ebebed] h-[100vh]">
      <div className="fixed">
        <Side />
      </div>
      <div className={`flex-1 ${expanded ? 'ml-[300px]' : 'ml-[100px]'}`}>
        <div className=" bg-white px-6 py-3 my-6 mx-4   shadow-lg  rounded-lg">
        <h1 className="text-3xl font-bold  ">File Manager</h1>
        <button
          onClick={openAddMemberModal}
          className="float-right bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800 mt-7 mr-10 py-2 px-3 rounded-lg"
        >
          Add/Upload
        </button>
      </div>
        {/* Role buttons */}
        <div className="flex mt-4 mb-2 ml-4">
          {Object.keys(teamMembers).map((role) => (
            <button
              key={role}
              onClick={() => handleRoleButtonClick(role)}
              className={`bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800  py-2 px-4 mr-2 rounded-lg ${
                selectedCategory === role ? 'bg-blue-700' : ''
              }`}
            >
              {role}
            </button>
          
          ))}
        </div>
       

        {/* Render the selected team members based on the selectedCategory */}
        {selectedCategory && (
          <TeamSection title={selectedCategory} members={teamMembers[selectedCategory]} />
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
