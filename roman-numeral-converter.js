/*
Code developed by William Garcia
Website: https://www.williamgar.com
LinkedIn: https://www.linkedin.com/in/williamgar
GitHub: https://github.com/William-Gar
*/

const convertToRoman = (num) => {
 
 let numRom = "";
 let arr = [];
 arr.push(parseInt((num / 1000) % 10)); //thousands
 arr.push(parseInt((num / 100) % 10)); //hundreds
 arr.push(parseInt((num / 10) % 10)); //tens
 arr.push(num % 10); //Units
  
 let romanNums = [
   {1:'M', 2:'MM', 3:'MMM'},//thousands
   {1:'C', 2:'CC', 3:'CCC', 4:'CD', 5:'D', 6:'DC', 7:'DCC', 8:'DCCC', 9:'CM'},//hundreds
   {1:'X', 2:'XX', 3:'XXX', 4:'XL', 5:'L', 6:'LX', 7:'LXX', 8:'LXXX', 9:'XC'},//tens
   {1:'I', 2:'II', 3:'III', 4:'IV', 5:'V', 6:'VI', 7:'VII', 8:'VIII', 9:'IX'}//Units
 ]
 
 for(let i in arr){
   if(arr[i] in romanNums[i]) numRom += (romanNums[i][arr[i]]); 
 }

 return numRom;
}

console.log(convertToRoman(3999));
console.log(convertToRoman(50));
console.log(convertToRoman(1));
