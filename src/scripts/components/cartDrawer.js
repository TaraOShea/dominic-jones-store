import { component } from 'picoapp'
import { getSizedImageUrl, imageSize } from '@/lib/images.js'
import { formatMoney } from '@/lib/currency.js'
import app from '@/app.js'

const X = `<svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentcolor" stroke-width="3"><path d="M1.0606601717798212 1.0606601717798212 L14.939339828220179 14.939339828220179"></path><path d="M14.939339828220179 1.0606601717798212 L1.0606601717798212 14.939339828220179"></path></svg>`

function createItem ({
  variant_id: id,
  product_title: title,
  final_price: price,
  variant_title: color,
  image,
  url,
  quantity,
  ...item
}) {
  const img = image ? getSizedImageUrl(
    image.replace('.' + imageSize(image), ''), '200x' // TODO hacky af
  ) : 'https://source.unsplash.com/R9OS29xJb-8/2000x1333'

  return `
<div class='cart-drawer__item' data-component='cartDrawerItem' data-id=${id}>
  <div class='f jcb fw'>
    <div class='__content f y ais cart-drawer__item-info'>
      <div>
        <a href='${url}' class='serif mv0 p mv0'>${title}</a>
        <div class='sans track mt025 mb05'>${formatMoney(price)}</div>
        ${color ? `<div class='sans caps cm mv025'>${color.split(':')[0]}</div>` : ``}
      </div>
    </div>
    <a href='${url}' class="pl1">
      <img src='${img}' />
    </a>
    <div class="f aic">
      <button class='button--reset js-remove-item f aic jcc'>${X}</button>
    </div>
  </div>
</div>
`
}

function renderItems (items) {
  return items.length > 0 ? (
    items.reduce((markup, item) => {
      // console.log(item)
      markup += createItem(item)
      return markup
    }, '')
  ) : (
    `<div class='pv1'><p class='ac p1 jcb'>Your cart is empty</p></div>`
  )
}

export default component((node, ctx) => {
  const overlay = node.querySelector('.js-overlay')
  const closeButton = node.querySelector('.js-close')
  const subtotal = node.querySelector('.js-subtotal')
  const itemsRoot = node.querySelector('.js-items')
  const loading = itemsRoot.innerHTML;
  const cartCount = node.querySelector('.js-cart-count');
  const render = (cart) => {
    itemsRoot.innerHTML = renderItems(cart.items)
    subtotal.innerHTML = formatMoney(cart.total_price)
  }

  const open = (cart) => {
    node.classList.add('is-active');
    document.body.classList.add('cart-open');
    itemsRoot.innerHTML = loading
    setTimeout(() => {
      node.classList.add('is-visible')
      setTimeout(render(cart), 10)
      app.mount()
    }, 50)
  }

  const close = () => {
    node.classList.remove('is-visible');
    document.body.classList.remove('cart-open');
    setTimeout(() => {
      node.classList.remove('is-active')
      app.hydrate({cartOpen: false})
    }, 400)
  }

  render(ctx.getState().cart)

  overlay.addEventListener('click', close)
  closeButton.addEventListener('click', close)

  ctx.on('cart:toggle', ({ cart, cartOpen }) => {
    cartOpen && open(cart)
  })
  ctx.on('cart:updated', state => {
    // console.log(state.cart.item_count)
    cartCount.innerHTML = state.cart.item_count;
    render(ctx.getState().cart)
    app.mount()
  })
})
