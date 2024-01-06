// TeamSection.js

import React from 'react';
import img from '../Mom/sofa.png'
const TeamSection = ({ title, members }) => {
  return (
    <div className='mt-16 ml-10 '>

      <div className='flex flex-wrap mt-3 '>
             
              {members.map((member, index) => (
             <div className=' w-1/3 mr-5 bg-white px-2 py-2 rounded-lg'>
              <img src={img} alt="" />
              <h1>{member.name}</h1>
              <h1>{member.description}</h1>
             </div>
              ))}
           
     
      </div>
    </div>
  );
};

export default TeamSection;
