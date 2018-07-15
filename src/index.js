import React from 'react'
import { render } from 'react-dom'
import { SkiDayCount } from './components/SkiDayCount'
import { SkiDayList } from './components/SkiDayList'
import { App } from './components/App'
import { PageNotFound } from './components/PageNotFound'
import {Router, Route, hashHistory} from 'react-router'
import './stylesheets/index.scss'

window.React = React

 render(
	<Router history = {hashHistory}>
		<Route path = "/" component = {App}/>
		<Route path = "/list-days" component = {App}>
			<Route path = ":filter" component = {App}/> 
		</Route>
		<Route path = "/add-day" component = {App}/>
		<Route path = "*" component = {PageNotFound}/>
	</Router>,
	document.getElementById('react-container') 
) 
/*render(
	<SkiDayCount/>, document.getElementById('react-container')
) */