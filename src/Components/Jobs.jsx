import React,{ useEffect,useState } from 'react';
import Button from './Button'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

function Jobs() {
  const navigate = useNavigate();
  const [updateTrigger, setUpdateTrigger] = useState(false);
  const [propertyData, setpropertyData] = useState([]);

  const handleDetailsClick = () => {
    navigate('/Jobdetail'); 
  };

  useEffect(() => {
    (async () => await fetchData())();
  }, []);


  useEffect(() => {
    fetchData();
  }, [updateTrigger]);

  async function fetchData() {
    try {
      const result = await axios.get("http://127.0.0.1:8000/jobs");
      setpropertyData(result.data);
    } catch (error) {
      // Handle error
      console.error("Error fetching Propertydata:", error);
    }
  }

  return (
    <div className=' container'>
        <div className="top">
         <div className=' text-center text-blue  my-5 fs-1 fw-bold'>Active Jobs</div>
        </div>
        <div className="bottom">
        <table class="table table-striped table-hoverr">
        <thead>
    <tr>
    <th scope="col">No</th>
      <th scope="col">Jobs</th>
      <th scope="col">Postion</th>
      <th scope="col">Company Name</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
  {propertyData && propertyData.length > 0 ? (
  propertyData.map((data, index) => (
    <tr key={index}>
      <th scope="row">{index+1}</th>
      <td>{data.name}</td>
      <td>{data.position}</td> 
      <td>{data.companyname}</td>
      <td>
        <button
          className='btn bg-blue text-light fw-light my-2 fw-bold'
          onClick={() => handleDetailsClick(data)}
        >
          Details
        </button>
      </td>
    </tr>
  ))
) : (
  <tr>
    <td colSpan="4">No results found</td>
  </tr>
)}

    
  </tbody>
</table>
        </div>
    </div>
  )
}

export default Jobs