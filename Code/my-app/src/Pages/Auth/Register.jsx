import React from 'react'
//import LoginImg from '../assets/Sign up.gif'
//import Logo from '../assets/Marhaba Logo.png'
//import Google from '../assets/google.png'
//import Facebook from '../assets/facebook (1).png'
import { NavLink } from 'react-router-dom'
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { REGISTER_USER } from '../../gql/mutations';
//import { Lang, useFormInputValidation } from "react-form-input-validation";
//import axios from "axios";

export default function Register() {
    const [formData,setFormData]= useState({})
    const [registerUser,{data,loading,error}] = useMutation(REGISTER_USER)

    if(loading) return <h1>Loading...</h1>
    
    const handleChange =(e)=> {
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        registerUser({
            variables:{
                userNew:formData
            }
        })
    }
        return (

            <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
                <div className='hidden sm:block'>
                    {/* <img className='w-full h-full ' src={LoginImg} alt='Login img' /> */}
                </div>
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
                
                        <div className='space-y-1'>
                            {/* <NavLink to="/"> */}
                                {/* <img src={Logo} className='w-40' alt="" /> */}
                            {/* </NavLink> */}
                            <p className='text-lg text-gray-600'>Welcome to Marhaba ! It's quick and easy 💛</p>
                        </div>

                        <div className='mt-3 grid gap-3 sm:grid-cols-2'>
                            <button className='py-3 px-6 bg-yellow-50 rounded-xl transition '>
                                <span className='flex justify-center gap-4'>
                                    {/* <img className='w-5' src={Google} alt="google logo" /> */}
                                    <span className='text-sm tracking-wide font-semibold text-yellow-300'>With Google</span>
                                </span>
                            </button>

                            <button className='py-3 px-6 bg-blue-50 rounded-xl transition '>
                                <span className='flex justify-center gap-4'>
                                    {/* <img className='w-5' src={Facebook} alt="google logo" /> */}
                                    <span className='text-sm tracking-wide font-semibold text-blue-500'>With Facebook</span>
                                </span>
                            </button>
                        </div>

                        <div className='mt-4 border-t'>
                            <span className='block w-max mx-auto -mt-3 px-4 text-gray-500 bg-white'>Or</span>
                        </div>

                        <form noValidate autoComplete="off" onSubmit={handleSubmit} className='pt-1 space-y-4'>
                            <div>
                                <input type="text"
                                    name="name"
                                    // onBlur={form.handleBlurEvent}
                                    onChange={handleChange}
                                    // value={fields.name}
                                    // To override the attribute name
                                   
                                    placeholder='Your name !'
                                    className='w-full px-6 py-3 rounded-xl ring-1 ring-gray-300 invalid:ring-red-500 focus:invalid:ring-red-500 focus:invalid:outline-none disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400'

                                />
                                {/* <span className='text-sm text-red-600 '>{errors.name ? errors.name : ""}</span>  */}
                            </div>
                            <div>
                                <input type="email"
                                    name="email"
                                    // onBlur={form.handleBlurEvent}
                                    onChange={handleChange}
                                    // value={fields.email}
                                    // To override the attribute name
                                    

                                    placeholder='Your email !'
                                    className='w-full px-6 py-3 rounded-xl ring-1 ring-gray-300 invalid:ring-red-500 focus:invalid:ring-red-500 focus:invalid:outline-none disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400'
                                />
                                {/* <span className='text-sm text-red-600'>{errors.email ? errors.email : ""}</span>  */}
                            </div>

                            <div>
                                <input type="password"
                                    name="password"
                                    // onBlur={form.handleBlurEvent}
                                    onChange={handleChange}
                                    // value={fields.password}
                                    placeholder="What's the secret word ?"
                                    className='w-full px-6 py-3 rounded-xl ring-1 ring-gray-300 invalid:ring-red-500 focus:invalid:ring-red-500 focus:invalid:outline-none disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400'
                                />
                                {/* <span className='text-sm text-red-600'>{errors.password ? errors.password : ""}</span>  */}
                            </div>

                            <div>
                                <input type="password"
                                    name="password_confirmation"
                                    // onBlur={form.handleBlurEvent}
                                    onChange={handleChange}
                                    // value={fields.password_confirmation}
                                    placeholder="Confirm the secret word !"
                                    className='w-full px-6 py-3 rounded-xl ring-1 ring-gray-300 invalid:ring-red-500 focus:invalid:ring-red-500 focus:invalid:outline-none disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400'
                                />
                                {/* <span className='text-sm text-red-600'>{errors.password_confirmation ? errors.password_confirmation : ""}</span>  */}
                            </div>
                            <div className='flex flex-col'>
                                <button type='submit' className='block w-full px-7 py-3 rounded-xl bg-yellow-300 hover:bg-yellow-400 focus:bg-yellow-500 active:bg-yellow-500'>
                                    <span className='text-lg text-white'>Register</span>
                                </button>
                                <p className='p-1 text-center'>
                                    <span className='text-yellow-300'><NavLink to="/login">Already have an account ?</NavLink></span>
                                </p>
                            </div>
                        </form>


                    </div>
                </div>

            </div>
        )
    }
    
// }