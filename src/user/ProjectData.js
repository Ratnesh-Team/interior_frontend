import React from 'react';
import projectsData from './projectData.json'; // Import the JSON file

const ProjectsTable = ({mydata}) => {
    console.log(mydata);
    console.log();
  return (
    <div className="container mx-4 p-2 rounded-md mt-8 bg-white ">
    
      <table className="min-w-full bg-white ">
        <thead>
          <tr className='text-left'>
           
          </tr>
        </thead>
        <tbody>
          
            <tr >
              <td className="py-2 px-4 border-b font-bold ">Project Status</td>
              <td className="py-2 px-4 border-b ">{mydata.projectStatus}</td>
            </tr>
          
            <tr >
              <td className="py-2 px-4 border-b font-bold ">Project Start Date</td>
              <td className="py-2 px-4 border-b ">{mydata.projectStartDate}</td>
            </tr>
          
            <tr >
              <td className="py-2 px-4 border-b font-bold ">Project Status</td>
              <td className="py-2 px-4 border-b ">{mydata.timelineDate}</td>
            </tr>
          
            <tr >
              <td className="py-2 px-4 border-b font-bold ">Project Status</td>
              <td className="py-2 px-4 border-b ">{mydata.projectBudget}</td>
            </tr>
          
            <tr >
              <td className="py-2 px-4 border-b font-bold ">Project Status</td>
              <td className="py-2 px-4 border-b ">{mydata.receivedBudget}</td>
            </tr>
          
            <tr >
              <td className="py-2 px-4 border-b font-bold ">Project Status</td>
              <td className="py-2 px-4 border-b ">{mydata.remainingBudget}</td>
            </tr>
        
        </tbody>
      </table>
    </div>
  );
};

export default ProjectsTable;
