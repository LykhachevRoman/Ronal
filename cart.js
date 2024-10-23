const cartItems = document.getElementById('cart-items');
const storedCart = JSON.parse(localStorage.getItem('cart')) || [];

storedCart.forEach(product => {
    const li = document.createElement('li');
    li.textContent = ${product.name} - ${product.price};
    cartItems.appendChild(li);
});

document.getElementById('checkout-btn').addEventListener('click', () => {
    alert('Proceeding to checkout...');
    // Можна додати логіку для завершення покупки
});
