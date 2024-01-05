// FloorPage.js
import React, { useState } from 'react';
import Modal from 'react-modal';
import FloorDesignForm from './FloorDesignForm';
import img from '../Mom/sofa.png'
import Side from '../Home/Side';
import { useSelector } from 'react-redux';

const FloorPage = () => {
  const [isAddDesignModalOpen, setIsAddDesignModalOpen] = useState(false);
  const expanded = useSelector(state => state.expanded);
  const [floorDesigns, setFloorDesigns] = useState([
    {
        id: 1,
        title: 'Modern Living Room',
        description: 'A contemporary living room design with minimalist furniture.',
        fileUrl: '',
      },
      {
        id: 2,
        title: 'Cozy Bedroom',
        description: 'A warm and cozy bedroom design with soft lighting.',
        fileUrl: 'https://example.com/cozy-bedroom.jpg',
      },
      {
        id: 3,
        title: 'Elegant Kitchen',
        description: 'An elegant kitchen design with modern appliances.',
        fileUrl: 'https://example.com/elegant-kitchen.jpg',
      },
      {
        id: 4,
        title: 'Sunny Dining Room',
        description: 'A sunny dining room with a large table and comfortable chairs.',
        fileUrl: 'https://example.com/sunny-dining-room.jpg',
      },
      {
        id: 5,
        title: 'Minimalist Office',
        description: 'A minimalist office space with clean lines and functional furniture.',
        fileUrl: 'https://example.com/minimalist-office.jpg',
      },
      {
        id: 6,
        title: 'Rustic Bathroom',
        description: 'A rustic bathroom design with exposed brick and natural elements.',
        fileUrl: 'https://example.com/rustic-bathroom.jpg',
      },
      {
        id: 7,
        title: 'Contemporary Bedroom',
        description: 'A contemporary bedroom with bold colors and stylish decor.',
        fileUrl: 'https://example.com/contemporary-bedroom.jpg',
      },
    // Add more dummy designs as needed
  ]);
  const [selectedDesignId, setSelectedDesignId] = useState(null);

  const openAddDesignModal = () => {
    setIsAddDesignModalOpen(true);
  };

  const closeAddDesignModal = () => {
    setIsAddDesignModalOpen(false);
  };

  const handleAddDesign = (newDesign) => {
    setFloorDesigns((prevDesigns) => [...prevDesigns, newDesign]);
  };

  const handleRemoveDesign = () => {
    if (selectedDesignId !== null) {
      setFloorDesigns((prevDesigns) => prevDesigns.filter((design) => design.id !== selectedDesignId));
      setSelectedDesignId(null);
    }
  };

  return (
    <div className='flex'>
    <div className='fixed'>
<Side/>
    </div>
    <div className= {`flex-1 container p-8  ${expanded ? ' ml-[300px]' : ' ml-[100px]'}`}>
    <div className='flex justify-between border-b-2'>
      <h1 className="text-3xl font-semibold mb-6">Floor Designs</h1>

      <div className="flex mb-4">
    
        <div className="flex">
          <button onClick={openAddDesignModal} className="bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800 py-2 px-4 mr-2 rounded-lg">
            Add Design
          </button>
          <button onClick={handleRemoveDesign} className="bg-red-500 text-white py-2 px-4 rounded-lg">
            Remove Design
          </button>
        </div>
      </div>
</div>
      <Modal
        isOpen={isAddDesignModalOpen}
        onRequestClose={closeAddDesignModal}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
          content: {
            width: '50%',
            margin: 'auto',
          },
        }}
      >
        <FloorDesignForm onClose={closeAddDesignModal} onAddDesign={handleAddDesign} />
      </Modal>

      {/* Display the floor designs */}
      <div className="flex ml-3 flex-wrap w-full">
  {floorDesigns.map((design) => (
    <div
      key={design.id}
      className={`${expanded ? 'w-1/5' : 'w-1/6'} p-4 ml-2 mt-5 shadow-lg cursor-pointer ${
        selectedDesignId === design.id ? 'border bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800' : 'border'
      }`}
      onClick={() => setSelectedDesignId(design.id)}
    >
         <div className=" p-4 rounded">
        <img src={img} alt={design.title} className="mt-4 w-full h-32 object-cover" />
        <h3 className="text-lg font-semibold mb-2">{design.title}</h3>
        <p className="text-gray-600">{design.description}</p>
      </div>
    </div>
  ))}
</div>


    </div>
    </div>
  );
};

export default FloorPage;
