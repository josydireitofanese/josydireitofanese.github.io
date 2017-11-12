var $ = document.querySelector.bind(document),
	countDownDate = new Date(2018, 8, 23).getTime(),
	inputDays = $(".days"),
	inputHours = $(".hours"),
	inputMinutes = $(".minutes"),
	inputSeconds = $(".seconds"),
	body = $("body"),
	x = setInterval(function() {
		var now = new Date().getTime();
			distance = countDownDate - now,
			days = Math.floor(distance / (1000 * 60 * 60 * 24)),
			hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
			minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
			seconds = Math.floor((distance % (1000 * 60)) / 1000);
		if (distance > 1) {
			inputDays.innerHTML = days;
			inputHours.innerHTML = hours;
			inputMinutes.innerHTML = minutes;
			inputSeconds.innerHTML = seconds;
			addClass(body, "is-counting");
		} else if (days == -1) {
			addClass(body, "is-today");
			addClass($(".hero"),"is-primary");
		} else if (distance < 0) {
			addClass(body, "is-expired");
			addClass($(".hero"),"is-danger");
			clearInterval(x);
		}
	}, 1000);

function hasClass(el, className) {
	if (el.classList) {
		return el.classList.contains(className)
	} else {
		return !!el.className.match(new RegExp(('\\s|^') + className + '(\\s|$)'))
	}
}
function addClass(el, className) {
	if (el.classList) {
		el.classList.add(className)
	} else if (!hasClass(el, className)) {
		el.className += " " + className;
	}
}
function removeClass(el, className) {
	if (el.classList) {
		el.classList.remove(className)
	} else if (hasClass(el, className)) {
		var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
		el.className = el.className.replace(reg, ' ');
	}
}