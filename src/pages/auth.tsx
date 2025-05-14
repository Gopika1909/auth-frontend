import React from 'react';
import LogoIcon from '../asset/Logo';
import AuthCard from '../component/authcard';
const Auth: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className='mb-12'>
        <LogoIcon />
      </div>
      <AuthCard />
    </div>
  );
};

export default Auth;
