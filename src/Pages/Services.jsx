import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import ServicesCard from "./Shared/ServicesCard";

const Services = () => {

const [services,setServices]=useState([]);

const getServices=async()=>{
try {
    const res=await axios.get('http://localhost:5000/services');
    setServices(res?.data);
} catch (error) {
    console.log('error ',error)
    
}
}

useEffect(()=>{
getServices()
},[])

  return (
    <div>
  <div className="text-center">
  <h3 className="text-2xl font-bold text-[#FF3811]">Service</h3>
      <h1 className="text-5xl py-3 font-extrabold">Our Service Area</h1>
      <p className="py-4">
        the majority have suffered alteration in some form, by injected humour,
        or randomised <br /> words which dont look even slightly believable.{" "}
      </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-3 ">
   {
    services.map(singelservices=><ServicesCard singelservices={singelservices} key={services._id}></ServicesCard>)
   }
  </div>
    </div>
  );
};

export default Services;
