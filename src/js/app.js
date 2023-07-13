import burger from './components/burger'
import $ from './components/dom'
import header from './components/header'
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
burger()
window.addEventListener('scroll', () => header())
