import React, { useState,useEffect } from 'react';
import Side from '../Home/Side';
import Onsite from './Onsite';
import { Link } from 'react-router-dom';
import Furniture from './Furniture'
import Quote from './quotationupload'
import { Route,Routes } from 'react-router-dom';
import FileUploadForm from '../file_manger/FileUploadForm';
import { useSelector } from 'react-redux';
import Sidebar from '../Home/Sides';
import { SidebarItem } from '../Home/Sides';
import { File, Folder, IndianRupee, LayoutDashboard, LayoutDashboardIcon, MessageCircleCode, Timer, Users, Watch} from 'lucide-react'

const Quotation = () => {
  const categories = ['All Items', 'Onsite & Civil works', 'Furniture, Decor & Wardrobe', 'Kitchen & Accessories'];
  const [selectedCategory, setSelectedCategory] = useState('Onsite & Civil works');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const expanded = useSelector((state) => state.expanded);
  

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;

      // You can adjust the offset value based on your design
      setIsSticky(offset > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };


  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleUpload = (fileDetails) => {
    
    closeModal();
  };

  return (
    <div className='flex bg-slate-100'>
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
    icon={<File/>}  
    text="All Projects"  
    active={false} 
      ></SidebarItem>
    </Link>


    <Link to='/quotation'>
    <SidebarItem 
    icon={<IndianRupee/>}  
    text="Quotation"  
    active={true}  
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
    icon={<Users/>}  
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
    
   






    </Sidebar>
    </div>
    <div className={`flex-1 ${expanded ? 'ml-[310px]' : 'ml-[100px]'}`}>
    <div className=" bg-white px-6 py-3 my-6 mx-4   shadow-lg  rounded-lg">
        <h1 className="text-3xl font-bold  ">Quotation</h1>
        
      </div>
      {/* Render category buttons */}
      <div className='flex justify-between'>
      <div className="flex mt-4 ">
        {categories.map((category) => (
          <button
            key={category}
            className={`p-2 mx-2 rounded ${selectedCategory === category ? 'bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800' : 'bg-white shadow-lg text-gray-800'}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div>
      <span className=' mr-5'>
              <Link to="new-uploades" className="bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800  p-2 rounded mb-4 shadow-lg" onClick={openModal}>
                Add/Upload
              </Link>
              <button className="bg-green-500 text-white p-2 rounded mb-4 ml-2 shadow-lg">
                Remove
              </button>
            </span>
      </div>
</div>
 {isModalOpen && (
        <div className="modal-overlay">
          <Quote onUpload={handleUpload} onClose={closeModal} trigger={false} />
        </div>
      )}

      <Routes>
        {/* Update Route path to match the nested structure */}
        <Route path="new-uploades" element={<div />} />
      </Routes>
      {/* Render content based on selected category */}
      <div className="mt-4">
        {selectedCategory === 'All Items' && (
          <div>
            {/* Display furniture names */}
            <Onsite/>
            {/* Add code to display furniture names here */}
          </div>
        )}
        {selectedCategory === 'Onsite & Civil works' && (
          <div>
            {/* Display quotation and details for Onsite & Civil works */}
           <Onsite/>
            {/* Add code to display quotation and details here */}
          </div>
        )}
        {selectedCategory === 'Furniture, Decor & Wardrobe' && (
          <div>
            {/* Display pictures and details for Furniture, Decor & Wardrobe */}
           <Furniture/>
            {/* Add code to display pictures and details here */}
          </div>
        )}
        {selectedCategory === 'Kitchen & Accessories' && (
          <div>
            {/* Display kitchen accessories */}
            <Onsite/>
            {/* Add code to display kitchen accessories here */}
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default Quotation;
