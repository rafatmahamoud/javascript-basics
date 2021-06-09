console.log('hello')
// alert('hello this is my first page')
var b = ' javascript'
console.log(b)
var someNumber= 45
console.log(someNumber)
//var age = prompt('what is your age')
//document.getElementById('someText').innerHTML=age;
////
 var num1= 5.7
///
function fun() {
    console.log('this is a functiom')
}
console.log(fun())
/////
function greeting() {
    var name = prompt('what ia your name')
    var result = 'hello' +'  '+ name
    console.log(result)
}
//greeting()
function sumNumbers(num1, num2){
    var result= num1 + num2
    console.log(result)
}
sumNumbers(10, 10)
/////
//  var num = 0
//  while(num < 100) {
//      num +=1
//      console.log(num)
//  }
// for loop
// for (let num = 0; num <100 ; num++) {
//     console.log(num)
// }
////
// let fruit = 'banana, apple'
// let moreFruits = 'banana\napple'
// console.log(fruit.length)
// console.log(fruit.indexOf('an'))
// console.log(fruit.slice(2, 4))
// console.log(fruit.replace('ban', '123'))
// console.log(fruit.toLowerCase())
// console.log(fruit.toUpperCase())
// console.log(fruit.charAt(2))
// console.log(fruit[2])
// console.log(fruit.split(','))
// Array

let fruits = ['banana', 'apple', 'orange','any thing','pineapple']
fruits = new Array('banana', 'apple', 'orange','any thing')
console.log(fruits[1]) // 
// change any value
fruits[0]= 'pear'
console.log(fruits)
 for ( let i = 0; i<fruits.length;i++){
     console.log(fruits[i])
 }
 // array common
 console.log('to string', fruits.toString())
 console.log(fruits.join(' * '))
 // delate the last value
 console.log(fruits.pop(), fruits) // remove last items
 console.log(fruits.push('rans'), fruits) // or
 fruits[4] = 'new fruits';
 //fruits[fruits.length]='new fruits';
 console.log(fruits)
 fruits.shift() // remove first element from a array
 fruits.unshift('kiwi'); //add frist element from a array
 let vegetable = ['asparagus', 'tomate', 'broccoli']
 let allGroceries = fruits.concat(vegetable) // damage more arrats combine Arrays
 console.log(allGroceries)
 console.log(allGroceries.slice(1, 4))
 console.log(allGroceries.reverse()) // arrange
 console.log(allGroceries.sort())
  let someNumberse = [5, 10, 2, 25, 3, 255, 1, 33, 56, 55]
  console.log(someNumberse.sort(function(a, b){ return a-b}))

  let emptyArray = new Array()
  for (let num = 0; num < 10; num++){
      emptyArray.push(num)
  }
  console.log(emptyArray)