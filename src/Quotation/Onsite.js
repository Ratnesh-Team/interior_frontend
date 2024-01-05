import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Prices from './prices';
import img from './sofa.png'

const Onsite = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [quotationData, setQuotationData] = useState([]);
  

  useEffect(() => {
    const fetchQuotationData = async () => {
      try {
        const response = await axios.get('https://interior-backend.stg.initz.run/v1/api/get/quotation/?customerId=104601');
        setQuotationData(response.data);
      } catch (error) {
        console.error('Error fetching quotation data:', error);
      }
    };

    fetchQuotationData();
  }, []);

  return (
    <>
      <div className='flex'>
        <div className='border-r-2 w-[80%]'>
          <table className="w-full pt-10">
            {/* Header and other code remain unchanged */}
            <thead className='h-[40px] bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800 shadow-md pb-4 separate-background border-b-2'>
              <tr className='pt-5'>
                <th className="w-[70%]">Item</th>
                <th>Quantity</th>
                <th>Amount</th>
              </tr>
            </thead>

            <tbody className='h-full separate-background'>
              {/* Map over the fetched quotationData.items instead of the static items array */}
              {quotationData.items &&
                quotationData.items.map((item, index) => (
                  <tr
                    key={index}
                    className={selectedItem === index ? 'bg-gray-300 border-b-4' : ' mb-7 border-b-4'}
                    onMouseEnter={() => setSelectedItem(index)}
                    onMouseLeave={() => setSelectedItem(null)}
                  >
                    {/* Display ItemName, Quantity, and Price */}
                    <td className="w-70 flex pl-10 py-5">
                      <span className='pl-5 flex'>
                      <img src={img} alt="" className=' h-16 '/>
                      <div className='pl-5'>
                        <h1 className='font-bold'>{item.ItemName}</h1>
                        <p>{item.Quantity}</p>
                        </div>
                      </span>
                    </td>
                    <td className='text-center'>{item.Quantity}</td>
                    <td className='text-center'>{item.Price} ₹</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div className='flex-1'>
          <Prices />
        </div>
      </div>
    </>
  );
};

export default Onsite;
