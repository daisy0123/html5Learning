var imgContainer, msgDiv;
window.onload = function() {
	imgContainer = document.getElementById("imgContainer");
	msgDiv = document.getElementById("msg");
	imgContainer.ondragover = function(e) {
		e.preventDefault();
	}
	imgContainer.ondrop = function(e) {
		e.preventDefault();
		var f = e.dataTransfer.files[0];
		var fileReader = new FileReader();
		fileReader.onload = function(e) {
			imgContainer.innerHTML = "<img src=\"" + fileReader.result + "\">";
		}
		fileReader.readAsDataURL(f);
	}
}