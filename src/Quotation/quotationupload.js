// FileUploadForm.jsx
import React, { useState } from 'react';
import axios from 'axios';


const FileUploadForm = ({ onUpload, onClose }) => {
  const [fileDetails, setFileDetails] = useState({
    customerId: '104601',
    customerName: '',
    itemName: 'interior design',
    quantity: '100',
    price: '1500',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFileDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('customerId', 104601);
      formData.append('customerName', fileDetails.customerName);
      formData.append('itemName', fileDetails.itemName);
      formData.append('quantity', fileDetails.quantity);
      formData.append('price', fileDetails.price);

      const response = await axios.post('https://interior-backend.stg.initz.run/v1/api/quotation/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      onUpload(response.data);

      console.log('API response:', response.data);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div className='fixed top-0 left-0 w-[100%] h-[100vh] flex bg-[rgba(0,0,0,0.2)] justify-center items-center'>
      <div className='relative p-[32px] w-[100%] max-w-[640px] bg-white'>
        <div className="modal-content">
          <div>
            <h2>New Upload</h2>
            <form>
              {/* <label>
                Customer ID:
                <input
                  type="text"
                  name="customerId"
                  value={fileDetails.customerId}
                  onChange={handleInputChange}
                />
              </label> */}
              <br />
              <label>
                Customer Name:
                <input
                  type="text"
                  name="customerName"
                  value={fileDetails.customerName}
                  onChange={handleInputChange}
                />
              </label>
              <br />
              <label>
                Item Name:
                <input
                  type="text"
                  name="itemName"
                  value={fileDetails.itemName}
                  onChange={handleInputChange}
                />
              </label>
              <br />
              <label>
                Quantity:
                <input
                  type="text"
                  name="quantity"
                  value={fileDetails.quantity}
                  onChange={handleInputChange}
                />
              </label>
              <br />
              <label>
                Price:
                <input
                  type="text"
                  name="price"
                  value={fileDetails.price}
                  onChange={handleInputChange}
                />
              </label>
              <br />
              <button
                type="button"
                onClick={handleUpload}
                className="bg-blue-500 text-white p-2 rounded mt-4"
              >
                Upload
              </button>
              <button
                type="button"
                onClick={onClose}
                className="bg-red-500 text-white p-2 rounded mt-4 ml-2"
              >
                Close
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileUploadForm;
