import './src/index.css'

// Grab the button
let menu = document.getElementById('menuButton')
let menuItems = document.getElementById('menuItems')

// Add Event Listner and Function
menu.addEventListener('click', ()=>{
 menuItems.classList.toggle('max-lg:hidden')   
})