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
        <div style={{ textAlign: 'center', paddingTop: '55%' }}>

            <Typography style={{ boxShadow: '5px 8px 10px #888', borderRadius: '5px', color: 'white', fontFamily: 'Helvetica', fontVariant: 'all-small-caps', fontSize: '23px', fontWeight: '600', background: 'black', }}>Sure, Wanna Exit 😐?</Typography>
            <Divider style={{ background: 'white', height: '70px' }} />
            <div style={{ border: '1px solid #e88d14', background: '#ad1b02' }}>
                <GoogleLogout
                    clientId={process.env.REACT_APP_API_KEY}
                    buttonText="Logout"
                    onLogoutSuccess={onSuccess}
                ></GoogleLogout>
            </div>
        </div>
    );
}

export default Logout;