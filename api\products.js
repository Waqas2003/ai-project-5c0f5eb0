import axios from 'axios';

export default async function handler(req, res) {
  const products = [
    { id: 1, name: 'Product 1', price: 10.99, image: 'https://example.com/product1.jpg' },
    { id: 2, name: 'Product 2', price: 9.99, image: 'https://example.com/product2.jpg' },
    { id: 3, name: 'Product 3', price: 12.99, image: 'https://example.com/product3.jpg' },
  ];

  res.status(200).json(products);
}