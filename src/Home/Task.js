// Function to generate dummy data

import React, { useState, useEffect } from 'react';
import { generateDummyData } from './Datas.js';
import { ChevronLeft, ListFilter,ChevronRight ,LayoutList} from 'lucide-react';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const App = () => {
  const [data, setData] = useState(generateDummyData(10));
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState({});
  const [quickSearch, setQuickSearch] = useState('');
  const [newProjectName, setNewProjectName] = useState('');
  const [newPhase, setNewPhase] = useState('');
  const [newManage, setNewManage] = useState('');
  const [selectedRows, setSelectedRows] = useState([]);
  const [sortColumn, setSortColumn] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [jumpToPage, setJumpToPage] = useState('');
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
      setJumpToPage('');
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

  return (
    <div className="container mx-auto bg-white pt-3">
      {/* <div className="mb-4 flex justify-between ml-6">
        <div>
        <div className=' border-[2px] border-indigo-500 rounded-md '>
          <Button
            aria-describedby={filterId}
            onClick={handleFilterClick}
            className="flex border-b-2 border-indigo-500  py-1 rounded-md text-indigo-500"
          >
            <ListFilter className=" " />
            <h1 className="ml-2 " style={{ fontFamily: "'Jost', sans-serif",paddingLeft:"5px" }}>Filter</h1>
          </Button>
          </div>
          <Popover
            id={filterId}
            open={openFilter}
            anchorEl={filterAnchorEl}
            onClose={handleFilterClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            <div className="p-4" 
            style={{ fontFamily: "'Jost', sans-serif" }}>
              {Object.keys(data[0]).map((column) => (
                <div key={column} className="mb-2">
                 
                </div>
              ))}
              {dynamicFilters.map((filter, index) => (
                <div key={index} className="flex mb-2 p-[-10px]">
                  <Select
                    value={filter.column}
                    onChange={(e) =>
                      setDynamicFilters((prevFilters) => {
                        const updatedFilters = [...prevFilters];
                        updatedFilters[index].column = e.target.value;
                        return updatedFilters;
                      })
                      
                    }
                    displayEmpty
                    className="border rounded"
                    style={{ height: '32px', fontFamily: "'Jost', sans-serif"  }}
                  >
                    <MenuItem value="" disabled style={{ fontFamily: "'Jost', sans-serif" }}>
                      Select Column
                    </MenuItem>
                    {Object.keys(data[0]).map((column) => (
                      <MenuItem key={column} value={column} style={{ fontFamily: "'Jost', sans-serif" }}>
                      {column === 'ProjectName' ? 'Project Name' : column === 'Project_Type' ? 'Project Type' : column}
                      </MenuItem>
                    ))}
                  </Select>
                  <input
                    type="text"
                    placeholder="Enter filter value..."
                    className="ml-2  border-2 border-slate-200 rounded"
                    value={filter.value}
                    onChange={(e) =>
                      setDynamicFilters((prevFilters) => {
                        const updatedFilters = [...prevFilters];
                        updatedFilters[index].value = e.target.value;
                        return updatedFilters;
                      })
                    }
                  />
                  <button
                    className="ml-2 px-3 bg-slate-200 text-indigo-600 hover:bg-[#e96666] hover:text-white rounded-full"
                    onClick={() => handleRemoveFilter(index)}
                  >
                    X
                  </button>
                </div>
              ))}
              <button
                className="ml-2 px-2 py-1 bg-indigo-500 text-white rounded-md"
                onClick={handleAddFilter}
              >
                Add
              </button>
              <button
                className="ml-2 px-2 py-1 bg-slate-200 text-black hover:bg-[#e96666] rounded-md"
                onClick={handleClearAllFilters}
              >
                Clear All
              </button>
              <button
                className="ml-2 px-2 py-1 bg-green-500 text-white rounded-md"
                onClick={handleApplyFilters}
              >
                Apply
              </button>
            </div>
          </Popover>
        </div>
        <input
          type="text"
          placeholder="Quick Search..."
          className="p-2 border rounded mr-2"
          value={quickSearch}
          onChange={(e) => setQuickSearch(e.target.value)}
        />
      </div> */}
      <table className="w-full">
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
            className={selectedRows.includes(index) ? '' : ''}
            onClick={() => toggleRowSelection(index)}
          >
            {Object.keys(item).map((column) => (
              // Exclude 'Project Type' column from rendering
              column !== 'Project_Type' && (
                <td
          key={column}
          className={`border-b-2 p-2 pl-6 `}
        >
                  <p className={` w-1/2 rounded-md ${
            column === 'Phase' &&
            item[''] === 'commercial'
              ? 'text-blue-500 bg-[#e8e7fd] pl-2'
              : column === 'Phase' &&
                item['Project_Type'] === 'residential'
              ? 'text-green-500 bg-[#e2f6e8] pl-2 '
              : ''
          }`}>{item[column]}</p>
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
