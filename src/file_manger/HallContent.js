// src/components/FloorDesignContent.js
import React from 'react';

const HallContent = ({ content }) => (
  <div>
    {content.map((item, index) => (
      <div key={index}>
        <h3 className="text-lg font-bold mb-2">{item.title}</h3>
        <p>{item.description}</p>
        {/* Add additional content display logic here */}
      </div>
    ))}
  </div>
);

export default HallContent;
