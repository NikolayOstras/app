import $ from './dom'
const burger = () => {
	$.burger.addEventListener('click', () => {
		$.burger.classList.toggle('is-active')
		$.menu.classList.toggle('is-active')
	})
}
export default burger
