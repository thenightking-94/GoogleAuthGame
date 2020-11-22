import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { refreshTokenSetup } from './RefreshToken';
import { Divider, Typography } from '@material-ui/core';
require('dotenv').config()

function Login() {

    const onSuccess = (res) => {
        var profile = res.getBasicProfile();
        localStorage.setItem('name', profile.getName());
        window.location.assign('/base');
        refreshTokenSetup(res);
    };

    const onFailure = (res) => {
        alert('Login failed !! Please check your credentials')
    };

    return (
        <div style={{ textAlign: 'center', paddingTop: '60%' }}>

            <Typography style={{ boxShadow: '5px 8px 10px #888', borderRadius: '5px', color: 'white', fontFamily: 'Helvetica', fontVariant: 'all-small-caps', fontSize: '23px', fontWeight: '400', background: 'black', }}>React-TicTacToe-game</Typography>
            <Divider style={{ background: 'white', height: '70px' }} />
            <div style={{ border: '1px solid #e88d14', background: '#ad1b02' }}>
                <GoogleLogin
                    clientId={process.env.REACT_APP_API_KEY}
                    buttonText='Sign in with Google'
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                />
            </div>

        </div>
    );
}

export default Login;
