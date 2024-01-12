import React, { useState } from 'react';
import Data from './Data'
import { useSelector } from 'react-redux';
import Sidebar from '../Home/Sides';
import { SidebarItem } from '../Home/Sides';
import { Link } from 'react-router-dom'
import { File, Folder, IndianRupee, LayoutDashboard, LayoutDashboardIcon, MessageCircleCode, Timer, Users, Watch} from 'lucide-react'

const TeamPage = () => {
  const [isAddMemberModalOpen, setAddMemberModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState('Designer');
  const expanded = useSelector((state) => state.expanded);
  const [teamMembers, setTeamMembers] = useState({
    
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
    <div className="flex bg-slate-100 h-[100vh]">
      <div className="fixed">
      <Sidebar >
    
    <Link to='/'>
    <SidebarItem 
    icon={<LayoutDashboardIcon/>}  
    text="Dashboard"  
    active={false} 
    ></SidebarItem>
    </Link>


    <Link to='/project' >
    <SidebarItem 
    icon={<File/>}  
    text="All Projects"  
    active={false} 
      ></SidebarItem>
    </Link>


    <Link to='/quotation'>
    <SidebarItem 
    icon={<IndianRupee/>}  
    text="Quotation"  
    active={false}  
      ></SidebarItem>
    </Link>


    <Link to='/file'>
    <SidebarItem 
    icon={<Folder/>}  
    text="File Manager"  
    active={false}  
      ></SidebarItem>
    </Link>


 


    <Link to='/mom'>
    <SidebarItem 
    icon={<Timer/>}  
    text="MOM"  
    active={false}  
      ></SidebarItem>
    </Link>


    <Link to='/lead'>
    <SidebarItem 
    icon={<Users/>}  
    text="Lead Management"  
    active={true}  
      ></SidebarItem>
    </Link>







    <Link to='http://localhost:5173/'>
    <SidebarItem 
    icon={<MessageCircleCode/>}  
    text="Chat"  
    active={false}  
      ></SidebarItem>
    </Link>
    
   






    </Sidebar>
      </div>
     
      <div className={`flex-1 ${expanded ? 'ml-[300px]' : 'ml-[100px]'}`}>
      <div className=" bg-white px-6 py-3 my-6 mx-4   shadow-lg  rounded-lg">
      <div className=' flex justify-between mb-5 ml-6'>
        <h1 className="text-3xl font-bold  ">Lead Management</h1>
        
        <button
          onClick={openAddMemberModal}
          className=" shadow-lg bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800  mr-10 py-2 px-3 rounded-lg"
        >
          Add Member
        </button>
        </div>
          <Data/>
        
      </div>

        {/* add member modal */}  
        </div>
    </div>
  );
};

export default TeamPage;
