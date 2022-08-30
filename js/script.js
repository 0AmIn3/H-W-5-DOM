window.addEventListener('DOMContentLoaded', () => {
	// Tabs

	const tabs = document.querySelectorAll('.tabheader__item'),
		tabsContent = document.querySelectorAll('.tabcontent'),
		tabsParent = document.querySelector('.tabheader__items')

	function hideTabContent() {
		tabsContent.forEach((item) => {
			item.classList.add('hide')
			item.classList.remove('show', 'fade')
		})

		tabs.forEach((item) => {
			item.classList.remove('tabheader__item_active')
		})
	}

	function showTabContent(i = 0) {
		tabsContent[i].classList.add('show', 'fade')
		tabsContent[i].classList.remove('hide')
		tabs[i].classList.add('tabheader__item_active')
	}

	hideTabContent()
	showTabContent()

	tabsParent.addEventListener('click', (event) => {
		const target = event.target

		if (target && target.classList.contains('tabheader__item')) {
			tabs.forEach((item, i) => {
				if (target == item) {
					hideTabContent()
					showTabContent(i)
				}
			})
		}
	})

	// Timer

	// const deadline = '2021-08-30'

	// function getTimeRemaining(endtime) {
	// 	const t = Date.parse(endtime) - Date.parse(new Date()),
	// 		days = Math.floor(t / (1000 * 60 * 60 * 24)),
	// 		seconds = Math.floor((t / 1000) % 60),
	// 		minutes = Math.floor((t / 1000 / 60) % 60),
	// 		hours = Math.floor((t / (1000 * 60 * 60)) % 24)

	// 	return {
	// 		total: t,
	// 		days: days,
	// 		hours: hours,
	// 		minutes: minutes,
	// 		seconds: seconds,
	// 	}
	// }

	// function setClock(selector, endtime) {
	// 	const timer = document.querySelector(selector),
	// 		days = timer.querySelector('#days'),
	// 		hours = timer.querySelector('#hours'),
	// 		minutes = timer.querySelector('#minutes'),
	// 		seconds = timer.querySelector('#seconds'),
	// 		timeInterval = setInterval(updateClock, 1000)

	// 	function updateClock() {
	// 		const t = getTimeRemaining(endtime)

	// 		days.innerHTML = t.days
	// 		hours.innerHTML = t.hours
	// 		minutes.innerHTML = t.minutes
	// 		seconds.innerHTML = t.seconds

	// 		if (t.total <= 0) {
	// 			clearInterval(timeInterval)
	// 		}
	// 	}
	// }

	// setClock('.timer', deadline);

	// modal

	// const modalTrigger = document.querySelectorAll('[data-modal]'),
	// 	modal = document.querySelector('.modal'),
	// 	modalCloseBtn = document.querySelector('[data-close]')

	// function showModal() {
	// 	modal.classList.toggle('show')
	// 	document.body.style.overflow = 'hidden'
	// 	clearInterval(modalTimer)

	// }

	// modalTrigger.forEach((btn) => {
	// 	btn.addEventListener('click', showModal)
	// })

	// modalCloseBtn.addEventListener('click', hideModal)

	// function hideModal() {
	// 	modal.classList.toggle('show')
	// 	document.body.style.overflow = ''

	// }

	// modal.addEventListener('click', (e) => {
	// 	if (e.target === modal) {
	// 		hideModal()
	// 	}
	// })

	document.addEventListener('keydown', (e) => {
		if (e.code === 'Escape' && modal.classList.contains('show')) {
			hideModal()
		}
	})

	// const modalTimer = setTimeout(showModal, 5000)

	function showModalByscroll() {
		if (
			window.pageYOffset + document.documentElement.clientHeight >=
			document.documentElement.scrollHeight
		) {
			showModal()
			window.removeEventListener('scroll', showModalByscroll)
		}
	}

	window.addEventListener('scroll', showModalByscroll)






})

let days = document.querySelector('#days')
let hours = document.querySelector('#hours')
let minutes = document.querySelector('#minutes')
let seconds = document.querySelector('#seconds')


let timer = setInterval(() => {
	seconds.innerHTML--
	if (seconds.innerHTML == -1) {
		seconds.innerHTML = 59
		minutes.innerHTML--
		if (minutes.innerHTML == -1) {
			minutes.innerHTML = 59
			hours.innerHTML--
			console.log(hours.innerHTML);
			if (hours.innerHTML == -1) {
				hours.innerHTML = 23
				days.innerHTML--
				if (days.innerHTML == -1) {
					clearInterval(timer)
					days.innerHTML = 0
					hours.innerHTML = 0
					minutes.innerHTML = 0
					seconds.innerHTML = 0
				}
			}
		}
	}
}, 1000);


let str = document.querySelector('#current')
let next = document.querySelector('#next')
let prev = document.querySelector('#prev')
let swap = document.querySelectorAll('#swap[data-swap]')
let count = 3

let allImg = {
	1: 'img/slider/paprika.jpg',
	3: 'img/slider/pepper.jpg',
	2: 'img/slider/food-12.jpg',
	4: 'img/slider/olive-oil.jpg',
}

let img = document.querySelector('.imgg')
swap.forEach((item) => {
	item.onclick = () => {
		let met = item.getAttribute('data-swap')
		if (met === '-') {
			count--
			if (count === 0) {
				count = 4
				img.setAttribute('src', `img/slider/olive-oil.jpg'`)

			} else {
				img.setAttribute('src', `${allImg[count]}`)
			}
			str.innerHTML = `0${count}`
		}
		else if (met === '+') {
			count++
			if (count === 5) {
				count = 1
				img.setAttribute('src', `img/slider/paprika.jpg`)
			}
			else {
				img.setAttribute('src', `${allImg[count]}`)
			}
			str.innerHTML = `0${count}`

		}
	}
})



let modalTrigger = document.querySelectorAll('[data-modal]')
let modal = document.querySelector('.modal')
let modalCloseBtn = document.querySelector('[data-close]')
let vid = document.querySelector('.modal__dialog')
modalTrigger.forEach((btn) => {
	btn.onclick = () => {
		modal.classList.remove('hide')
		modal.classList.add('show')
		let ram = Math.floor(Math.random() * 4) + 1

		if (ram === 1) {
			vid.style.transform = 'scale(1) rotate(180deg)'
			vid.style.opacity = '0'
			vid.style.top = '0'
			vid.style.left = '0'
		} else if (ram === 2) {
			vid.style.transform = 'scale(1) rotate(180deg)'
			vid.style.opacity = '0'
			vid.style.top = '0'
			vid.style.left = '100%'
		} else if (ram === 3) {
			vid.style.transform = 'scale(1) rotate(180deg)'
			vid.style.opacity = '0'
			vid.style.top = '100%'
			vid.style.left = '100%'
		} else if (ram === 4) {
			vid.style.transform = 'scale(1) rotate(180deg)'
			vid.style.opacity = '0'
			vid.style.top = '100%'
			vid.style.left = '-100px'
		}
		setTimeout(() => {
			vid.style.top = '50%'
			vid.style.left = '50%'
			vid.style.transform = 'translate(-50% , -50%) scale(1)'
			vid.style.opacity = '1'
		}, 10);
	}
})

modalCloseBtn.onclick = () => {
	let ram = Math.floor(Math.random() * 4) + 1

	if (ram === 1) {
		vid.style.transform = 'scale(2) rotate(180deg)'
		vid.style.opacity = '0'
		vid.style.top = '0'
		vid.style.left = '0'
	} else if (ram === 2) {
		vid.style.transform = 'scale(2) rotate(180deg)'
		vid.style.opacity = '0'
		vid.style.top = '0'
		vid.style.left = '100%'
	} else if (ram === 3) {
		vid.style.transform = 'scale(2) rotate(180deg)'
		vid.style.opacity = '0'
		vid.style.top = '100%'
		vid.style.left = '100%'
	} else if (ram === 4) {
		vid.style.transform = 'scale(2) rotate(180deg)'
		vid.style.opacity = '0'
		vid.style.top = '100%'
		vid.style.left = '-100px'
	}

	setTimeout(() => {
		vid.style.top = '0'
		vid.style.left = '-1000px'
		vid.style.transform = 'translate(-50% , -50%) scale(2)'
		modal.classList.remove('show')
		modal.classList.add('hide')
	}, 300);

}
