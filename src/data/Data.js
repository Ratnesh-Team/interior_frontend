import React, { useState, useEffect } from 'react';
import { generateDummyData } from './DummyData';


const App = () => {
  const pageSize = 10;
  const [data, setData] = useState(generateDummyData(100));
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState('');
  const [newProjectName, setNewProjectName] = useState('');
  const [newPhase, setNewPhase] = useState('');
  const [newManage, setNewManage] = useState('');
  const [selectedRows, setSelectedRows] = useState([]);

  const filteredData = data.filter((item) =>
    Object.values(item).some((value) =>
      value.toLowerCase().includes(searchText.toLowerCase())
    )
  );

  const totalPages = Math.ceil(filteredData.length / pageSize);

  const paginatedData = filteredData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handleAdd = () => {
    const newData = [...data, { projectName: newProjectName, phase: newPhase, manage: newManage }];
    setData(newData);
  };

  const handleRemoveSelected = () => {
    const newData = data.filter((_, index) => !selectedRows.includes(index));
    setData(newData);
    setSelectedRows([]);
  };

  const toggleRowSelection = (index) => {
    if (selectedRows.includes(index)) {
      setSelectedRows(selectedRows.filter((selectedIndex) => selectedIndex !== index));
    } else {
      setSelectedRows([...selectedRows, index]);
    }
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [data, searchText]);

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 border rounded"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <table className="w-full border">
        <thead>
          <tr>
            <th className="border p-2">Project Name</th>
            <th className="border p-2">Phase</th>
            <th className="border p-2">Manage</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((item, index) => (
            <tr
              key={index}
              className={selectedRows.includes(index) ? 'bg-yellow-200' : ''}
              onClick={() => toggleRowSelection(index)}
            >
              <td className="border p-2">{item.projectName}</td>
              <td className="border p-2">{item.phase}</td>
              <td className="border p-2">{item.manage}</td>
              {/* 'Remove' button is removed from each row */}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <button
          className="mr-2 p-2 bg-blue-500 text-white"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          {'<'}
        </button>
        <button
          className="p-2 bg-blue-500 text-white"
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          {'>'}
        </button>
      </div>
      <div className="mt-4">
        <input
          type="text"
          placeholder="Project Name"
          className="p-2 border rounded mr-2"
          value={newProjectName}
          onChange={(e) => setNewProjectName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phase"
          className="p-2 border rounded mr-2"
          value={newPhase}
          onChange={(e) => setNewPhase(e.target.value)}
        />
        <input
          type="text"
          placeholder="Manage"
          className="p-2 border rounded mr-2"
          value={newManage}
          onChange={(e) => setNewManage(e.target.value)}
        />
        <button
          className="p-2 bg-green-500 text-white"
          onClick={handleAdd}
        >
          Add
        </button>
        <button
          className="p-2 bg-red-500 text-white ml-2"
          onClick={handleRemoveSelected}
        >
          Remove Selected
        </button>
      </div>
    </div>
  );
};

export default App;
