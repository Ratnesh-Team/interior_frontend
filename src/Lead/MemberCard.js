import React from 'react';

const MemberCard = ({ member }) => {
  return (
    <div>
     <table className=' w-full pt-10 ml-7'>
        <thead>
            <tr>
                <td>Name</td>
                <td>Email</td>
                <td>Contact</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{member.name}</td>
                <td>{member.email}</td>
                <td>{member.phone}</td>
            
            </tr>
        </tbody>
     </table>
    </div>
  );
};

export default MemberCard;
