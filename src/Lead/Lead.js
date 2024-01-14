import React, { useState } from 'react';
import Data from './Data'
import { useSelector } from 'react-redux';
import Sidebar from '../Home/Sides';
import { SidebarItem } from '../Home/Sides';
import { Link } from 'react-router-dom'
import { File, Folder,FolderOpenDot, IndianRupee, LayoutDashboard, LayoutDashboardIcon, MessageCircleCode, Timer, Users, Watch} from 'lucide-react'
import { Card,CardContent } from '@mui/material';

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
    <div className="flex bg-slate-100 ">
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
    icon={<FolderOpenDot/>}  
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







    {/* <Link to='http://localhost:5173/'>
    <SidebarItem 
    icon={<MessageCircleCode/>}  
    text="Chat"  
    active={false}  
      ></SidebarItem>
    </Link> */}
    
   






    </Sidebar>
    </div>
    <Card sx={{ minWidth: 275 }} style={{ width:"80%", marginTop:"7%", marginLeft:"19%", padding:"0", marginRight:"30px", marginBottom:"1%", paddingBottom:"1%", backgroundColor: "rgba(255, 255, 255, 0.95)", backdropFilter:'blur(10px)',}}>
      <CardContent>
      <h1 className="text-2xl font-bold mb-4 ml-6">Project</h1>
      <Data/>
      </CardContent>
      
    </Card>
    </div>
  );
};

export default TeamPage;
