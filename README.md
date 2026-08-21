# Esercizio React: gestione della spesa con `useReducer`

> Creare un carrello interattivo per visualizzare prodotti, gestire quantità e calcolare il totale.

## Informazioni

| Voce | Dettaglio |
| --- | --- |
| Repository | `ex-react-usereducer-spesa` |
| Tecnologie | HTML, CSS, JavaScript, React |
| Obiettivo | Gestire un carrello con `useReducer` |

## Milestone 1 - Lista dei prodotti

Partire dal seguente array:

```js
const products = [
  { name: 'Mela', price: 0.5 },
  { name: 'Pane', price: 1.2 },
  { name: 'Latte', price: 1.0 },
  { name: 'Pasta', price: 0.7 },
];
```

Creare un componente che mostri un elenco leggibile di tutti i prodotti.

Per ogni prodotto visualizzare:

- nome;
- prezzo.

## Milestone 2 - Aggiungere prodotti al carrello

Aggiungere uno stato locale `addedProducts`, inizialmente uguale a un array vuoto, per rappresentare i prodotti nel carrello.

Per ogni prodotto mostrare un bottone `Aggiungi al carrello`.

Al click, creare la funzione `addToCart` per:

- aggiungere il prodotto al carrello con `quantity = 1` se non è già presente;
- ignorare l’azione se il prodotto è già presente.

Se `addedProducts` contiene almeno un elemento, mostrare sotto alla lista dei prodotti anche la lista del carrello.

Per ogni prodotto nel carrello mostrare:

- nome;
- prezzo;
- quantità.

## Milestone 3 - Modificare il carrello

Al click successivo su `Aggiungi al carrello`, se il prodotto è già presente, usare `updateProductQuantity` per incrementare la proprietà `quantity`.

Per ogni prodotto nel carrello aggiungere un bottone `Rimuovi dal carrello`.

Al click, usare `removeFromCart` per rimuovere il prodotto dal carrello.

Sotto alla lista del carrello mostrare il totale da pagare, calcolato moltiplicando il prezzo per la quantità di ogni prodotto e sommando i risultati.

### Obiettivo

Gestire dinamicamente aggiunta, rimozione, modifica e totale del carrello.

## Bonus 1 - Quantità dinamiche

Sostituire il numero visualizzato di `quantity` con un input di tipo `number`.

Quando l’utente modifica il valore, usare `updateProductQuantity` per aggiornare la quantità del prodotto.

La funzione deve:

- trasformare i numeri decimali in numeri interi;
- impedire quantità negative o pari a zero;
- garantire una quantità minima pari a `1`.

### Obiettivo

Consentire all’utente di modificare direttamente e con precisione la quantità dei prodotti nel carrello.

## Bonus 2 - Usare `useReducer`

Sostituire `useState` con `useReducer` per gestire lo stato del carrello.

Inizializzare lo stato con un array vuoto:

```js
const initialState = [];
```

Configurare il reducer con le seguenti azioni:

- `ADD_ITEM`: aggiunge un nuovo articolo con `quantity = 1` oppure incrementa la quantità di un articolo già presente;
- `REMOVE_ITEM`: rimuove un articolo specifico dal carrello;
- `UPDATE_QUANTITY`: modifica la quantità di un articolo esistente, applicando i controlli sui valori non validi.

Struttura di riferimento:

```js
function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      // Logica per aggiungere un prodotto
      break;
    case 'REMOVE_ITEM':
      // Logica per rimuovere un prodotto
      break;
    case 'UPDATE_QUANTITY':
      // Logica per aggiornare la quantità
      break;
    default:
      return state;
  }
}
```

Usare `useReducer` per inviare le azioni e aggiornare il carrello in modo prevedibile.

### Obiettivo

Migliorare la struttura del codice separando la logica di gestione del carrello dal componente e adottando un approccio più scalabile.
