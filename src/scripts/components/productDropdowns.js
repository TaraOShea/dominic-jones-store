import { component } from 'picoapp'

export default component((node, ctx) => {
  const dropdownBtns = node.querySelectorAll('.dropdownBTN');

    dropdownBtns.forEach(function (dropdown) {
        dropdown.addEventListener("click", function(event){
            event.target.parentElement.classList.toggle("active");
        });
    });


  return node => {
    console.log('filter unmounted')
  }
})
