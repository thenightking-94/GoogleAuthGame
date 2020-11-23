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
    const [winner, setwinner] = useState('');
    const [scoreHuman, setscoreHuman] = useState([]);
    const [scoreAI, setscoreAI] = useState([]);
    //first click will always be of the player
    const [who, setwho] = useState(null);
    //set a ref for the AI timers
    const AItimer = useRef();
    //state for the game flow
    const no_of_times = useRef(0);

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
        if (who == 'AI' && !winner) {
            document.querySelector("div[id='stop_player']").style.pointerEvents = 'none';
            //calculate AI values after 1.5seconds
            AItimer.current = setTimeout(() => {
                var AI_parse = null;
                //condition to check if all the boxes have been filled up by AI/player
                if ((ai_array.length + res_array.length) != 9) {
                    var el = null;
                    //difficulty level raiser (AI manipulation as per levels)

                    if (no_of_times.current <= 1) {
                        while (true) {
                            el = Math.floor(Math.random() * 9) + 1;
                            //checking if its an unique number not present in the boxes 
                            if (!res_array.includes(el) && !ai_array.includes(el))
                                break;
                        }
                    }

                    if (no_of_times.current > 1) {

                        while (true) {

                            //Computer trying to win
                            //2,4,6 & 8
                            if ((ai_array.includes(3) && ai_array.includes(1) && !res_array.includes(2)) || (ai_array.includes(5) && ai_array.includes(8) && !res_array.includes(2)))
                                el = 2;
                            else if ((ai_array.includes(7) && ai_array.includes(9) && !res_array.includes(8)) || (ai_array.includes(2) && ai_array.includes(5) && !res_array.includes(8)))
                                el = 8;
                            else if ((ai_array.includes(5) && ai_array.includes(6) && !res_array.includes(4)) || (ai_array.includes(1) && ai_array.includes(7) && !res_array.includes(4)))
                                el = 4;
                            else if ((ai_array.includes(4) && ai_array.includes(5) && !res_array.includes(6)) || (ai_array.includes(3) && ai_array.includes(9) && !res_array.includes(6)))
                                el = 6;
                            //1,3,9 & 7
                            else if ((ai_array.includes(3) && ai_array.includes(2) && !res_array.includes(1)) || (ai_array.includes(4) && ai_array.includes(7) && !res_array.includes(1)) || (ai_array.includes(5) && ai_array.includes(9) && !res_array.includes(1)))
                                el = 1;
                            else if ((ai_array.includes(2) && ai_array.includes(1) && !res_array.includes(3)) || (ai_array.includes(5) && ai_array.includes(7) && !res_array.includes(3)) || (ai_array.includes(9) && ai_array.includes(6) && !res_array.includes(3)))
                                el = 3;
                            else if ((ai_array.includes(7) && ai_array.includes(8) && !res_array.includes(9)) || (ai_array.includes(5) && ai_array.includes(1) && !res_array.includes(9)) || (ai_array.includes(3) && ai_array.includes(6) && !res_array.includes(9)))
                                el = 9;
                            else if ((ai_array.includes(1) && ai_array.includes(4) && !res_array.includes(7)) || (ai_array.includes(8) && ai_array.includes(9) && !res_array.includes(7)) || (ai_array.includes(5) && ai_array.includes(3) && !res_array.includes(7)))
                                el = 7;
                            //5
                            else if ((ai_array.includes(2) && ai_array.includes(8) && !res_array.includes(5)) || (ai_array.includes(4) && ai_array.includes(6) && !res_array.includes(5)) || (ai_array.includes(1) && ai_array.includes(9) && !res_array.includes(5)) || (ai_array.includes(3) && ai_array.includes(7) && !res_array.includes(5)))
                                el = 5;

                            //Computer will start grilling you now mercilessly
                            //2,4,6 & 8
                            else if ((res_array.includes(3) && res_array.includes(1) && !ai_array.includes(2)) || (res_array.includes(5) && res_array.includes(8) && !ai_array.includes(2)))
                                el = 2;
                            else if ((res_array.includes(7) && res_array.includes(9) && !ai_array.includes(8)) || (res_array.includes(2) && res_array.includes(5) && !ai_array.includes(8)))
                                el = 8;
                            else if ((res_array.includes(5) && res_array.includes(6) && !ai_array.includes(4)) || (res_array.includes(1) && res_array.includes(7) && !ai_array.includes(4)))
                                el = 4;
                            else if ((res_array.includes(4) && res_array.includes(5) && !ai_array.includes(6)) || (res_array.includes(3) && res_array.includes(9) && !ai_array.includes(6)))
                                el = 6;

                            //1,3,9 & 7
                            else if ((res_array.includes(3) && res_array.includes(2) && !ai_array.includes(1)) || (res_array.includes(4) && res_array.includes(7) && !ai_array.includes(1)) || (res_array.includes(5) && res_array.includes(9) && !ai_array.includes(1)))
                                el = 1;
                            else if ((res_array.includes(2) && res_array.includes(1) && !ai_array.includes(3)) || (res_array.includes(5) && res_array.includes(7) && !ai_array.includes(3)) || (res_array.includes(9) && res_array.includes(6) && !ai_array.includes(3)))
                                el = 3;
                            else if ((res_array.includes(7) && res_array.includes(8) && !ai_array.includes(9)) || (res_array.includes(5) && res_array.includes(1) && !ai_array.includes(9)) || (res_array.includes(3) && res_array.includes(6) && !ai_array.includes(9)))
                                el = 9;
                            else if ((res_array.includes(1) && res_array.includes(4) && !ai_array.includes(7)) || (res_array.includes(8) && res_array.includes(9) && !ai_array.includes(7)) || (res_array.includes(5) && res_array.includes(3) && !ai_array.includes(7)))
                                el = 7;

                            //5
                            else if ((res_array.includes(2) && res_array.includes(8) && !ai_array.includes(5)) || (res_array.includes(4) && res_array.includes(6) && !ai_array.includes(5)) || (res_array.includes(1) && res_array.includes(9) && !ai_array.includes(5)) || (res_array.includes(3) && res_array.includes(7) && !ai_array.includes(5)))
                                el = 5;
                            else {
                                while (true) {
                                    el = Math.floor(Math.random() * 9) + 1;
                                    //checking if its an unique number not present in the boxes 
                                    if (!res_array.includes(el) && !ai_array.includes(el))
                                        break;
                                }
                            }

                            if (el)
                                break;
                        }
                    }


                    AI_parse = Number(el);
                    var array = ai_array ? ai_array : [];
                    array = [...array, AI_parse];//concat new id values to array
                    setai_array(array);
                    setwho('player');
                    document.querySelector("div[id='stop_player']").style.pointerEvents = 'auto';
                }
                else
                    setwho('game_over');

            }, 1000);

        }
        if (who == 'game_over' && !winner && (res_array.length + ai_array.length == 9) && res_array.length != 0 && ai_array.length != 0) {
            document.querySelector("div[id='main_action']").style.opacity = '0.3';
            no_of_times.current += 1;//incrementing a count of gameplay on draw
            setTimeout(() => {
                setwinner(''); setres_array([]); setai_array([]);
                document.querySelector("div[id='main_action']").style.opacity = '1';
                document.querySelector("div[id='stop_player']").style.pointerEvents = 'auto';
            }, 3000);
        }
        if (who == 'game_over' && winner == 'human' || winner == 'computer')
            document.querySelector("div[id='stop_player']").style.pointerEvents = 'auto';

    }, [who])

    useEffect(() => {
        if (who != 'game_over') {
            if (res_array.includes(1) && res_array.includes(2) && res_array.includes(3) || res_array.includes(4) && res_array.includes(5) && res_array.includes(6)
                || res_array.includes(7) && res_array.includes(8) && res_array.includes(9) || res_array.includes(1) && res_array.includes(5) && res_array.includes(9)
                || res_array.includes(7) && res_array.includes(5) && res_array.includes(3) || res_array.includes(1) && res_array.includes(4) && res_array.includes(7)
                || res_array.includes(2) && res_array.includes(5) && res_array.includes(8) || res_array.includes(3) && res_array.includes(6) && res_array.includes(9)) {
                no_of_times.current += 1;//one entire game iteration played
                document.querySelector("div[id='main_action']").style.opacity = '0.3';
                setwinner('human');
                setwho('game_over');
                setscoreHuman([...scoreHuman, '1']);
                clearTimeout(AItimer.current);//clearing AI async timeout thread
                setTimeout(() => {
                    setwinner(''); setres_array([]); setai_array([]);
                    document.querySelector("div[id='main_action']").style.opacity = '1';
                }, 3000);
            }

            if (ai_array.includes(1) && ai_array.includes(2) && ai_array.includes(3) || ai_array.includes(4) && ai_array.includes(5) && ai_array.includes(6)
                || ai_array.includes(7) && ai_array.includes(8) && ai_array.includes(9) || ai_array.includes(1) && ai_array.includes(5) && ai_array.includes(9)
                || ai_array.includes(7) && ai_array.includes(5) && ai_array.includes(3) || ai_array.includes(1) && ai_array.includes(4) && ai_array.includes(7)
                || ai_array.includes(2) && ai_array.includes(5) && ai_array.includes(8) || ai_array.includes(3) && ai_array.includes(6) && ai_array.includes(9)) {
                no_of_times.current += 1;//one entire game iteration played
                document.querySelector("div[id='main_action']").style.opacity = '0.3';
                setwinner('computer');
                setwho('game_over');
                setscoreAI([...scoreAI, '1']);
                setTimeout(() => {
                    setwinner(''); setres_array([]); setai_array([]);
                    document.querySelector("div[id='main_action']").style.opacity = '1';
                }, 3000);
            }

        }

    }, [res_array, ai_array]);


    const cal = (e) => {
        var el = Number(e.target.id);
        if (!who || who == 'player' || who == 'game_over' && !winner) {
            var ar = res_array ? res_array : [];
            ar = [...ar, el]//concat new id to array using spread operator
            setres_array(ar);
            setwho('AI');
        }

    }

    return (
        <div style={{ overflowX: 'hidden' }}>

            <div id='main_action'>
                <Typography style={{ background: 'black', color: 'white', width: '100%', padding: '10px', fontFamily: 'Helvetica', fontVariant: 'all-small-caps', textAlign: 'center' }}>Board</Typography>
                <Divider style={{ background: 'white', height: '100px' }} />
                <Grid container direction='row' justify='center' alignItems='center'>
                    <span style={{ display: 'flex', color: 'black', fontWeight: '600', fontSize: '25px', fontFamily: 'Helvetica', fontVariant: 'small-caps' }}>You&nbsp;{scoreHuman.length}&nbsp; <b>:</b>&nbsp;Computer &nbsp;{scoreAI.length}</span>
                </Grid>
                <Divider style={{ background: 'white', height: '30px' }} />
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
                {
                    no_of_times.current >= 0 &&
                    <span style={{ fontWeight: '600', boxShadow: '5px 8px 10px #888', borderRadius: '6px', background: '#e88d14', color: 'black', padding: '3px', fontFamily: 'Helvetica', fontVariant: 'small-caps', marginLeft: '40%', fontSize: '17px' }}>level&nbsp;:&nbsp;{no_of_times.current + 1}</span>
                }
                <Grid style={{ marginTop: '25px' }} container direction='row' justify='center' alignItems='center'>
                    <img onClick={() => {
                        window.location.assign('/exit');
                    }} className='icon_spin' src={settings} style={{ cursor: 'pointer', width: '45px', height: '40px' }} />
                </Grid>
                <span id='dummy_footer' style={{ borderBottomLeftRadius: '25px', borderBottomRightRadius: '25px', position: 'fixed', bottom: '10px', boxShadow: '5px 8px 10px #888', color: 'white', width: '100%', background: 'white', height: '50px' }} >dummy_text</span>
            </div>

            {
                who == 'game_over' && winner &&
                <div className='scoreboard'>
                    {
                        winner == 'computer' &&
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <Typography style={{ color: 'white', fontVariant: 'small-caps' }}>You lost 😐</Typography>
                        </div>
                    }
                    {
                        winner == 'human' &&
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <Typography style={{ color: 'white', fontVariant: 'small-caps' }}>You won !!</Typography>
                        </div>
                    }
                </div>
            }
            {
                who == 'game_over' && !winner && res_array.length > 0 && ai_array.length > 0 &&
                <div className='scoreboard'>
                    <Typography style={{ color: 'white', fontVariant: 'small-caps' }}>Its a draw !! 🤔</Typography>
                </div>
            }

        </div>)
}

const MemoizedGame = React.memo(Game);
export default MemoizedGame;