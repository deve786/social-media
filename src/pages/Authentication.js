import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginAPI, registerAPI } from '../services/allAPI';

function Authentication({ register }) {
    const [inputs, setInputs] = useState({
        username: '',
        fullName: '',
        email: '',
        password: ''
    });

    const [authUser, setAuthUser] = useState(null);
    const navigate = useNavigate();

    const handleInput = (e) => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
    };

    const handleRegister = async () => {
        const { username, fullName, email, password } = inputs;
        try {
            if (!username || !fullName || !email || !password) {
                alert("Enter all inputs");
            } else {
                const result = await registerAPI(inputs);
                localStorage.setItem('token', result.data.token);
                setAuthUser(result.data.user);
                alert("Register successful");
                navigate('/');
            }
        } catch (error) {
            console.log(error);
            alert("Registration failed");
        }
    };

    const handleLogin = async () => {
        const { username, password } = inputs;
        try {
            if (!username || !password) {
                alert("Enter all inputs");
            } else {
                const result = await loginAPI(inputs);
                console.log(result);
                localStorage.setItem('token', result.token);
                setAuthUser(result.user);
                console.log(result.user);
                alert("Login successful");
                navigate('/');
            }
        } catch (error) {
            console.log(error);
            alert("Login failed");
        }
    };

    return (
        <div className='p-3 flex justify-center items-center h-screen'>
            <div className='bg-white rounded-xl p-3 py-8 px-8'>
                <h2 className='text-xl font-semibold'>{register ? "Create an Account" : "Login Here"}</h2>
                <div className='mt-3 flex flex-col gap-4'>
                    {register && (
                        <>
                            <div className='flex flex-col gap-1'>
                                <label>Email</label>
                                <input type="email" name='email' onChange={handleInput} className='border bg-slate-300 outline-none p-1 py-2 rounded px-2 w-96' />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label>Full Name</label>
                                <input type="text" name='fullName' onChange={handleInput} className='border bg-slate-300 outline-none p-1 py-2 rounded px-2 w-96' />
                            </div>
                        </>
                    )}
                    <div className='flex flex-col gap-1'>
                        <label>Username</label>
                        <input type="text" name='username' onChange={handleInput} className='border bg-slate-300 outline-none p-1 py-2 rounded px-2 w-96' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label>Password</label>
                        <input type="password" name='password' onChange={handleInput} className='border bg-slate-300 outline-none p-1 py-2 rounded px-2 w-96' />
                    </div>
                    <div className='flex flex-col gap-1 mt-2'>
                        <button className='bg-primary-color rounded py-2 hover:bg-fuchsia-500' onClick={register ? handleRegister : handleLogin}>
                            {register ? "Create an Account" : "Login"}
                        </button>
                    </div>
                    <div className='flex flex-col gap-1 mt-2'>
                        <p>{register ? "Already have an account? " : "Don't have an account? "}
                            <Link to={register ? '/login' : '/register'}>
                                <span className='text-blue-600 cursor-pointer hover:underline'>
                                    {register ? "Login Here" : 'Register'}
                                </span>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Authentication;
