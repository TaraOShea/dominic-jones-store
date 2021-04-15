import { component } from 'picoapp'
import { addVariant } from '@/lib/cart.js'

export default component((node, ctx) => {
  const json = JSON.parse(node.querySelector('.js-product-json').innerHTML);
  const form = node.querySelector('form');
  const errorContainer = node.querySelector('.error-notice');
  const cta = slater.qs('[data-add-to-cart]');
  const galleryImages = node.querySelectorAll('.slater-product__image');
 
  const galleryPopUp = node.querySelector('.slater-product__pop_gallery');
  const galleryPopUpImageContainer = node.querySelector('#pop_gallery__images'); 
  const galleryPopUpClose = node.querySelector('#pop_gallery_close');

  const { selectedOrFirstAvailableVariant, product } = json
  let currentVariant = product.variants.filter(v => v.id === selectedOrFirstAvailableVariant)[0]
  let currentInventory = json.inventory.filter(v => v.id === currentVariant.id)[0]
  
  form.addEventListener('submit', e => {
    e.preventDefault();

    currentVariant = product.variants.filter(v => v.id === parseInt(form.elements.id.value))[0]
    currentInventory = json.inventory.filter(v => v.id === currentVariant.id)[0]

    addVariant(currentVariant, form.elements.quantity.value, currentInventory)
  })

  ctx.on("cartError", ({ error }) => {
    errorContainer.innerHTML = error;
    errorContainer.classList.remove('hide')
    console.log("cartError", error)
  });

  ctx.on("cart:updating", () => {
    cta.disabled = true;
    cta.innerHTML = "Adding to Bag";
  });

  ctx.on("cart:updated", () => {
    let scopedCTA = cta;
    setTimeout(() => {
      scopedCTA.disabled = false;
      scopedCTA.innerHTML = "Add to Bag";
    }, 500);
  });


  galleryImages.forEach(image => {
    image.addEventListener('click', e => {
      e.preventDefault()
      galleryPopUp.classList.add('active');
      document.body.classList.add('cart-open');
      populatePopUpGallery()
    })
  })

  galleryPopUpClose.addEventListener('click', e => {
      e.preventDefault();
      closeGalleryPopup()
  })


  function populatePopUpGallery() {
    if(galleryPopUpImageContainer.innerHTML === "") {
      galleryImages.forEach(image => {
        var cln = image.cloneNode(true);
        console.log(cln)
          cln.addEventListener('click', e => {
            e.preventDefault();
            closeGalleryPopup()
        })

        galleryPopUpImageContainer.appendChild(cln);

      });
    }
  }

  function closeGalleryPopup() {
      galleryPopUp.scrollTop = 0;
      galleryPopUp.classList.remove('active')
      document.body.classList.remove('cart-open');
  }
})
