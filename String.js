let firstname='santosh';
console.log(firstname.length)



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
console.log(sentance)



