import radio from '@/lib/radio.js'

export default function productSelection (node, opts) {
  opts = Object.assign({
    select: '[data-option-select]',
    radio: '[data-option-radio]',
    main: '[data-option-main]',
    price: '[data-price]'
  }, opts)

  const listeners = []

  const state = {
    id: null,
    options: [], 
    avalible: null,
    price: null
  }

  const selects = slater.qsa(opts.select)
  const radios = slater.qsa(opts.radio)
  const main = slater.qs(opts.main)
  const price = slater.qs(opts.price)

  if (!main || !main.length) throw 'data-option-main is missing'
  if (radios.length > 3) throw 'you have more than three radio groups'
  if (selects.length > 3) throw 'you have more than three select inputs'

  const variants = [].slice.call(main.children).reduce((variants, child) => {
    variants[child.innerHTML] = { 
      id: child.value, 
      avalible: child.getAttribute('data-avalible') === "true" ? true : false,
      price: child.getAttribute('data-price')
    }
    return variants
  }, {})

  selects.forEach(select => {
    if (select.nodeName !== 'SELECT') throw 'data-option-select should be defined on the individual option selectors'
    const index = parseInt(select.getAttribute('data-index'))
    // set initial value
    state.options[index] = select.value
    select.addEventListener('change', e => {
      state.options[index] = e.target.value
      updateSelection()
    })
  })

  radios.forEach(r => {
    console.log("radios", r)

    if (r.nodeName === 'INPUT') throw 'data-option-radio should be defined on a parent of the radio group, not the inputs themselves'

    const index = parseInt(r.getAttribute('data-index'))
    const inputs = [].slice.call(r.getElementsByTagName('input'))

    // set initial value
    inputs.forEach(r => {
      if (r.checked) state.options[index] = r.value
    })

    radio(inputs, value => {
      state.options[index] = value
      updateSelection()
    })
  })

  updateSelection()

  function updateSelection () {
    var option = variants[state.options.join(' / ')] === undefined ? variants["Default Title"] : variants[state.options.join(' / ')];

    state.id = option.id;
    state.avalible = option.avalible;
    state.price = option.price;

    main.value = state.id;
    price.innerHTML = state.price;
    for (let fn of listeners) fn(state)
  }

  return {
    get state () {
      return state
    },
    onUpdate (fn) {
      listeners.indexOf(fn) < 0 && listeners.push(fn)
      return () => listeners.splice(listeners.indexOf(fn), 1)
    }
  }
}
