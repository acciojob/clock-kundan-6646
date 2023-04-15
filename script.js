const para = document.getElementById('timer');
function currentTime() {
	let date = new Date(); 
	let hh = date.getHours();
	let mm = date.getMinutes();
	let ss = date.getSeconds();
	let session = "AM";

	if(hh === 0) hh = 12;
	if(hh > 12){
      hh = hh - 12;
      session = "PM";
	}

	hh = hh < 10 ? '0' + hh : hh;
	mm = mm < 10 ? '0' + mm : mm;
	ss = ss < 10 ? '0' + ss : ss;

	let time = getDate() + ', ' + hh + ":" + mm + ":" + ss + " " + session;
	let t = setTimeout(function(){ currentTime() }, 1000);
	para.innerText = time;
}

currentTime();

function getDate() {
	var today = new Date();
	var dd = String(today.getDate()).padStart(2, '0');
	var mm = String(today.getMonth() + 1).padStart(2, '0');
	var yyyy = today.getFullYear();
	
	today = mm + '/' + dd + '/' + yyyy;
	return today;
}
