import { useState } from 'react'
import React from 'react'
import { useSelector } from 'react-redux';

import DonutChart from '../Home/total-revenue';
import { BarChart, List } from 'lucide-react';
import sofa from '../Quotation/sofa.png'
import Sidebar from '../Home/Sides';
import { SidebarItem } from '../Home/Sides';
import { Link } from 'react-router-dom'
import { File, Folder, IndianRupee, LayoutDashboard, LayoutDashboardIcon, MessageCircleCode, Timer, Watch} from 'lucide-react'


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
    
   






    </Sidebar></div>
       <div className={` flex-1 ${expanded?' ml-[300px]':' ml-[100px]'} `}>
       <div className=' bg-white mx-3 py-5 mt-5 rounded-lg '>
      
        <h1 className=" text-2xl font-bold ml-4 ">Project Level Dashboard</h1>       
        <h1 className=" text-xl font-bold mt-2 ml-4">Timeline: {date.toLocaleDateString()}</h1>        
        <h1 className=" text-md font-light mt-4 ml-4">Project Admin: Interior designer</h1>     
        </div>
        <div className=' border-t-2 mt-4 mx-3 rounded-lg h-[70vh]'>
     
        <div>
    
      
      <div className=' flex justify-between  '>
      <div className=' h-[70vh]  bg-white rounded-lg'>
      <div className=' border-b-2 mb-2 items-start flex py-2 ml-2'>
      <BarChart/>
      <h1 className='text-lg font-normal ml-2 '>Tasks</h1>
      </div>
        <DonutChart/>
</div>
        <div className='flex-1 ml-5'> <div className='h-[70vh] w-[100%] bg-white rounded-lg'>
      <div className=' border-b-2 mb-2 flex items-start py-2 ml-2
      '>
      <List/>
      <h1 className='text-lg font-normal ml-2'>Latest Activities</h1>
      </div>
      <div>   {Projects.map(Project => (
          <li key={Project.id} className=' list-none flex ml-4 border-b-2 py-1 '>
            <img src={sofa} alt={Project.name} style={{ maxWidth: '100px' }} className='mr-6'/>
            <div>
            <h3>{Project.name}</h3>
            <p>{Project.details}</p>
            </div>
          </li>
        ))}</div>
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