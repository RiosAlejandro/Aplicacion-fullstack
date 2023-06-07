/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import customerAxios from "../../config/axios";
import Banner from "../../components/Banner";

const Login = () => {

  let history = useNavigate();

  const [data, setData] = useState({
    name: '',
    user: '',
    email: '',
    phone: '',
    password: '',
  });

  const updateState = (e) => {
    setData({
      ...data,
      [e.target.name] : e.target.value,
    });
  };

  const validateUser = () => {
    const { name, user, email, password } = data;
    let valid = !name.length || !user.length || !email.length || !password.length;
    return valid;
  };

  const newUser = (e) => {
    e.preventDefault();
    customerAxios.post('/', data)
      .then(res => {
        console.log(res);
        history('/', {replace: true})
      })
  };

  return ( 
    <div className="w-full h-screen px-64 pt-40 bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="flex flex-row mx-auto h-4/5 bg-white shadow-2xl">
        <Banner />
        <div className="shadow-inner w-2/5 pt-12 flex flex-col items-center">
          <h2 className="mb-4 text-4xl uppercase text-cyan-600 font-medium">User Register</h2>
          <form onSubmit={newUser}>
            <div className="flex flex-col mb-3">
              <label className="font-semibold">Name:</label>
              <input 
                type="text"
                placeholder="Juanito Cazares"
                name="name"
                className="bg-sky-100 rounded-full px-3 py-1 text-slate-200 w-80"
                onChange={updateState}
              />
            </div> 

            <div className="flex flex-col mb-3">
              <label className="font-semibold">User:</label>
              <input 
                type="text"
                placeholder="JuanoCaza12"
                name="user"
                className="bg-sky-100 rounded-full px-3 py-1 text-slate-200 w-80"
                onChange={updateState}
              />
            </div>

            <div className="flex flex-col mb-3">
              <label className="font-semibold">Email:</label>
              <input 
                type="text"
                placeholder="juancito98@gmail.com"
                name="email"
                className="bg-sky-100 rounded-full px-3 py-1 text-slate-200 w-80"
                onChange={updateState}
              />
            </div>

            <div className="flex flex-col mb-3">
              <label className="font-semibold">Phone:</label>
              <input 
                type="number"
                placeholder="3437445566"
                name="phone"
                className="bg-sky-100 rounded-full px-3 py-1 text-slate-200 w-80"
                onChange={updateState}
              />
            </div>

            <div className="flex flex-col mb-3">
              <label className="font-semibold">Password:</label>
              <input 
                type="password"
                placeholder="**********"
                name="password"
                className="bg-sky-100 rounded-full px-3 py-1 text-slate-200 w-80"
                onChange={updateState}
              />
            </div>

            <div className="flex flex-col mb-3">
              <label className="font-semibold">Repeat password:</label>
              <input 
                type="password"
                placeholder="**********"
                className="bg-sky-100 rounded-full px-3 py-1 text-slate-200 w-80"
                onChange={updateState}
              />
            </div>

            <div className="mt-6 flex justify-center">
              <input type="submit" 
                      disabled={validateUser}
                      value="Register"
                      className="rounded-full uppercase font-semibold text-white px-6 py-2 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
              />
            </div>

          </form>
        </div>
      </div>
    </div>
   );
}
 
export default Login;
