import React from 'react';

const AllProducts = ({ products }) => (
    <div>
        <h1>Dolla Dolla Bill Y'all</h1>
        <table>
            <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Description</th>
                <th>SKU</th>
            </tr>
            { products.map((product, idx) => 
            <tr key={idx}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
                <td>{product.sku}</td>
            </tr>
            )}
        </table>
    </div>
)

export default AllProducts;