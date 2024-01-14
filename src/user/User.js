import { useState } from 'react'
import React from 'react'
import { useSelector } from 'react-redux';
import Sidebar from './sides';
import { SidebarItem } from './sides';
import { Link } from 'react-router-dom'
import { File, Folder, IndianRupee, LayoutDashboard, LayoutDashboardIcon, MessageCircleCode, Timer, Watch} from 'lucide-react'
import fa from 'fontawesome';
import Data from './Data'
import ProjectData from './ProjectData'
import Form from './Form';
import { connect } from 'react-redux';


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



  return (
    <>
    <div className=' flex bg-[#ebebed] w-auto h-[100vh] '>
    <div className='fixed'>
    <Sidebar >
    
    <Link to='/'>
    <SidebarItem 
    icon={<LayoutDashboardIcon/>}  
    text="Dashboard"  
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
      
       <div className=' bg-white mx-3 py-5 mt-5 rounded-lg flex  '>
          <div className=' w-4/5'>
        <h1 className=" text-2xl font-bold ml-4 ">Devashish Project</h1>       
        <h1 className=" text-md font-light mt-2 ml-4">Project Name: Interior designer</h1>     
        <h1 className=" text-md font-light mt-2 ml-4">Project ID: 443941</h1>     
        <h1 className=" text-md font-light mt-2 ml-4">Project Type: commercial</h1>     
        <h1 className=" text-md font-light mt-2 ml-4">Description: this is commercial project</h1>     
        </div>
        <div className='w-1/5'>
       <div className="relative">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={toggleForm}
      >
        Edit
      </button>

      

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-lg z-10"></div>
      )}

      {showForm && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 z-20">
          <h2 className="text-2xl mb-4">Project Information</h2>

          {/* Form Fields */}
          <div className="mb-4">
            <label className="block text-sm font-bold text-gray-700">Project Status:</label>
            <input
              type="text"
              name="projectStatus"
              value={formData.projectStatus}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold text-gray-700">Project Start Date:</label>
            <input
              type="date"
              name="projectStartDate"
              value={formData.projectStartDate}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold text-gray-700">Timeline Date:</label>
            <input
              type="date"
              name="timelineDate"
              value={formData.timelineDate}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold text-gray-700">Project Budget:</label>
            <input
              type="number"
              name="projectBudget"
              value={formData.projectBudget}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold text-gray-700">Received Budget:</label>
            <input
              type="number"
              name="receivedBudget"
              value={formData.receivedBudget}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold text-gray-700">Remaining Budget:</label>
            <input
              type="number"
              name="remainingBudget"
              value={formData.remainingBudget}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>

          {/* Save and Print Buttons */}
          <div className="flex justify-end">
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mr-2 rounded"
              onClick={handleSave}
            >
              Save
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handlePrint}
            >
              Print
            </button>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={toggleForm}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
        </div>
        </div>
        
        <div className='flex '>
        <div className='w-2/5 mr-4'>
          <ProjectData mydata={formData} />
          </div>
          <div className='w-3/5 ml-4 bg-white mt-5'>
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