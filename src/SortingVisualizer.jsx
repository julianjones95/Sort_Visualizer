import React from 'react';
import './Sortvisualizer.css';
import {getMergeSortAnimations} from './SortingAlgorithm.js';
import {getQuickSortAnimations} from './SortingAlgorithm.js';
import {getBubbleSortAnimations} from './SortingAlgorithm.js';
import {getInsertionSortAnimations} from './SortingAlgorithm.js';
import {getSelectionSortAnimations} from './SortingAlgorithm.js';
import {getOHNOWHATISTHISSortAnimations} from './SortingAlgorithm.js';
import {getCocktailShakerSortAnimations} from './SortingAlgorithm.js';

export default class VisualSort extends React.Component
{

    constructor (props){
       
        super(props);
    
        this.state = {
            array: [],
        };
    
    }


        componentDidMount(){
           
            this.resetArray();

        }
    
        
        resetArray()                                             //creates our initial array of n elements to sort
        {
            const array = [];
            for(let i=0; i<400; i++)
            {
                array.push(randomIntFromInterval(5,700));        // initializes array with values to sort
                array.backgroundColor ='grey';
            }
        
        this.setState({array});
        }

        mergeSort() {
            const animations = getMergeSortAnimations(this.state.array); // gets our animations from our Sorting function
            for (let i = 0; i < animations.length; i++) {
              const arrayBars = document.getElementsByClassName('array-bar');
              const isColorChange = i % 3 !== 2;
              if (isColorChange) {                  //comparison animation
                const [barOneIdx, barTwoIdx] = animations[i];           // sets bars to respective animations at indices
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? 'red' : 'white';            // mod 3 is comparison sets the colors for the sort
                setTimeout(() => {
                  barOneStyle.backgroundColor = color;
                  barTwoStyle.backgroundColor = color;
                }, (i * 0.2));
              } 
              else {
                setTimeout(() => {                                           // overwrite animation
                  const [barOneIdx, newHeight] = animations[i];             // sets a new height to the bar
                  const barOneStyle = arrayBars[barOneIdx].style;
                  barOneStyle.height = `${newHeight}px`;
                }, (i * 0.2));
              }
            }
          }

        quickSort(){

            const animations = getQuickSortAnimations(this.state.array); // gets our animations from our Sorting function
            for (let i = 0; i < animations.length-2; i++) {
              const arrayBars = document.getElementsByClassName('array-bar');
              setTimeout(() => {
              const [barOneIdx, newHeight1] = animations[i]; 
              const [barTwoIdx, newHeight2] = animations[i+2];         
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 2 === 0 ? 'red' : 'white';            // mod 3 is comparison sets the colors for the sort
                
                  barOneStyle.backgroundColor = color;
                  barTwoStyle.backgroundColor = color;
                  barOneStyle.height = `${newHeight1}px`;
                  barTwoStyle.height = `${newHeight2}px`;
                }, (i * 0.2));

            }

        }

        bubbleSort(){

            const animations = getBubbleSortAnimations(this.state.array); // gets our animations from our Sorting function
            for (let i = 0; i < animations.length-2; i++) {
              const arrayBars = document.getElementsByClassName('array-bar');
              setTimeout(() => {
              const [barOneIdx, newHeight1] = animations[i]; 
              const [barTwoIdx, newHeight2] = animations[i+2];         
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 2 === 0 ? 'red' : 'white';            // mod 3 is comparison sets the colors for the sort
                
                  barOneStyle.backgroundColor = color;
                  barTwoStyle.backgroundColor = color;
                  barOneStyle.height = `${newHeight1}px`;
                  barTwoStyle.height = `${newHeight2}px`;
                }, (i * 0.2));

            }
        }
    
        insertionSort(){

            const animations = getInsertionSortAnimations(this.state.array); // gets our animations from our Sorting function
            for (let i = 0; i < animations.length-2; i++) {
              const arrayBars = document.getElementsByClassName('array-bar');
              setTimeout(() => {
              const [barOneIdx, newHeight1] = animations[i]; 
              const [barTwoIdx, newHeight2] = animations[i+2];         
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 2 === 0 ? 'red' : 'white';            // mod 3 is comparison sets the colors for the sort
                
                  barOneStyle.backgroundColor = color;
                  barTwoStyle.backgroundColor = color;
                  barOneStyle.height = `${newHeight1}px`;
                  barTwoStyle.height = `${newHeight2}px`;
                }, (i * 0.2));

            }

        }

        selectionSort(){
            const animations = getSelectionSortAnimations(this.state.array); // gets our animations from our Sorting function
            for (let i = 0; i < animations.length-2; i++) {
              const arrayBars = document.getElementsByClassName('array-bar');
              setTimeout(() => {
              const [barOneIdx, newHeight1] = animations[i]; 
              const [barTwoIdx, newHeight2] = animations[i+2];         
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 2 === 0 ? 'red' : 'white';            // mod 3 is comparison sets the colors for the sort
                
                  barOneStyle.backgroundColor = color;
                  barTwoStyle.backgroundColor = color;
                  barOneStyle.height = `${newHeight1}px`;
                  barTwoStyle.height = `${newHeight2}px`;
                }, (i * 0.2));

            }
        }

        OHNOWHATISTHISsort(){

            const animations = getOHNOWHATISTHISSortAnimations(this.state.array); // gets our animations from our Sorting function
            for (let i = 0; i < animations.length-2; i++) {
              const arrayBars = document.getElementsByClassName('array-bar');
              setTimeout(() => {
              const [barOneIdx, newHeight1] = animations[i]; 
              const [barTwoIdx, newHeight2] = animations[i+2];         
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 2 === 0 ? 'red' : 'white';            // mod 3 is comparison sets the colors for the sort
                
                  barOneStyle.backgroundColor = color;
                  barTwoStyle.backgroundColor = color;
                  barOneStyle.height = `${newHeight1}px`;
                  barTwoStyle.height = `${newHeight2}px`;
                }, (i * 0.2));

            }

        }

        cocktailshakerSort(){
            const animations = getCocktailShakerSortAnimations(this.state.array); // gets our animations from our Sorting function
            for (let i = 0; i < animations.length-2; i++) {
              const arrayBars = document.getElementsByClassName('array-bar');
              setTimeout(() => {
              const [barOneIdx, newHeight1] = animations[i]; 
              const [barTwoIdx, newHeight2] = animations[i+2];         
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 2 === 0 ? 'red' : 'white';            // mod 3 is comparison sets the colors for the sort
                
                  barOneStyle.backgroundColor = color;
                  barTwoStyle.backgroundColor = color;
                  barOneStyle.height = `${newHeight1}px`;
                  barTwoStyle.height = `${newHeight2}px`;
                }, (i * 0.1));

            }
        }

        render()
        {

            const{array} = this.state;
        
        return(
            <>
      <button className="btn"  onClick={() => this.resetArray()}> Generate New Array  </button>
      <button className="btn"  onClick={() => this.bubbleSort()}> Bubble Sort  </button>
      <button className="btn"  onClick={() => this.selectionSort()}> Selection Sort  </button>
      <button className="btn"  onClick={() => this.cocktailshakerSort()}> Cocktail Shaker Sort  </button>
      <button className="btn"  onClick={() => this.insertionSort()}> Insertion Sort  </button>
      <button className="btn"  onClick={() => this.mergeSort()}> Merge Sort  </button>
      <button className="btn"  onClick={() => this.quickSort()}> Quick Sort  </button>
      <button className="btn"  onClick={() => this.OHNOWHATISTHISsort()}> Bogo Sort  </button>
          <div className = "array-container">                                   
            {array.map((value, idx) => (

            <div className="array-bar" key ={idx}
                    
                    style={{height: `${value}px`}}>
                 
                </div>
             
            ))}

           </div>    
            
           </>


        );

        }

    }


    function randomIntFromInterval(min,max)
    {

        return Math.floor(Math.random()*(max-min+1)+min);

    }
/*
           <button onClick={() => this.resetArray()}> Generate New Array </button>
           <button onClick={() => this.mergeSort()}> Merge Sort </button>
           <button onClick={() => this.quickSort()}> Quick Sort </button>
           <button onClick={() => this.bubbleSort()}> Bubble Sort </button>
           <button onClick={() => this.insertionSort()}> Insertion Sort </button>
           <button onClick={() => this.selectionSort()}> Selection Sort </button>
           <button onClick={() => this.cocktailshakerSort()}> Cocktail Shaker Sort </button>
           <button onClick={() => this.OHNOWHATISTHISsort()}> IDK what this is tbh </button>
*/