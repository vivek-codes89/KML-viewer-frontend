import axios from 'axios';

export const uploadKML = async (file) => {
    const formData = new FormData();
    formData.append('kmlFile', file);

 const response = await axios.post(`${process.env.REACT_APP_API_URL}/kml/upload`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
});

    console.log(">>>>>>>>>response",response)

    return response.data;
};
