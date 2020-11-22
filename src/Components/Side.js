import React, { useEffect, useState } from 'react';
import { Typography, Divider, Grid, FormControl, Select, MenuItem } from '@material-ui/core';
import '../Css/css_one.css';
import cross from '../assets/cross.jpg';
import circle from '../assets/circle.jpg';
import settings from '../assets/settings_icon.png';

const pick_side = {
    marginTop: '40px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center'
};

const text_style = {
    fontVariant: 'all-small-caps',
    textAlign: 'center'
};

const Side = () => {

    const [pick, setPick] = useState(false);
    const [val, setval] = useState('');

    useEffect(() => {
        if (val) {
            //console.log(val)
            localStorage.setItem('side', val);
        }
    }, [val])

    const getFirstName = (str) => {
        str = str + " ";
        var res = '';
        for (var i = 0; i < str.length; i++) {
            if (str[i] != ' ')
                res += str[i];
            if (str[i] == ' ')
                break;
        }
        return res;

    }
    return (<div>
        <div style={{ width: '100%', backgroundColor: 'white' }}>
            <Typography className='choose_your_side' style={{ fontFamily: 'Helvetica', fontSize: '18px', color: 'white', backgroundImage: 'linear-gradient(to right,#ad1b02,#e88d14)' }}>Hey&nbsp;{getFirstName(localStorage.getItem('name'))}&nbsp;! Choose your side </Typography>
        </div>
        <Divider style={{ background: 'white', height: '90px' }} />
        <div style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignContent: 'center' }}>
            <img id='cross' src={cross} style={{ width: '40%', height: '80%' }} />
            <img id='circle' src={circle} style={{ width: '40%', height: '80%' }} />
        </div>
        <Divider style={{ background: 'white', height: '35px' }} />

        <div style={pick_side}>
            <FormControl>
                <Select
                    style={{ width: '300px' }}
                    value={val}
                    onMouseOver={() => {
                        if (pick) {
                            setPick(false);
                            setval('');
                        }

                    }}
                    onChange={(e) => {
                        setPick(true);
                        setval(e.target.value);
                    }}
                >
                    <MenuItem style={text_style} value={'X'}><p style={text_style}>Crosses X</p></MenuItem>
                    <MenuItem style={text_style} value={'O'}><p style={text_style}>Circles O</p></MenuItem>
                </Select>
            </FormControl>
        </div>
        <Divider style={{ background: 'white', height: '50px' }} />
        <div style={{ marginLeft: '37%' }}>
            {
                !pick &&
                <Typography style={{ fontVariant: 'all-small-caps', boxShadow: '5px 8px 10px #888', background: '#dcdcdc', textAlign: 'center', width: '35%', padding: '5px', borderRadius: '25px', color: 'black', fontFamily: 'Helvetica' }}>Choose</Typography>
            }
            {
                pick &&
                <Typography onClick={() => {
                    if (val)
                        var url = '/player/' + val.toString();
                    window.location.assign(url);
                }} style={{ fontVariant: 'all-small-caps', boxShadow: '5px 8px 10px #888', cursor: 'pointer', background: '#ad1b02', textAlign: 'center', width: '35%', padding: '8px', borderRadius: '25px', color: 'white', fontFamily: 'Helvetica' }}>Proceed</Typography>

            }
        </div>
        <Grid style={{ marginTop: '20px' }} container direction='row' justify='center' alignItems='center'>
            <img onClick={() => {
                window.location.assign('/exit');
            }} className='icon_spin' src={settings} style={{ cursor: 'pointer', width: '45px', height: '40px' }} />
        </Grid>
        <span id='dummy_footer' style={{ borderBottomLeftRadius: '25px', borderBottomRightRadius: '25px', position: 'fixed', bottom: '10px', boxShadow: '5px 8px 10px #888', color: 'white', width: '100%', background: 'white', height: '20px' }} >dummy_text</span>


    </div>)
}
const MemoizedSide = React.memo(Side);
export default MemoizedSide;