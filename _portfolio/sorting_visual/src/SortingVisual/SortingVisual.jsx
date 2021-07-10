import React from 'react';
import './SortingVisual.css';
import {getSelectionAnimations} from './SortingAlgorithms';

const total_numbers = 80

const PRIMARY_COLOR = "blue";
const SECONDARY_COLOR = "red";
const END_COLOR = "green";

const MIN_COLOR = "yellow";
const Jcol = "red";
const WALL = "black";
const OK = "green";
const ANIMATION_SPEED_MS = 1;

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
		for (let i=0; i<total_numbers; i++) {
			array.push(getRandomInt(10,500));
		}
		this.setState({array});
		// this.render()
	}


	
    selectionSort() {
		// this.disableButtons();
        const javaScriptSort = this.state.array.slice().sort((a, b) => a - b);
		const [sortedArray, animations] = getSelectionAnimations(this.state.array);
		console.log("Correct sorting? ",equalArrays(sortedArray, javaScriptSort));	  
		const arrayBars = document.getElementsByClassName('array-bar');
        for (let i = 0; i < animations.length; i++) {
            // const isColorChange = (animations[i][0] === "comparision1") || (animations[i][0] === "comparision2");
            const isColorChange = (animations[i][0] === "comp") || (animations[i][0] === "comp_reset") ;
            if(isColorChange === true) {
                const color = (animations[i][0] === "comp") ? SECONDARY_COLOR : PRIMARY_COLOR;
                const min_color = (animations[i][0] === "comp") ? MIN_COLOR : PRIMARY_COLOR;
				const [, comparisonIndex, minIndex] = animations[i];
                const comparisonStyle = arrayBars[comparisonIndex].style;
                const minIndexStyle = arrayBars[minIndex].style;
                // if (curMinIdx !== minIndex){
				// 	setTimeout(() => {
				// 		arrayBars[curMinIdx].style.backgroundColor = PRIMARY_COLOR;
				// 		curMinIdx = minIndex;
				// 		arrayBars[curMinIdx].style.backgroundColor = MIN_COLOR;
				// 	},i * ANIMATION_SPEED_MS);					
				
				setTimeout(() => {
                    minIndexStyle.backgroundColor = min_color;
                    comparisonStyle.backgroundColor = color;
                },i * ANIMATION_SPEED_MS);				
				// setTimeout(() => {
                //     minIndexStyle.backgroundColor = PRIMARY_COLOR;
				// 	comparisonStyle.backgroundColor = PRIMARY_COLOR;
                // },i * ANIMATION_SPEED_MS);				
			}

			else { // if animation[i][0] === "swap"
                const [, barIndex, newHeight, color_change] = animations[i];
                const barStyle = arrayBars[barIndex].style;
				setTimeout(() => {
                    barStyle.height = `${newHeight}px`;
					if (color_change) {barStyle.backgroundColor = END_COLOR;}
					// if (color_change && barIndex>0){arrayBars[barIndex-1].style.backgroundColor = PRIMARY_COLOR;}
                },i* ANIMATION_SPEED_MS);  
            }
        }
		setTimeout(() => {
			{arrayBars[arrayBars.length-1].style.backgroundColor = END_COLOR;}
		},animations.length* ANIMATION_SPEED_MS);  

        // this.setState({array: sortedArray})
		// this.restoreButtons();
		setTimeout(() => {
			for (let i=0; i<arrayBars.length; i++){arrayBars[i].style.backgroundColor = PRIMARY_COLOR; } 
		},animations.length * ANIMATION_SPEED_MS+1000);  
		
    }
	

	// disableButtons() {
	// 	document.getElementById("selectionSort").disabled = true;
	// 	let buttonStyle = document.getElementById("selectionSort").style;
	// 	buttonStyle.cursor = "default";
	// 	buttonStyle.background = "#000000";
	
	// 	document.getElementById("newArray").disabled = true;
	// 	buttonStyle = document.getElementById("newArray").style;
	// 	buttonStyle.cursor = "default";
	// 	buttonStyle.background = "#000000";
	// }
	
	// restoreButtons() {
	// 	document.getElementById("selectionSort").disabled = false;
	// 	let buttonStyle = document.getElementById("selectionSort").style;
	// 	buttonStyle.background = "#47535E";
	// 	buttonStyle.cursor = "pointer";
	
	// 	document.getElementById("newArray").disabled = false;
	// 	buttonStyle = document.getElementById("newArray").style;
	// 	buttonStyle.background = "#47535E";
	// 	buttonStyle.cursor = "pointer";
	// }

	/** render array into array-bar class elements **/
	render() {
		const {array} = this.state;
		
		return (
		<div className="array-container">
		{array.map((value,idx) => (
			<div className = "array-bar" 
			key={idx}
			style={{height: `${value}px`}}
		>{value}</div>
		))}

		<button id = "newArray" onClick= {() => this.createArray()}>Generate New Array</button>
		<button id = "selectionSort" onClick= {() => this.selectionSort()}>Selection Sort</button>
		{/* <button onClick= {() => this.insertionSort()}>Insertion Sort</button> */}
		{/* <button onClick= {() => this.mergeSort()}>Merge Sort</button> */}

		</div>
		
		);
	}		
}	

function equalArrays(array1, array2) { 
	if (array1.length!== array2.length) return false; 
	for (let i=0; i<array1.length;i++){ 
		if (array1[i]!==array2[i]){
			return false 
		} 
	} 
	return true 
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
