import { render, screen } from '@testing-library/react';
import App from './App';

import { render } from "@testing-library/react"
import '@testing-library/jest-dom'
import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';
import FORGOT_PASSWORD from "./Pages/Auth/ForgotPaasword";
import RESET_PASSWORD from "./Pages/Auth/resetPassword";
import { BrowserRouter } from 'react-router-dom'

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


describe('Login', () => {
  it('renders the form fields and buttons', () => {
    const wrapper = mount(<Login />);
    expect(wrapper.find('input[name="email"]').exists()).toBe(true);
    expect(wrapper.find('input[name="password"]').exists()).toBe(true);
    expect(wrapper.find('button[type="submit"]').exists()).toBe(true);
  });

  it('displays an error message when the form submission fails', () => {
    const wrapper = mount(<Login />);
    wrapper.find('form').simulate('submit');
    expect(wrapper.find('.error').text()).toBe('Invalid email or password');
  });

  it('navigates to the home page when the form submission succeeds', () => {
    const wrapper = mount(<Login />);
    wrapper.find('form').simulate('submit');
    expect(wrapper.find('.success').text()).toBe('You have successfully logged in');
    expect(wrapper.find('.home-link').exists()).toBe(true);
  });
});


describe('Register', () => {
  it('renders the form fields and buttons', () => {
    const wrapper = mount(<SignUp />);
    expect(wrapper.find('input[name="email"]').exists()).toBe(true);
    expect(wrapper.find('input[name="password"]').exists()).toBe(true);
    expect(wrapper.find('button[type="submit"]').exists()).toBe(true);
  });

  it('displays an error message when the form submission fails', () => {
    const wrapper = mount(<SignUp />);
    wrapper.find('form').simulate('submit');
    expect(wrapper.find('.error').text()).toBe('There was an error with your submission');
  });

  it('navigates to the home page when the form submission succeeds', () => {
    const wrapper = mount(<SignUp />);
    wrapper.find('form').simulate('submit');
    expect(wrapper.find('.success').text()).toBe('You have successfully signed up');
    expect(wrapper.find('.home-link').exists()).toBe(true);
  });
});


describe('FORGOT_PASSWORD', () => {
  it('renders the form fields and buttons', () => {
    const wrapper = mount(<ForgotPassword />);
    expect(wrapper.find('input[name="email"]').exists()).toBe(true);
    expect(wrapper.find('button[type="submit"]').exists()).toBe(true);
  });

  it('displays an error message when the form submission fails', () => {
    const wrapper = mount(<ForgotPassword />);
    wrapper.find('form').simulate('submit');
    expect(wrapper.find('.error').text()).toBe('There was an error with your submission');
  });

  it('displays a success message when the form submission succeeds', () => {
    const wrapper = mount(<ForgotPassword />);
    wrapper.find('form').simulate('submit');
    expect(wrapper.find('.success').text()).toBe('A password reset email has been sent to your email address');
  });
});


describe('RESET_PASSWORD', () => {
  it('should reset the password for a given user', () => {
    const mockUser = {
      email: 'test@example.com',
      password: 'oldPassword'
    };

    resetPassword(mockUser, 'newPassword');

    expect(mockUser.password).toEqual('newPassword');
  });
});








