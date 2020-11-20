import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Base from './Components/Base';
import Side from './Components/Side';
import Game from './Components/Game';

const App = () => {

    if (window.innerWidth > 768)
        return (
            <div style={{ fontWeight: '600', fontSize: '25px', textAlign: 'center', top: '45%', left: '40%', position: 'fixed', color: 'black' }}>Please open app in Mobile</div>
        );
    else
        return (
            <div>
                <Router >
                    <div>
                        <Switch>
                            <Route exact path='/' component={Base} />
                            <Route exact path='/Side' component={Side} />
                            <Route exact path='/player/:side' component={Game} />
                        </Switch>
                    </div>
                </Router>

            </div>
        )
}

export default App;