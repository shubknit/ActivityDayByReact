import { Component } from 'react'
import { SkiDayList } from './SkiDayList'
import { SkiDayCount } from './SkiDayCount'
import { AddDayForm } from './AddDayForm'
import { Menu } from './Menu'

export class App extends Component {

	constructor() {
		super();
		this.state = {
			allSkiDays:[
		  	{
					resort: 'Mr.Valley',
					date: '1/2/2018',
					powder: true,
					backcountry: false
				},
				{
					resort: 'Mr.John',
					date: '1/2/2019',
					powder: false,
					backcountry: true
				},
				{
					resort: 'Mr.Newyork',
					date: '1/2/2020',
					powder: true,
					backcountry: true
				},
				{
					resort: 'Mr.San Fransico',
					date: '1/2/2021',
					powder: true,
					backcountry: false
				}
    	]
  	}
  	this.addDay = this.addDay.bind(this)
	}

	getCountDays(filterName){
		const { allSkiDays }  = this.state;
		/*return allSkiDays.filter(function(data){
			if(filterName){
				return data[filterName]
			}
			else {
				return data
			}
		}).length */ // Can be written as below in Es6

		return allSkiDays.filter((data) => (filterName) ? data[filterName] : data ).length 
	}
	addDay(newDay){
		this.setState({
			allSkiDays: [...this.state.allSkiDays, newDay]
		})
	}

	render(){
		return(
		 <div className = "app">
		   	<Menu />
				{(this.props.location.pathname === '/') ? 
					<SkiDayCount total = {this.getCountDays()} powder = {this.getCountDays("powder")} backcountry = {this.getCountDays("backcountry")}/>
					: (this.props.location.pathname === '/add-day') 
					? <AddDayForm addNewDay ={this.addDay}/>
					: <SkiDayList days = {this.state.allSkiDays} filter = {this.props.params.filter}/>
				}
				
				</div>
		)
	}
}
