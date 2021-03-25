import { component } from 'picoapp'

export default component((node, ctx) => {
  const cartCount = node.querySelector('.js-cart-count');
  const cartToggles = node.querySelectorAll('.js-cart-drawer-toggle');
  const swatches = node.querySelectorAll('.cart-swatch');
  const parentMenuItems = node.querySelectorAll('.menu-parent');
  const hamburger = node.querySelectorAll('#hamburger');
  const mobileMenu = node.querySelectorAll('#mobile-menu');
  const parentMenuItemsMobile = node.querySelectorAll('.menu-parent');

  //DESKTOP MENU CLICK
  for (let i = 0; i < parentMenuItems.length; i++) {
    var child = parentMenuItems[i].parentElement.querySelectorAll('[data-parent]');
    // console.log(parentMenuItems, child)
    parentMenuItems[i].addEventListener('click', e => {
      e.preventDefault()
      ctx.emit('menu:open', state => {
        return {
          menuOpen: true
        }
      })
    });

    ctx.on('menu:open', state => {
      // console.log(parentMenuItems[i])
      child[0] !== undefined ? child[0].classList.toggle('open') : null   
    })

    ctx.on('menu:close', state => {
      child[0] !== undefined ? child[0].classList.toggle('open') : null
    })
  }
  

  //mobile triggger
  hamburger[0].addEventListener('click', e => {
    e.preventDefault();
    hamburger[0].classList.toggle('is-active');
    // console.log(mobileMenu, hamburger)
    mobileMenu[0].classList.toggle('is-active');
  })

  //SITE COLOUR
  if(localStorage.getItem('siteColour') !== null){
    localStorage.getItem('siteColour') === 'dark' ? document.body.className = 'bg-dark c-beige' : document.body.className = 'c-dark bg-beige';
  }

  //COLOUR SWITCH
  for (let i = 0; i < swatches.length; i++) {
    swatches[i].addEventListener('click', e => {
      e.preventDefault()
      if(swatches[i].getAttribute('data-colour') == 'dark') {
        document.body.className = 'bg-dark c-beige';
        localStorage.setItem('siteColour', 'dark');

      } else if(swatches[i].getAttribute('data-colour') == 'light'){
        document.body.className = 'c-dark bg-beige';
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
