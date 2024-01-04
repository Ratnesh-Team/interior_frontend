import { useState } from 'react'
import React from 'react'
import { useSelector } from 'react-redux';
import Sidebar, { SidebarItem } from './Sidebar'
import Side from './side'
import DonutChart from './total-revenue';
import { BarChart, List } from 'lucide-react';
import sofa from '../Quotation/sofa.png'


const Home = () => {
  const expanded = useSelector(state => state.expanded);
    const date=new Date()
    const [selectedLanguage, setSelectedLanguage] = useState('Financial');
    
    const languages = ['Financial', 'Client', 'Task Manager','File manager', 'Quotation', 'MOM',  'Purchase Order'];
  
    const handleLanguageClick = (index) => {
      setSelectedLanguage(index);
    };
    const productsData = [
      {
        "id": 1,
        "name": "Product 1",
        "image": "product1.jpg",
        "details": "Details about Product 1."
      },
      {
        "id": 2,
        "name": "Product 2",
        "image": "product2.jpg",
        "details": "Details about Product 2."
      },
      {
        "id": 3,
        "name": "Product 3",
        "image": "product3.jpg",
        "details": "Details about Product 3."
      }
    ];
    const [products] = useState(productsData);

  return (
    <>
    <div className=' flex bg-[#ebebed] w-auto h-[100vh] '>
    <div className='fixed'>
  <Side/></div>
       <div className={` flex-1 ${expanded?' ml-[300px]':' ml-[100px]'} `}>
       <div className=' bg-white mx-3 py-5 mt-5 rounded-lg '>
      
        <h1 className=" text-2xl font-bold ml-4 ">Admin Dashboard</h1>       
        <h1 className=" text-xl font-bold mt-2 ml-4">Timeline: {date.toLocaleDateString()}</h1>        
        <h1 className=" text-md font-light mt-4 ml-4">Project Admin: Interior designer</h1>     
        </div>
        <div className=' border-t-2 mt-4 mx-3 rounded-lg h-[70vh]'>
     
        <div>
    
      
      <div className=' flex justify-between  '>
      <div className=' h-[70vh]  bg-white rounded-lg'>
      <div className=' border-b-2 mb-2 items-start flex py-2 ml-2'>
      <BarChart/>
      <h1 className='text-lg font-normal ml-2 '>Tasks</h1>
      </div>
        <DonutChart/>
</div>
        <div className='flex-1 ml-5'> <div className='h-[70vh] w-[100%] bg-white rounded-lg'>
      <div className=' border-b-2 mb-2 flex items-start py-2 ml-2
      '>
      <List/>
      <h1 className='text-lg font-normal ml-2'>Latest Activities</h1>
      </div>
      <div>   {products.map(product => (
          <li key={product.id} className=' list-none flex ml-4 border-b-2 py-1 '>
            <img src={sofa} alt={product.name} style={{ maxWidth: '100px' }} className='mr-6'/>
            <div>
            <h3>{product.name}</h3>
            <p>{product.details}</p>
            </div>
          </li>
        ))}</div>
</div>

</div>
      </div>
    
    </div>
        </div>   
       </div>

       </div>
    </>
  )
}
export default Home