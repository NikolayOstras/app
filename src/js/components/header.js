import $ from './dom'
let lastScrollTop = 0

const header = () => {
	const scrollY = window.scrollY
	if (scrollY <= $.header.offsetTop) {
		$.header.classList.remove('fixed')
		return
	}

	if (scrollY > lastScrollTop) {
		$.header.classList.remove('fixed')
	} else if (scrollY < lastScrollTop) {
		$.header.classList.add('fixed')
	}

	lastScrollTop = scrollY
}
export default header
