import { SkiDayRow } from './SkiDayRow'
import { Link } from 'react-router'

export const SkiDayList = ({days, filter}) => { 
	const filteredDays = (!filter || !filter.match(/powder|backcountry/)) ? 
											days : days.filter(day => day[filter]);

	return ( // dqys arggumnet is actings as a props in statless function component which returnx JSX
		<div className="ski-day-list">
			<table>
					<thead>
						<tr>
							<th>Date</th>
							<th>Resort</th>
							<th>Powder</th>
							<th>Backcountry</th>
						</tr>
						<tr colSpan ={4}>
							<td>
								<Link to ='/list-days'>All Days </Link>
							</td>
							<td>
								
							</td>
							<td>
								<Link to = '/list-days/powder'>Powder</Link>
							</td>
							<td>
								<Link to = '/list-days/backcountry'> Backcountry </Link>
							</td>
						
						</tr>
					</thead>
						<tbody>
							 {filteredDays.map((day, i ) => 
							 		<SkiDayRow key = {i} resort = {day.resort} date = {day.date} powder = {day.powder} backcountry = {day.backcountry}/>
							 		// or <SkiDayRow key = {i} {...day} />
							 )}
						</tbody>
					</table>
				</div>
	)
}

/* Custom Validations */ 

SkiDayList.propTypes = {
	days: function(props){
		if(!Array.isArray(props.days)){
			return new Error("Days should be array")
		}
		else if(!props.days.length > 0){
			return new Error("Days should not be empty")
		}
		else {
			return null
		}
	}
}