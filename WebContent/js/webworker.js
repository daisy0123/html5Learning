var numDiv;
window.onload=function(){
	numDiv=document.getElementById("numDiv");
	document.getElementById("start").onclick=startWorker;
	document.getElementById("stop").onclick=function(){
		if(work){
			work.terminate();
			work=null;
		}
	}
	
	
}
function startWorker(){
	if(work){
		return;
	}
	work=new Worker("webworkercount.js");
	work.onmessage=function(e){
		numDiv.innerHTML=e.data;
}
}