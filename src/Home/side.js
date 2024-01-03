import React from 'react'
import Sidebar, { SidebarItem } from './Sidebar'
import { Link } from 'react-router-dom'


const Side = () => {
  return (
    <Sidebar >
    
    <Link to='/'><SidebarItem  text="Dashboard"  active={true} alert ></SidebarItem></Link>
    <Link to='/project' ><SidebarItem  text="All Projects" active={true} alert ></SidebarItem></Link>
    <Link to='/quotation'><SidebarItem  text="Quotation" active={true} alert ></SidebarItem></Link>
    <Link to='/file'><SidebarItem  text="Files" active={true} alert ></SidebarItem></Link>
    <Link to='/timelines'><SidebarItem  text="Timelines" active={true} alert ></SidebarItem></Link>
    <Link to='/task'><SidebarItem  text="Task Manager" active={true} alert ></SidebarItem></Link>
    <Link to='/mom'><SidebarItem  text="MOM" active={true} alert ></SidebarItem></Link>
    <Link to='/moodboard'><SidebarItem  text="Moodboard" active={true} alert ></SidebarItem></Link>
    <Link to='/vendor'><SidebarItem  text="Vender & PO's" active={true} alert ></SidebarItem></Link>
    <Link to='http://localhost:5173/'><SidebarItem  text="Chat" active={true} alert ></SidebarItem></Link>
     <Link to='/reports'><SidebarItem  text="Reports" active={true} alert ></SidebarItem></Link> 

    </Sidebar>
  )
}

export default Side