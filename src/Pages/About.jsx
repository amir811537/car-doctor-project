import aboutimg from '../assets/images/about_us/person.jpg'
import aboutimgabsulate from '../assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">

<div className=' lg:w-1/2 relative'>
<img src={aboutimg} className="w-3/4 relative rounded-lg shadow-2xl" />
<img src={aboutimgabsulate} className="max-w-xs  right-5 top-1/2 border-8 border-white  absolute rounded-lg shadow-2xl" />

</div>
          <div className='lg:w-1/2'>
            <h2  className='text-[#FF3811] font-bold'>About Us</h2>
            <h1 className="text-5xl font-bold">We are qualified <br /> & of experience <br /> in this field</h1>
            <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
           
           <p className='py-6'> the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            <button className="btn text-white bg-[#FF3811]">Get More Info</button>
          </div>
        </div>
      </div>
    );
};

export default About;