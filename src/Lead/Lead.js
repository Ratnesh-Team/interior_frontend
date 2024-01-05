import React, { useState } from 'react';
import TeamSection from './TeamSection';
import AddMemberPage from './AddMember';
import Side from '../Home/Side';
import { useSelector } from 'react-redux';

const TeamPage = () => {
  const [isAddMemberModalOpen, setAddMemberModalOpen] = useState(false);
  const expanded = useSelector(state => state.expanded);
  const [teamMembers, setTeamMembers] = useState({
    Designer: [
      { name: 'John Designer',email:"abc@gmail.com", phone: '123-456-7890' },
      { name: 'Jane Designer',email:"abc@gmail.com", phone: '987-654-3210' },
      { name: 'Jane Designer',email:"abc@gmail.com", phone: '987-654-3210' },
      { name: 'Jane Designer',email:"abc@gmail.com", phone: '987-654-3210' },
      { name: 'Jane Designer',email:"abc@gmail.com", phone: '987-654-3210' },
      { name: 'Jane Designer',email:"abc@gmail.com", phone: '987-654-3210' },
      { name: 'Jane Designer',email:"abc@gmail.com", phone: '987-654-3210' },
      { name: 'Jane Designer',email:"abc@gmail.com", phone: '987-654-3210' },
      { name: 'Jane Designer',email:"abc@gmail.com", phone: '987-654-3210' },
      { name: 'Jane Designer',email:"abc@gmail.com", phone: '987-654-3210' },
    ],
    Supervisor: [
      { name: 'Sam Supervisor',email:"abc@gmail.com", phone: '111-222-3333' },
      { name: 'Sara Supervisor',email:"abc@gmail.com", phone: '444-555-6666' },
    ],
    Worker: [
      { name: 'Tom Worker',email:"abc@gmail.com", phone: '777-888-9999' },
      { name: 'Tina Worker',email:"abc@gmail.com", phone: '123-987-6543' },
    ],
  });

  const openAddMemberModal = () => {
    setAddMemberModalOpen(true);
  };

  const closeAddMemberModal = () => {
    setAddMemberModalOpen(false);
  };

  const handleAddMember = ({ name, phone, role }) => {
    // Create a copy of the current team members
    const updatedTeamMembers = { ...teamMembers };

    // Add the new member to the appropriate role
    updatedTeamMembers[role] = [...updatedTeamMembers[role], { name, phone }];

    // Update the state with the new team members
    setTeamMembers(updatedTeamMembers);
  };

  return (
    <div className='flex bg-[#ebebed]'>
    <div className=' fixed'>
    <Side/>
    </div>
    <div className={` flex-1 ${expanded?' ml-[300px]':' ml-[100px]'} `}>
     
      <button onClick={openAddMemberModal} className='  float-right bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800 mt-7 mr-10 py-2 px-3 rounded-lg'>Add Member</button>
      <TeamSection title="Designer" members={teamMembers.Designer} />
      <TeamSection title="Supervisor" members={teamMembers.Supervisor} />
      <TeamSection title="Worker" members={teamMembers.Worker} />
      

      {/* Render the AddMemberPage component */}
      {isAddMemberModalOpen && (
        <AddMemberPage onAddMember={handleAddMember} onClose={closeAddMemberModal} />
      )}
    </div>
    </div>
  );
};

export default TeamPage;
