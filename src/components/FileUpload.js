import React, { useState } from 'react';
import axios from 'axios';

function FileUpload({ setKmlData }) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleFileUpload = async (event) => {
        try {
            setLoading(true);
            setError(null); // Reset any previous error
            const file = event.target.files[0];

            if (!file) {
                setError('Please select a file');
                setLoading(false);
                return;
            }

            const formData = new FormData();
            formData.append('kmlFile', file);

            const response = await axios.post(`${process.env.REACT_APP_API_URL}/upload`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data', 
                },
            });
     
            console.log("Full Response:", response);

     
            if (response.status === 201 && response.data.message === "KML file uploaded successfully") {
                const data = response.data.data; 
                console.log('Upload response data:', data);
                setKmlData(data); 
            } else {
                throw new Error('Failed to upload file: Unexpected response structure');
            }
        } catch (error) {
            console.error('Error uploading file:', error);
            if (error.response) {
                console.log('Server Response Error:', error.response.data);
                setError(error.response.data.message || 'Failed to upload file. Please try again.');
            } else {
                console.log('Error Message:', error.message);
                setError('Failed to upload file. Please try again.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="mb-3">
            <label className="form-label">Upload KML File</label>
            <input 
                type="file" 
                className="form-control" 
                accept=".kml"
                onChange={handleFileUpload}
                disabled={loading}
            />
            {loading && <div className="mt-2">Loading...</div>}
            {error && <div className="mt-2 text-danger">{error}</div>}
        </div>
    );
}

export default FileUpload;
