let slider = document.querySelector('.activities__slider');
let card = document.querySelectorAll('.activities__card');
let cardWidth = document.querySelector('.activities__card');

function resize(){
	for (let i = 0; i < card.length; i++) {
		let index = 620/350;

		slider.style.height = `${card[i].clientWidth*index}px`;
		console.log(getComputedStyle(slider).height);
	}
}
resize();

let next = document.querySelector('.button-next');
let back = document.querySelector('.button-back');
let offset = 0;
let cardSum = (cardWidth.clientWidth + 19)*(card.length-3);

next.addEventListener('click', scrollNext);
back.addEventListener('click', scrollBack);

function scrollNext() {
	offset += cardWidth.clientWidth + 19;

	if (offset > cardSum){
		next.style.opacity = '0';
		next.style.visibility = 'hidden';
	} 
	if (offset > 0){
		back.style.opacity = '1';
		back.style.visibility = 'visible';
	}
	for (i = 0; i < card.length; i++){
		card[i].style.left = -offset + 'px';
		console.log('nice');
	}
}
function scrollBack() {
	offset -= cardWidth.clientWidth + 19;

	if (offset <= 0){
		back.style.opacity = '0';
		back.style.visibility = 'hidden';
	}
	if (offset <= cardSum){
		next.style.opacity = '1';
		next.style.visibility = 'visible';
	}

	for (i = 0; i < card.length; i++){
		card[i].style.left = -offset + 'px';
		console.log('nice');
	}
}
window.addEventListener("resize", resize);
// function InitApp() {
// 	resize();
// }


