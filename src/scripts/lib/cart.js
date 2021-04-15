import fetch from 'unfetch'
import app from '@/app.js'

export function addVariant (variant, quantity, inventory) {

  // const numAvailable = variant.inventory_policy === 'deny' && variant.inventory_management === 'shopify' ? (
  //   variant.inventory_quantity
  // ) : null // null means they can add as many as they want

  const numAvailable = variant.inventory_management === 'shopify' ? (
    inventory.amountAvailable
  ) : null

  
  return fetchCart().then(({ items }) => {
    let numInCart = items.filter(v => v.id === variant.id)[0];
    numInCart = numInCart !== undefined ? numInCart.quantity : 0;
    console.log(numInCart, parseInt(quantity), inventory.amountAvailable,variant.name)

    if (inventory.amountAvailable !== null && (numInCart + parseInt(quantity)) > inventory.amountAvailable) {  
      // const err = `There are only ${inventory.amountAvailable} of that product available, requested ${parseInt(quantity)}. num in cart ${numInCart}`
      const err = `All available ${variant.name} are in your bag.`
      app.emit('cartError', {error: err})
      // throw new Error(err)
    } else {
      console.log("add")
      return addItemById(variant.id, quantity)
    }
  })
}

export function updateAddon (id, quantity) {
  return fetchCart().then(({ items }) => {
    for (let i = 0; i < items.length; i++) {
      if (items[i].variant_id === parseInt(id)) {
        return changeAddon(i + 1, quantity) // shopify cart is a 1-based index
      }
    }
  })
}

export function removeAddon (id) {
  return updateAddon(id, 0)
}

function changeAddon (line, quantity) {
  app.emit('cart:updating')

  return fetch('/cart/change.js', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ line, quantity })
  }).then(res => res.json()).then(cart => {
    app.hydrate({ cart: cart })
    app.emit('cart:updated', { cart: cart })
    return cart
  })
}

/**
 * Warning: this does not check available products first
 */
export function addItemById (id, quantity) {
  app.emit('cart:updating')

  return fetch('/cart/add.js', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id, quantity })
  }).then(r => r.json()).then(item => {
    return fetchCart().then(cart => {
      app.hydrate({ cart: cart })
      app.emit('cart:updated')
      app.emit('cart:toggle', state => {
        return {
          cartOpen: !state.cartOpen
        }
      })
      // app.emit('updated', { item, cart })
      return { item, cart }
    })
  })
}

export function fetchCart () {
  return fetch('/cart.js', {
    method: 'GET',
    credentials: 'include'
  }).then( r => {
    return r.json();
  }).catch(e => {
    console.log(e);
  });
}