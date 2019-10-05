var imgs = document.getElementsByClassName('img-item');
var lightboxContainer = document.getElementById('lightbox-container');
var lightboxItem = document.getElementById('lightbox-item');
var next = document.getElementById('next');
var prev = document.getElementById('prev');
var wClose = document.getElementById('close');
var currentIndex = 0;
var imgArray = [];
for(var i = 0 ; i < imgs.length ; i++){
	imgArray.push(imgs[i]);
	imgs[i].addEventListener('click', function(e){
		lightboxContainer.style.display = "flex";
		var imgSrc = e.target.src;
		lightboxItem.style.backgroundImage = "url("+imgSrc+")";
		currentIndex = imgArray.indexOf(e.target);
	})
}
next.addEventListener('click', function(){
	
	nextMove();

})
prev.addEventListener('click', function(){

	prevMove();

})
wClose.addEventListener('click', function(){
lightboxContainer.style.display = "none";
})
document.addEventListener('keydown',function(e){
	if(e.keyCode == 39){
		nextMove();
	}
	else if (e.keyCode == 37){
		prevMove();
	}
	else if(e.keyCode == 27){
				lightboxContainer.style.display = "none";

	}
})
function nextMove(){
		currentIndex++;
	if(currentIndex == imgArray.length){
		currentIndex = 0;
	}
	lightboxItem.style.backgroundImage = "url("+imgArray[currentIndex].src+")";
}
function prevMove(){
		currentIndex--;
	if(currentIndex < 0 ){
		currentIndex = imgArray.length - 1;
	}
	lightboxItem.style.backgroundImage = "url("+imgArray[currentIndex].src+")";
}
lightboxContainer.addEventListener('click',function(e){
	if(lightboxContainer == e.target){
		lightboxContainer.style.display = "none";

	}
})