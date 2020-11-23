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
        <div className='landing_page' style={{ textAlign: 'center', paddingTop: '70%' }}>

            <Typography style={{ boxShadow: '5px 8px 10px #888', borderRadius: '5px', color: 'white', fontFamily: 'ITC Charter', fontVariant: 'all-small-caps', fontSize: '23px', fontWeight: '400' }}>React-TicTacToe-game</Typography>
            <Divider id='classic_filler_top' />

            <GoogleLogin
                clientId={process.env.REACT_APP_API_KEY}
                buttonText='Sign in with Google'
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
            <Divider id='classic_filler' />

        </div>
    );
}

export default Login;
