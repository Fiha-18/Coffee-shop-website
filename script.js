// Select the elements
let navvar = document.querySelector('.navvar');        // Navigation menu
let cartItem = document.querySelector('.cart-items-container');  // Cart items container
let searchForm = document.querySelector('.serch-form');  // Search form

// Menu button functionality
document.querySelector('#menu-btn').onclick = () => {
    navvar.classList.toggle('active');  // Toggle 'active' class for navigation menu
}

// Cart button functionality
document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active');  // Toggle 'active' class for cart items
}

// Search button functionality
document.querySelector('#serch-btn').onclick = () => {
    searchForm.classList.toggle('active');  // Toggle 'active' class for search form
}
