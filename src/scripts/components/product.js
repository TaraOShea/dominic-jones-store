import { component } from 'picoapp'
import { addVariant } from '@/lib/cart.js'

export default component((node, ctx) => {
  const json = JSON.parse(node.querySelector('.js-product-json').innerHTML)
  const form = node.querySelector('form')

  const { selectedOrFirstAvailableVariant, product } = json
  let currentVariant = product.variants.filter(v => v.id === selectedOrFirstAvailableVariant)[0]
  let currentInventory = json.inventory.filter(v => v.id === currentVariant.id)[0]
  
  console.log(json)

  form.addEventListener('submit', e => {
    e.preventDefault()
    currentVariant = product.variants.filter(v => v.id === parseInt(form.elements.id.value))[0]
    currentInventory = json.inventory.filter(v => v.id === currentVariant.id)[0]

    addVariant(currentVariant, form.elements.quantity.value, currentInventory)
  })

  ctx.on("cartError", ({ error }) => {
    console.log("cartError", error)
  });
})
