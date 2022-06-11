const checkbox = document.getElementById('checkbox');
const icon = document.getElementById('icon')

 checkbox.addEventListener("click", ()=>{
 	document.body.classList.toggle("white")
 })


var slideIndex = 1;
showSlides(slideIndex);

 function plusSlides(n){
   showSlides(slideIndex += n);
}
function currentSlide(n){
	showSlides(slideIndex = n);
}

function showSlides(n){
	var i;
	var slides = document.getElementsByClassName("mySlides");


	if (n > slides.length){
		slideIndex = 1;
	}
	if (n < 1){
		slideIndex=slides.length
	}
	for (i = 0; i <slides.length ; i++){
		slides[i].style.display = "none";
	}

	slides[slideIndex-1].style.display = "block";

}

const signInBtn = document.querySelector('.signinBtn'),
      signupBtn = document.querySelector('.signupBtn'),
      formBx = document.querySelector('.formBx');
      
      signupBtn.onclick = function(){
        formBx.classList.add('active')
      }
      signInBtn.onclick = function(){
        formBx.classList.remove('active')
      }