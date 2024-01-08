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
      { title: 'John Designer', email: 'abc@gmail.com',description:"fdgvw"  },
      { title: 'Jane Designer', email: 'abc@gmail.com',description:"fdgvw"  },
      // ... other members
    ],
    Kitchen: [
      { title: 'John Designer', email: 'abc@gmail.com',description:"fdgvw"  },
      { title: 'Jane Designer', email: 'abc@gmail.com',description:"fdgvw"  },
      // ... other members
    ],
    Wardrobe: [
      { title: 'Sam Supervisor', email: 'abc@gmail.com',description:"fdgvw"  },
      { title: 'Sara Supervisor', email: 'abc@gmail.com',description:"fdgvw"  },
      // ... other members
    ],
    Hall: [
      { title: 'Tom Worker', email: 'abc@gmail.com',description:"fdgvw"  },
      { title: 'Tina Worker', email: 'abc@gmail.com',description:"fdgvw"   },
     
    ],
  });

  const openAddMemberModal = () => {
    setAddMemberModalOpen(true);
  };

  const closeAddMemberModal = () => {
    setAddMemberModalOpen(false);
  };

  const handleAddMember = ({ title, email, description, role }) => {
    // Create a copy of the current team members
    const updatedTeamMembers = { ...teamMembers };
  
    // Make sure that updatedTeamMembers[role] is an array before spreading it
    updatedTeamMembers[role] = Array.isArray(updatedTeamMembers[role])
      ? [...updatedTeamMembers[role], { title, email, description }]  : [{ title, email, description }];
      console.log(updatedTeamMembers);
  
    // Update the state with the new team members
    setTeamMembers(updatedTeamMembers);
  };

  const handleRoleButtonClick = (role) => {
    setSelectedCategory(role);
  };

  return (
    <div className="flex bg-slate-100 h-[100vh]">
      <div className="fixed">
        <Side />
      </div>
      <div className={`flex-1 ${expanded ? 'ml-[300px]' : 'ml-[100px]'}`}>
        <div className=" bg-white px-6 py-3 my-6 mx-4   shadow-lg  rounded-lg">
        <h1 className="text-3xl font-bold  ">File Manager</h1>
        <button
          onClick={openAddMemberModal}
          className="float-right shadow-lg bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800 mt-7 mr-10 py-2 px-3 rounded-lg"
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
              className={`  py-2 px-4 mr-2 rounded-lg ${
                selectedCategory === role ? 'bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800 shadow-lg' : 'bg-white shadow-lg'
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
