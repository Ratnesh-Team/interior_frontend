import { useState } from 'react'
import React from 'react'
import { Warehouse } from 'lucide-react'

import Sidebar, { SidebarItem } from '../Home/Sides'
import { Link } from 'react-router-dom'

import { File, Folder, IndianRupee,FolderOpenDot, LayoutDashboard, LayoutDashboardIcon, Mail, MessageCircleCode, MessageCircleCodeIcon, Timer, Users, Watch,LayoutList} from 'lucide-react'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { useSelector } from 'react-redux'

const ClientPage = () => {
  const [leadStatus, setLeadStatus] = useState('Follow up');
  const expanded = useSelector((state) => state.expanded);
  const handleLeadStatusChange = (status) => {
    setLeadStatus(status);
  };

  return (
    <div className=' flex'>
    <div className='fixed'>
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


    <Link to='/inventory'>
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
    
   






    </Sidebar>
    </div>
    <div className={`flex-1 container  mt-[7%]  max-w-[2040px] w-[100%] max-xl:ml-[23px] ml-[19%] `}>
      <div className=" mx-5 bg-white py-6 pl-6 rounded-md shadow-md ">
        <div className="mb-4">
          <h1 className="text-2xl font-bold mb-2">Client Information</h1>
          <p>
            <strong>Name:</strong> Devashish
          </p>
          <p>
            <strong>Email:</strong> Devashish@gmail.com
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Actions</h2>
          <ul className="flex space-x-4">
            <li>
              <a href="mailto:john.doe@example.com" className="text-indigo-800 hover:underline flex">
                <Mail/><p className=' ml-1'>Send Mail</p>
              </a>
            </li>
            <li>
              <a href="#" className="text-indigo-800 hover:underline flex">
              <File/><p className=' ml-1'>Send Document</p>
              </a>
            </li>
            <li>
              <a href="#" className="text-indigo-800 hover:underline flex">
                <MessageCircleCodeIcon/><p className=' ml-1'>Chat</p>
              </a>
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Lead Status</h2>
          <select
            value={leadStatus}
            onChange={(e) => handleLeadStatusChange(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="Follow up">Follow up</option>
            <option value="Interested">Interested</option>
            <option value="Not interested">Not interested</option>
            <option value="No response">No response</option>
          </select>
        </div>

        <div className="mb-4">
         
          <div className="flex space-x-4">
            <div
              className={`p-2 rounded-md ${
                leadStatus === 'Follow up' ? 'bg-yellow-300 text-white' : 'bg-slate-100'
              }`}
            >
              Follow up
            </div>
            <div
              className={`p-2 rounded-md ${
                leadStatus === 'Interested' ? 'bg-yellow-300 text-white' : 'bg-slate-100'
              }`}
            >
              Interested
            </div>
            <div
              className={`p-2 rounded-md ${
                leadStatus === 'Not interested' ? 'bg-yellow-300 text-white' : 'bg-slate-100'
              }`}
            >
              Not interested
            </div>
            <div
              className={`p-2 rounded-md ${
                leadStatus === 'No response' ? 'bg-yellow-300 text-white' : 'bg-slate-100'
              }`}
            >
              No response
            </div>
          </div>
        </div>
        <div className=''>
        <div className='w-1/2'>
        <h1 className='my-2 font-semibold'>To follow up on</h1>
        <div className='flex'>
            <input
              type="date"
              name="timelineDate"
              className="w-1/2 h-14 mr-3 mt-2 border text-gray-300 border-gray-300 p-2 rounded hover:border-black"
            />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['TimePicker']}>
        <TimePicker label="" />
      </DemoContainer>
    </LocalizationProvider>
    </div>
        </div>
        <div>
      
        </div>
        </div>

        <div className='my-5'>
        <span className='flex justify-between'>
      <h1 className='mb-4 font-semibold'>Today's Update</h1>
      <Link className='text-indigo-800 mr-6'>View Last Update</Link>
      </span>
        <input type="text" className='w-4/5 h-12 border-gray-300 border rounded-md mr-6' />
        </div>
      </div>
    </div>
    </div>);
};

export default ClientPage;
