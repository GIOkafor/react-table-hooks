import React, { useState } from 'react';
import { Table } from 'antd';

const requestSort = key => {
  let direction = 'ascending';
  if (sortConfig.key === key && sortConfig.direction === 'ascending') {
    direction = 'descending';
  }
  setSortConfig({ key, direction });
};

export function ProductTable(props) {
  const { products } = props;
  const [sortedField, setSortedField] = useState(null);
  let sortedProducts = [...products];

  if (sortedField !== null) {
    sortedProducts.sort((a, b) => {
      if (a[sortedField] < b[sortedField]) {
        return -1;
      }
      if (a[sortedField] > b[sortedField]) {
        return 1;
      }
      return 0;
    });
  }

  return (
    <table>
      <caption>Our products</caption>
      <thead>
        <tr>
          <th>
            <button type="button" onClick={() => setSortedField('name')}>
              Name
            </button>
          </th>
          <th>
            <button type="button" onClick={() => setSortedField('price')}>
              Price
            </button>
          </th>
          <th>
            <button type="button" onClick={() => setSortedField('stock')}>
              In Stock
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedProducts.map(product => (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.stock}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
