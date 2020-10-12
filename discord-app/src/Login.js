import React from 'react';
import './Login.css';
import {Button} from '@material-ui/core';

function Login() {
    const signIn = () => {
        //login logic
    }
    return (
        <div className='login'>
            <div className='login__logo'>
                <img src='https://www.adl.org/sites/default/files/styles/open_graph_image_1200_x_628_/public/2019-08/discord-logo.jpg?itok=LMNTgq_N'
                alt = '' />
            </div>

            <Button onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login;
