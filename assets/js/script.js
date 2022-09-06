// // -----------Task-1----------------------------

// function createTextArea(func) {

// 	let pressed = new Set();

// 	document.addEventListener('keydown', function (e) {

// 		pressed.add(e.code);


// 		if (!pressed.has('KeyE') || !pressed.has('ControlLeft')) {
// 			return;
// 		}

// 		e.preventDefault();
// 		pressed.clear();
// 		func();
// 	}, { cancelable: true });

// 	document.addEventListener('keyup', function (e) {
// 		pressed.delete(e.code);

// 	});
// }

// function createDiv(func, ...codes) {

// 	let pressed = new Set();

// 	document.addEventListener('keydown', function (e) {

// 		pressed.add(e.code);

// 		for (let code of codes) {
// 			if (!pressed.has(code)) {
// 				return;
// 			}
// 		}
// 		e.preventDefault();
// 		pressed.clear();
// 		func();
// 	}, { cancelable: true });

// 	document.addEventListener('keyup', function (e) {
// 		pressed.delete(e.code);

// 	});
// }

// createTextArea(() => {

// 	let div = document.querySelector('div');
// 	let textValue = div.innerHTML;
// 	let textarea = document.createElement('textarea');
// 	div.remove();
// 	document.body.prepend(textarea);
// 	textarea.style.cssText = `margin: 200px auto; display: block;`;
// 	textarea.rows = 20;
// 	textarea.cols = 130;
// 	textarea.innerHTML = textValue;
// });

// createDiv(() => {
// 	let textarea = document.querySelector('textarea');
// 	let textValue = textarea.value;
// 	console.log(textValue);
// 	let div = document.createElement('div');
// 	textarea.remove();
// 	document.body.prepend(div);
// 	div.style.cssText = `margin: 200px auto; width: 1000px;
// 	 text-indent: 20px; text-align: justify;`;
// 	div.innerHTML = textValue;
// }, 'ControlLeft', 'Comma');


// // -----------Task-2----------------------------


// table.addEventListener('click', function (event) {

// 	let target = event.target.closest('th');
// 	let type = target.dataset.type;
// 	let index = target.cellIndex;
// 	let tBody = table.querySelector('tbody');
// 	let arr = Array.from(tBody.rows);
// 	let compare;

// 	if (target.tagName != 'TH') return;

// 	if (type == 'string') {
// 		sortString(index);
// 	};

// 	if (type == 'number') {
// 		sortNumber(index);
// 	};

// 	function sortString(colNum) {
// 		compare = function (rowA, rowB) {
// 			return rowA.cells[colNum].innerHTML < rowB.cells[colNum].innerHTML ? -1 : 1;
// 		}
// 	}
// 	function sortNumber(colNum) {
// 		compare = function (rowA, rowB) {
// 			return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
// 		}
// 	}

// 	arr.sort(compare);
// 	tBody.append(...arr);
// })



// // -----------Task-3----------------------------

// document.addEventListener('mousedown', onMouseDown, { cancelable: true });

// function onMouseDown(event) {

// 	event.preventDefault();
// 	let divRight = container.getBoundingClientRect().right - 5;
// 	let divBottom = container.getBoundingClientRect().bottom - 5;

// 	if (event.target.tagName != 'DIV'
// 		|| (event.clientX < divRight && event.clientY < divBottom)) return;


// 	document.addEventListener('mousemove', onMouseMove);
// 	document.addEventListener('mouseup', onMouseUp);
// }


// function onMouseMove(event) {

// 	let newRight = event.clientX - container.getBoundingClientRect().right;
// 	let newBottom = event.clientY - container.getBoundingClientRect().bottom;
// 	let newWidth = container.offsetWidth + newRight;
// 	let newHeight = container.offsetHeight + newBottom;
// 	container.style.width = newWidth + 'px';
// 	container.style.height = newHeight + 'px';
// }

// function onMouseUp() {
// 	document.removeEventListener('mousemove', onMouseMove);
// 	document.removeEventListener('mouseup', onMouseUp);
// }