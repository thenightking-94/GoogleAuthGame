import React from 'react';
import { Typography, Divider, Grid } from '@material-ui/core';
import '../Css/css_one.css';
import cross from '../assets/cross.jpg';
import circle from '../assets/circle.jpg';
import settings from '../assets/settings_icon.png';

export default function Base() {

    return (
        <div>
            <div style={{ width: '100%', backgroundColor: 'white' }}>
                <Typography id='heading' style={{ fontFamily: 'Helvetica', fontSize: '25px', color: 'white', backgroundImage: 'linear-gradient(to right,#ad1b02,#e88d14)' }}>Tic-Tac-Toe</Typography>
            </div>
            <Divider style={{ background: 'white', height: '90px' }} />

            <div style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignContent: 'center' }}>
                <img id='cross' src={cross} style={{ width: '40%', height: '80%' }} />
                <img id='circle' src={circle} style={{ width: '40%', height: '80%' }} />
            </div>
            <Divider style={{ background: 'white', height: '100px' }} />
            <Grid container direction='column' justify='center' alignItems='center'>

                <Typography onClick={() => {
                    window.location.assign('/Side');
                }} style={{ boxShadow: '5px 8px 10px #888', cursor: 'pointer', background: '#ad1b02', textAlign: 'center', width: '20%', padding: '10px', borderRadius: '25px', color: 'white', fontFamily: 'Helvetica' }}>Play</Typography>
                <Divider style={{ background: 'white', height: '50px' }} />
                <img className='icon_spin' src={settings} style={{ width: '45px', height: '40px' }} />
                <span id='dummy_footer' style={{ borderBottomLeftRadius: '25px', borderBottomRightRadius: '25px', position: 'fixed', bottom: '10px', boxShadow: '5px 8px 10px #888', color: 'white', width: '100%', background: 'white', height: '50px' }} >dummy_text</span>
            </Grid>
        </div>
    );
}