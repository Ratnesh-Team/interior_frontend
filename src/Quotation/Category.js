import React from 'react'
import { Warehouse ,LayoutList} from 'lucide-react';

const CategoryButton = ({ category, selectedCategory, handleCategoryClick }) => {
 return (
    <button
      className={`${
        selectedCategory === category ? 'from-indigo-200 to-indigo-100 text-indigo-800 text-white' : 'bg-gray-200 text-gray-800'
      } px-4 py-2 rounded`}
      onClick={() => handleCategoryClick(category)}
    >
      {category}
    </button>
 );
};

export default CategoryButton;