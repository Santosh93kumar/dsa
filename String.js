let firstname='santosh';
console.log(firstname.length)
/// commmon one => split, join , reverse, startsWith, endsWith
// trim , trimStart, trimEnd


//Access string Element
//difference b/w charAt & charCodeAt
console.log(firstname.charAt(0));
console.log(firstname[0])
console.log(firstname.charCodeAt(0));


//diffrence b/w indexof &  lastIndexOf
console.log(firstname.includes('s'));
console.log(firstname.indexOf('s'));
console.log(firstname.lastIndexOf('s'));


let anotherName='Vishal'
console.log(anotherName.toLocaleLowerCase());
console.log(anotherName.toLowerCase())
// toLowerCase() converts a string to lowercase using default Unicode rules, while toLocaleLowerCase() converts it based on language-specific locale rules.

console.log(firstname.localeCompare(anotherName));
let sentance = 'I am developer , am I not'
// difference b/w replace & replaceAll
console.log(sentance.replace("I am", "we are"));
console.log(sentance.replaceAll("i", "we"));

// difference in subString  slice
//in slice we can inclue the - number
console.log(sentance.substring(6,12));
console.log(sentance.slice(6,12));
console.log(sentance.slice(-10,-2))
console.log(sentance);


console.log(sentance.split(" "));
var value ='hi Santosh How are you'
console.log(value.startsWith('hi'));
console.log(value.endsWith('you'))



let example = '         hey how are you    ';
console.log(example.length)
console.log(example.trim(), example.trim().length);
console.log(example.trimStart());
console.log(example.trimEnd());

// convert the dataType to String
const num = 123;
console.log(num, num.toString());

//obj to string
var val={
    name:'santosh',
    age:11
}
console.log(val, JSON.stringify(val), )

//string to obj
const str = '{"name":"hey"}';
console.log(JSON.parse(str))



// string question
let name= 'santossh'; subname='san';
function findtheoccurence(name, subname){
    if(name.includes(subname) == false){
        return -1
    }else{
        return name.indexOf(subname)
    } 
    
    
}
console.log(findtheoccurence(name, subname))

// function findTheOccurrence(str, subStr) {
//   if (subStr.length > str.length) return -1;

//   for (let i = 0; i <= str.length - subStr.length; i++) {
//     let found = true;

//     for (let j = 0; j < subStr.length; j++) {
//       if (str[i + j] !== subStr[j]) {
//         found = false;
//         break;
//       }
//     }

//     if (found) return i;
//   }

//   return -1;
// }

// let name = "santossh";
// let subname = "san";

// console.log(findTheOccurrence(name, subname)); // 0


// longest common prefix;
var a='flower'; var b='flow';
function longestCommonPrefix(a, b) {
  let result = '';
    console.log(a.length, b.length);
    
  let minLength = Math.min(a.length, b.length);

  for (let i = 0; i < minLength; i++) {
    if (a[i] === b[i]) {
      result += a[i];
    } else {
      break;
    }
  }

  return result;
}

console.log(longestCommonPrefix(a, b))


 


