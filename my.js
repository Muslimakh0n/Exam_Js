// Bismillah
// 1-problem
function sum(son) {
    if (son%2) {
     console.log(son + " toq son");
    }else{
     console.log(son + " juft son");
    }
   
 }
 
 sum(0 )
// 2-problem
function removeSecond(arr) {
    let result = []
  
    for(let i = 0; i < arr.length; i++) {
        if(!(i % 2)) {
            result.push(arr[i]);
        }
    }
  
    return result;
  }
  
  // 3-problem
  function isSquared(num) {
    if(num > 0 && Math.sqrt(num) % 1 === 0){
        return true;
    }
  
    return false;
  }
  
  
  // 4-problem
  function countVowels(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
  
    for(let letter of str) {
        if(vowels.includes(letter)) {
            ++count;
        }
    }
  
    return count;
  }
  
  // 5-problem
  function fillWithNums(n) {
    if(n>0) {
      let result = [];
  
      for(let i = n; i > 0; i--) {
        result.push(i);
      }
  
      return result;
    }
  
  }
  
  // 6-problem
  function returnSquaredSum(arr) {
    let result = 0;
  
    for(let num of arr) {
      result += (num * num);
    }
  
    return result;
  }
  
  // 7-problem
  function returnSquaredNum(num) {
    // check if it is squared
    if(num > 0 && Math.sqrt(num) % 1 === 0) {
      let number = Math.sqrt(num) + 1;
      return number * number;
    } else {
      return -1;
    }
  }
  
  // 8-problem
  function removeWhitespaces(str) {
    str = str.split(' ');
  
    return str.join('');
  }
  
  // 9-problem
  function trafficLight(str) {
    if(str === 'green') {
      return 'yellow';
    } else if(str === 'yellow') {
      return 'red';
    } else {
      return 'green';
    }
  }
  
  
  // 10-problem
  function swapStr(str) {
    // make array to traverse every string
    str = str.split(' ');
    let allWords = [];
  
    for(let word of str) {
      // now, we can traverse words
      let traversedWord = '';
      for(let i = word.length - 1; i > -1; i--) {
        traversedWord += word[i];
      }
  
      allWords.push(traversedWord);
    }
  
    return allWords.join(' ');
  }