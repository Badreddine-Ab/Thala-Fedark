import React from 'react'
//import LoginImg from '../assets/Computer login.gif'
//import Logo from '../assets/Marhaba Logo.png'
//import Google from '../assets/google.png'
//import Facebook from '../assets/facebook (1).png'
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { RESET_PASSWORD } from '../../gql/mutations';
//import { Lang, useFormInputValidation } from "react-form-input-validation";
//import axios from "axios";
//import Cookies from "universal-cookie";
//const  cookies = new Cookies();

export default function RESET() {
    const navigate = useNavigate()
    const [formData,setFormData]= useState({})
    const [resetPassword,{data,loading,error}] = useMutation(RESET_PASSWORD)

    if (loading) return <h1>Loading...</h1>
    

    const handleChange =(e)=> {
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e)=>{
        const {password}=formData
        e.preventDefault()
        resetPassword({
            variables:{
              password: password
            }
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
                            <input type="password"
                            name="password"
                            // onBlur={form.handleBlurEvent}
                            onChange={handleChange}
                            // value={fields.email}
                                placeholder='Your email !'
                                className='w-full px-6 py-3 rounded-xl ring-1 ring-gray-300 invalid:ring-red-500 focus:invalid:ring-red-500 focus:invalid:outline-none disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400'
                            />
                            {/* <span className='text-sm text-red-600'>{errors.email ? errors.email : ""}</span>  */}
                        </div>

                        <div>
                            <input type="password"
                            name="password_confirmation"
                            // onBlur={form.handleBlurEvent}
                            onChange={handleChange}
                            // value={fields.email}
                                placeholder='Your email !'
                                className='w-full px-6 py-3 rounded-xl ring-1 ring-gray-300 invalid:ring-red-500 focus:invalid:ring-red-500 focus:invalid:outline-none disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400'
                            />
                            {/* <span className='text-sm text-red-600'>{errors.email ? errors.email : ""}</span>  */}
                        </div>

                        

                        <div className='flex flex-col'>
                            <button type='submit' className='block w-full px-7 py-3 rounded-xl bg-yellow-300 hover:bg-yellow-400 focus:bg-yellow-500 active:bg-yellow-500'>
                                <span className='text-lg text-white'>Recover password</span>
                            </button>
                            <p className='p-1 text-center'>
                                <span className='text-yellow-300'><NavLink to="/login">Back to login</NavLink></span>
                            </p>
                        </div>

                        
                    </form>


                </div>
            </div>

        </div>
    )
}
