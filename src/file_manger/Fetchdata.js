import { File, Folder } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const Fetch = () => {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showFile, setShowFile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://interior-backend.stg.initz.run//v1/api/getfile/');
        const result = await response.json();
        setData(result.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleTitleClick = (item) => {
    // Assuming you have a property called 'url' in your item data
    navigate(`/file/${item.title}`);
  };

  const handleShowFileClick = () => {
    setShowFile(true);
  };

  const handleCloseClick = () => {
    setSelectedItem(null);
  };

  const handleViewFileClick = () => {
    // Assuming the fileUrl is a valid URL
    window.open(selectedItem.fileUrl, '_blank');
  };

  const isImage = (fileName) => {
    if (fileName) {
      const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp'];
      const ext = fileName.slice(((fileName.lastIndexOf(".") - 1) >>> 0) + 2);
      return imageExtensions.includes(`.${ext.toLowerCase()}`);
    }
    return false; // Default to false if fileName is undefined
  };
  
  

  const renderFile = (fileName) => {
    if (isImage(fileName)) {
      return <img src={selectedItem.fileUrl} alt="Preview" className="max-w-full max-h-96" />;
    } else {
      return <div>File Icon</div>; // You can replace this with an appropriate file icon
    }
  };

  return (
    <div className='px-6 bg-slate-100 rounded-md  '>
      {data.map((item) => (
        <div key={item.fileUrl} className=''>
        <div className='flex justify-between bg-white my-6 py-4 items-center rounded-md '>
          
          
            <button onClick={() => handleTitleClick(item)} className='capitalize ml-6 flex '>
            <Folder className='mr-3'/>
              {item.title}
            </button>
            <p className='mr-5'>Created on: {new Date().toDateString()}</p>
          
          </div>
       
        </div>
      ))}
    </div>
  );
};

export default Fetch;
