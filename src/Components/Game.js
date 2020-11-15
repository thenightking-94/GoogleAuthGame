import React, { useEffect, useState } from 'react';
import { Typography, Divider, Grid } from '@material-ui/core';
import '../Css/css_one.css';
import cross from '../assets/cross.jpg';
import circle from '../assets/circle.jpg';
import settings from '../assets/settings_icon.png';

const Game = () => {

    const [player, setplayer] = useState(null);
    const [res_array, setres] = useState([]);



    useEffect(() => {
        var url = window.location.href;
        var str = (url.split('/'))[4];
        if (localStorage.getItem('side') == str)
            setplayer(str);
        //console.log(str);
    }, []);


    return (<div>
        <Typography style={{ background: 'black', color: 'white', width: '100%', padding: '10px', fontFamily: 'Helvetica', fontVariant: 'all-small-caps', textAlign: 'center' }}>Board</Typography>
        <Divider style={{ background: 'white', height: '100px' }} />
        <div style={{ width: '100%', height: '270px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center' }}>
            <div className='board_div'>
                <div className='border_item' id='1' item md={4}>

                </div>
                <div className='border_item' id='2' item md={4}>

                </div>
                <div className='border_item' id='3' item md={4}>

                </div>
            </div>
            <div className='board_div'>
                <div className='border_item' id='4' item md={4}>

                </div>
                <div className='border_item' id='5' item md={4}>

                </div>
                <div className='border_item' id='6' item md={4}>

                </div>
            </div>
            <div className='board_div'>
                <div className='border_item' id='7' item md={4}>

                </div>
                <div className='border_item' id='8' item md={4}>

                </div>
                <div className='border_item' id='9' item md={4}>

                </div>
            </div>
        </div>

        <Grid style={{ marginTop: '35px' }} container direction='row' justify='center' alignItems='center'>
            <img className='icon_spin' src={settings} style={{ width: '45px', height: '40px' }} />
        </Grid>
        <span id='dummy_footer' style={{ borderBottomLeftRadius: '25px', borderBottomRightRadius: '25px', position: 'fixed', bottom: '10px', boxShadow: '5px 8px 10px #888', color: 'white', width: '100%', background: 'white', height: '50px' }} >dummy_text</span>



    </div>)
}

export default Game;