


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

export default function ForgotPassword() {


state = {
    email: ''
  };

  saveToState = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
}

return (
    <Mutation mutation={REQUEST_RESET_MUTATION} variables={this.state}>
      {(reset, { error, loading, called }) => (
        <Form
          data-test="form"
          method="post"
          onSubmit={async event => {
            event.preventDefault();
            await reset();
            this.setState({ email: '' });
          }}
        >
          <fieldset disabled={loading} aria-busy={loading}>
            <h2>Request a password reset</h2>
            <Error error={error} />
            {!error && !loading && called && (
              <p data-test="success">
                Success! Check your email for a reset link!
              </p>
            )}
            <label htmlFor="email">
              Email
              <input
                type="email"
                name="email"
                placeholder="email"
                value={this.state.email}
                onChange={this.saveToState}
              />
            </label>
            <button type="submit">Request Reset</button>
          </fieldset>
        </Form>
      )}
    </Mutation>
  );
}