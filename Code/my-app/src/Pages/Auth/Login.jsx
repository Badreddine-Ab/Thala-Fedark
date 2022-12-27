import React from 'react'
//import LoginImg from '../assets/Computer login.gif'
//import Logo from '../assets/Marhaba Logo.png'
//import Google from '../assets/google.png'
//import Facebook from '../assets/facebook (1).png'
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../gql/mutations';
//import { Lang, useFormInputValidation } from "react-form-input-validation";
//import axios from "axios";
//import Cookies from "universal-cookie";
//const  cookies = new Cookies();

export default function Login() {
    const navigate = useNavigate()
    const [formData,setFormData]= useState({})
    const [login,{data,loading,error}] = useMutation(LOGIN_USER)

    if (loading) return <h1>Loading...</h1>
  

    const handleChange =(e)=> {
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e)=>{
        const {email,password}=formData
        e.preventDefault()
            login({
            variables:{
                email: email, password: password
            }

        }).then(res=>{
                    console.log(res)
                    navigate('/')

        })
    }

    return (
        <div className='grid grid-cols-1  h-screen w-full'>
            
            <div className='bg-neutral-50 flex flex-col justify-center'>
                <div className='max-w-[460px] w-full mx-auto bg-white p-5 px-8 rounded-lg shadow-lg'>
                    {
                        error &&
                        <div className='bg-red-50 text-red-400 text-center text-lg rounded-xl transition '>{error.message}</div>
                    }

                    {
                        data && data.user &&
                        <div className='green'>{data.user.name} is SignedUp. You can login now!</div>
                    }
                    <div className='space-y-2'>
                        <a href="">
                            {/* <img src={Logo} className='w-40' alt="" /> */}
                        </a>
                        <p className='text-lg text-gray-600'>Hey welcome back 👋 Login first</p>
                    </div>

                    

                    

                    <form noValidate autoComplete="off" onSubmit={handleSubmit} className='pt-4 space-y-6'>
                        <div>
                            <input type="email"
                            name="email"
                            // onBlur={form.handleBlurEvent}
                            onChange={handleChange}
                            // value={fields.email}
                                placeholder='Your email !'
                                className='w-full px-6 py-3 rounded-xl ring-1 ring-gray-300 invalid:ring-red-500 focus:invalid:ring-red-500 focus:invalid:outline-none disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400'
                            />
                            {/* <span className='text-sm text-red-600'>{errors.email ? errors.email : ""}</span>  */}
                        </div>

                        <div className='flex flex-col items-end'>
                            <input type="password"
                            name="password"
                            // onBlur={form.handleBlurEvent}
                            onChange={handleChange}
                            // value={fields.password}
                                placeholder="what's the secret word ?"
                                className='w-full px-6 py-3 rounded-xl ring-1 ring-gray-300 invalid:ring-red-500 focus:invalid:ring-red-500 focus:invalid:outline-none disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400'
                            />
                            {/* <span className='text-sm text-red-600'>{errors.password ? errors.password : ""}</span>  */}
                            <p className='p-1 px-3 -mr-3'>
                                {/* <span className='text-yellow-300'><NavLink to="/forgot">Forgot password ?</NavLink></span> */}

                            </p>
                        </div>

                        <div className='flex flex-col'>
                            <button type='submit' className='bg-primary border border-primary text-white px-8 py-3 font-medium 
                    rounded-md '>
                                <span className='text-lg text-white'>Login</span>
                            </button>
                            <p className='p-1 text-center'>
                                <span className='text-primary'><NavLink to="/register">Create new account</NavLink></span>
                            </p>
                        </div>
                    </form>


                </div>
            </div>

        </div>
    )
}
