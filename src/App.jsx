import { useReducer } from 'react';

const products = [
  { name: 'Mela', price: 0.5 },
  { name: 'Pane', price: 1.2 },
  { name: 'Latte', price: 1.0 },
  { name: 'Pasta', price: 0.7 },
];

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingProduct = state.find(
        (product) => product.name === action.payload.name
      );

      if (existingProduct) {
        return state.map((product) =>
          product.name === action.payload.name
            ? {
                ...product,
                quantity: product.quantity + 1,
              }
            : product
        );
      }

      return [
        ...state,
        {
          ...action.payload,
          quantity: 1,
        },
      ];
    }

    case 'REMOVE_ITEM':
      return state.filter(
        (product) => product.name !== action.payload
      );

    case 'UPDATE_QUANTITY': {
      const newQuantity = Math.max(
        1,
        Math.floor(Number(action.payload.quantity)) || 1
      );

      return state.map((product) =>
        product.name === action.payload.name
          ? {
              ...product,
              quantity: newQuantity,
            }
          : product
      );
    }

    default:
      return state;
  }
}

function App() {
  const [addedProducts, dispatch] = useReducer(cartReducer, []);

  function addToCart(product) {
    dispatch({
      type: 'ADD_ITEM',
      payload: product,
    });
  }

  function removeFromCart(productName) {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: productName,
    });
  }

  function updateProductQuantity(productName, quantity) {
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: {
        name: productName,
        quantity,
      },
    });
  }

  const total = addedProducts.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

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

      {addedProducts.length > 0 && (
        <section className="cart-section">
          <h2>Il tuo carrello</h2>

          <ul className="cart-list">
            {addedProducts.map((product) => (
              <li className="cart-card" key={product.name}>
                <div>
                  <h3>{product.name}</h3>
                  <p>
                    Prezzo unitario: {product.price.toFixed(2)} €
                  </p>
                </div>

                <label>
                  Quantità
                  <input
                    type="number"
                    min="1"
                    step="1"
                    value={product.quantity}
                    onChange={(event) =>
                      updateProductQuantity(
                        product.name,
                        event.target.value
                      )
                    }
                  />
                </label>

                <p>
                  Subtotale:{' '}
                  {(product.price * product.quantity).toFixed(2)} €
                </p>

                <button
                  className="remove-button"
                  onClick={() => removeFromCart(product.name)}
                >
                  Rimuovi dal carrello
                </button>
              </li>
            ))}
          </ul>

          <p className="total">
            Totale: {total.toFixed(2)} €
          </p>
        </section>
      )}
    </main>
  );
}

export default App;