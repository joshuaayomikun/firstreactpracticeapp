import React from'react';

class ChangeColorButton extends React.Component {
	constructor(props){
		super(props)
		this.handleClick = this.handleClick.bind(this)
	}
	handleClick() {
		this.props.onClick();
	}
	render() {
		return(
			<button onClick={this.handleClick}>
				Click again!
			</button>
		);
	}
}

export default ChangeColorButton;