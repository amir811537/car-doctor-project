
const SingleBooking = ({aktabooking,habdeldeleldelte,handelconfirm}) => {
    // console.log(aktabooking)
    const{coustomerName,date,email,img,phonenumber,price,service,_id,status}=aktabooking;


   

    return (
        <div>
              <tr>
            <th>
              <label>
   {           <button onClick={()=> habdeldeleldelte(_id)} className="btn btn-circle btn-outline">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>}
              </label>
            </th>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src={img}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{coustomerName}</div>
                </div>
              </div>
            </td>
            <td>
            {service} <br />
           phone:  {phonenumber}
            </td>
            <td>{email}</td>
            <td>${price}</td>
            <th>
              {
                
                status==="confirm"? <span className="font-bold text-primary">confirmed</span>:
                
                <button  onClick={()=>handelconfirm(_id)} className="btn btn-ghost btn-xs">confirm</button>}
            </th>
          </tr>
        </div>
    );
};

export default SingleBooking;