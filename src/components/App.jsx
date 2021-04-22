import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Main from '../pages/Main.jsx'
import NotFound from '../pages/NotFound.jsx'

class App extends React.Component{

    render(){
        return <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Main}></Route>
                <Route exact path="/404" component={NotFound}></Route>
            </Switch>
        </BrowserRouter>
    }
}

export default App