import { useNavigate } from 'react-router-dom';
import { useState } from 'react'

const Login = () => {
    const [user, setUser] = useState('');
    const navigate = useNavigate()

    const loginUser = () => {
        localStorage.setItem('user', user);
         navigate('/home', {replace: true}) 
    }
  return (
    <div>
        <p className=" text-sky-500 font-bold text-2xl ml-[30px] mt-11">Please Login to continue</p>
        <div className="flex mt-8 space-x-7 font-bold text-gray-950 ml-[30px]">
           <label  className='font-bold text-gray-950'> Username: </label><input type='text' className="placeholder:italic placeholder:text-slate-400 block bg-white w-[300px] border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm " placeholder="Username..."  onChange={e => setUser(e.target.value)}></input>
        </div>
        <button className="rounded-full ... text-gray-100 bg-sky-500 w-[100px] h-10 ml-[30px] mt-11" onClick={loginUser} >Login</button>
    </div>
  )
}

export default Login