import React, { useState } from 'react';
import './stylesComponents/LoginForm.css';
import register from '../database/connection';

export default function LoginForm() {
    const [detailsLog, setDetailsLog] = useState({ name: '', email: '', password: '' });
    const [detailsReg, setDetailsReg] = useState({ name: '', email: '', password: '' });
    const [user, setUser] = useState({ name: '', email: '' });
    const [error, setError] = useState('');

    const adminUser = {
        email: 'admin@admin.com',
        password: 'admin123'
    }

    const Login = details => {
        console.log(details);

        if (details.email === adminUser.email && details.password === adminUser.password) {
            console.log('Logged in as Admin // TEST');
            setUser({
                name: details.name,
                email: details.email,
            });
        } else {
            console.log('Details do not match');
            setError('Details do not match');
        }
    }

    const Register = details => {
        register(detailsReg);
        console.log('Registered');
        setUser({
            name: details.name,
            email: details.email,
        });
    }

    const submitHandlerLog = e => {
        e.preventDefault();

        Login(detailsLog);
    }
    const submitHandlerReg = e => {
        e.preventDefault();

        Register(detailsReg);
    }

    return (
        <div className='LoginForm'>
            <form className='Login' onSubmit={submitHandlerLog}>
                <h2>Login</h2>
                <div className='form-grp'>
                    <label htmlFor='nameLog'>Name:</label>
                    <input type='text' name='nameLog' id='nameLog' onChange={e => setDetailsLog({ ...detailsLog, name: e.target.value })} value={detailsLog.name} />
                </div>
                <div className='form-grp'>
                    <label htmlFor='emailLog'>Email:</label>
                    <input type='email' name='emailLog' id='emailLog' onChange={e => setDetailsLog({ ...detailsLog, email: e.target.value })} value={detailsLog.email} />
                </div>
                <div className='form-grp'>
                    <label htmlFor='passwordLog'>Password:</label>
                    <input type='password' name='passwordLog' id='passwordLog' onChange={e => setDetailsLog({ ...detailsLog, password: e.target.value })} value={detailsLog.password} />
                </div>
                <input type='submit' value='Login' />
            </form>

            <form className='Register' onSubmit={submitHandlerReg}>
                <h2>Register</h2>
                <div className='form-grp'>
                    <label htmlFor='nameReg'>Name:</label>
                    <input type='text' name='nameReg' id='nameReg' onChange={e => setDetailsReg({ ...detailsReg, name: e.target.value })} value={detailsReg.name} />
                </div>
                <div className='form-grp'>
                    <label htmlFor='emailReg'>Email:</label>
                    <input type='email' name='emailReg' id='emailReg' onChange={e => setDetailsReg({ ...detailsReg, email: e.target.value })} value={detailsReg.email} />
                </div>
                <div className='form-grp'>
                    <label htmlFor='passwordReg'>Password:</label>
                    <input type='password' name='passwordReg' id='passwordReg' onChange={e => setDetailsReg({ ...detailsReg, password: e.target.value })} value={detailsReg.password} />
                </div>
                <input type='submit' value='Register' />
            </form>
        </div>
    );
}