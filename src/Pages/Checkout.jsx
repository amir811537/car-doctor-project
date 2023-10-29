import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { Authcontext } from "../providers/Authprovider";

const Checkout = () => {
 const services =useLoaderData();
//  console.log(services)
 const {price,title,_id,img,}=services;
 const{user}=useContext(Authcontext);


 const  handelCheckOut =(event)=>{
    event.preventDefault();
    const  form=event.target;
    const name=form.name.value;
    const date =form.date.value;
    const phonenumber=form.phonenumber.value;
    const email =form.email.value;

    const Checkout ={
        coustomerName:name,
        email,
        date,
        phonenumber,
        price,
        service_id:_id,
        service: title,
        img


    }

    fetch('http://localhost:5000/checkout',{
      method:'POST',
      headers:{
        'content-type': 'application/json'

      },
      body:JSON.stringify(Checkout)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if(data){
        alert('service  checkout success')
      }
    })
// console.log(order)

 }

    return (
        <div>
           <div className=" text-center font-bold">
            <h1 className="text-5xl py-4 text-center font-bold">Check Out:{services.title}</h1>
           <p><span className="font-bold text-xl">price:</span> ${price}</p>
           </div>
      <form  onSubmit={handelCheckOut} className="card-body">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="form-control">
          <label className="label">
          </label>
          <input type="text" name="name" defaultValue={user?.displayName} placeholder="First Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
          </label>
          <input type="date"name="date" className="input input-bordered" required />
      
        </div>
        <div className="form-control">
          <label className="label">
          </label>
          <input type="text" name="phonenumber" placeholder="Your Phone" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
          </label>
          <input type="email" placeholder="Your Email" defaultValue={user?.email} name="email" className="input input-bordered" required />
       
        </div>
        </div>
        <div className="form-control mt-6">
          <input  className="btn btn-primary" type="submit" value="order confirm" />
        </div>
      </form>
    </div>
 
    );
};

export default Checkout;