import React from 'react';
import { GoogleLogout } from 'react-google-login';
import { Typography, Divider } from '@material-ui/core';
require('dotenv').config()


function Logout() {
    const onSuccess = () => {
        alert('you have been logged out');
        window.location.assign('/');
        localStorage.clear();
    };

    return (
        <div className='landing_page' style={{ textAlign: 'center', paddingTop: '70%' }}>

            <Typography style={{ boxShadow: '5px 8px 10px #888', borderRadius: '5px', color: 'white', fontFamily: 'Helvetica', fontVariant: 'all-small-caps', fontSize: '23px', fontWeight: '400' }}>Sure, Wanna Exit 😐?</Typography>
            <Divider id='classic_filler_top' />
            <GoogleLogout
                clientId={process.env.REACT_APP_API_KEY}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
            />
            <Divider id='classic_filler' />
        </div>
    );
}

export default Logout;