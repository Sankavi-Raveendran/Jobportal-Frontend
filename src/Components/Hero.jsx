import React,{ useEffect,useState } from 'react';
import hero from "../Assests/hero.jpg";
import Button from './Button';
import axios from "axios";


function Hero() {
  const [propertyData, setpropertyData] = useState([]);
  useEffect(() => {
    (async () => await fetchData())();
  }, []);

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
    <div className="container position-relative">
      <div className="row">
        <div className="col-md-12">
          <img src={hero} alt="hero" className='img-fluid rounded object-fit-cover w-100' style={{height:'80vh'}} />
        </div>
        <div className="position-absolute top-50 start-50 translate-middle text-center">
          <h2 className='fw-bold'>Find The Most Exciting Startup Jobs</h2>
          <div className='input-group '>
          <select
                  className="form-control col-6"
                
                >
                  <option value={""}>Select an Type</option>
                  {propertyData.map((data)=>(
                  <option value={"name"}>{data.name}</option>
                 ))}
                </select>
            {/* <input type="text" className="form-control col-6" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="Search Jobs" /> */}
           <Button lable={"View Job"}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
