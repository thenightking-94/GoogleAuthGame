import React, { useEffect, useState, useRef } from 'react';
import { Typography, Divider, Grid } from '@material-ui/core';
import '../Css/css_one.css';
import cross from '../assets/cross.jpg';
import circle from '../assets/circle.jpg';
import settings from '../assets/settings_icon.png';

const Game = () => {

    const [player, setplayer] = useState(null);
    const [ai, setai] = useState(null);
    const [res_array, setres_array] = useState([]);
    const [ai_array, setai_array] = useState([]);
    //first click will always be of the player
    const [who, setwho] = useState(null);
    //set a ref for the AI and humna timers
    const timer = useRef();
    //state for the game flow
    const n_o_t = useRef(0);

    useEffect(() => {
        var url = window.location.href;
        var str = (url.split('/'))[4];
        if (localStorage.getItem('side') == str)
            setplayer(str);
        if (str == 'X')
            setai('O');
        else
            setai('X');
    }, []);


    useEffect(() => {
        if (who == 'player') {
            document.querySelector("div[id='stop_player']").style.pointerEvents = 'none';
            //calculate AI values after 1.5seconds
            setTimeout(() => {
                var AI_parse = null;
                if ((ai_array.length + res_array.length) != 9) {
                    while (true) {
                        var el = Math.floor(Math.random() * 9) + 1;
                        if (!res_array.includes(el) && !ai_array.includes(el)) { break; }
                    }
                    AI_parse = el;
                    var array = ai_array ? ai_array : [];
                    array = [...array, AI_parse];//concat new id values to array
                    setai_array(array);
                    setwho('AI');
                    document.querySelector("div[id='stop_player']").style.pointerEvents = 'auto';
                }
                else
                    setwho('game_over');

            }, 1500);

        }

    }, [who])

    useEffect(() => {

    }, [res_array, ai_array]);


    const cal = (e) => {
        var el = Number(e.target.id);

        if (!who || who == 'AI') {
            var ar = res_array ? res_array : [];
            ar = [...ar, el]//concat new id to array using spread operator
            setres_array(ar);
            setwho('player');
        }

    }


    return (
        <div style={{ overflowX: 'hidden' }}>
            <Typography style={{ background: 'black', color: 'white', width: '100%', padding: '10px', fontFamily: 'Helvetica', fontVariant: 'all-small-caps', textAlign: 'center' }}>Board</Typography>
            <Divider style={{ background: 'white', height: '100px' }} />
            <div id='stop_player' style={{ width: '100%', height: '270px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center' }}>
                <div className='board_div'>
                    <div className='border_item' onClick={cal} id='1'>
                        {res_array.includes(1) && !ai_array.includes(1) &&
                            <img src={player == 'X' ? cross : circle} className='board_img' />
                        }
                        {ai_array.includes(1) && !res_array.includes(1) &&
                            <img src={ai == 'X' ? cross : circle} className='board_img' />
                        }

                    </div>
                    <div className='border_item' onClick={cal} id='2'>
                        {res_array.includes(2) && !ai_array.includes(2) &&
                            <img src={player == 'X' ? cross : circle} className='board_img' />
                        }
                        {ai_array.includes(2) && !res_array.includes(2) &&
                            <img src={ai == 'X' ? cross : circle} className='board_img' />
                        }

                    </div>
                    <div className='border_item' onClick={cal} id='3'>
                        {res_array.includes(3) && !ai_array.includes(3) &&
                            <img src={player == 'X' ? cross : circle} className='board_img' />
                        }
                        {ai_array.includes(3) && !res_array.includes(3) &&
                            <img src={ai == 'X' ? cross : circle} className='board_img' />
                        }
                    </div>
                </div>
                <div className='board_div'>
                    <div className='border_item' onClick={cal} id='4'>
                        {res_array.includes(4) && !ai_array.includes(4) &&
                            <img src={player == 'X' ? cross : circle} className='board_img' />
                        }
                        {ai_array.includes(4) && !res_array.includes(4) &&
                            <img src={ai == 'X' ? cross : circle} className='board_img' />
                        }
                    </div>
                    <div className='border_item' onClick={cal} id='5'>
                        {res_array.includes(5) && !ai_array.includes(5) &&
                            <img src={player == 'X' ? cross : circle} className='board_img' />
                        }
                        {ai_array.includes(5) && !res_array.includes(5) &&
                            <img src={ai == 'X' ? cross : circle} className='board_img' />
                        }
                    </div>
                    <div className='border_item' onClick={cal} id='6' >
                        {res_array.includes(6) && !ai_array.includes(6) &&
                            <img src={player == 'X' ? cross : circle} className='board_img' />
                        }
                        {ai_array.includes(6) && !res_array.includes(6) &&
                            <img src={ai == 'X' ? cross : circle} className='board_img' />
                        }
                    </div>
                </div>
                <div className='board_div'>
                    <div className='border_item' onClick={cal} id='7' >
                        {res_array.includes(7) && !ai_array.includes(7) &&
                            <img src={player == 'X' ? cross : circle} className='board_img' />
                        }
                        {ai_array.includes(7) && !res_array.includes(7) &&
                            <img src={ai == 'X' ? cross : circle} className='board_img' />
                        }
                    </div>
                    <div className='border_item' onClick={cal} id='8' >
                        {res_array.includes(8) && !ai_array.includes(8) &&
                            <img src={player == 'X' ? cross : circle} className='board_img' />
                        }
                        {ai_array.includes(8) && !res_array.includes(8) &&
                            <img src={ai == 'X' ? cross : circle} className='board_img' />
                        }
                    </div>
                    <div className='border_item' onClick={cal} id='9'>
                        {res_array.includes(9) && !ai_array.includes(9) &&
                            <img src={player == 'X' ? cross : circle} className='board_img' />
                        }
                        {ai_array.includes(9) && !res_array.includes(9) &&
                            <img src={ai == 'X' ? cross : circle} className='board_img' />
                        }
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