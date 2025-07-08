import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    axios.get('/api/products').then(response => {
      setProducts(response.data);
    });
  }, []);

  const handleAddToCart = product => {
    setCart([...cart, product]);
    setTotal(total + product.price);
  };

  const handleRemoveFromCart = product => {
    setCart(cart.filter(p => p.id !== product.id));
    setTotal(total - product.price);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>POS System</title>
        <meta name="description" content="POS System" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>POS System</h1>

        <section className={styles.products}>
          <h2>Products</h2>
          <ul>
            {products.map(product => (
              <li key={product.id}>
                <Image src={product.image} alt={product.name} width={50} height={50} />
                <span>{product.name}</span>
                <span>${product.price}</span>
                <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.cart}>
          <h2>Cart</h2>
          <ul>
            {cart.map(product => (
              <li key={product.id}>
                <Image src={product.image} alt={product.name} width={50} height={50} />
                <span>{product.name}</span>
                <span>${product.price}</span>
                <button onClick={() => handleRemoveFromCart(product)}>Remove</button>
              </li>
            ))}
          </ul>
          <p>Total: ${total}</p>
        </section>
      </main>
    </div>
  );
}

export default Home;