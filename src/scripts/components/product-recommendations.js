import { component } from 'picoapp'
import lazim from 'lazim'

export default component((node, ctx) => {
  const images = lazim();
  //PRODUCT RECOM
  const loadProductRecommendationsIntoSection = function() {
    const productRecommendationsSection = document.querySelector(".product-recommendations");
    if (productRecommendationsSection === null) { return; }

    const productId = productRecommendationsSection.dataset.productId;
    const limit = productRecommendationsSection.dataset.limit;
    const requestUrl = "/recommendations/products?section_id=product-recommendations&limit="+limit+"&product_id="+productId;
    const request = new XMLHttpRequest();
 
    request.open("GET", requestUrl);
    request.onload = function() {
      if (request.status >= 200 && request.status < 300) {
        var container = document.createElement("div");
        container.innerHTML = request.response;
        // console.log(request.response)
        productRecommendationsSection.parentElement.innerHTML = container.querySelector(".product-recommendations").innerHTML;
        images();
      }
    };
    request.send();
  };
  
  document.addEventListener("shopify:section:load", function(event) {
    if (event.detail.sectionId === "product-recommendations") {
      loadProductRecommendationsIntoSection();
    }
  });

  loadProductRecommendationsIntoSection();

})
