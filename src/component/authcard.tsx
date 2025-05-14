import React, { useState } from 'react';
import PasswordInput from './passwordInput';
import { useNavigate } from 'react-router-dom';

const Login: React.FC<{ switchToRegister: () => void }> = ({ switchToRegister }) => {
    const navigate = useNavigate();
    const [emailOrUsername, setEmailOrUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleEmailOrUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmailOrUsername(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log('Email or Username:', emailOrUsername);
        console.log('Password:', password);
        navigate('/home')
    };

    return (
        <form className="card" onSubmit={handleSubmit}>
            <p className="text-base text-text-lighter text-center font-medium">WELCOME BACK</p>
            <p className="text-large font-semibold text-white text-center">Log into your account</p>
            <div className="flex flex-col gap-2 mt-11">
                <label className="text-base font-medium text-text-light">Email or Username</label>
                <input
                    required
                    className="input-regular"
                    type="text"
                    name="emailOrUsername"
                    id="emailOrUsername"
                    placeholder="Enter your email or username"
                    value={emailOrUsername}
                    onChange={handleEmailOrUsernameChange}
                />
            </div>
            <div className="flex flex-col gap-2 mt-4">
                <div className="flex justify-between items-center">
                    <label className="text-base font-medium text-text-light">Password</label>
                    <p className="[font-size:12px] font-medium text-text-light">Forgot password?</p>
                </div>
                <PasswordInput
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Enter your password"
                />
            </div>
            <button className="btn-primary w-full mt-[20px]" type="submit">Login now</button>
            <div className="flex text-base mt-3 gap-1">
                <p className="text-text-lighter">Not registered yet?</p>
                <button type="button" className="text-text-light" onClick={switchToRegister}>Register -&gt;</button>
            </div>
        </form>
    );
};

const Register: React.FC<{ switchToLogin: () => void }> = ({ switchToLogin }) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log('Email:', email);
        console.log('Username:', username);
        console.log('Password:', password);
        navigate('/home')
    };

    return (
        <form className="card" onSubmit={handleSubmit}>
            <p className="text-base text-text-lighter text-center font-medium">SIGN UP</p>
            <p className="text-large font-semibold text-white text-center">Create an account to continue</p>
            <div className="flex flex-col gap-2 mt-11">
                <label className="text-base font-medium text-text-light">Email</label>
                <input
                    className="input-regular"
                    required
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={handleEmailChange}
                />
            </div>
            <div className="flex flex-col gap-2 mt-4">
                <label className="text-base font-medium text-text-light">Username</label>
                <input
                    className="input-regular"
                    required
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Choose a preferred username"
                    value={username}
                    onChange={handleUsernameChange}
                />
            </div>
            <div className="flex flex-col gap-2 mt-4">
                <label className="text-base font-medium text-text-light">Password</label>
                <PasswordInput
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Enter your password"
                />
            </div>
            <button className="btn-primary w-full mt-[20px]" type="submit">Continue</button>
            <div className="flex text-base mt-3 gap-1">
                <p className="text-text-lighter">Already have an account?</p>
                <button type="button" className="text-text-light" onClick={switchToLogin}>Login -&gt;</button>
            </div>
        </form>
    );
};

const AuthCard: React.FC = () => {
    const [isLogin, setIsLogin] = useState<boolean>(true);

    const switchToLogin = () => setIsLogin(true);
    const switchToRegister = () => setIsLogin(false);

    return (
        <div >
            {isLogin ? <Login switchToRegister={switchToRegister} /> : <Register switchToLogin={switchToLogin} />}
        </div>
    );
};

export default AuthCard;
