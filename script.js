// let cartItems = [];

// function addToCart(productName, price) {
//     cartItems.push({ productName, price });
//     updateCart();
// }

// function updateCart() {
//     const cartSection = document.getElementById('cart');
//     cartSection.innerHTML = '<h2>Your Shopping Cart</h2>';

//     let totalPrice = 0;
//     cartItems.forEach(item => {
//         cartSection.innerHTML += `<p>${item.productName} - $${item.price}</p>`;
//         totalPrice += item.price;
//     });

//     cartSection.innerHTML += `<p>Total: $${totalPrice.toFixed(2)}</p>`;
// }


function updateCart() {
    const cartSection = document.getElementById('cart');

    // Clear the cart content but keep the heading
    cartSection.innerHTML = '<h2>Your Shopping Cart</h2>';

    if (cartItems.length === 0) {
        cartSection.innerHTML += '<p>No items added yet!</p>';
        return;  // Stop function execution if cart is empty
    }

    let totalPrice = 0;
    cartItems.forEach(item => {
        cartSection.innerHTML += `<p>${item.productName} - $${item.price.toFixed(2)}</p>`;
        totalPrice += item.price;
    });

    cartSection.innerHTML += `<p><strong>Total: $${totalPrice.toFixed(2)}</strong></p>`;

    // Create or select the payment button
    let payButton = document.getElementById('pay-now');
    if (!payButton) {
        payButton = document.createElement("button");
        payButton.id = "pay-now";
        payButton.textContent = "Proceed to Payment";
        payButton.onclick = redirectToPayment;
    }

    // Append the button after cart items
    cartSection.appendChild(payButton);
}

function redirectToPayment() {
    alert("Redirecting to payment page...");
    window.location.href = "checkout.html";  // Replace with actual checkout page URL
}



document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menu-button");
    const menu = document.getElementById("menu");

    menuButton.addEventListener("click", function () {
        menu.classList.toggle("active");
    });
});

document.addEventListener("click", function (event) {
    const menu = document.getElementById("menu");
    const menuButton = document.getElementById("menu-button");

    if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
        menu.classList.remove("active");
    }
});


menuButton.setAttribute("aria-expanded", "false");

menuButton.addEventListener("click", function () {
    const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", !isExpanded);
    menu.classList.toggle("active");
});
