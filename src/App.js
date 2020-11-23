import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Base from './Components/Base';
import Side from './Components/Side';
import Game from './Components/Game';
import Login from './Components/Login';
import Logout from './Components/Logout';

const App = () => {

    if (window.innerWidth > 768)
        return (
            <div style={{ fontWeight: '600', fontSize: '25px', textAlign: 'center', top: '45%', left: '40%', position: 'fixed', color: 'black' }}>Please open app in Mobile</div>
        );
    else
        return (
            <div>
                <div>
                    <Switch>
                        <Route exact path='/' component={Login} />
                        <Route exact path='/exit' component={Logout} />
                        <Route exact path='/base' component={Base} />
                        <Route exact path='/Side' component={Side} />
                        <Route exact path='/player/:side' component={Game} />
                    </Switch>
                </div>
            </div>
        )
}


export default App;