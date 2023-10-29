import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { BiSolidShow } from 'react-icons/bi';
import { useContext } from "react";
import { Authcontext } from "../../providers/Authprovider";

const Login = () => {
  const {signin}=useContext(Authcontext);

    const handelLogin =(event)=>{
        event.preventDefault();
        const form =event.target;
 const email=form.email.value;
 const password=form.password.value;
 console.log(email,password)
 signin(email,password)
 .then(result =>{
  const user=result.user;
  console.log(user)
 })
 .then(error => console.log(error))


    }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className=" mr-14 w-1/2">
          <img src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form  onSubmit={handelLogin} className="card-body">
            <h1 className="text-5xl  text-center font-bold">Login now!</h1>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input type="submit" value="Login" className="btn btn-primary" />
            </div>
          </form>
          <p className="my-4 text-center">New to Car Doctors?<Link  className="text-[#FF3811] font-bold" to='/register'>Sing Up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
