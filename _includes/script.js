// TypeKit
;(function( d ) {
	var config = {
		kitId: 'ppn2vqj',
		scriptTimeout: 3000
	},
	h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='//use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
})( document );


// Intersection Observer
const images = Array.from(document.querySelectorAll('.lazy'));

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
