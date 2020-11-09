import React from 'react';
import { BrowserRouter as Switch, Route, Router } from 'react-router-dom';
import Base from './Components/Base';

const App = () => {

    if (window.innerWidth > 768)
        return (
            <div style={{ textAlign: 'center', top: '45%', left: '40%', position: 'fixed', color: 'black' }}>Please open app in Mobile</div>
        );
    else
        return (
            <div>
                <Router >
                    <Switch>
                        <Route exact path='/' component={Base} />
                    </Switch>
                </Router>

            </div>
        )
}

export default App;