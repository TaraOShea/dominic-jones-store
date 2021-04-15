import { component } from 'picoapp'
import InfiniteScroll from 'infinite-scroll';
import lazim from 'lazim'

export default component((node, ctx) => {
  const images = lazim()

  let elem = document.querySelector('.collection__grid__row');
  let infScroll = new InfiniteScroll( elem, {
    path: '.next a',
    append: '.collection__grid__item',
    hideNav: '.pagination',
    scrollThreshold: 800,
    history: true
  });

  infScroll.on( 'append', function( body, path, items, response ) {
    images()
  });


  //FILTER 
  const filter = node.querySelector('#filter-category');
  const filterChild = node.querySelector('.filters-toolbar__sub_menu');

  if(filter !== null) {
    filter.addEventListener('click', e => {
      filterChild.classList.toggle('open');
      filter.classList.toggle('open');
    })
  }
  return node => {
    console.log('filter unmounted')
  }
})
