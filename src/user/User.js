import { useState } from 'react'
import React from 'react'
import { Box, Files, Warehouse } from 'lucide-react'
import { useSelector } from 'react-redux';
import Sidebar from '../Home/Sides';
import { SidebarItem } from '../Home/Sides';
import { Link } from 'react-router-dom'
import { File, Folder,Users,FolderOpenDot, IndianRupee, LayoutDashboard, LayoutDashboardIcon, MessageCircleCode, Timer, Watch,LayoutList} from 'lucide-react'
import fa from 'fontawesome';
import Data from './Data'
import ProjectData from './ProjectData'
import Form from './Form';
import { connect } from 'react-redux';
import { Button, Drawer } from '@mui/material';


const Home = () => {
  const expanded = useSelector(state => state.expanded);
    const date=new Date()
    const [selectedLanguage, setSelectedLanguage] = useState('Financial');
    
    const languages = ['Financial', 'Client', 'Task Manager','File manager', 'Quotation', 'MOM',  'Purchase Order'];
  
    const handleLanguageClick = (index) => {
      setSelectedLanguage(index);
    };
    const ProjectsData = [
      {
        "id": 1,
        "name": "Project 1",
        "image": "Project1.jpg",
        "details": "Details about Project 1."
      },
      {
        "id": 2,
        "name": "Project 2",
        "image": "Project2.jpg",
        "details": "Details about Project 2."
      },
      {
        "id": 3,
        "name": "Project 3",
        "image": "Project3.jpg",
        "details": "Details about Project 3."
      }
    ];
    const [Projects] = useState(ProjectsData);




    // form

    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
      projectStatus: 'Painting',
      projectStartDate: '2024-01-20',
      timelineDate: '2024-01-20',
      projectBudget: '5000',
      receivedBudget: '2000',
      remainingBudget: '3000',
    });
    const [displaySavedData, setDisplaySavedData] = useState(true);
  
    const toggleForm = () => {
      setShowForm(!showForm);
      setDisplaySavedData(false);
    };
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleSave = () => {
      // Here, you can handle the logic to save the form data
      console.log('Form data saved:', formData);
      toggleForm();
      setDisplaySavedData(true);
    };
  
    const handlePrint = () => {
      // Here, you can handle the logic to print the form data
      window.print();
    };

    // end of form
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
         <h1>hello</h1>
      </Box>
    );


  return (
    <>
    <div className=' flex bg-[#ebebed] w-auto '>
    <div className='fixed max-xl:hidden'>
    <Sidebar >
    
    <Link to='/'>
    <SidebarItem 
    icon={<LayoutDashboardIcon/>}  
    text="Dashboard"  
    active={true} 
    ></SidebarItem>
    </Link>





    <Link to=''>
    <SidebarItem 
    icon={<IndianRupee/>}  
    text="Quotation"  
    active={false}  
      ></SidebarItem>
    </Link>





 


    <Link to=''>
    <SidebarItem 
    icon={<Files/>}  
    text="File Manager"  
    active={false}  
      ></SidebarItem>
    </Link>







    <Link to=''>
    <SidebarItem 
    icon={<MessageCircleCode/>}  
    text="Chat"  
    active={false}  
      ></SidebarItem>
    </Link>
    
   






    </Sidebar></div>
       <div className={` flex-1 max-xl:mt-[7%] mt-[6%] ${expanded?' ':' ml-[100px]'} `}>
      
       <div className=' bg-white mx-3 py-5 mt-5 rounded-lg flex justify-between max-xl:ml-[4%] mr-[1%] ml-[20%] '>
          <div className='  ml-3'>
        <h1 className=" text-2xl font-bold ml-4 ">Devashish Project</h1>       
        <h1 className=" text-md font-light mt-2 ml-4">Project Name: Interior designer</h1>     
        <h1 className=" text-md font-light mt-2 ml-4">Project ID: 443941</h1>     
        <h1 className=" text-md font-light mt-2 ml-4">Project Type: commercial</h1>     
        <h1 className=" text-md font-light mt-2 ml-4">Description: this is commercial project</h1>     
        </div>
        <div className=''>
       <div className="">
       {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} style={{marginRight:"30px", background:"linear-gradient(to bottom left, #a5b4ff, #ebf4ff) " ,color:"", textTransform:"capatalize" ,  padding: '10px',
      height: '34px',
      fontFamily: "'Nunito Sans', sans-serif",
      textTransform: 'capitalize',fontWeight:"600"}}>Edit</Button>
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
        </div>
        </div>
        
        <div className='flex pb-7 '>
        <div className='w-2/5 mr-5 max-xl:ml-[25px] ml-[19%]'>
          <ProjectData mydata={formData} />
          </div>
          <div className='w-3/5 ml-4 mr-[1%] rounded-md bg-white mt-5'>
          <Data/>
          </div>
        </div>
       </div>

       </div>
    </>
  )
}
const mapStateToProps = (state) => ({
  formData: state.formData,
});

export default connect(mapStateToProps)(Home);