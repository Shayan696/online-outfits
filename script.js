// JavaScript for OutfitHub Website

// Functionality for smooth scrolling
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = event.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Add to Cart Functionality
const cart = [];
const productButtons = document.querySelectorAll('.product button');
productButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const product = {
            name: button.parentElement.querySelector('h3').innerText,
            price: button.parentElement.querySelector('p').innerText,
        };
        cart.push(product);
        alert(`${product.name} has been added to your cart.`);
        updateCartCount();
    });
});

// Update Cart Count
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        cartCount.innerText = cart.length;
    } else {
        const cartIcon = document.createElement('div');
        cartIcon.id = 'cart-count';
        cartIcon.innerText = cart.length;
        document.body.appendChild(cartIcon);
    }
}

// Contact Form Validation
const contactForm = document.querySelector('#contact form');
contactForm.addEventListener('submit', (event) => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('Please fill in all the fields before submitting.');
        event.preventDefault();
    } else if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        event.preventDefault();
    }
});

function validateEmail(email) {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regex.test(email);
}

// Dynamic Year in Footer
const footer = document.querySelector('footer p');
const currentYear = new Date().getFullYear();
footer.innerText = `© ${currentYear} OutfitHub. All rights reserved.`;
