import React, { useState,useEffect } from 'react';
import Data from './Data'
import { useSelector } from 'react-redux';
import Sidebar from '../Home/Sides';
import { SidebarItem } from '../Home/Sides';
import { Link } from 'react-router-dom'
import { File, Folder,FolderOpenDot,Warehouse, IndianRupee, LayoutDashboard, LayoutDashboardIcon, MessageCircleCode, Timer, Users, Watch,LayoutList} from 'lucide-react'
import { Card,CardContent } from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

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

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener on component mount
    window.addEventListener('resize', handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const componentStyles = {
    // Your default styles here
    width:"79%", marginTop:"7%", marginLeft:"20%", padding:"0", marginRight:"15px", marginBottom:"1%", paddingBottom:"1%", backgroundColor: "rgba(255, 255, 255, 0.95)", backdropFilter:'blur(10px)'
  };
  const wideScreenStyles = {
    // Your styles for 1280px screen and above
    // For example:
    width:"96%",
    marginLeft:"4%",
    marginRight:"1%",
    marginTop:"8%"
  };

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 400 }}
      role="presentation"
     
    >
    <h1 className=' text-xl text-center mt-5 ' style={{fontFamily:"'Nunito Sans', sans-serif",fontWeight:"600"}}>Add Lead</h1>
    <form className='flex flex-col ml-[12%] mt-9 '>
                    <label>Client Name</label>
                    <input type="text" className='border-gray-400 border rounded-sm w-72 h-10' name='devashish' 
                       />
                </form>
    <form className='flex flex-col ml-[12%] mt-4 '>
                    <label>Lead Date</label>
                    <input type="text" className='border-gray-400 border rounded-sm w-72 h-10' name='' value=""
                       />
                </form>
    <form className='flex flex-col ml-[12%] mt-4 '>
                    <label>Phone</label>
                    <input type="number" className='border-gray-400 border rounded-sm w-72 h-10' name='' value=""
                       />
                </form>
    <form className='flex flex-col ml-[12%] mt-4 '>
                    <label>Email</label>
                    <input type="text" className='border-gray-400 border rounded-sm w-72 h-10' name='' value=""
                       />
                </form>
    <form className='flex flex-col ml-[12%] mt-4 '>
                    <label>Status</label>
                    <input type="text" className='border-gray-400 border rounded-sm w-72 h-10' name='' value=""
                       />
                </form>

 


<button className='ml-[12%] mt-[5%] bg-gradient-to-tr from-indigo-300 to-indigo-100 text-indigo-800 py-2 px-5 rounded-sm font-semibold' onClick={toggleDrawer(anchor, false)}>Submit</button>
<button className='ml-[5%] mt-[5%] bg-slate-200 text-gray-400 py-2 px-5 rounded-sm font-semibold hover:bg-gray-400 hover:text-black' onClick={toggleDrawer(anchor, false)}>Cancel</button>
    </Box>
  );



  
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
    icon={<LayoutList/>}  
    text="All Projects"  
    active={false} 
      ></SidebarItem>
    </Link>


    <Link to='/quotation'>
    <SidebarItem 
    icon={<Warehouse/>}  
    text="Inventory"  
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
    <Card sx={{ minWidth: 275 }} style={{ ...componentStyles, ...(window.innerWidth <= 1280?wideScreenStyles:componentStyles) }}>
      <CardContent>
      <div className='flex justify-between'>
      <h1 className="text-2xl font-bold mb-4 ml-6">Lead Management</h1>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} style={{marginRight:"30px", background:"linear-gradient(to bottom left, #a5b4ff, #ebf4ff) " ,color:"", textTransform:"capatalize" ,  padding: '10px',
      height: '34px',
      fontFamily: "'Nunito Sans', sans-serif",
      textTransform: 'capitalize',fontWeight:"600"}}>Add Lead</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            ModalProps={{ onBackdropClick: toggleDrawer }}
            style={{width:"30%"}}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>  ))}
    
</div>
      <Data/>
      </CardContent>
      
    </Card>
    </div>
  );
};

export default TeamPage;
