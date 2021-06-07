function myCanvas() {
	let myCanvas = document.createElement('canvas');
	myCanvas.width = 600;
	myCanvas.height = 600;
	document.body.appendChild(myCanvas);
	let ctx = myCanvas.getContext('2d');

	function checkIfBelongsToMandelbrotSet(x, y) {
		let realComponentOfResult = x;
		let imaginaryComponentOfResult = y;

		for (let i = 0; i < 10; i++) {
			let tempRealComponent =
				realComponentOfResult * realComponentOfResult -
				imaginaryComponentOfResult * imaginaryComponentOfResult +
				x;

			let tempImaginaryComponent = 2 * realComponentOfResult * imaginaryComponentOfResult + y;

			realComponentOfResult = tempRealComponent;
			imaginaryComponentOfResult = tempImaginaryComponent;
		}

		if (realComponentOfResult * imaginaryComponentOfResult < 5) {
			return true;
		}
		return false;
	}

	let magnificationFactor = 600;
	let panX = 0;
	let panY = 0;
	for (let x = 0; x < myCanvas.width; x++) {
		for (let y = 0; y < myCanvas.height; y++) {
			let belongsToSet = checkIfBelongsToMandelbrotSet(
				x / magnificationFactor - panX,
				y / magnificationFactor - panY
			);

			if (belongsToSet) {
				ctx.fillRect(x, y, 1, 1);
			}
		}
	}
}

// export default myCanvas;
