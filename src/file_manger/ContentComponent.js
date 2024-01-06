// ContentComponent.js
import React from 'react';

const ContentComponent = ({ category }) => {
  // Replace these dummy values with actual content data
  const contentData = {
    image: 'path/to/image.jpg',
    title: 'Dummy Title',
    description: 'Dummy Description',
  };

  return (
    <div className="content-container">
      <h2>{category} Content</h2>
      <img src={contentData.image} alt={contentData.title} />
      <h3>{contentData.title}</h3>
      <p>{contentData.description}</p>
    </div>
  );
};

export default ContentComponent;
