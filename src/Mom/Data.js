import React, { useState, useEffect } from 'react';
import { generateDummyData } from './DummyData';
import { ChevronLeft, ListFilter,ChevronRight } from 'lucide-react';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const App = () => {
  const [data, setData] = useState(generateDummyData(100));
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState({});
  const [quickSearch, setQuickSearch] = useState('');
  const [newProjectName, setNewProjectName] = useState('');
  const [newPhase, setNewPhase] = useState('');
  const [newManage, setNewManage] = useState('');
  const [selectedRows, setSelectedRows] = useState([]);
  const [sortColumn, setSortColumn] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [jumpToPage, setJumpToPage] = useState(1);
  const [selectedFilters, setSelectedFilters] = useState({});
  const [list, setList] = useState('true');
  const [dynamicFilters, setDynamicFilters] = useState([]);

  const [filterAnchorEl, setFilterAnchorEl] = useState(null);
  
  

  const handleFilterClick = (event) => {
    setFilterAnchorEl(event.currentTarget);
  };
  const customStyle = {
    height: '24px', // Adjust the height as needed
    padding: '8px', // Adjust the padding as needed
  };

  const handleFilterClose = () => {
    setFilterAnchorEl(null);
  };

  const handleApplyFilters = () => {
    // Apply your dynamic filters logic here
    // Combine dynamic and static filters
    const combinedFilters = {
      ...selectedFilters,
      ...dynamicFilters.reduce((acc, filter) => {
        if (filter.column && filter.value) {
          acc[filter.column] = filter.value;
        }
        return acc;
      }, {}),
    };
    setSearchText(combinedFilters);
    handleFilterClose();
  };

  const handleClearAllFilters = () => {
    setSearchText({});
    setSelectedFilters({});
    setDynamicFilters([]);
    handleFilterClose();
  };

  const openFilter = Boolean(filterAnchorEl);
  const filterId = openFilter ? 'filter-popover' : undefined;


  const handleAddFilter = () => {
    setDynamicFilters([...dynamicFilters, { column: '', value: '' }]);
  };

  const handleRemoveFilter = (index) => {
    const updatedFilters = [...dynamicFilters];
    updatedFilters.splice(index, 1);
    setDynamicFilters(updatedFilters);
  };
  const handleApplyDynamicFilters = () => {
    // Apply your dynamic filters logic here
    console.log('Applied Dynamic Filters:', dynamicFilters);
  };

  const filteredData = data.filter((item) =>
    Object.entries({ ...searchText, ...selectedFilters }).every(
      ([column, value]) =>
        item[column] &&
        item[column].toLowerCase().includes(value.toLowerCase())
    )
  );

  const quickSearchFilteredData = filteredData.filter((item) =>
    Object.values(item).some((value) =>
      value.toLowerCase().includes(quickSearch.toLowerCase())
    )
  );

  const sortedData = [...quickSearchFilteredData].sort((a, b) => {
    const columnA = sortColumn ? a[sortColumn].toLowerCase() : '';
    const columnB = sortColumn ? b[sortColumn].toLowerCase() : '';

    if (sortOrder === 'asc') {
      return columnA.localeCompare(columnB);
    } else {
      return columnB.localeCompare(columnA);
    }
  });

  const totalRows = sortedData.length;
  const totalPages = Math.ceil(totalRows / rowsPerPage);

  const paginatedData = sortedData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handleAdd = () => {
    const newData = [
      ...data,
      { projectName: newProjectName, phase: newPhase, manage: newManage },
    ];
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

  const handleSort = (column) => {
    setSortColumn(column);
    setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
  };

  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setCurrentPage(1);
  };

  const handleJumpToPageChange = (e) => {
    setJumpToPage(e.target.value);
  };
  const handleJumpToPageKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleJumpToPage();
    }
  };

  const handleJumpToPage = () => {
    const page = parseInt(jumpToPage, 10);
    if (!isNaN(page) && page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      setJumpToPage(page);
    }
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [data, searchText, selectedFilters, sortColumn, sortOrder, rowsPerPage]);

  const [searchInputsVisibility, setSearchInputsVisibility] = useState({});

  const handleToggleSearchInput = (column, isHovered) => {
    setSearchInputsVisibility((prevVisibility) => ({
      ...prevVisibility,
      [column]: isHovered,
    }));
  };
  const handleProjectClick = (url) => {
    // Navigate to the user's URL when the project name is clicked
    window.location.href = url;
  };

  return (
    <div className="container mx-auto bg-white pt-3">
      <div className="mb-4 flex justify-between ml-6">
        <div>
       
        </div>
     
      </div>
      <table className="w-full overflow-auto overflow-x-auto" style={{overflow:"auto"}}>
      <thead className='bg-[rgb(246,246,247)] border-b-2 pl-4 ml-4'>
        <tr className=''>
          {Object.keys(data[0]).map((column) => (
            // Exclude 'Project Type' column from rendering
            column !== 'Project_Type' && (
              <th
                key={column}
                className="p-2 pl-6 ml-4 text-left"
              >
                 {column === 'ProjectName' ? 'Project Name' : column === 'Project_Type' ? 'Project Type' : column} {sortColumn === column && <span onClick={() => handleSort(column)} className='cursor-pointer'>{sortOrder === 'asc' ? '▲' : '▼'}</span>}
              </th>
            )
          ))}
        </tr>
      </thead>
      <tbody>
  {paginatedData.map((item, index) => (
    <tr
      key={index}
      className={`${selectedRows.includes(index) ? '' : ''} hover:bg-gray-100`}
      onClick={() => toggleRowSelection(index)}
    >
      {Object.keys(item).map((column) => (
        // Exclude 'Project Type' column from rendering
        column !== 'Project_Type' && (
          <td
            key={column}
            className={`border-b-2 p-4 pl-6 text-wrap`}
          >
            {column === 'ProjectName' ? (
              <div>
                <span
                  className="hover:underline cursor-pointer hover:text-indigo-800"
                  onClick={() => handleProjectClick(`/user/`)}
                  style={{
                    backgroundColor: item['Project Type'] === 'Commercial' ? '#e8e7fd' : (item['Project Type'] === 'Residential' ? '#e2f6e8' : 'inherit'),
                    color: item['Project Type'] === 'Commercial' ? 'blue' : (item['Project Type'] === 'Residential' ? 'green' : 'inherit'),
                    borderRadius:"5%",
                    paddingLeft:"7px",
                    paddingRight:"7px",
                    // Add more styling based on your requirement
                  }}
                >
                  {item[column]}
                </span>
                {/* Additional line for the entry */}
              
              </div>
            ) : (
              <p className={` rounded-md`}>{item[column]}</p>
            )}
          </td>
        )
      ))}
    </tr>
  ))}
</tbody>

    </table>
     
     
      
    </div>
  );
};

export default App;
