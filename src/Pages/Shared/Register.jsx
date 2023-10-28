import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { BiSolidShow } from 'react-icons/bi';
import { useContext } from "react";
import { Authcontext } from "../../providers/Authprovider";
const Register = () => {
  const { createUser } = useContext(Authcontext);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className=" mr-14 w-1/2">
            <img src={img} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form  onSubmit={handleRegister} className="card-body">
              <h1 className="text-5xl  text-center font-bold">Sign UP</h1>
  

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="enter your name"
                  className="input input-bordered"
                  required
                />
              </div>

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
                <input type="submit" value="Signup" className="btn btn-primary" />
              </div>
            </form>
            <p className="my-4 text-center">Al ready have an account?<Link  className="text-[#FF3811] font-bold" to='/login'>login</Link></p>
          </div>
        </div>
      </div>
    );
};

export default Register;