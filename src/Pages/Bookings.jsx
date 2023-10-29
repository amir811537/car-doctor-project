import { useContext, useEffect, useState } from "react";
import { Authcontext } from "../providers/Authprovider";
import SingleBooking from "./SingleBooking";

const Bookings = () => {
  const { user } = useContext(Authcontext);
  const [booking, setBooking] = useState([]);
  const uri = `http://localhost:5000/checkout?email=${user.email}`;
  useEffect(() => {
    fetch(uri)
      .then((res) => res.json())
      .then((data) => setBooking(data));

  }, []);

  const habdeldeleldelte = (id)=>{
    const process = confirm('are sure delete it?')
    if(process){
    fetch(`http://localhost:5000/checkout/${id}`,{
        method: 'DELETE'
    })
    .then(res=>res.json())
    .then(data =>{
        console.log(data);
        if(data.deletedCount>0){
            alert("deleted complate")
            const remaing =booking.filter(booking=>booking._id!==id);
            setBooking(remaing)
        }
    })
    }
        }
        const handelconfirm =(id)=>{
fetch(`http://localhost:5000/checkout/${id}`,{
    method:'PATCH',
    headers: {
        "content-type":"application/json"

    },
    body: JSON.stringify({status: 'confirm'})
})
.then(res=>res.json())
.then(data=>{
    console.log(data)
    if(data.modifiedCount>0){
        const remaing =booking.filter(ssbook=>ssbook._id!==id)
    
    const update =booking.find(ssbook=>ssbook._id===id);
    update.status="confirm" 
    const newbooking =[update,...remaing]
    setBooking(newbooking);
    }
})
        }

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
            Customer Name
            </th>
            <th>service name </th>
            <th>email</th>
            <th>price</th>
            <th> Details</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
        
{
    booking.map(aktabooking=><SingleBooking key={booking._id} handelconfirm={handelconfirm} habdeldeleldelte={habdeldeleldelte} aktabooking={aktabooking}></SingleBooking>)
}


        </tbody>
      </table>
    </div>
  );
};

export default Bookings;
