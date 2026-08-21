import { useReducer } from 'react';

function App() {
  const products = [
  { name: 'Mela', price: 0.5 },
  { name: 'Pane', price: 1.2 },
  { name: 'Latte', price: 1.0 },
  { name: 'Pasta', price: 0.7 },
];

  return (
    <main className="container">
      <h1>Carrello della spesa</h1>

      <section>
        <h2>Prodotti disponibili</h2>

        <ul className="product-list">
          {products.map((product) => (
            <li className="product-card" key={product.name}>
              <div>
                <h3>{product.name}</h3>
                <p>{product.price.toFixed(2)} €</p>
              </div>

              <button onClick={() => addToCart(product)}>
                Aggiungi al carrello
              </button>
            </li>
          ))}
        </ul>
      </section>

      </main>
  )
}

export default App
