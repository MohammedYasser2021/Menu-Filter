let links = document.querySelectorAll('.links li a')
let productItems = document.querySelectorAll('.products-item')

links.forEach((item) => {
  item.addEventListener('click', function (e) {
    links.forEach((element) => {
      element.classList.remove('active')
    })
    e.target.classList.add('active')
    productItems.forEach((el) => {
      el.style.display = 'none'
    })
    document
      .querySelectorAll(item.getAttribute('data-image'))
      .forEach((ele) => {
        ele.style.display = 'flex'
      })
  })
})
