// src/CategoryContent.js
import React from 'react';

const CategoryContent = ({ category }) => {
  // You can replace this with actual data fetching or use a state management library
  const dummyData = [
    { title: 'Item 1', description: 'Description for Item 1' },
    { title: 'Item 2', description: 'Description for Item 2' },
    // Add more dummy data as needed
  ];

  return (
    <div>
      <h2>{category} Content</h2>
      <ul>
        {dummyData.map((item, index) => (
          <li key={index}>
            <strong>{item.title}</strong>: {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryContent;
