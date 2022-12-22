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

export default function ForgotPasswordForm() {
    const navigate = useNavigate()
    const [formData,setFormData]= useState({})
    onst [forgotPassword, { loading, error }] = useMutation(FORGOT_PASSWORD_MUTATION);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    forgotPassword({ variables: { email: formData.get('email') } });
  };

  return (
    <form onSubmit={handleSubmit}>
      
    </form>
        )
}