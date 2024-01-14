import { useState } from 'react'
import React from 'react'
import { useSelector } from 'react-redux';
import Task from './Task'
import { BarChart, List, Users } from 'lucide-react';
import Sidebar from './Sides';
import { SidebarItem } from './Sides';
import { Link, useNavigate } from 'react-router-dom'
import Data from './Data'
import Noti from '../notification/App'
import { File, Folder,FolderOpenDot, IndianRupee, LayoutDashboard, LayoutDashboardIcon, MessageCircleCode, Timer, Watch} from 'lucide-react'


const Home = () => {
  const expanded = useSelector(state => state.expanded);
    const date=new Date()
    const [selectedLanguage, setSelectedLanguage] = useState('Financial');
    const navigate=useNavigate()
    const languages = ['Financial', 'Client', 'Task Manager','File manager', 'Quotation', 'MOM',  'Purchase Order'];
  
    const handleLanguageClick = (index) => {
      setSelectedLanguage(index);
    };
    const onclick=()=>{
        navigate('/user')
    }
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

  return (
    <>
    <div className=' flex bg-[#ebebed] w-auto h-[100vh] '>
    <div className='fixed'>
    <Sidebar >
    
    <Link to='/'>
    <SidebarItem 
    icon={<LayoutDashboardIcon/>}  
    text="Dashboard"  
    active={true} 
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
    active={false}  
      ></SidebarItem>
    </Link>







    {/* <Link to='http://localhost:5173/'>
    <SidebarItem 
    icon={<MessageCircleCode/>}  
    text="Chat"  
    active={false}  
      ></SidebarItem>
    </Link> */}
    
   






    </Sidebar></div>
       <div className={` flex-1 ${expanded?' ml-[21%]':' ml-[100px]'} mt-[7%] `}>
      
        <div className=' border-t-2 mt-7 mx-3 rounded-lg h-[60vh]'>
     
        <div>
    
      
      <div className=' flex justify-between  '>
      <div className=' h-[50vh]  bg-white rounded-lg w-2/5'>
      <div className=' border-b-2 mb-2 items-start flex py-2 ml-2'>
      <BarChart/>
      <h1 className='text-lg font-normal ml-2 '>Tasks</h1>
      </div>
        <Task/>
</div>
        <div className='flex-1 ml-5 w-3/5 h-[60vh]'> <div className='h-[60vh] w-[100%] bg-white rounded-lg'>
      <div className=' border-b-2 mb-2 flex items-start py-2 ml-2
      '>
      <List/>
      <h1 className='text-lg font-normal ml-2'>Latest Activities</h1>
      </div>
      <Data/>
   
</div>

</div>
      </div>
    
    </div>
        </div>   
       </div>

       </div>
    </>
  )
}
export default Home