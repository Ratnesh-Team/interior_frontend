import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';

const Prices = () => {

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
    <div className=' pl-6 pr-2 '>
    <div className=' border-y-2 border-r-2  p-7 mb-2'>
        <h1>
           Total Running Bill Value
        </h1>
        <h1 className=' font-extrabold text-[30px]'>
        {quotationData.TotalAmount} ₹
        </h1>
        </div>
        <div className='border-y-2 border-r-2  p-7 '>
        <h1>
            Total WO Value
        </h1>
        <h1 className=' font-extrabold text-[30px]'>
            15,000
        </h1>
</div>
<div className=' flex items-center justify-center pt-5'>
        <button className=' bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800 py-2 px-7 rounded-md '>Update & Submit</button>
        </div>
    </div>
  )
}

export default Prices