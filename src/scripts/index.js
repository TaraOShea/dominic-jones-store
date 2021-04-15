import '../styles/main.css'
import '@/lib/select.js'
import lazim from 'lazim'
import app from '@/app.js'
import router from '@/router.js'
import { fetchCart } from '@/lib/cart.js'

if(localStorage.getItem('siteColour') !== null){
  localStorage.getItem('siteColour') === 'dark' ? document.body.className = 'bg-dark c-light' : document.body.className = 'c-dark bg-light';
}

/**
 * store binding fn
 */
const images = lazim()

/**
 * bind on page load
 */
images()

router.on('before', (ctx) => {
  if(app.getState().menuOpen === true) {
    app.emit('menu:close', state => {
        return {
          menuOpen: false
        }
    })
  }
})

router.on('after', (ctx) => {
  if(ctx.pathname === "/") {
    document.body.id = 'index';
  } else if(ctx.pathname === "/pages/about"){
    document.body.id = 'about';
  } else {
    document.body.id = '';  
  }

  app.unmount()
  app.mount()
  /**
   * bind new images
   */
  images()
  window.scrollTo(0, 0);
})

/**
 * load any data that your site needs on fist load
 */
Promise.all([
  fetchCart()
]).then(([ cart ]) => {
  /**
   * add the cart data to the picoapp instance
   */
  app.hydrate({ cart })

  /**
   * mount any components defined on the page
   */
  app.mount()
})
