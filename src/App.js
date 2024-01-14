import { Route, Routes,Router } from 'react-router-dom'
// import { Files, FilesIcon, FolderOpenDot, IndianRupee, KanbanSquare, LayoutDashboard, Library, MessageCircleDashed, Shield, TimerIcon, Workflow, } from 'lucide-react'
import Home from './Home/Home'
import Files from './file_manger/Files'
import Quotation from './Quotation/Quotation'
import Project from './project/project'
import Mom from "./Mom/mom"
import Total from './Home/total-revenue'
import Lead from './Lead/Lead'
import AddMemberPage from './Lead/AddMember'
import User from './user/User'
import Data from './data/Data'
import Demo from './data/demo'
import Noti from './notification/App'
import ClientPage from './user/Client'
import Form from './user/Form'
import DisplayData from './Demo/Display'
import ResponsiveAppBar from './Navbar/Navbar'

function App() {

  return (
    <>
    <ResponsiveAppBar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path="/file/*" element={<Files />} />
    <Route path='/quotation/*' element={<Quotation/>}/>
     <Route path='/project' element={<Project/>}/>
     <Route path='/mom' element={<Mom/>}/>
     <Route path='/lead' element={<Lead/>}/>
     <Route path="/add-member" element={<AddMemberPage/>} />
     <Route path='/revenue' element={<Total/>}/>
     <Route path='/user' element={<User/>}/>
     <Route path='/data' element={<Data/>}/>
     <Route path='/demo' element={<Demo/>}/>
     <Route path='/noti' element={<Form/>}/>
     <Route path='/projects' element={<ClientPage/>}/>
     <Route path='/display' element={<DisplayData/>}/>
    </Routes>
   
    </>
  )
}

export default App
