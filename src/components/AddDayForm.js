import { PropTypes, Component } from 'react'

const  suggestedResorts = [
	"Alpine Meadows",
	"Boreal",
	"Diamond Peak",
	"Donner Ski Ranch", 
	"Heavenly", 
	"Homewood",
	"Kirkwood",
	"Mt. Rose", 
	"Northstar",
	"Squaw Valley",
	"Sugar Bowl"
] 

class AutoComplete extends Component{
	get value(){
		return this.refs.inputResort.value
	}
	set value(inputValue){
		this.refs.inputResort.value = inputValue
	}
	render(){
		return(
			<div>
				<input list ="list-resorts" ref = "inputResort" type ="text"/>
				<datalist id = "list-resorts"> 
					{this.props.options.map((opt, i) => 
						<option key ={i} value = {opt}> {opt} </option>
					)}
				</datalist>
			</div>
		)
	}
}

export const AddDayForm = (props) =>  {

  const {resort, date, powder, backcountry , addNewDay} = props;
  let _resort, _date, _powder, _backcountry; 
  const submit = (e) => {
		e.preventDefault();
		/*console.log(_resort.value);
		console.log(_date.value);
		console.log(_powder.checked);
		console.log(_backcountry.checked); */
		addNewDay({
			resort: _resort.value,
			date: _date.value,
			powder: _powder.checked,
			backcountry: _backcountry.checked
		})
	  _resort.value = ''
	  _date.value = ''
	  _powder.checked = false
	  _backcountry.checked = false
	}	
	return (
		<form  className="add-day-form" onSubmit= {submit}>
			<label htmlFor="resort">Resort Name</label>
			<AutoComplete options ={suggestedResorts} ref = {input => _resort = input}/> 

			<label htmlFor="date">Date</label>
			<input id="date" 
				   type="date" 
				   required 
				   defaultValue={date} ref = {input => _date = input}/>

			<div>
				<input id="powder" 
					   type="checkbox" 
					   defaultChecked={powder}	ref = {input => _powder = input}/>
				<label htmlFor="powder">Powder Day</label>
			</div>

			<div>	
				<input id="backcountry" 
					   type="checkbox"
					   defaultChecked={backcountry} ref = {input => _backcountry = input}/>
				<label htmlFor="backcountry">
					Backcountry Day
				</label>
			</div>
			<button> Add Day </button> 
	 </form>
	)
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