const cart = JSON.parse(localStorage.getItem('cart')) || [];

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
        const productElement = e.target.closest('.product');
        const productId = productElement.dataset.id;
        const productName = productElement.querySelector('h3').innerText;
        const productPrice = productElement.querySelector('p').innerText.replace('Price: ', '');

        const product = { id: productId, name: productName, price: productPrice };
        cart.push(product);

        alert(`${productName} has been added to your cart.`);
        localStorage.setItem('cart', JSON.stringify(cart));
    });
});
