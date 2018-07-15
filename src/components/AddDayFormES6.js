import { PropTypes, Component } from 'react'

export class AddDayForm extends Component {

	constructor(props){
		super(props);
    this.submit = this.submit.bind(this)
	}
	submit(e){
		e.preventDefault();
		console.log(this.refs.resort.value);
		console.log(this.refs.date.value);
		console.log(this.refs.powder.checked);
		console.log(this.refs.backcountry.checked);
	}	

	render(){
		const {resort, date, powder, backcountry} = this.props;
			return (
				<form  className="add-day-form" onSubmit= {this.submit}>
						<label htmlFor="resort">Resort Name</label>
						<input id="resort" 
							   type="text" 
							   required 
							   defaultValue={resort} ref = "resort"/>

						<label htmlFor="date">Date</label>
						<input id="date" 
							   type="date" 
							   required 
							   defaultValue={date} ref = "date"/>

						<div>
							<input id="powder" 
								   type="checkbox" 
								   defaultChecked={powder}	ref = "powder"/>
							<label htmlFor="powder">Powder Day</label>
						</div>

						<div>	
							<input id="backcountry" 
								   type="checkbox"
								   defaultChecked={backcountry} ref = "backcountry"/>
							<label htmlFor="backcountry">
								Backcountry Day
							</label>
						</div>
						<button> Add Day </button> 
					</form>
			)
		}	
	}

AddDayForm.propTypes = {
  resort: PropTypes.string.isRequired,
  date:  PropTypes.string.isRequired,
  powder:  PropTypes.bool,
  backcountry:  PropTypes.bool
}

AddDayForm.defaultProps = {
  resort: "Kirkwood",
  date: "20/08/2018",
  powder: true,
  backcountry: false
}