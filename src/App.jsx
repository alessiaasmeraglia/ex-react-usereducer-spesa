import { useState } from 'react';

const products = [
  { name: 'Mela', price: 0.5 },
  { name: 'Pane', price: 1.2 },
  { name: 'Latte', price: 1.0 },
  { name: 'Pasta', price: 0.7 },
];

function App() {
  const [addedProducts, setAddedProducts] = useState([]);

  function addToCart(product) {
    const productAlreadyInCart = addedProducts.some(
      (cartProduct) => cartProduct.name === product.name
    );

    if (productAlreadyInCart) {
      return;
    }

    const productWithQuantity = {
      ...product,
      quantity: 1,
    };

    setAddedProducts([
      ...addedProducts,
      productWithQuantity,
    ]);
  }

  return (
    <main className="container">
      <h1>Carrello della spesa</h1>

      <section>
        <h2>Lista dei prodotti</h2>

        <ul className="product-list">
          {products.map((product) => (
            <li className="product-card" key={product.name}>
              <div>
                <h3>{product.name}</h3>
                <p>Prezzo: {product.price.toFixed(2)} €</p>
              </div>

              <button onClick={() => addToCart(product)}>
                Aggiungi al carrello
              </button>
            </li>
          ))}
        </ul>
      </section>

      {addedProducts.length > 0 && (
        <section className="cart-section">
          <h2>Prodotti nel carrello</h2>

          <ul className="cart-list">
            {addedProducts.map((product) => (
              <li className="cart-card" key={product.name}>
                <h3>{product.name}</h3>

                <p>
                  Prezzo: {product.price.toFixed(2)} €
                </p>

                <p>
                  Quantità: {product.quantity}
                </p>
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}

export default App;