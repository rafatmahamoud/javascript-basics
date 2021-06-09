// console.log(document.getElementById('task-title'))

// const domm = document.getElementById('task-title')
// domm.style.background = `#333`
// domm.style.color = `#fff`
// domm.style.padding = `6px`
// domm.textContent = 'Task List'


// console.log(document.querySelector('#task-title'))
// console.log(document.querySelector('.card-title'))
// console.log(document.querySelector('h5'))
 
// document.querySelector('li').style.color = 'red'
// document.querySelector('li').style.color = 'red'
// document.querySelector('ul li').style.color = 'blue'

// document.querySelector('li:last-child').style.color = 'red'
// document.querySelector('li:nth-child(2)').style.color = 'red'
// document.querySelector('li:nth-child(3)').textContent = 'Hello world'
// document.querySelector('li:nth-child(odd)').style.background = '#ccc'
// document.querySelector('li:nth-child(even)').style.background = '#ccc'

// const items = document.getElementsByClassName('collection-item')

// console.log(items)
// console.log(items[0])
// items[0].style.color = "red"
// items[3].textContent = 'HELLOO'

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

// console.log(listItems)



// let lis = document.getElementsByTagName('li')

// console.log(lis)
// console.log(lis[0])
// lis[0].style.color = "red"
// lis[3].textContent = 'HELLOO'
// lis = Array.from(lis)
// lis.reverse()
// lis.forEach(function(li, index ) {
//     console.log(li.className)
//     li.textContent = `${index}:Hello`;
// });
// console.log(lis)

// const items = document.querySelectorAll('ul.collection li.collection-item')

// items.forEach(function(item, index ) {
//         item.textContent = `${index}:Hello`;
//     });
// const liOdd = document.querySelectorAll('li:nth-child(odd)')
// const liEven = document.querySelectorAll('li:nth-child(even)')

// liOdd.forEach(function(li, index ) {
//     li.style.background = '#ccc';
// });
// for (let i = 0; i < liEven.length; i++) {
//     liEven[i].style.background = '#f4f4f4'
// }
// console.log(items) 

// /let val ;

// const list = document.querySelector('ul.collection')
// const listItem = document.querySelector('li.collection-item:first-child')
 
// val = listItem

// val = list.childNodes
// val = list.childNodes[0]
// val = list.childNodes[0].nodeName
// val = list.childNodes[2].nodeType

// val = list.children
// val = list.children[0];
// list.children[1].textContent = 'hello'
// val = list.children[3].children[0]
// val = list.firstChild
// val = list.firstElementChild


// val = list.lastChild
// val = list.lastElementChild

// val = list.childElementCount
 
// val = listItem.parentNode
// val = listItem.parentElement
// val = listItem.parentElement.parentElement
// val = listItem.nextSibling
// val = listItem.nextElementSibling.nextElementSibling.previousElementSibling


// ////////
// // val = listItem.previousSibling
// // val = listItem.previousElementSibling

///// console.log(val)

const li = document.createElement('li')
li.className = 'collection-item'
li.id = 'new-item'
li.setAttribute('title, NewItem)

console.log(li)