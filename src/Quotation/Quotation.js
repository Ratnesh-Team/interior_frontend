import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Sidebar from '../Home/Sides';
import { SidebarItem } from '../Home/Sides';
import { File, Folder,FolderOpenDot, IndianRupee, LayoutDashboard, LayoutDashboardIcon, MessageCircleCode, Timer, Users, Warehouse, Watch,LayoutList} from 'lucide-react'
import Data from './Data'
import { Box, Button, Card,CardContent, Drawer } from '@mui/material';
import Side from '../Home/Side';

const Quotation = () => {
  const categories = ['All Items', 'Onsite & Civil works', 'Furniture, Decor & Wardrobe', 'Kitchen & Accessories'];
  const [selectedCategory, setSelectedCategory] = useState('Onsite & Civil works');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const expanded = useSelector((state) => state.expanded);
  

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;

      // You can adjust the offset value based on your design
      setIsSticky(offset > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };


  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleUpload = (fileDetails) => {
    
    closeModal();
  };
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener on component mount
    window.addEventListener('resize', handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const componentStyles = {
    // Your default styles here
    width:"80%", marginTop:"7%", marginLeft:"20%", padding:"0", marginRight:"15px", marginBottom:"1%", paddingBottom:"1%", backgroundColor: "rgba(255, 255, 255, 0.95)", backdropFilter:'blur(10px)'
  };
  const wideScreenStyles = {
    // Your styles for 1280px screen and above
    // For example:
    width:"96%",
    marginLeft:"4%",
    marginRight:"1%",
    marginTop:"8%"
  };

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 400 }}
      role="presentation"
     
    >
    <h1 className=' text-xl text-center mt-5 ' style={{fontFamily:"'Nunito Sans', sans-serif",fontWeight:"600"}}>Add Item</h1>
    <form className='flex flex-col ml-[12%] mt-9 '>
                    <label>Item</label>
                    <input type="text" className='border-gray-400 border rounded-sm w-72 h-10' name='devashish' 
                       />
                </form>

    <form className='flex flex-col ml-[12%] mt-4 '>
                    <label>Quantity</label>
                    <input type="number" className='border-gray-400 border rounded-sm w-72 h-10' name='' value=""
                       />
                </form>
    <form className='flex flex-col ml-[12%] mt-4 '>
                    <label>Amount</label>
                    <input type="number" className='border-gray-400 border rounded-sm w-72 h-10' name='' value=""
                       />
                </form>
 

 


<button className='ml-[12%] mt-[5%] bg-gradient-to-tr from-indigo-300 to-indigo-100 text-indigo-800 py-2 px-5 rounded-sm font-semibold' onClick={toggleDrawer(anchor, false)}>Submit</button>
<button className='ml-[5%] mt-[5%] bg-slate-200 text-gray-400 py-2 px-5 rounded-sm font-semibold hover:bg-gray-400 hover:text-black' onClick={toggleDrawer(anchor, false)}>Cancel</button>
    </Box>
  );

  return (
    <div className='flex bg-slate-100'>
    <div className='fixed'>
    <Sidebar >
    
    <Link to='/'>
    <SidebarItem 
    icon={<LayoutDashboardIcon/>}  
    text="Dashboard"  
    active={false} 
    ></SidebarItem>
    </Link>


    <Link to='/project' >
    <SidebarItem 
    icon={<LayoutList/>}  
    text="All Projects"  
    active={false} 
      ></SidebarItem>
    </Link>


    <Link to='/inventory'>
    <SidebarItem 
    icon={<Warehouse/>}  
    text="Inventory"  
    active={true}  
      ></SidebarItem>
    </Link>





 


    <Link to='/mom'>
    <SidebarItem 
    icon={<Timer/>}  
    text="MOM"  
    active={false}  
      ></SidebarItem>
    </Link>


    <Link to='/lead'>
    <SidebarItem 
    icon={<Users/>}  
    text="Lead Management"  
    active={false}  
      ></SidebarItem>
    </Link>







    <Link to='https://master.d1iuo6abnc6erf.amplifyapp.com/chat'>
    <SidebarItem 
    icon={<MessageCircleCode/>}  
    text="Chat"  
    active={false}  
      ></SidebarItem>
    </Link>
    
   






    </Sidebar>
    </div>
   
    <Card sx={{ minWidth: 275 }} style={{ ...componentStyles, ...(window.innerWidth <= 1280?wideScreenStyles:componentStyles) }}>
      <CardContent>
      <div className='flex justify-between'>
      <h1 className="text-2xl font-bold mb-4 ml-6">Inventory</h1>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} style={{marginRight:"30px", background:"linear-gradient(to bottom left, #a5b4ff, #ebf4ff) " ,color:"", textTransform:"capatalize" ,  padding: '10px',
      height: '34px',
      fontFamily: "'Nunito Sans', sans-serif",
      textTransform: 'capitalize',fontWeight:"600"}}>Add Items</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            ModalProps={{ onBackdropClick: toggleDrawer }}
            style={{width:"30%"}}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>  ))}
        </div>
      <Data/>
      </CardContent>
      
    </Card>
    </div>
  );
};

export default Quotation;
