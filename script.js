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
// Submit contact form
document.querySelector('form').onsubmit = async (event) => {
    event.preventDefault();
    const name = document.querySelector('input[placeholder="name"]').value;
    const email = document.querySelector('input[placeholder="email"]').value;
    const number = document.querySelector('input[placeholder="number"]').value;

    const response = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, number }),
    });

    const data = await response.json();
    alert(data.message);
};
// Cart items array
let cartItems = [];

// Function to add an item to the cart
function addToCart(item) {
    // Add the item to the cart array
    cartItems.push(item);

    // Update the cart display
    updateCartDisplay();
}

// Function to update the cart display
function updateCartDisplay() {
    const cartContainer = document.querySelector('.cart-items-container');
    cartContainer.innerHTML = ''; // Clear the cart container

    // Loop through cart items and create cart item elements
    cartItems.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        cartItem.innerHTML = `
            <span class="fas fa-times" onclick="removeFromCart(${index})"></span>
            <img src="${item.image}" alt="Cart Item">
            <div class="content">
                <h3>${item.name}</h3>
                <div class="price">${item.price}</div>
            </div>
        `;

        cartContainer.appendChild(cartItem);
    });

    // Add checkout button if cart is not empty
    if (cartItems.length > 0) {
        const checkoutButton = document.createElement('a');
        checkoutButton.href = "#";
        checkoutButton.classList.add('btn');
        checkoutButton.textContent = 'Check Out Now';
        cartContainer.appendChild(checkoutButton);
    }
}

// Function to remove an item from the cart
function removeFromCart(index) {
    cartItems.splice(index, 1); // Remove the item from the cart array
    updateCartDisplay(); // Update the cart display
}

// Attach event listeners to "Add to Cart" buttons
document.querySelectorAll('.menu .box .btn').forEach((button, index) => {
    button.addEventListener('click', () => {
        const item = {
            name: `Menu Item ${index + 1}`,
            price: button.parentElement.querySelector('.price').textContent.trim(),
            image: button.parentElement.querySelector('img').src
        };

        addToCart(item);
        alert(`${item.name} has been added to the cart!`);
    });
});




