// FileUploadForm.jsx

import React, { useState } from 'react';

const FileUploadForm = ({ onUpload, onClose }) => {
  const [fileDetails, setFileDetails] = useState({
    title: '',
    description: '',
    file: null,
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFileDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileDetails((prevDetails) => ({
      ...prevDetails,
      file,
    }));
  };

  const handleUpload = async () => {
    try {
      // Simulate a static response
      const staticResponse = {
        id: 123,
        title: fileDetails.title,
        description: fileDetails.description,
        createdAt: new Date().toLocaleString(),
      };

      // Simulate a delay to mimic the server request
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Call onUpload with the static response
      onUpload(staticResponse);

      // Set the submitted data to update the UI
      setSubmittedData(staticResponse);

      console.log('File uploaded successfully (static response):', staticResponse);
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
              <label>
                Title:
                <input
                  type="text"
                  name="title"
                  value={fileDetails.title}
                  onChange={handleInputChange}
                />
              </label>
              <br />
              {/* Remove description field */}
              <label>
                File:
                <input type="file" onChange={handleFileChange} />
              </label>
              <br />
              <button
                type="button"
                onClick={handleUpload}
                className="from-indigo-200 to-indigo-100 text-indigo-800 text-white p-2 rounded mt-4"
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
