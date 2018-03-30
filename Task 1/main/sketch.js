var details;
var input;
var url = "http://api.geonames.org/countryInfoJSON?username=ravi.patel";
function setup() {
//  createCanvas(640, 480);
	loadJSON(url,gotData);
}

function gotData(data){
	details = data;
}

function displayData(){
	input = document.getElementById("index").value;
	var min = Number(input);
	var max = Number(input) + 20;
//	console.log("Min is: " + min);
//	console.log("Max is: " + max);
//	console.log(typeof  min);
//	console.log(typeof max);
	if(min < details.geonames.length){
		for(var i = min; i < max && i < details.geonames.length; i++){
	//			console.log(i);
				var para = document.createElement("P");
				var t_name = document.createTextNode(i + ". " +"Name: " + details.geonames[i].countryName + " ");
	//			document.getElementById("demo").innerHTML = "Country Name: " + details.geonames[0].countryName;
				para.appendChild(t_name);
				var t_capital = document.createTextNode("Capital: " + details.geonames[i].capital + " ");
				para.appendChild(t_capital);
				var t_cc = document.createTextNode("Code: " + details.geonames[i].currencyCode);
				para.appendChild(t_cc);
	  			document.getElementById("myDiv").appendChild(para);
		}
	}
	else{
		window.alert("Invalid input!");
	}
}

