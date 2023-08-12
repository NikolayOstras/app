'use strict'
import Alpine from 'alpinejs'
// fix mobile nav bar
const documentHeight = () => {
	const doc = document.documentElement
	doc.style.setProperty('--height', `${window.innerHeight}px`)
}
window.addEventListener('resize', documentHeight)
documentHeight()
// get header height
const headerHeight = () => {
	const header = document.querySelector('.header')
	const doc = document.documentElement
	doc.style.setProperty('--header-height', `${header.offsetHeight}px`)
}
window.Alpine = Alpine
Alpine.start()