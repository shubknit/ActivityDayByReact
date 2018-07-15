import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'

export const SkiDayRow = ({resort, date, powder, backcountry}) => (
	<tr>
		<td>{date}</td>	
		<td>{resort}</td>
		<td>{powder ? <Terrain/> : null }</td>
		<td>{backcountry ? <SnowFlake/> : null }</td>

	</tr>
)