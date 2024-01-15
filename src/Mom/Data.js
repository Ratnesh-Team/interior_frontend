import React, { useState, useEffect } from 'react';
import { generateDummyData } from './DummyData';
import { ChevronLeft, ListFilter,ChevronRight ,LayoutList} from 'lucide-react';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Box, Drawer } from '@mui/material';

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

  
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    console.log("yes");
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list1 = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 600,fontFamily:"'Nunito Sans', sans-serif" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
    <div className='flex justify-between'>
    <div>
     <h1 className='ml-8 font-semibold text-2xl mt-12'>Panda Project </h1>
     <h1 className='ml-8 mt-1  text-base font-medium'>Date:22/04/2023</h1>

     </div>
     <div className='mt-12 mr-4 '><button className='bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800 px-6 py-2 rounded-sm'>Edit</button></div>
     </div>
    <ul className=' list-disc ml-4 mr-4 mt-16 pt-4 pl-4 h-[60vh] overflow-y-auto border-2 rounded-md' style={{listStyleType:"disc"}}>
      <li className='ml-6 mr-6 mt-2' typeof='disc'>	Soft serve machine will be placed over under counter ice cube machine.</li>
      <li className='ml-6 mr-6 mt-2' typeof='disc'>	3 Barrels and Electrical water boiler will be placed in centre of back wall.</li>
      <li className='ml-6 mr-6 mt-2' typeof='disc'> Store front facade both edges will be straight.  </li>
      <li className='ml-6 mr-6 mt-2' typeof='disc'>	Front counter- right side topping (10-12 no of topping) counter will be placed with pick-up counter and left side food display counter will be placed with order counter.
  </li>
  <li className='ml-6 mr-6 mt-2'> 10 Tea powder stand placed on back side wall.</li>
  <li className='ml-6 mr-6 mt-2'> 2 inductions will be used intent of 1 dual induction, and storage provision for induction will be placed under the counter.</li>
  <li className='ml-6 mr-6 mt-2'> Croffle maker placed on back side.</li>
  <li className='ml-6 mr-6 mt-2'> Coffee machine will be placed on the front counter.</li>
  <li className='ml-6 mr-6 mt-2'> Reference images will be shared of Glass stand/ holder to the client.</li>
  <li className='ml-6 mr-6 mt-2'> Sealing and Milkshake machine will be placed side by side on the back side.</li>
  <li className='ml-6 mr-6 mt-2'> Big utensil, Glass, Glass lid, Induction storage will be placed on the back side.</li>
  <li className='ml-6 mr-6 mt-2'> RO will be hanged above the sink, and pull-out faucet for the sink will be procured.</li>
  <li className='ml-6 mr-6 mt-2'> Under-counter deep freezer and fridge will be placed on the back wall.</li>
  <li className='ml-6 mr-6 mt-2'> Movable strainer stand will be planned on the sink.</li>
  <li className='ml-6 mr-6 mt-2'> LAN/TEL/Wi-Fi/Camera to be provisioned, confirmed with the client.</li>
  <li className='ml-6 mr-6 mt-2'> Digital display screen to be provisioned, confirmed with the client.</li>
  <li className='ml-6 mr-6 mt-2'> Glass size - 600ml and 320ml, confirmed with the client.</li>
  <li className='ml-6 mr-6 mt-2'> Food menu to be shared by the client.</li>
  <li className='ml-6 mr-6 mt-2'> Raw material to be shared by the client.</li>
  <li className='ml-6 mr-6 mt-2'> 2 MCB to be provisioned, confirmed with the client. One MCB 24X7 ON for Branding display, Freezer, Fridge, and Soft serve machine, and Second MCB will be switched off on a daily basis for other alliances.</li>
  <li className='ml-6 mr-6 mt-2'> Utensil specification to be shared by the client for storage provision.</li>
    </ul>
     
    </Box>
  );
  return (
    <div className="container mx-auto bg-white pt-3">
    <div className="mb-4 flex justify-between ml-6">
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
                  className="ml-2  border-2 border-slate-200 rounded h-8 w-40"
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
              className="ml-2 px-2 py-1 bg-indigo-500 text-white rounded-sm"
              onClick={handleAddFilter}
            >
              Add
            </button>
            <button
              className="ml-2 px-2 py-1 bg-slate-200 text-black hover:bg-[#e96666] rounded-sm"
              onClick={handleClearAllFilters}
            >
              Clear All
            </button>
            <button
              className="ml-2 px-2 py-1 bg-green-500 text-white rounded-sm"
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
        className="p-2 border rounded mr-8"
        value={quickSearch}
        onChange={(e) => setQuickSearch(e.target.value)}
      />
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
      onClick={toggleDrawer('right',true)}
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
    <React.Fragment >
    <Drawer
            anchor={'right'}
            open={state['right']}
            onClose={toggleDrawer('right', false)}
          >
            {list1('right')}
          </Drawer>
          </React.Fragment>
     
     
      
    </div>
  );
};

export default App;
