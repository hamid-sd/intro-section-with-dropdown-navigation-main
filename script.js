var Features =document.getElementById("Features");
var Feat =document.getElementById("Feat");
var hamburger = document.getElementById("hamburger");
var bloc = document.getElementById("bloc");
var blur = document.getElementById("blur");

Features.addEventListener("click", ()=>{
	var svg =document.getElementById("svg1");
	if (Features.className !== "active"){
		svg.innerHTML='<path stroke="#000000" stroke-width="1.5" fill="none" d="m1 5 4-4 4 4"/>';
		Features.className = "active";
		Feat.style.display = 'block';
		setTimeout(function() {
			Feat.style.height = "139px";
		}, 10);
	}else {
		svg.innerHTML='<path stroke="#686868" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4"/>';
		Features.className = "";
		Feat.style.height = "0";
		setTimeout(function() {
			Feat.style.display = 'none';
		}, 310);
		
	}
});

var Company =document.getElementById("Company");
var Comp =document.getElementById("Comp");

Company.addEventListener("click", ()=>{
	var svg =document.getElementById("svg2");
	if (Company.className !== "active"){
		svg.innerHTML='<path stroke="#000000" stroke-width="1.5" fill="none" d="m1 5 4-4 4 4"/>';
		Company.className = "active";
		Comp.style.display = 'block';
		setTimeout(function() {
			Comp.style.height = "104px";
		}, 10);
	}else {
		svg.innerHTML='<path stroke="#686868" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4"/>';
		Company.className = "";
		Comp.style.height = "0";
		setTimeout(function() {
			Comp.style.display = 'none';
		}, 310);
	}
});

var hamburger = document.getElementById("hamburger");
var bloc = document.getElementById("bloc");
var blur = document.getElementById("blur");
hamburger.addEventListener("click", ()=>{
	if (hamburger.className=="") {
		blur.style.display = 'block';
		setTimeout(()=>{
			blur.style.backgroundColor = '#00000061';
			hamburger.className="is-active";
			bloc.style.right = '0';
		}, 100);
	}else{
		setTimeout(()=>{
			blur.style.display = 'none';
		}, 300);
		blur.style.backgroundColor = 'transparent';
		hamburger.className="";
		bloc.style.right = '-300px';
	}
})

var img = document.getElementById("img");
function myFunction(x) {
  if (x.matches) {
  	img.src ="images/image-hero-mobile.png";
  } else {
    img.src ="images/image-hero-desktop.png";

  }
}

var x = window.matchMedia("(max-width: 800px)")
myFunction(x) 
x.addListener(myFunction) 