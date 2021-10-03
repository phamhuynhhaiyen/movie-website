import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Film from '../pages/Film'
import Home from '../pages/Home'
import FilmBo from '../pages/FilmBo'
import FilmHoatHinh from '../pages/FilmHoatHinh'
import FilmChieuRap from '../pages/FilmChieuRap'
import FilmLe from '../pages/FilmLe'
import Search from '../pages/Search'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/phimbo' component={FilmBo}/>
            <Route path='/phimle' component={FilmLe}/>
            <Route path='/phimchieurap' component={FilmChieuRap}/>
            <Route path='/phimhoathinh' component={FilmHoatHinh}/>          
            <Route path='/timkiem/:ten' component={Search}/>
            {/* <Route path='/:url' component={Film}/> */}
            <Route path='/phim/:title' component={Film}/>
        </Switch>
    )
}

export default Routes
