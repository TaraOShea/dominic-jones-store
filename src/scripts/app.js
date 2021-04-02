import { picoapp } from 'picoapp'

import header from '@/components/header.js'
import footer from '@/components/footer.js'

import productSelection from '@/components/product-selection.js'
import cartDrawer from '@/components/cartDrawer.js'
import cartDrawerItem from '@/components/cartDrawerItem.js'
import accountLogin from '@/components/accountLogin.js'
import product from '@/components/product.js'
import productCounter from '@/components/product-counter.js'
import collectionList from '@/components/collectionList.js'

const state = {
  cartOpen: false,
  menuOpen: false
}

const components = {
  accountLogin,
  header,
  footer,
  productSelection,
  cartDrawer,
  cartDrawerItem,
  product,
  productCounter,
  collectionList
}

export default picoapp(components, state)
