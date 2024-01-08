import React, { useState } from 'react';
import TeamSection from './Floor';
import AddMemberPage from './FileUploadForm';
import Side from '../Home/Side';
import Sidebar from '../Home/Sides';
import { SidebarItem } from '../Home/Sides';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { File, Folder, IndianRupee, LayoutDashboard, LayoutDashboardIcon, MessageCircleCode, Timer, Watch} from 'lucide-react'

const TeamPage = () => {
  const [isAddMemberModalOpen, setAddMemberModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Floor');
  const expanded = useSelector((state) => state.expanded);
  const [teamMembers, setTeamMembers] = useState({
    Floor: [
      { title: 'Floor design', email: 'abc@gmail.com',description:"High-quality flooring options to enhance the aesthetics of your space. Choose from a variety of materials, including hardwood, laminate, and tile, to suit your style and preferences."  },
      { title: 'Jane Designer', email: 'abc@gmail.com',description:"High-quality flooring options to enhance the aesthetics of your space. Choose from a variety of materials, including hardwood, laminate, and tile, to suit your style and preferences."  },
      // ... other members
    ],
    Kitchen: [
      { title: 'Kitchen design', email: 'abc@gmail.com',description:"Explore our modern kitchen designs and accessories. From sleek countertops to state-of-the-art appliances, our kitchen solutions combine functionality with contemporary aesthetics for a delightful culinary experience."  },
      { title: 'Kitchen', email: 'abc@gmail.com',description:"Explore our modern kitchen designs and accessories. From sleek countertops to state-of-the-art appliances, our kitchen solutions combine functionality with contemporary aesthetics for a delightful culinary experience."  },
      // ... other members
    ],
    Wardrobe: [
      { title: 'Wardrobe design', email: 'abc@gmail.com',description:"Organize your wardrobe with our stylish and spacious storage solutions. Our wardrobes are designed to maximize space utilization while adding a touch of elegance to your bedroom. Discover a range of finishes and configurations."  },
      { title: 'Sara Supervisor', email: 'abc@gmail.com',description:"Organize your wardrobe with our stylish and spacious storage solutions. Our wardrobes are designed to maximize space utilization while adding a touch of elegance to your bedroom. Discover a range of finishes and configurations."  },
      // ... other members
    ],
    Hall: [
      { title: 'Hall Design', email: 'abc@gmail.com',description:"Transform your hall into a welcoming space with our collection of furniture and decor. From comfortable seating options to eye-catching decorations, we have everything you need to create an inviting and stylish hall for gatherings and relaxation."  },
      { title: 'Tina Worker', email: 'abc@gmail.com',description:"Transform your hall into a welcoming space with our collection of furniture and decor. From comfortable seating options to eye-catching decorations, we have everything you need to create an inviting and stylish hall for gatherings and relaxation."   },
     
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
    active={true}  
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
    icon={<Timer/>}  
    text="Lead Management"  
    active={false}  
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
