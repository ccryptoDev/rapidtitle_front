import React, { BaseSyntheticEvent } from 'react';
import './index.view.css';
import loginLogo from 'assets/img/verify_logo.png'
import ImageViewer from 'components/common/ImageViewer';
import google from 'assets/img/google.png';
import facebook from 'assets/img/facebook.png';
import okta from 'assets/img/okta.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function LoginCard() {
  const navigate = useNavigate();
  const onSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    navigate('/auth/verify');
  }
  return (
    <>
      <div className='w-[calc(100vw-500px)] h-[80vh] bg-white z-10 absolute verify-card'>
        <ImageViewer source={loginLogo} width={100} height="100%" className='login-logo'/>
        <div className='logo-text text-white text-4xl leading-snug'>
          A 'must have' technology <br></br> service for 100% of dealers
        </div>
        <div className='w-[100%] text-center 2xl:py-[60px] md:py-[40px] px-[50px]'>
          <h1 className='2xl:text-5xl xl:text-3xl welcome'>Please enter the Code</h1>
          <h1 className='xl:my-[10px] md:my-[10px] text-3xl'>Looks like you are trying to logIn from a different place as you always do, to verify that it is you who is trying to enter the account, please enter the code that has been sent to your email adress</h1>
        </div>
      </div>
    </>
  );
}

export default LoginCard;
