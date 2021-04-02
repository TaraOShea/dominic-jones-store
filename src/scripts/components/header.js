import { component } from 'picoapp'

export default component((node, ctx) => {
  const cartCount = node.querySelector('.js-cart-count');
  const cartToggles = node.querySelectorAll('.js-cart-drawer-toggle');
  const swatches = node.querySelectorAll('.cart-swatch');

  const hamburger = node.querySelectorAll('#hamburger');
  const mobileMenu = node.querySelectorAll('#mobile-menu');


  //mobile triggger
  hamburger[0].addEventListener('click', e => {
    e.preventDefault();
    if(ctx.getState().menuOpen === false) {
      console.log("if")
      ctx.emit('menu:open', state => {
          return {
            menuOpen: true
          }
      })
    } else {
      ctx.emit('menu:close', state => {
        return {
            menuOpen: false
          }
      })
    }
  })

  ctx.on('menu:open', state => {
    hamburger[0].classList.toggle('is-active');
    mobileMenu[0].classList.toggle('is-active');
  })

  ctx.on('menu:close', state => {
    console.log("menu:close")
    hamburger[0].classList.toggle('is-active');
    mobileMenu[0].classList.toggle('is-active');
  })


  //COLOUR SWITCH
  for (let i = 0; i < swatches.length; i++) {
    swatches[i].addEventListener('click', e => {
      e.preventDefault()
      if(swatches[i].getAttribute('data-colour') == 'dark') {
        document.body.className = 'bg-dark c-light';
        localStorage.setItem('siteColour', 'dark');

      } else if(swatches[i].getAttribute('data-colour') == 'light'){
        document.body.className = 'c-dark bg-light';
        localStorage.setItem('siteColour', 'light');
      }
      
    })
  }

  //CART TOGGLE
  for (let i = 0; i < cartToggles.length; i++) {
    cartToggles[i].addEventListener('click', e => {
      e.preventDefault()
      ctx.emit('cart:toggle', state => {
        return {
          cartOpen: !state.cartOpen
        }
      })
    })
  }
  
  //CART UPDATE
  ctx.on('cart:updated', state => {
    cartCount.innerHTML = state.cart.item_count
  })

  cartCount.innerHTML = ctx.getState().cart.item_count

})
