import { Route, Routes,Router } from 'react-router-dom'
import './App.css'
import Sidebar, { SidebarItem } from './Home/Sidebar'
// import { Files, FilesIcon, FolderOpenDot, IndianRupee, KanbanSquare, LayoutDashboard, Library, MessageCircleDashed, Shield, TimerIcon, Workflow, } from 'lucide-react'
import Home from './Home/Home'
function App() {

  return (
    <>
    
    <Routes>
    <Route path='/' element={<Home/>}/>
    </Routes>
   
    </>
  )
}

export default App
