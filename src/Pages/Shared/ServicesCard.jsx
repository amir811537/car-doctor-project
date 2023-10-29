import { Link } from 'react-router-dom';
import detailsIcon from '../../assets/icons/Frame.png'
import detailsIcon2 from '../../assets/icons/Frame.png'
const ServicesCard = ({singelservices}) => {
    const {_id,title,img,price,}=singelservices;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>  <span className="font-bold text-[16px] text-[#FF3811]">Price :</span> ${price}</p>
    <div className="card-actions justify-end">
      <Link to={`/checkout/${_id}`}><button  className="btn bg-white"><img src={detailsIcon} alt="" /></button></Link>
    </div>
  </div>
</div>
    );
};

export default ServicesCard;