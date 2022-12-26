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

export default function ResetPasswordForm() {
    const navigate = useNavigate()
    const [formData,setFormData]= useState({})
    const history = useHistory();
  const location = useLocation();
  const [resetPassword, { loading, error }] = useMutation(RESET_PASSWORD_MUTATION);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    resetPassword({ variables: { resetToken: location.search.slice(7), password: formData.get('password') } })
      .then(() => history.push('/login'));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="password" name="password"/>
    </form>
  )}