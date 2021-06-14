import React from "react";
import "./style.css";
import { ProductTable } from './product-table.js';
//import { AntdTable } from './antd-table.js';

const products = [
  { id: 1, name: 'PS5', price: '$729', stock: 13 },
  { id: 2, name: 'PS5 Digital', price: '$599', stock: 33 },
  { id: 3, name: 'XBOX', price: '$699', stock: 3 },
  { id: 4, name: 'GameBoy', price: '$129', stock: 131 },
];

export default function App() {
  return (
    <>
    <ProductTable products={products} />
    </>
  );
}
