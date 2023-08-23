/*Animate*/

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		console.log(entry);
		if (entry.isIntersecting) {
			entry.target.classList.add('show-card');
		} else {
			entry.target.classList.remove('show-card');
		}
	});
});

const hiddenElements = document.querySelectorAll('.hide');
hiddenElements.forEach((el) => observer.observe(el));