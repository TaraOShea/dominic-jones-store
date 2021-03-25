import { component } from 'picoapp'

export default component((node, ctx) => {
  const filter = node.querySelector('#filter-category');
  const filterChild = node.querySelector('.filters-toolbar__sub_menu');

  filter.addEventListener('click', e => {
    filterChild.classList.toggle('open');
    filter.classList.toggle('open');
  })
  return node => {
    console.log('filter unmounted')
  }
})
