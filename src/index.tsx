import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import Video from './pages/registrations/video'
import Category from './pages/registrations/category/Category'
import PageNotFound from './pages/404'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" component={ Home } exact />
            <Route path="/registrations/create/video" component={ Video } />
            <Route path="/registrations/create/category" component={ Category } />
            <Route component={ PageNotFound } />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
)
