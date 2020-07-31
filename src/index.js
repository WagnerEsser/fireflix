import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import Video from './pages/registrations/video'
import Category from './pages/registrations/category'
import PageNotFound from './pages/404'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/registrations/create/category" component={ Category } exact />
            <Route path="/registrations/create/video" component={ Video } exact />
            <Route path="/" component={ Home } exact />
            <Route component={ PageNotFound } />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
)
