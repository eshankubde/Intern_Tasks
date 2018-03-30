function sum(){
	var t = 0;
	if (typeof arguments[0] == "object"){
		var temp_arr = arguments[0];
		for (var i = 0; i < temp_arr.length; i++){
			t += temp_arr[i];
		}
	}
	else{
		for(i = 0; i < arguments.length; i++){
			t += arguments[i];
		}
	}
	return t;
}