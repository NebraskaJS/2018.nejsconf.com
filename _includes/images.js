// Intersection Observer
var images = Array.prototype.slice.call(document.querySelectorAll('.lazy'));

function srcsetUpdate( el ) {
	var srcset = el.getAttribute("data-srcset");
	if( srcset ) {
		el.removeAttribute("data-srcset");
		el.setAttribute("srcset", srcset);
	}
}

if ('IntersectionObserver' in window) {
	var observer = new IntersectionObserver(function(entries) {
		entries.forEach(function(entry) {
			if (entry.intersectionRatio > 0) {
				// TODO I wish this class applied after the images loaded
				entry.target.classList.add('load');
				srcsetUpdate(entry.target);
				observer.unobserve(entry.target);
			}
		});
	});

	images.forEach(function(image) {
		observer.observe(image);
	});
} else {
	images.forEach(function(image) {
		image.target.classList.add('load');
		srcsetUpdate(image.target);
	});
}
