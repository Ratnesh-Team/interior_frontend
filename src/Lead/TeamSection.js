// TeamSection.js

import React from 'react';
import MemberCard from './MemberCard';

const TeamSection = ({ title, members }) => {
  return (
    <div className='mx-6 mt-20 bg-white rounded-lg pb-7'>
      <h2 className='text-2xl ml-4 border-b-2 py-3'>{title}</h2>
      <div className=''>
        <table className='w-full bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800 py-2'>
          <thead>
            <tr>
              <th  className='text-center'>Name</th>
              <th  className='text-center'>Email</th>
              <th>Contact</th>
            </tr>
          </thead>
        </table>
        <div className='max-h-[200px] overflow-y-auto '>
          <table className='w-full'>
            <tbody>
              {members.map((member, index) => (
                <tr key={index} className='border-b-2 py-1'>
                  <td className='text-center'>{member.name}</td>
                  <td className='text-center'>{member.email}</td>
                  <td className='text-center'>{member.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
