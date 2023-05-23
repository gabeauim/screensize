window.addEventListener('load', () => {
	let updateSize = (widthElement, heightElement, dprElement) => {
		return () => {
			widthElement.innerHTML = window.innerWidth;
			heightElement.innerHTML = window.innerHeight;
			dprElement.innerHTML = window.devicePixelRatio;
		};
	};

	window.onresize = updateSize(
		document.getElementById('width'),
		document.getElementById('height'),
		document.getElementById('dpr')
	);

	window.onresize();
});
