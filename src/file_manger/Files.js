// src/components/App.js
import React, { useState } from 'react';
import CategoryForm from './CategoryForm';
import FloorDesignContent from './Floor';
import KitchenContent from './KitchenContent';
import WardrobeContent from './WardrobeContent';
import HallContent from './HallContent';

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [contents, setContents] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleOpenForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleFormSubmit = (formData) => {
    // Handle the submitted form data and update the contents state
    setContents([...contents, formData]);

    // Close the form
    handleCloseForm();
  };

  const handleCategoryClick = (category) => {
    // Set the selected category to display its content
    setSelectedCategory(category);
  };

  const resetSelectedCategory = () => {
    // Reset the selected category to show all content
    setSelectedCategory(null);
  };

  // Filter contents based on categories
  const floorDesignContents = contents.filter((item) => item.category === 'Floor Design');
  const kitchenContents = contents.filter((item) => item.category === 'Kitchen');
  const wardrobeContents = contents.filter((item) => item.category === 'Wardrobe');
  const hallContents = contents.filter((item) => item.category === 'Hall');

  return (
    <div className="container mx-auto mt-8 p-4">
      <div className="flex justify-end mb-4">
        <button onClick={handleOpenForm} className="bg-green-500 text-white px-4 py-2 rounded-md">
          Add Item
        </button>
      </div>
      {showForm && <CategoryForm onClose={handleCloseForm} onSubmit={handleFormSubmit} />}
      <div>
        {/* Display Category buttons */}
        <button onClick={() => handleCategoryClick('Floor Design')} className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">
          Floor Design
        </button>
        <button onClick={() => handleCategoryClick('Kitchen')} className="bg-red-500 text-white px-4 py-2 rounded-md mr-2">
          Kitchen
        </button>
        <button onClick={() => handleCategoryClick('Wardrobe')} className="bg-yellow-500 text-white px-4 py-2 rounded-md mr-2">
          Wardrobe
        </button>
        <button onClick={() => handleCategoryClick('Hall')} className="bg-purple-500 text-white px-4 py-2 rounded-md mr-2">
          Hall
        </button>
        <button onClick={resetSelectedCategory} className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md">
          Show All
        </button>

        {/* Display CategoryContent based on the selected category */}
        {selectedCategory === 'Floor Design' && <FloorDesignContent content={floorDesignContents} />}
        {selectedCategory === 'Kitchen' && <KitchenContent content={kitchenContents} />}
        {selectedCategory === 'Wardrobe' && <WardrobeContent content={wardrobeContents} />}
        {selectedCategory === 'Hall' && <HallContent content={hallContents} />}
        {/* Add additional categories as needed */}
      </div>
    </div>
  );
};

export default App;
