import $ from './components/dom'

// fix mobile nav bar
const documentHeight = () => {
	const doc = document.documentElement
	doc.style.setProperty('--doc-height', `${window.innerHeight}px`)
}
window.addEventListener('resize', documentHeight)
documentHeight()
// get header height
const headerHeight = () => {
	const doc = document.documentElement
	doc.style.setProperty('--header-height', `${$.header.offsetHeight}px`)
}
headerHeight()
// burger
$.burger.addEventListener('click', () => {
	$.burger.classList.toggle('is-active')
	$.menu.classList.toggle('is-active')
})
