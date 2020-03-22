import React, {Component} from 'react'

export default class SetName extends Component {
	//changed input to 'controlled component'
	constructor (props) {
		super(props)

		this.state = {
			userName: ''
		}
		this.handleChange = this.handleChange.bind(this);
	}

//	------------------------	------------------------	------------------------

	render () {
		return (
			<div id='SetName'>

				<h1>Set Name</h1>

				<div ref='nameHolder' className='input_holder left'>
					<label>Name </label>
					<input name='username' type='text' value={this.state.userName} className='input name' placeholder='Name' onChange={this.handleChange} />
				</div>


				<button type='submit' onClick={this.saveName.bind(this)} className='button'><span>SAVE <span className='fa fa-caret-right'></span></span></button>

			</div>
		)
	}

	handleChange(event) {
		this.setState({userName: event.target.value});
	  }

//	------------------------	------------------------	------------------------

	saveName (e) {
		// const { name } = this.refs
		// const { onSetName } = this.props
		// onSetName(name.value.trim())

		this.props.onSetName(this.state.userName.trim())
	}

}
