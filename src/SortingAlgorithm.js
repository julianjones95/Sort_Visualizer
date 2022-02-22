



                //////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////
                //////                                                                      //////
                //////                                                                      //////      
                //////                              MERGE SORT                              //////
                //////                                                                      //////
                //////                                                                      //////
                //////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////





export function getMergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);    // Initializes the parameters we are using to sort
    return animations;
  }
  
  function mergeSortHelper(mainArray,startIdx,endIdx,auxiliaryArray,animations,) {// initializes the sorting function
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);        //recursively calls for the first half
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);      //recursively call for the second half
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
  }
  

  function doMerge(mainArray,startIdx,middleIdx,endIdx,auxiliaryArray,animations,) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {

      animations.push([i, j]);// changes the color
      animations.push([i, j]);// reverts color
      if (auxiliaryArray[i] <= auxiliaryArray[j]) {
        // We overwrite the value at index k in the original array with the value at index i in the auxiliary array.
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
      } else {
        // We overwrite the value at index k in the original array with the value at index j in the auxiliary array.
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
      }
    }
    while (i <= middleIdx) {

      animations.push([i, i]);// first push changes color
      animations.push([i, i]); // second push reverts color
      // We overwrite the value at index k in the original array with the
      // value at index i in the auxiliary array.
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
      animations.push([j, j]);
      animations.push([j, j]);
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }




                //////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////
                //////                                                                      //////
                //////                                                                      //////      
                //////                             QUICK SORT                               //////
                //////                                                                      //////
                //////                                                                      //////
                //////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////






                export function getQuickSortAnimations(array) {
                    const animations = [];
                    if (array.length <= 1) return array;
                    const auxiliaryArray = array.slice();
                    var pivotindex =array.length-1;
                    var pivot = auxiliaryArray[pivotindex];
                    QuickSortHelper(array, 0, array.length - 1, auxiliaryArray, animations,pivot,pivotindex);    // Initializes the parameters we are using to sort
                    
                    return animations;
                    
                  }
                  
                function QuickSortHelper(mainArray,startIdx,endIdx,auxiliaryArray,animations,pivot,pivotindex){

                let i=startIdx;
                let j=startIdx+1;
                let firstrun=0;
                if(pivotindex>=mainArray.length){ // to check if ending index is too large
                    pivotindex--;
                }
                let swap =0;
                while(i<pivotindex&& j<pivotindex){
                animations.push([pivotindex, pivot]);
                animations.push([pivotindex, pivot]);
                    
                    if(auxiliaryArray[j-1]>pivot && j===1 && i===0 && firstrun===0){    // on the first run this will sort the 0th component
                        firstrun=1;
                        
                        swap = auxiliaryArray[i];
                        animations.push([i, auxiliaryArray[j]]);
                        animations.push([i, auxiliaryArray[j]]);  
                        animations.push([j, swap]);
                        animations.push([j, swap]); 
                        swap=auxiliaryArray[i];
                        auxiliaryArray[i] = auxiliaryArray[j];
                        auxiliaryArray[j] = swap;
                       
                        
                    }
                    else if(auxiliaryArray[j]>pivot){
                        animations.push([i, auxiliaryArray[i]]);
                        animations.push([i, auxiliaryArray[i]]);
                        animations.push([j, auxiliaryArray[j]]);
                        animations.push([j, auxiliaryArray[j]]);
                        j++;


                    }
                    else{

                        i++;
                        
                        swap = auxiliaryArray[i];
                        animations.push([i, auxiliaryArray[j]]);
                        animations.push([i, auxiliaryArray[j]]);  
                        animations.push([j, swap]);
                        animations.push([j, swap]); 
                        swap=auxiliaryArray[i];
                        auxiliaryArray[i] = auxiliaryArray[j];
                        auxiliaryArray[j] = swap;
                        j++;
                        
                        
                        
                        

                    } 
                    if(j===pivotindex){

                        pivotindex=i;
                        pivot=auxiliaryArray[pivotindex];
                        let pivotend=auxiliaryArray[endIdx+1];

                        swap = auxiliaryArray[i+1]
                        animations.push([i+1, auxiliaryArray[j]]);
                        animations.push([i+1, auxiliaryArray[j]]);  
                        animations.push([j, swap]);
                        animations.push([j, swap]); 
                        swap=auxiliaryArray[i+1];
                        auxiliaryArray[i+1] = auxiliaryArray[j];
                        auxiliaryArray[j] = swap;


                        QuickSortHelper(mainArray,startIdx,pivotindex,auxiliaryArray,animations,pivot, pivotindex);
                        QuickSortHelper(mainArray,pivotindex,endIdx-1,auxiliaryArray,animations,pivotend,endIdx+1);


                    }
                }
                }



                //////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////
                //////                                                                      //////
                //////                                                                      //////      
                //////                             BUBBLE SORT                              //////
                //////                                                                      //////
                //////                                                                      //////
                //////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////






  export function getBubbleSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    BubbleSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);    // Initializes the parameters we are using to sort
    return animations;
  }
  
function BubbleSortHelper(mainArray,startIdx,endIdx,auxiliaryArray,animations,){
var swap =0;
    for(let j=0; j<mainArray.length; j++){
    for(let i=0; i<mainArray.length-j-1; i++){
   
   if( auxiliaryArray[i]<auxiliaryArray[i+1]){      //doesn't make any swaps
   animations.push([i, auxiliaryArray[i]]);
   animations.push([i, auxiliaryArray[i]]);
   animations.push([i+1, auxiliaryArray[i+1]]);
   animations.push([i+1, auxiliaryArray[i+1]]);
   mainArray[i] = auxiliaryArray[i];
   }
   
   else{                                            // makes the ith and (i+1)th element swap
   swap=auxiliaryArray[i];
   animations.push([i, auxiliaryArray[i+1]]);
   animations.push([i, auxiliaryArray[i+1]]);
   animations.push([i+1, swap]);
   animations.push([i+1, swap]);
   swap=auxiliaryArray[i];
   auxiliaryArray[i] = auxiliaryArray[i+1];
   auxiliaryArray[i+1] = swap;
   }

}

}
    
}




                //////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////
                //////                                                                      //////
                //////                                                                      //////      
                //////                             INSERTION SORT                           //////
                //////                                                                      //////
                //////                                                                      //////
                //////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////






                export function getInsertionSortAnimations(array) {
                    const animations = [];
                    if (array.length <= 1) return array;
                    const auxiliaryArray = array.slice();
                    InsertionSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);    // Initializes the parameters we are using to sort
                    return animations;
                  }
                  
                function InsertionSortHelper(mainArray,startIdx,endIdx,auxiliaryArray,animations,){
                var swap =0;
                    
                    for(let i=0; i<mainArray.length-1; i++){
                   
                   if( auxiliaryArray[i]<auxiliaryArray[i+1]){      //doesn't make any swaps
                   animations.push([i, auxiliaryArray[i]]);
                   animations.push([i, auxiliaryArray[i]]);
                   animations.push([i+1, auxiliaryArray[i+1]]);
                   animations.push([i+1, auxiliaryArray[i+1]]);
                   mainArray[i] = auxiliaryArray[i];
                   }
                   
                   else{                                            // calls recursive function to repeadetly skip until it's in the right spot


                   for(let j=0; j<i+1; j++){

                   if(auxiliaryArray[i-j]>auxiliaryArray[i-j+1]){
                   swap=auxiliaryArray[i-j];
                   animations.push([i-j, auxiliaryArray[i-j+1]]);
                   animations.push([i-j, auxiliaryArray[i-j+1]]);
                   animations.push([i-j+1, swap]);
                   animations.push([i-j+1, swap]);
                   swap=auxiliaryArray[i-j];
                   auxiliaryArray[i-j] = auxiliaryArray[i-j+1];
                   auxiliaryArray[i-j+1] = swap;
                       }

                   }

                    
 
                  

                    }
                    
                   }
                
                }
                
                
            
                




                //////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////
                //////                                                                      //////
                //////                                                                      //////      
                //////                             SELECTION SORT                           //////
                //////                                                                      //////
                //////                                                                      //////
                //////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////






                export function getSelectionSortAnimations(array) {
                    const animations = [];
                    if (array.length <= 1) return array;
                    const auxiliaryArray = array.slice();
                    SelectionSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);    // Initializes the parameters we are using to sort
                    return animations;
                  }
                  
                function SelectionSortHelper(mainArray,startIdx,endIdx,auxiliaryArray,animations,){
                    
                    for(let j=0; j<mainArray.length; j++){
                    let swap = auxiliaryArray[j];
                    let index=j;
                    for(let i=j; i<mainArray.length; i++){
                        
                            if( swap >auxiliaryArray[i]){      //doesn't make any swaps
                                    swap=auxiliaryArray[i];
                                    index=i;
                                    
                            }
                            animations.push([i, auxiliaryArray[i]]);
                            animations.push([i, auxiliaryArray[i]]);
                            
                   }
                   animations.push([index, auxiliaryArray[j]]);
                   animations.push([index, auxiliaryArray[j]]);                    
                   animations.push([j, swap]);
                   animations.push([j, swap]);   
                   auxiliaryArray[index]= auxiliaryArray[j];
                   auxiliaryArray[j] = swap; 
                   

                     
                   
                   
                }         
                }
                
                
            
 
                



                //////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////
                //////                                                                      //////
                //////                                                                      //////      
                //////                       OH NO WHAT IS THIS SORT                        //////
                //////                                                                      //////
                //////                                                                      //////
                //////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////







                export function getOHNOWHATISTHISSortAnimations(array) {
                    const animations = [];
                    if (array.length <= 1) return array;
                    const auxiliaryArray = array.slice();
                    var pivotindex =array.length-1;
                    var pivot = auxiliaryArray[pivotindex];
                    OHNOWHATISTHISHelper(array, 0, array.length - 1, auxiliaryArray, animations,pivot,pivotindex);    // Initializes the parameters we are using to sort
                    
                    return animations;
                    
                  }
                  
                function OHNOWHATISTHISHelper(mainArray,startIdx,endIdx,auxiliaryArray,animations,pivot,pivotindex){

                let i=startIdx;
                let j=startIdx+1;
                
                let swap =0;
                while(i<pivotindex&& j<pivotindex){
                animations.push([pivotindex, pivot]);
                animations.push([pivotindex, pivot]);
                    if(auxiliaryArray[j]>pivot){
                        animations.push([i+1, auxiliaryArray[i]]);
                        animations.push([i+1, auxiliaryArray[i]]);
                        animations.push([j+1, auxiliaryArray[j]]);
                        animations.push([j+1, auxiliaryArray[j]]);
                        j++


                    }
                    else{
                        i++;
                        swap = auxiliaryArray[i]
                        animations.push([i+1, auxiliaryArray[j]]);
                        animations.push([i+1, auxiliaryArray[j]]);  
                        animations.push([j+1, swap]);
                        animations.push([j+1, swap]); 
                        swap=auxiliaryArray[i+1];
                        auxiliaryArray[i+1] = auxiliaryArray[j+1];
                        auxiliaryArray[j+1] = swap;
                        j++;
                        
                        
                        
                        

                    } 
                    if(j===pivotindex){

                        
                        
                        pivotindex=i;
                        pivot=auxiliaryArray[pivotindex];
                        let pivotend=auxiliaryArray[endIdx];




                        OHNOWHATISTHISHelper(mainArray,startIdx,pivotindex,auxiliaryArray,animations,pivot, pivotindex);
                        OHNOWHATISTHISHelper(mainArray,pivotindex,endIdx-1,auxiliaryArray,animations,pivotend,endIdx);


                    }
                }
                }





                //////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////
                //////                                                                      //////
                //////                                                                      //////      
                //////                          COCKTAIL SHAKER SORT                        //////
                //////                                                                      //////
                //////                                                                      //////
                //////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////






                export function getCocktailShakerSortAnimations(array) {
                    const animations = [];
                    if (array.length <= 1) return array;
                    const auxiliaryArray = array.slice();
                    CocktailShakerSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);    // Initializes the parameters we are using to sort
                    return animations;
                  }
                  
                function CocktailShakerSortHelper(mainArray,startIdx,endIdx,auxiliaryArray,animations,){
                var swap =0;
                    for(let j=0; j<(mainArray.length/3.5); j++){       // the denominator logically should be 2 but 3.5 is the magic number idk why???
                   
                   for(let i=j; i<mainArray.length-j-1; i++){   //forward loop (same as bubble sort)
                   
                   if( auxiliaryArray[i]<auxiliaryArray[i+1]){      
                   animations.push([i, auxiliaryArray[i]]);
                   animations.push([i, auxiliaryArray[i]]);
                   animations.push([i+1, auxiliaryArray[i+1]]);
                   animations.push([i+1, auxiliaryArray[i+1]]);
                   mainArray[i] = auxiliaryArray[i];
                   }
                   
                   else{                                           
                   swap=auxiliaryArray[i];
                   animations.push([i, auxiliaryArray[i+1]]);
                   animations.push([i, auxiliaryArray[i+1]]);
                   animations.push([i+1, swap]);
                   animations.push([i+1, swap]);
                   swap=auxiliaryArray[i];
                   auxiliaryArray[i] = auxiliaryArray[i+1];
                   auxiliaryArray[i+1] = swap;
                   }
                
                }
                
                    for(let i=mainArray.length-j-1; i>j; i--){      //backward loop (same as bubble sort but in reverse)
                   
                    if( auxiliaryArray[i]>auxiliaryArray[i-1]){      //doesn't make any swaps
                    animations.push([i, auxiliaryArray[i]]);
                    animations.push([i, auxiliaryArray[i]]);
                    animations.push([i-1, auxiliaryArray[i-1]]);
                    animations.push([i-1, auxiliaryArray[i-1]]);
                    mainArray[i] = auxiliaryArray[i];
                    }
                    
                    else{                                            // makes the ith and (i-1)th element swap
                    swap=auxiliaryArray[i-1];
                    animations.push([i-1, auxiliaryArray[i]]);
                    animations.push([i-1, auxiliaryArray[i]]);
                    animations.push([i, swap]);
                    animations.push([i, swap]);
                    swap=auxiliaryArray[i-1];
                    auxiliaryArray[i-1] = auxiliaryArray[i];
                    auxiliaryArray[i] = swap;
                    }
                 
                 }
                
                }
                
                }


