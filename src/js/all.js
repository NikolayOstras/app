const burger = document.querySelector('.burger')
if (burger) {
  burger.onclick = () => {
    burger.classList.toggle('is-active')
  }
}
