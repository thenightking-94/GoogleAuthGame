import React from 'react';
import MetaTags from 'react-meta-tags';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Base from './Components/Base';
import Side from './Components/Side';

const App = () => {

    if (window.innerWidth > 768)
        return (
            <div style={{ fontWeight: '600', fontSize: '25px', textAlign: 'center', top: '45%', left: '40%', position: 'fixed', color: 'black' }}>Please open app in Mobile</div>
        );
    else
        return (
            <div>
                <MetaTags>
                    <meta name="viewport" content="height=device-height,width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,
                user-scalable=no,target-densitydpi=device-dpi"/>
                </MetaTags>
                <Router >
                    <div>
                        <Switch>
                            <Route exact path='/' component={Base} />
                            <Route exact path='/Side' component={Side} />
                        </Switch>
                    </div>
                </Router>

            </div>
        )
}

export default App;