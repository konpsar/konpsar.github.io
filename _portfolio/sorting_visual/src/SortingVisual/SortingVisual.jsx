import React from 'react';
import './SortingVisual.css';

export default class SortingVisual extends React.Component {
	constructor(props){
		super(props);
		
		this.state = {
			array: [],
		};
	}
	
	/**create array as soon as component is created**/
	componentDidMount(){
		this.createArray();
	}
	
	/** Iterate and generate an array with 50 random numbers from 50 to 5000 **/
	createArray() {
		const array = [];
		for (let i=0; i<50; i++) {
			array.push(getRandomInt(50,5000));
		}
		this.setState({array});
	}

    /** render array into array-bar class elements **/
	render() {
		const {array} = this.state;
		
		return (
		<div className="array-container">
		{array.map((value,idx) => (
			<div className = "array-bar" 
			key={idx}
			style={{height: '${value}px',}}
		>value</div>
		))}
		</div>
		);
	}		
}	


/** From https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
**/

 /**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
