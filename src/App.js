import { Route, Routes,Router } from 'react-router-dom'
import './App.css'
import Sidebar, { SidebarItem } from './Home/Sidebar'
// import { Files, FilesIcon, FolderOpenDot, IndianRupee, KanbanSquare, LayoutDashboard, Library, MessageCircleDashed, Shield, TimerIcon, Workflow, } from 'lucide-react'
import Home from './Home/Home'
import Files from './file_manger/Files'
import Quotation from './Quotation/Quotation'
import Demo from './file_manger/demo'
import Fetch from './file_manger/Fetchdata'
import Project from './project/project'
import Mom from "./Mom/mom"
import Total from './Home/total-revenue'
import Lead from './Lead/Lead'
import AddMemberPage from './Lead/AddMember'
import Floor from './file_manger/Floor'
import FilePage from './file_manger/FilePage'
function App() {

  return (
    <>
    
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path="/file/*" element={<Files />} />
    <Route path="/file/floor-design" element={<Floor />} />
        <Route path="/file/:title/*" element={<FilePage />} />
    <Route path='/quotation/*' element={<Quotation/>}/>
    <Route path='/demo' element={<Demo/>}/>
    <Route path="/item/:itemId" element={<Fetch />} />
    <Route path="/item/:itemId" element={<Fetch />} />
     <Route path='/project' element={<Project/>}/>
     <Route path='/mom' element={<Mom/>}/>
     <Route path='/lead' element={<Lead/>}/>
     <Route path="/add-member" element={<AddMemberPage/>} />
     <Route path='/revenue' element={<Total/>}/>
    </Routes>
   
    </>
  )
}

export default App
