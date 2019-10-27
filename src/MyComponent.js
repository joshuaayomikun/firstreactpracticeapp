import React from 'react';

class MyComponent extends React.Component {
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.state = {
			foo: 'Click me'
		}
	}
	
	handleClick() {
		this.setState({
			foo: 'bar'
		});
		alert('I was clicked')
	}
	render() {
		return (
			<button onClick={this.handleClick}>
				Click me
			</button>
		)
	}
}

export default MyComponent;