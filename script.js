// write your JS code here
function numb(x){
	document.querySelector(".text").innerHTML += x;
}
function send(){
	document.querySelector(".text").innerHTML = "";
	alert("Your message has been sent!");
	// location.reload();
	
}
document.addEventListener('keydown', e => {
 document.querySelector(".text").innerHTML += e.key;
});

$(document).keypress(function(e){
	if(e.which == 13){
		alert("Your message has been sent!");
		document.querySelector(".text").innerHTML = "";
	}
});