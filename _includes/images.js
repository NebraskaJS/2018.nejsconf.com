// Intersection Observer
const images = Array.prototype.slice.call(document.querySelectorAll('.lazy'));

if ('IntersectionObserver' in window) {
	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			if (entry.intersectionRatio > 0) {
				entry.target.classList.add('load');
				observer.unobserve(entry.target);
			}
		});
	});

	images.forEach(image => {
		observer.observe(image);
	});
} else {
	images.forEach(image => {
		image.target.classList.add('load');
	});
}
