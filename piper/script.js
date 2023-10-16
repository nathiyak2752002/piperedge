


// Sample product data
const products = [
    { name: 'Product 1', price: 50 },
    { name: 'Product 2', price: 100 },
    { name: 'Product 3', price: 75 }
];

// Function to display products in the table
function displayProducts() {
    const productTable = document.getElementById('product-table');
    products.forEach((product, index) => {
        const row = productTable.insertRow();
        row.insertCell(0).innerHTML = product.name;
        row.insertCell(1).innerHTML = product.price;
        const addButton = document.createElement('button');
        addButton.innerHTML = 'Add to Cart';
        addButton.onclick = function() {
            addToCart(product);
        };
        row.insertCell(2).appendChild(addButton);
    });
}

// Function to add a product to the cart
function addToCart(product) {
    const cartTable = document.getElementById('cart-table');
    const row = cartTable.insertRow(-1);
    row.classList.add('cart-item-row');
    row.insertCell(0).innerHTML = product.name;
    row.insertCell(1).innerHTML = product.price;
    const discount = 0; // You can calculate the discount here based on the product and discount tables
    row.insertCell(2).innerHTML = discount;
    row.insertCell(3).innerHTML = product.price - discount;

    // Recalculate total
    let total = 0;
    const rows = document.querySelectorAll('.cart-item-row');
    rows.forEach(row => {
        total += parseFloat(row.cells[3].innerHTML);
    });

    // Display total
    const totalRow = cartTable.insertRow();
    totalRow.classList.add('total-row');
    totalRow.insertCell(0);
    totalRow.insertCell(1);
    totalRow.insertCell(2).innerHTML = 'Total';
    totalRow.insertCell(3).innerHTML = total;
}

// Display products when the page loads
displayProducts();


