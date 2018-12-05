window.onload = function() {
    const products_table = document.getElementById('products_table'),
        products_url = 'https://polos-store-manager.herokuapp.com/api/v1/products';

    fetch(products_url, {
        headers: {'Authorization': 'Bearer '+ localStorage.getItem('token')}
    })
    .then((res) => res.json())
    .then((data) => {
        let table_contents = `
        <tr>                               
            <th>Product Category</th>
            <th>Product Name</th>
            <th>Quantity in Stock</th>
            <th>Unit Price</th>
            <th>Add 1pc to Cart</th>
        </tr>
        `;
        data.available_products.forEach(product => {
            table_contents +=`
            <tr>                                
                <td id = "product-category">${product.category}</td>
                <td id = "item-name">${product.product_name}</td>
                <td id = "item-quantity">${product.quantity}</td>
                <td id = "item-unitprice">${product.unit_price}</td>
                <td><input type="checkbox" class = "checkbox1">                           
            </tr>
            `;            
        });
        products_table.innerHTML = table_contents;
    })
  }


